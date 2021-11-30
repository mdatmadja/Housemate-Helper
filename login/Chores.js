import React from "react";
import apiService from "./apiService";
import fire from './fire';
import firebase from 'firebase'

class Chores extends React.Component {

  postChore(){
    const chore = document.querySelector("#chore").value;
    const assign = document.querySelector("#assign").value;
    document.getElementById("chores").innerHTML += "Chores: " + chore + " " + assign;
    var groupPath = "/pairs/"+firebase.auth().currentUser.uid;
    var firebaseRef = firebase.database().ref(groupPath);
    var groupName = "";
    firebaseRef.on("value", function(snapshot){
        snapshot.forEach(function(element){
            console.log(element.key);
            groupName = element.val();
            console.log(element.val());

            console.log(groupName);
    var path = "/userGroups/" + groupName + "/Chores/" + chore + assign;  
    var body = {
        theChore: chore,
        assignedTo: assign
    };

    apiService.prototype.fnCreate(path, body, function(err){
        if(err){
            console.log(err)
        }else{
            console.log("success");
        }
    })

    console.log(chore);

          });
        })
  }

  viewChores(){
    var groupPath = "/pairs/"+firebase.auth().currentUser.uid;
    var firebaseRef = firebase.database().ref(groupPath);
    var groupName = "";
    firebaseRef.on("value", function(snapshot){
      snapshot.forEach(function(element){
      console.log(element.key);
      groupName = element.val();
      console.log(element.val());
      console.log(groupName);

      var path = "/userGroups/" + groupName + "/Chores/";
    var firebaseRef = firebase.database().ref(path);
    firebaseRef.on("value", function(snapshot){
      document.getElementById("show").innerHTML = '';
      snapshot.forEach(function(element){
        console.log(element.key);

        document.getElementById("show").innerHTML +=  "Chore: " + element.val().theChore + "              Assigned to: " + element.val().assignedTo+ "<br>";
        console.log(element.val().theChore);
        console.log(element.val().assignedTo);
      });
    })
  
  });
})
}

deleteChore (){
    const chore = document.querySelector("#chore").value;
    const assign = document.querySelector("#assign").value;
    var groupPath = "/pairs/"+firebase.auth().currentUser.uid;
    var firebaseRef = firebase.database().ref(groupPath);
    var groupName = "";
    firebaseRef.on("value", function(snapshot){
      snapshot.forEach(function(element){
      console.log(element.key);
      groupName = element.val();
      console.log(element.val());
      console.log(groupName);

      var path = "/userGroups/" + groupName + "/Chores/" + chore + assign;
    
      apiService.prototype.fnDelete(path, function(err){
        if(err){
            console.log(err)
        }else{
            console.log("success");
        }
    })
  });
})
}

  render() {
    return (
        <div className="Chores">
            <header className="Chores-header">
                <h1>
                    Chores
                </h1>
            </header>
            
            <div>
                <div>Enter Chore</div>
                <input id="chore" placeholder="Enter Chore" type="text"></input>
            </div>
            <div>
                <div>Assigned to</div>
                <input id="assign" placeholder="Assigned to" type="text"></input>
            </div>
            
            <button onClick={this.postChore}>Post Chore</button>
            <br></br>
            <button onClick={this.deleteChore}>Delete Chore</button>
            <p id="chores"></p>
            <button onClick={this.viewChores}>Show Chores</button>
                    <br></br>
                    <p id="show"></p>
            
        </div>
        );
      }
    }
      
export default Chores;