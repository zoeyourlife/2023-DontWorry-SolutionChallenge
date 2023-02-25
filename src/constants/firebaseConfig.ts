import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./firebaseUrl";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: API_KEY as string,
  authDomain: AUTH_DOMAIN as string,
  projectId: PROJECT_ID as string,
  storageBucket: STORAGE_BUCKET as string,
  messagingSenderId: MESSAGING_SENDER_ID as string,
  appId: APP_ID as string,
  measurementId: MEASUREMENT_ID as string,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
