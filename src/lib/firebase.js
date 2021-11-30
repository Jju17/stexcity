import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { seedDatabaseGroups } from "../seed";

// firebaseApps previously initialized using initializeApp()
const firebase = initializeApp({ projectId: "stexcity" });

const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8080);

// seedDatabaseGroups();

export { db, firebase };
