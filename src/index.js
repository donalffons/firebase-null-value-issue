import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyArV5UWpWoh5hulUA8iz6xwBXchQ8NhfuU",
  authDomain: "fir-null-value-issue.firebaseapp.com",
  projectId: "fir-null-value-issue",
  storageBucket: "fir-null-value-issue.appspot.com",
  messagingSenderId: "978049406822",
  appId: "1:978049406822:web:be533f661a296e3fd1daa7",
  measurementId: "G-MLLPNXPD3L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().signInAnonymously()
  .then(async () => {
    const db = firebase.firestore();
    db.settings({host: "localhost:8080", ssl: false});
    await firebase.firestore().doc("/bla/keks").set({
        asd: 1,
    }, {
        merge: true,
    });
    await firebase.auth().signOut();
  })
  .catch((error) => {
    throw new Error(error);
  });
