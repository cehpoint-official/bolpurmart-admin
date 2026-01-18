importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "REPLACE_WITH_VITE_FIREBASE_API_KEY",
    authDomain: "REPLACE_WITH_VITE_FIREBASE_AUTH_DOMAIN",
    projectId: "REPLACE_WITH_VITE_FIREBASE_PROJECT_ID",
    storageBucket: "REPLACE_WITH_VITE_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "REPLACE_WITH_VITE_FIREBASE_MESSAGING_SENDER_ID",
    appId: "REPLACE_WITH_VITE_FIREBASE_APP_ID",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
