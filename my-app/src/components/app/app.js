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
            maxId: 4
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

    render() {
        const {data} = this.state;
        let increaseCount = data.reduce((acc, curr) => curr.increase ? acc + 1 : acc, 0)

        return (
            <div className="app">
                <AppInfo 
                    totalEmployees={data.length}
                    increaseCount={increaseCount}
                     />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onCreate={this.addEmployee}/>
            </div>
        )
    }
}

export default App;