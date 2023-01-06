import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_IDu
  };

 const app = initializeApp(firebaseConfig);

 const db = getDatabase(app)

 export { db as default , app }
//  expenses.map((expense)=>{
//     push(ref(db, 'expenses'),expense)
//  })

// onValue(ref(db, 'expenses'),(snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childsnapshot)=>{
//         expenses.push({
//             ...childsnapshot.val(),
//             id: childsnapshot.key
//         })
//     })
//     console.log(expenses)
// })

// onChildRemoved(ref(db, 'expenses'),(snapshot)=>{
//     console.log(snapshot.val())
    
// })
