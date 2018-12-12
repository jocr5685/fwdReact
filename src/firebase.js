import React, { Component } from 'react';
// src/firebase.js
import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyD2QGu-5gcA3WJoiz1fDsikgPKJTbX6FQY",
    authDomain: "project3-8382e.firebaseapp.com",
    databaseURL: "https://project3-8382e.firebaseio.com",
    projectId: "project3-8382e",
    storageBucket: "project3-8382e.appspot.com",
    messagingSenderId: "11603453849"
  };
  firebase.initializeApp(config);
export default firebase;