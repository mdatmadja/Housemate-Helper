import React from "react";
import fire from './fire';


class Home extends React.Component {
        logout() {
            fire.auth().signOut();
        }
        render() {
        return (
            <div>
                <button>Join a Group</button>
                <button>Create a Group</button>
                <br></br>
                <button>Chores</button>
                <button>Expenses</button>
                <button>Calendar</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
      }
    }
      
export default Home;


