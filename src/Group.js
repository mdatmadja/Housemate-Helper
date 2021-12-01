import React, {useState} from "react";
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase';
import './Group.css';

class Group extends React.Component {

    createGroup() {
        const group = document.querySelector("#description").value;
        document.getElementById("group").innerHTML = "Your Group Name is: " + group;
        var user = firebase.auth().currentUser;
        var uidVal = user.uid;
        var path = "/userGroups/" +group+ "/";  
        var body = {
            id: uidVal,
        };
       
        console.log(apiService)
    
        apiService.prototype.fnCreate(path, body, function(err){
            if(err){
                console.log(err)
            }else{
                console.log("success");
            }
        })
    }

    render() {
        return (
            <div className="Group">
                <header className="Group-header">
                <h1>
                    Create a group
                </h1>
                </header>
                <div>Create Group Name</div>
                <div class="input-group mb-3">
                <input id="description" class="form-control" placeholder="Enter Name" type="text"></input>
                </div>
                <input id="description" placeholder="Enter Name" type="text"></input>
                <button class="btn btn-primary" onClick={this.createGroup}>Create Group</button>
                <p id="group"></p>
            </div>
        );
    }
}

export default Group;