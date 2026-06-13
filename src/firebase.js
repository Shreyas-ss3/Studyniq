import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA8_uel1rO_JxZ53EIruazVOwlEt16GuU",
  authDomain: "focusforge-9f797.firebaseapp.com",
  projectId: "focusforge-9f797",
  storageBucket: "focusforge-9f797.firebasestorage.app",
  messagingSenderId: "83327552791",
  appId: "1:83327552791:web:1b23680649f6e535973b52"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);