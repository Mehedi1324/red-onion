import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.comfig';
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
