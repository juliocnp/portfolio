import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCTfJ5THotSI2IJ9emiwukjsWvDF9RXyyI",
  authDomain: "juliocnp-portfolio.firebaseapp.com",
  projectId: "juliocnp-portfolio",
  storageBucket: "juliocnp-portfolio.appspot.com",
  messagingSenderId: "1033787917623",
  appId: "1:1033787917623:web:62349cf4a079be8fb806b2",
  measurementId: "G-NTRDR0CZ2Q"
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage();

export { storage, firebase as default };