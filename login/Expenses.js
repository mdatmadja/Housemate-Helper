import React, {useState} from "react";
import './Expenses.css';
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase'

class Expenses extends React.Component {
    
        addExpense() {
          const amount = document.querySelector("#amount").value;
          const description = document.querySelector("#description").value;
          const members = document.querySelector("#members").value;
          console.log(amount);
          console.log(description);
          console.log(members);
          document.getElementById("expenses").innerHTML += "Expense: " + "$" + amount + "   " + description + "   " + members;
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
        resolveExpense(){}
        
        
        render() {
            return (
              <div className="Expenses">
                <header className="Expenses-header">
                  <h1>
                    Expenses Overview
                  </h1>
                </header>
                <div>
                <div>Add Expense</div>
                        <input id="amount" placeholder="Enter Expense Amount" type="number"></input>
                    </div>
                <div>
                <div>Description</div>
                        <input id="description" placeholder="Enter Description" type="text"></input>
                </div>
                <div>
                <div>Members to charge</div>
                        <input id="members" placeholder="Enter Members Seperated By Whitespaces" type="text"></input>
                </div>
                    <button onClick={this.addExpense}>Add Expense</button>
                    <br></br>
                    <button onClick={this.deleteExpense}>Delete Expense</button>
                    <p id="expenses"></p>

                    <button onClick={this.viewExpenses}>Show Expenses</button>
                    <br></br>
                    <p id="show"></p>
                </div>
                );
              }
            }
      
export default Expenses;