import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBJz1EFwp0XeGOvEaECaIunhRxNyOUg_cA",
    authDomain: "catch-of-the-day-mabel.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mabel.firebaseio.com",

});

const base = Rebase.createClass(firebaseApp.database());

export  {firebaseApp};

export default base;

  