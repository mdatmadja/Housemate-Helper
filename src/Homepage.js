import React, {useState} from "react";
import fire from './fire';
import apiService from "./apiService";
import firebase from 'firebase';
import './CreateGroup.css';
import Image from 'react-bootstrap/Image'


class Homepage extends React.Component {


    render() {
        return (
            <div className="Homepage">
                <header className="Homepage-header">
                <br></br>
                <br></br>
                <h1>
                    Welcome to Housemate Helper!
                </h1>
                </header>
                <br></br>
                <p>
                Welcome to Housemate Helper! Through this application, you can manage your chores and expenses with your housemates.
                </p>
                <br></br>
                <br></br>
                <Image src="https://cdn.dribbble.com/users/989466/screenshots/9893554/media/c7a2349d6e2aa1372d5f3856b83be76e.png?compress=1&resize=400x300" rounded/>

            </div>
        );
    }
}

export default Homepage;