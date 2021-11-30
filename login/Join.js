import React, {useState} from "react";
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase';
import './Join.css';

class Join extends React.Component {

    createGroup() {
        const group = document.querySelector("#description").value;
        var user = firebase.auth().currentUser;
        var uidVal = user.uid;
        var path = "/userGroups/" +group+ "/" + uidVal;  
        var path2 = "/pairs/" + uidVal;
        var body = {
            id: uidVal,
            email: firebase.auth().currentUser.email
        };
        var body2 = {
            groupName: group
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
    }

    render() {
        return (
            <div className="Join">
                <header className="Join-header">
                <h1>
                    Join a Group
                  </h1>
                </header>
                <div>Enter Group Name</div>
                <input id="description" placeholder="Join Group" type="text"></input>
                <button onClick={this.createGroup}>Join Group</button>
                <p id="group"></p>
            </div>
        );
    }
}

export default Join;