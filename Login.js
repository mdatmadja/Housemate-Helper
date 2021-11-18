import React from "react";
import './Login.css';
import fire from './fire'

class Login extends React.Component {

  signUp(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
      console.log("Signed up");
    })
    .catch((err) => {
      console.log("Error for signup");
      window.alert("Your email is not valid. Please sign up with a valid email and 6 character/digit password.");
    })
  
  }

  login(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((u) => {
      console.log("Logged in");
    })
    .catch((err) => {
      console.log("Error for login");
      window.alert("Your email does not have an account. Please sign up first.");
    })
 
  }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1>
            Housemate Manager
          </h1>
        </header>
        <div>
        <div>Username</div>
                <input id="username" placeholder="Enter Username" type="text"></input>
        <div>Email</div>
                <input id="email" placeholder="Enter Email" type="text"></input>
            </div>
        <div>
        <div>Password</div>
                <input id="password" placeholder="Enter Password" type="password"></input>
        </div>
            <button onClick={this.login}>Login</button>
            <button onClick={this.signUp}>Sign up</button>
        </div>
        );
      }
    }
      
export default Login;