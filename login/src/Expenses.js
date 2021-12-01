import React, {useState} from "react";
import './Expenses.css';
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase'

class Expenses extends React.Component {
    
            
        addExpense() {
          document.getElementById(`expenses`).innerHTML = '';
          const amount = document.querySelector(`#amount`).value;
          const description = document.querySelector(`#description`).value;
          const members = document.querySelector(`#members`).value;
          console.log(amount);
          console.log(description);
          console.log(members);

          var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
          if(Object.keys(amount).length == 0){
            try {
              throw new Error('my error');
           } catch (err) {
             console.error(err.message);
             window.alert("Input should not be blank");
             return;
           }
          }

          if(Object.keys(description).length == 0){
            try {
              throw new Error('my error');
           } catch (err) {
             console.error(err.message);
             window.alert("Input should not be blank");
             return;
           }
          }
          if(format.test(description)){
            try {
              throw new Error('my error');
           } catch (err) {
             console.error(err.message);
             window.alert("Input should not include special characters, please try again");

             //document.getElementById(`expenses`).innerHTML = `Input should not include special characters, please try again`;
             return;
           }
          }

          if(format.test(members)){
            try {
              throw new Error('my error');
           } catch (err) {
             console.error(err.message);
             window.alert("Input should not include special characters, please try again");

             //document.getElementById(`expenses`).innerHTML = `Input should not include special characters, please try again`;
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

          var path = "/userGroups/" + groupName + "/Expenses/" + amount + description + members;  
          var body = {
            theAmount: amount,
            theDescription: description,
            theMember: members
          };

        apiService.prototype.fnCreate(path, body, function(err){
          if(err){
            console.log(err)
          }else{
            console.log("success");
          }
         })
        });
      })
        }
      

        viewExpenses(){
          var groupPath = "/pairs/"+firebase.auth().currentUser.uid;
          var firebaseRef = firebase.database().ref(groupPath);
          var groupName = "";
          firebaseRef.on("value", function(snapshot){
            snapshot.forEach(function(element){
            console.log(element.key);
            groupName = element.val();
            console.log(element.val());
            console.log(groupName);

            var path = "/userGroups/" + groupName + "/Expenses/";
          var firebaseRef = firebase.database().ref(path);
          firebaseRef.on("value", function(snapshot){
            document.getElementById("show").innerHTML = '';
            snapshot.forEach(function(element){
              console.log(element.key);

              document.getElementById("show").innerHTML += "Expense: $" + element.val().theAmount + "              For: " + element.val().theDescription + "                Assigned to: " + element.val().theMember + "<br>";
              console.log(element.val().theAmount);
              console.log(element.val().theDescription);
              console.log(element.val().theMember);
            });
          })
        
        });
      })
    }

    deleteExpense (){
      const amount = document.querySelector("#amount").value;
      const description = document.querySelector("#description").value;
      const members = document.querySelector("#members").value;
      var groupPath = "/pairs/"+firebase.auth().currentUser.uid;
      var firebaseRef = firebase.database().ref(groupPath);
      var groupName = "";
      firebaseRef.on("value", function(snapshot){
        snapshot.forEach(function(element){
        console.log(element.key);
        groupName = element.val();
        console.log(element.val());
        console.log(groupName);
  
        var path = "/userGroups/" + groupName + "/Expenses/" + amount + description + members; 
      
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
              <div className="Expenses">
                <header className="Expenses-header">
                <br></br>
                  <h1>
                    Expenses Overview
                  </h1>
                </header>
                <div>
                <div>Add Expense</div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">$</span>
                  </div>
                <input id="amount" class="form-control" placeholder="Enter Expense Amount" type="number"></input>
                </div>
                </div>
                <div>
                <div>Description</div>
                <div class="input-group mb-3">
                <input id="description" class="form-control" placeholder="Enter Description" type="text"></input>
                </div>
                </div>
                <div>
                <div>Members to charge</div>
                <div class="input-group mb-3">
                <input id="members" class="form-control" placeholder="Enter Members Seperated By Whitespaces" type="text"></input>
                </div>
                </div>
                    <button class="btn btn-primary" onClick={this.addExpense}>Add Expense</button>
                    <br></br>
                    <br></br>
                    <button class="btn btn-primary" onClick={this.deleteExpense}>Delete Expense</button>
                    <p id="expenses"></p>

                    <button class="btn btn-primary" onClick={this.viewExpenses}>Show Expenses</button>
                    <br></br>
                    <br></br>
                    <p id="show"></p>
                </div>
              
                );
              }
            }
      
export default Expenses;