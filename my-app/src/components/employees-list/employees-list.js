import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const employeesItems = data.map(item => {
        const {id, ...itemsProps} = item;
        return (
            <EmployeesListItem 
                key={id} {...itemsProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {employeesItems} 
        </ul>
    )
}

export default EmployeesList;