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
                {name: "Aliaksandr Razhok", salary: 400, id: 0,},
                {name: "Kirill Haupt", salary: 800, id: 1,},
                {name: "Vasiliy Plutov", salary: 400, id: 2,},
                {name: "Hanna Kaliada",salary: 400,id: 3,}
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

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList data={data} onDelete={this.deleteEmployee}/>
                <EmployeesAddForm onCreate={this.addEmployee}/>
            </div>
        )
    }
}

export default App;