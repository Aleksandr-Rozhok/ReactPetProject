import { Component } from "react";
import "./emplyees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      increase: false,
      rise: false,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearValue = () => {
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { onCreate } = this.props;
    const { name, salary, increase, rise } = this.state;

    return (
      <footer className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => {
            onCreate(name, salary, increase, rise, e);
            this.clearValue();
          }}
        >
          <input
            onChange={this.onValueChange}
            type="text"
            name="name"
            value={name}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
            onChange={this.onValueChange}
            type="number"
            name="salary"
            value={salary}
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </footer>
    );
  }
}

export default EmployeesAddForm;
