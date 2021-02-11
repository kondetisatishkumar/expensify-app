import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 18000,
//     createdAt: 1000
// })

// database.ref('expenses').push({
//     description: 'Internet',
//     note: '',
//     amount: 890,
//     createdAt: 1000
// })

// database.ref('expenses').push({
//     description: 'Current',
//     note: '',
//     amount: 300,
//     createdAt: 1000
// })
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const person = snapshot.val()
//     console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`)
// }, (e) => {
//     console.warn('Error - ', e)
// })

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Satish Kondeti',
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Vizag',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data is saved')
// }, (err) => {
//     console.warn(err)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Visakhapatnam'
// })

// database.ref().remove().then(()=>{
//     console.log('Data was removed')
// },(err)=>{
//     console.warn(err)
// })