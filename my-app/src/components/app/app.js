import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Aliaksandr Razhok", salary: 400, increase: false, rise: true, id: 0,},
                {name: "Kirill Haupt", salary: 800, increase: true, rise: false, id: 1,},
                {name: "Vasiliy Plutov", salary: 400, increase: false, rise: false, id: 2,},
                {name: "Hanna Kaliada",salary: 400, increase: false, rise: false, id: 3,}
            ],
            newData: [],
            maxId: 4,
            term: "",
        };
    }

    deleteEmployee = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary, e) => {
        e.preventDefault();

        if (!name || !salary) {
            return;
        }

        this.setState(({data, maxId}) => {
            const newArr = JSON.parse(JSON.stringify(data));
            newArr.push({
                name,
                salary,
                id: maxId
            })

            return {
                data: newArr,
                maxId: maxId + 1
            }
        })
    }

    onToggleProp = (id, currProp) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [currProp]: !item[currProp]};
                }
                return item;
            })
        }))
    }

    filterEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        } else if (term === "onIncrease") {
            return items.filter(item => item.increase)
        } else if (term === "moreThousand") {
            return items.filter(item => item.salary > 1000)
        }
            
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateFilters = (term) => {
        this.setState(({term}));
    }

    render() {
        const {data, term} = this.state;
        const increaseCount = data.reduce((acc, curr) => curr.increase ? acc + 1 : acc, 0);
        const visibleData = this.filterEmp(data, term);

        return (
            <div className="app">
                <AppInfo 
                    totalEmployees={data.length}
                    increaseCount={increaseCount}
                     />
    
                <div className="search-panel">
                    <SearchPanel onUpdateFilters={this.onUpdateFilters}/>
                    <AppFilter onUpdateFilters={this.onUpdateFilters} />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onCreate={this.addEmployee}/>
            </div>
        )
    }
}

export default App;