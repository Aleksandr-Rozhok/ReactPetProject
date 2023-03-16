import "./employees-list-item.css";

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleProp, editSalary, increase, rise } = props;

    let liClasses = "list-group-item d-flex justify-content-between ";

    if (increase) {
        liClasses += "increase ";
    }

    if (rise) {
        liClasses += "like"
    }

    return (
      <li className={liClasses}>
        <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
        <input onChange={editSalary} type="text" className="list-group-item-input" defaultValue={salary + "$"} />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={onToggleProp} data-toggle="increase" type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
}

export default EmployeesListItem;
