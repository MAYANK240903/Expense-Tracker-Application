import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "test-project-559e1.firebaseapp.com",
  projectId: "test-project-559e1",
  storageBucket: "test-project-559e1.appspot.com",
  messagingSenderId: "418042337809",
  appId: "api-id",
  measurementId: "G-7DTEW2E7PY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
