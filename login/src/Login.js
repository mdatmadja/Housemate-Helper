import React, {useState}from "react";
import './Login.css';
import fire from './fire'
import firebase from 'firebase';
import App from './App';
import Image from 'react-bootstrap/Image'

class Login extends React.Component {
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
  signInGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    fire.auth().signInWithPopup(provider)
    .then((re)=> {
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
      window.alert("Your email is not valid.");
    })
  }
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <h1>
            Housemate Manager
          </h1>
        </header>
        <div>
         
      
         <Image src="https://cdn.dribbble.com/users/989466/screenshots/9893554/media/c7a2349d6e2aa1372d5f3856b83be76e.png?compress=1&resize=400x300" rounded/>
         {/* <div>Username</div> 
        <div class="input-group mb-3 col-xs-4">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input id="username" class="form-control col-xs-2" placeholder="Enter Username" type="text" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        <div>Email</div>
        <div class="input-group mb-3">
            <input id="email" class="form-control" placeholder="Enter Email" type="text"></input>
        </div>
        </div>
        <div>
        <div>Password</div>
        <div class="input-group mb-3">
          <input id="password" class="form-control" placeholder="Enter Password" type="password"></input>
        </div> */}
        </div>
            <button onClick={this.signInGoogle}><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uykAHSh8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/u3e0jxnva6te9a3kx5ji.png" alt="Sign in with Google" width="250px" height="70px"></img></button>
            {/* <button class="btn btn-primary" onClick={this.signInGoogle}>Sign in with Google</button>
            <button class="btn btn-primary" onClick={this.login}>Login</button>
            <button class="btn btn-primary" onClick={this.signUp}>Sign up</button> */}
            {/* <button onClick={this.signInGoogle}><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uykAHSh8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/u3e0jxnva6te9a3kx5ji.png" alt="Sign in with Google"></img></button> */}
        </div>
    
        );
      }
    }
      
export default Login;