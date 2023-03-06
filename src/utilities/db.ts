import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyCk-rS-4QmPAXIBE2xIbPBYDzxjqp5Gc1A',
	authDomain: 'zoom-pool-party.firebaseapp.com',
	projectId: 'zoom-pool-party',
	storageBucket: 'zoom-pool-party.appspot.com',
	messagingSenderId: '225593866133',
	appId: '1:225593866133:web:f1c463dfa3c526f762689c',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
