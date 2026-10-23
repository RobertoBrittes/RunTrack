import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN0c11Bgtq_rbvMyvOtCapnOgYM2j3sf4",
  authDomain: "runtrack-topesp.firebaseapp.com",
  projectId: "runtrack-topesp",
  storageBucket: "runtrack-topesp.firebasestorage.app",
  messagingSenderId: "201190035821",
  appId: "1:201190035821:web:4b44ada4532f5a92aa0a64"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);