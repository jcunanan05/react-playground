import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBSz6Weq1_vKi1YrsEbbqJpdoBUA8rlKig",
  authDomain: "catch-of-the-day-jcunanan05.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jcunanan05.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database()); //returns the database

export { firebaseApp };

export default base;