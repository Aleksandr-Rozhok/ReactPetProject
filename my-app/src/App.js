import logo from "./logo.svg";
import {Component} from "react";
import "./App.css";

const Header = () => {
  return <h2>Hello world!</h2>
}

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: "300px"
//   }

//   return <input placeholder={holder} type="text" style={styledField}/>
// }

class Field extends Component {
  render() {
      const holder = "Enter here";
      const styledField = {
        width: "300px"
      };
      
      return <input placeholder={holder} type="text" style={styledField}/>
  }
}

const Btn = () => {
  const text = "Log in";
  const logged = true;

  return <button>{logged ? "Enter" : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
