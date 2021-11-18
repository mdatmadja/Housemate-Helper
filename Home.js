import React from "react";
import fire from './fire';
import apiService from './apiService';
import firebase from 'firebase';

class Home extends React.Component {
        logout() {
            fire.auth().signOut();
        };

        fnAddUid() {
            var user = firebase.auth().currentUser;
            var uidVal = user.uid;
    
            var path = "/userGroups/" + uidVal;  
            var body = {
                id: uidVal
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
            <html>
            <div>c
                <button onClick={this.fnAddUid}>Join a Group</button>
                <br></br>
                <button>Chores</button>
                <button>Expenses</button>
                <button>Calendar</button>
                <button onClick={this.logout}>Logout</button>
            </div>
            </html>
        );
      }

      
    }
      
export default Home;


