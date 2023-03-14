import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data}) => {

    const employeesItems = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {employeesItems} 
        </ul>
    )
}

export default EmployeesList;