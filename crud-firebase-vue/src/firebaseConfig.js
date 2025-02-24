
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_PROJECT_ID.firebaseapp.com',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_PROJECT_ID.appspot.com',
  messagingSenderId: 'TU_SENDER_ID',
  appId: 'TU_APP_ID',
  measurementId: 'TU_MEASUREMENT_ID',
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };

