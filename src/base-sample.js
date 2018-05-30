import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
};

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database()); //returns the database

export { firebaseApp };

export default base;