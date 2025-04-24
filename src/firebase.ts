import { initializeApp } from 'firebase/app';
import { getMessaging, getToken,onMessage} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyAb6CDbGshrLG1bMJntsH27OTWjRWkcFwA',
  authDomain: 'shop-ui-notification.firebaseapp.com',
  projectId: 'shop-ui-notification',
  storageBucket: 'shop-ui-notification.appspot.com',
  messagingSenderId: '17907474436',
  appId: '1:17907474436:web:d40161e686e4eb94aa1551',
  measurementId: 'G-2PHWVW7PQH',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// 🔐 Replace this with your actual VAPID key from Firebase project settings
const VAPID_KEY = 'BKXUjJczDOs0T-zp8amvd0JzkqrmsAW8o2tdKtzLGshGE1M8ybp89WUOIvMpyfm5HJvAy6CrcW-aGotXeFYj6nA';

// 👉 Request user permission and get FCM token
export const requestNotificationPermission = async (): Promise<void> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('Notification permission not granted.');
      return;
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
    });

    if (token) {
      console.log('✅ FCM Token:', token);
      // Optionally send this token to your backend
    } else {
      console.warn('⚠️ No FCM registration token available.');
    }
  } catch (error) {
    console.error('❌ Error getting FCM token:', error);
  }
};

export const onFirebaseMessage = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log('📩 Message received in foreground:', payload);
        resolve(payload);
      });
    });


