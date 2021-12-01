import React, {useState} from "react";
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase';
import './Join.css';

class Join extends React.Component {
 
    leaveGroup()
    {
        var user = firebase.auth().currentUser;
        var uidVal = user.uid;
        var path = "/userGroups/" + uidVal;
        var groupPath = "/pairs/"+firebase.auth().currentUser.uid;
          var firebaseRef = firebase.database().ref(groupPath);
          var groupName = "";
          firebaseRef.on("value", function(snapshot){
            snapshot.forEach(function(element){
            console.log(element.key);
            groupName = element.val();
            console.log(element.val());

            console.log(groupName);

          var path = "/userGroups/" + groupName + "/members/" + uidVal;  

        var path2 = "/pairs/" + uidVal;

        apiService.prototype.fnDelete(path, function(err){
          if(err){
            console.log(err)
          }else{
            console.log("success");
          }
         })

        apiService.prototype.fnDelete(path2, function(err){
          if(err){
            console.log(err)
          }else{
            console.log("success");
          }
         })
        });
      })
          window.alert('You have left your group. Please refresh the page before joining another group');
    }

    joinGroup() {
        const group = document.querySelector("#description").value;
        const userPass = document.querySelector("#userPass").value;
        var check = false;

        var checkPath = "/userGroups";
          var firebaseRef = firebase.database().ref(checkPath);
          var groupName = "";
          firebaseRef.on("value", function(snapshot){
            snapshot.forEach(function(element){
            console.log(element.key);
            if(element.key == group)
                check = true;

        });
      })


      if(check){
        var passPath = "/userGroups/" +group+ "/password";
        var groupPass;
        var bool = true;
        var firebaseRef = firebase.database().ref(passPath);

        firebaseRef.on("value", function(element){
            console.log(element.key);
            groupPass = element.val().password;
            console.log(element.val().password);
            console.log(userPass);

            if(userPass!=groupPass)
            {
                console.log("no no no");
                bool = false;
            }
         });
        console.log("made it");
        console.log(bool);
        if(bool){
            

        console.log("made it");
        var user = firebase.auth().currentUser;
        var uidVal = user.uid;
        var path = "/userGroups/" +group+ "/members/" + uidVal;  
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
        window.alert("You have succesfully joined your group!");}

        else
            window.alert("Your group password is incorrect");
    }

    else{window.alert("Your group name is invalid")}
    }

    render() {
        return (
            <div className="Join">
                <header className="Join-header">
                <br></br>
                <h1>
                    Join a Group
                </h1>
                </header>
                <div>Enter Group Password</div>
                <div class="input-group mb-3">
                <input id="userPass" class="form-control" placeholder="Password" type="text"></input>
                </div>
                {/* <input id="userPass" placeholder="Password" type="text"></input> */}
                <div>Enter Group Name</div>
                <div class="input-group mb-3">
                <input id="description" class="form-control" placeholder="Join Group" type="text"></input>
                </div>
                {/* <input id="description" placeholder="Join Group" type="text"></input> */}
                <button class="btn btn-primary" onClick={this.joinGroup}>Join Group</button>
                <br></br>
                <br></br>
                <button class="btn btn-primary" onClick={this.leaveGroup}>Leave Group</button>
                <p id="group"></p>
            </div>
        );
    }
}

export default Join;