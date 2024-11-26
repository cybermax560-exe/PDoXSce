// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch courses dynamically
async function loadCourses() {
  const coursesRef = collection(db, "courses");
  const snapshot = await getDocs(coursesRef);
  snapshot.forEach(doc => {
    const data = doc.data();
    // Display courses dynamically
    console.log(data.name, data.price);
  });
}
loadCourses();

