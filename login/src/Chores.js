import React from "react";
import apiService from "./apiService";
import './Chores.css';
import fire from './fire';
import firebase from 'firebase'

class Chores extends React.Component {

  postChore(){
    document.getElementById(`chores`).innerHTML = '';

    const chore = document.querySelector("#chore").value;
    const assign = document.querySelector("#assign").value;

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(Object.keys(chore).length == 0){
      try {
        throw new Error('my error');
     } catch (err) {
       console.error(err.message);
       window.alert("Input should not be blank");
       return;
     }
    }

    if(Object.keys(assign).length == 0){
      try {
        throw new Error('my error');
     } catch (err) {
       console.error(err.message);
       window.alert("Input should not be blank");
       return;
     }
    }

    if(format.test(chore)){
      try {
        throw new Error('my error');
     } catch (err) {
       console.error(err.message);
       window.alert("Input should not include special characters, please try again");

       //document.getElementById(`chores`).innerHTML = `Input should not include special characters, please try again`;
       return;
     }
    }

    if(format.test(assign)){
      try {
        throw new Error('my error');
     } catch (err) {
       console.error(err.message);
       window.alert("Input should not include special characters, please try again");

       //document.getElementById(`chores`).innerHTML = `Input should not include special characters, please try again`;
       return;
     }
    }
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
            <br></br>
                <h1>
                    Chores
                </h1>
            </header>
            
            <div>
                <div>Enter Chore</div>
                <div class="input-group mb-3">
                <input id="chore" class="form-control" placeholder="Enter Chore" type="text"></input>
                </div>
            </div>
            <div>
                <div>Assigned to</div>
                <div class="input-group mb-3">
                <input id="assign" class="form-control" placeholder="Assigned to" type="text"></input>
                </div>
            </div>
            
            <button class="btn btn-primary" onClick={this.postChore}>Post Chore</button>
            <br></br>
            <br></br>
            <button class="btn btn-primary" onClick={this.deleteChore}>Delete Chore</button>
            <p id="chores"></p>
            <button class="btn btn-primary" onClick={this.viewChores}>Show Chores</button>
                    <br></br>
                    <br></br>
                    <p id="show"></p>
            
        </div>
        );
      }
    }
      
export default Chores;