import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC-UZxUkUxob3eTFVIuuTUuZhEQcdBE8pw",
    authDomain: "nextjs-music-app.firebaseapp.com",
    projectId: "nextjs-music-app",
    storageBucket: "nextjs-music-app.appspot.com",
    messagingSenderId: "380812382654",
    appId: "1:380812382654:web:d5cd3d11bc16f742c969ef",
    measurementId: "G-6DNHVHGW1R"
  };

export default function firebaseClient(){
    if(!firebase.app.length){
        firebase.initializeApp(firebaseConfig);
    }
}