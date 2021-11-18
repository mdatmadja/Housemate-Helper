import firebase from 'firebase';
import React from "react";

class apiService extends React.Component {


    fnCreate(path, body, callback) {
        firebase.database().ref(path).set(body, callback);
    }
    fnRead(path, successCallback, errorCallback) {
        firebase.database().ref(path).once("value").then(successCallback, errorCallback);
    }
    fnAutoRead(path, successCallback, errorCallback){
        firebase.database().ref(path).on("value", successCallback, errorCallback);
    }
    fnUpdate(path, body, callback) {
        firebase.database().ref(path).update(body, callback);
    }
    fnDelete(path, callback) {
        firebase.database().ref(path).remove(callback);
    }

}

export default apiService;