// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCw9yMDHMnUXsrB6WW2rumAI-qFZINJCtU",
    authDomain: "palay-family.firebaseapp.com",
    projectId: "palay-family",
    storageBucket: "palay-family.firebasestorage.app",
    messagingSenderId: "237207501947",
    appId: "1:237207501947:web:617fa5617b1834eadaf6de"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig); // Only initialize once
const db = getFirestore(app);
const storage = getStorage(app);  // Initialize storage service

export { db, storage };  // Export to reuse in other files
