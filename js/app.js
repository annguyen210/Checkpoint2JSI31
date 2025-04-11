// app.js  
import { db } from './firebase-config.js';  

// Hàm thêm profile  
async function addProfile() {  
  await db.collection('profiles').add({  
    birthday: "10/8/2010",  
    description: "15 tuổi",  
    email: "47332678@gmail.com",  
    name: "Your Name",  
    phone: "098276231"  
  });  
}  

// Hàm lấy tất cả profiles  
async function getProfiles() {  
  const snapshot = await db.collection('profiles').get();  
  snapshot.forEach(doc => {  
    console.log(doc.data());  
  });  
}  
