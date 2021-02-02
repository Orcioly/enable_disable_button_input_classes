import { Component } from "react";

// import React from 'react';

class App extends Component {

  state = {
    disabled: true
  }

  handleChange = (e) => {
    if (e.target.value.length >= 6) {
      this.setState({
        disabled: false
      });
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Enable or Disable a Button based on input</h1>
        <form>
          <input type="text" placeholder="ID Usuário" onChange={this.handleChange} />
          <button disabled={this.state.disabled}>Enviar</button>
        </form>
      </div >
    );
  }
}

export default App;
