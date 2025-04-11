 

const firebaseConfig = {
  apiKey: "AIzaSyAL55gOaE5Vm4Oit39eKyokn3UPExj4KDA",
  authDomain: "jsi31-19351.firebaseapp.com",
  databaseURL: "https://jsi31-19351-default-rtdb.firebaseio.com",
  projectId: "jsi31-19351",
  storageBucket: "jsi31-19351.firebasestorage.app",
  messagingSenderId: "522525831589",
  appId: "1:522525831589:web:9a878305707d5a13aaf84c",
  measurementId: "G-HB66MS1MVV"
};



// Khởi tạo Firebase  
firebase.initializeApp(firebaseConfig);  

// Export db để sử dụng ở file khác  
const db = firebase.firestore();  

