import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6yArVHmrJ5uAbjuA9jwjS-cn4iJp5Hsk",
  authDomain: "zoom-clone-e902f.firebaseapp.com",
  projectId: "zoom-clone-e902f",
  storageBucket: "zoom-clone-e902f.appspot.com",
  messagingSenderId: "96302549168",
  appId: "1:96302549168:web:509980a3de02de6771d375",
  measurementId: "G-XE56WVKVVG",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
