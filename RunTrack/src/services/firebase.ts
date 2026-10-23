import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { Auth, getAuth, initializeAuth } from 'firebase/auth';
// @ts-ignore getReactNativePersistence existe no build nativo do SDK, mas não está tipado no pacote "firebase/auth"
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAN0c11Bgtq_rbvMyvOtCapnOgYM2j3sf4",
  authDomain: "runtrack-topesp.firebaseapp.com",
  projectId: "runtrack-topesp",
  storageBucket: "runtrack-topesp.firebasestorage.app",
  messagingSenderId: "201190035821",
  appId: "1:201190035821:web:4b44ada4532f5a92aa0a64"
};

export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, { ignoreUndefinedProperties: true });

// Na web, getAuth já persiste a sessão sozinho (localStorage do navegador).
// No app nativo (iOS/Android), é preciso dizer explicitamente onde guardar
// a sessão, senão ela fica só em memória e some ao fechar o app.
export const auth: Auth = Platform.OS === 'web'
  ? getAuth(app)
  : initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
