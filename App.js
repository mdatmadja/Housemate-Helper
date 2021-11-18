import React, {useState, Component} from "react";
import './App.css';
import fire from './fire';
import Home from './Home.js'
import Login from './Login.js'
import Expenses from './Expenses.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
      else {
        this.setState ({user: null});
      }
    })
  }
  
  render(){
  return (
    <div className="App">
     {this.state.user ? (<Expenses/>) : (<Login/>)}
    </div>
  );
}
}

export default App;
