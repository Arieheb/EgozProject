import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM3tEUcoenqQzsaU9RTCi0x3W5d41-2As",
  authDomain: "gfdsa-70d3c.firebaseapp.com",
  projectId: "gfdsa-70d3c",
  storageBucket: "gfdsa-70d3c.appspot.com",
  messagingSenderId: "367135439973",
  appId: "1:367135439973:web:e66a92c4b06de61c399a8c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export { db, auth, storage};