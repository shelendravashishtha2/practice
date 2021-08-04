import React from "react";
import "./App.css";
import ButtonGrid from "./ButtonsGrid";

class  App extends React.Component {

  state = {
    input1 : "",
    input2 : ""
  }

  getOperand = (operand) => {

    switch(operand) {

      case "=": 
        if(this.state.input1 === ""){
          this.setState({input2 : "input expression"})
          return;
        }
        try{
          let result  = eval(this.state.input1);
          this.setState({ input2 : result })
        }catch {
          this.setState({ input2 : "invalid Expression" })
        }
      
      break;
      case "C" : 
        this.setState({input1 : "", input2 : ""})
      
      break;
      default : 
        if(this.state.input2 !== ""){
          this.setState({input2 : ""})
        }
        this.setState({ input1 : this.state.input1 + operand })
      

    }
  }

  render = () => {
    return (
      <div className="App">
          <input type = "text" readOnly={true} value = { this.state.input1 }/>
          <input type = "text" readOnly={true} value = { this.state.input2 }/>
          <ButtonGrid onclick = { this.getOperand }></ButtonGrid>
      </div>
  );}
}

export default App;
