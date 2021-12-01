import React, {useState} from "react";
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase';
import './CreateGroup.css';

class CreateGroup extends React.Component {

    createGroup() {
        const group = document.querySelector("#description").value;
        const userPass = document.querySelector("#userPass").value;
        var user = firebase.auth().currentUser;
        var uidVal = user.uid;
        var path = "/userGroups/" +group+ "/members/" + uidVal;  
        var path2 = "/pairs/" + uidVal;
        var path3 = '/userGroups/' +group+"/password"
        var body = {
            id: uidVal,
            email: firebase.auth().currentUser.email
        };
        var body2 = {
            groupName: group
        }
        var body3 = {
            password: userPass
        }
       
        console.log(apiService)
    
        apiService.prototype.fnCreate(path, body, function(err){
            if(err){
                console.log(err)
            }else{
                console.log("success");
            }
        })

        apiService.prototype.fnCreate(path2, body2, function(err){
            if(err){
                console.log(err)
            }else{
                console.log("success");
            }
        })

        apiService.prototype.fnCreate(path3, body3, function(err){
            if(err){
                console.log(err)
            }else{
                console.log("success");
            }
        })
        window.alert("You have succesfully created your group");
    }

    render() {
        return (
            <div className="CreateGroup">
                <header className="CreateGroup-header">
                <br></br>
                <h1>
                    Create a Group
                  </h1>
                </header>
                <div>Enter Group Name</div>
                <div class="input-group mb-3">
                    <input id="description" class="form-control" placeholder="Group Name" type="text"></input>
                </div>
                {/* <input id="description" placeholder="Group Name" type="text"></input> */}
                <div>Enter Group Password</div>
                {/* <input id="userPass" placeholder="Password" type="text"></input> */}
                <div class="input-group mb-3">
                <input id="userPass" class="form-control" placeholder="Password" type="text"></input>
                </div>
                <button class="btn btn-primary" onClick={this.createGroup}>Create Group</button>
                <p id="group"></p>
            </div>
        );
    }
}

export default CreateGroup;