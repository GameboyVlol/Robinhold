import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBceVFNWVhYp7PSyjaH9WHbnlIYj-_B8G8",
  authDomain: "robinhold-b9cd2.firebaseapp.com",
  projectId: "robinhold-b9cd2",
  storageBucket: "robinhold-b9cd2.firebasestorage.app",
  messagingSenderId: "861162209906",
  appId: "1:861162209906:web:e2a746e7ab9d7655ed78eb"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);

// Set persistence to local (default)
setPersistence(auth, browserLocalPersistence);