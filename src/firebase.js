import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCnSiD3Mvdm7H_qNoEODB4JzDJQ5cfxDAQ',
  authDomain: 'controle-de-som-f02dc.firebaseapp.com',
  projectId: 'controle-de-som-f02dc',
  storageBucket: 'controle-de-som-f02dc.firebasestorage.app',
  messagingSenderId: '1084185913765',
  appId: '1:1084185913765:web:75fbe275b554ea3f8a604c'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db, firebaseConfig }
