import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      award: false,
      like: false
    };
  }

  changeAwardState = () => {
    this.setState(({ award }) => ({
      award: !award
    }));
  };

  addStarStatus = () => {
    this.setState(({ like }) => ({
        like: !like
    }))
  }

  render() {
    const { name, salary } = this.props;
    const { award, like } = this.state;

    let liClasses = "list-group-item d-flex justify-content-between ";

    if (award) {
        liClasses += "increase ";
    }

    if (like) {
        liClasses += "like"
    }

    return (
      <li className={liClasses}>
        <span onClick={this.addStarStatus} className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={this.changeAwardState} type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
