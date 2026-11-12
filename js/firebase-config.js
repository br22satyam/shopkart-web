var firebaseConfig = {
  apiKey: "AIzaSyB5O_5rNu39Q140tmjMie9J2ZwrQycDalE",
  authDomain: "shopkart-ecommerce22.firebaseapp.com",
  projectId: "shopkart-ecommerce22",
  storageBucket: "shopkart-ecommerce22.firebasestorage.app",
  messagingSenderId: "675745017273",
  appId: "1:675745017273:web:4672e3028b0307fb935a68",
  measurementId: "G-X0F9R6ZD1Y"
};

var firebaseApp = null;
var auth = null;
var db = null;
var functions = null;
var firebaseInitError = null;
var isLocalAuthTesting =
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") &&
    window.location.port === "5500";
var localAuthTestPhoneNumbers = {
    "+917322091716": "123456"
};

try {
    if (!window.firebase || !firebase.initializeApp || !firebase.auth) {
        throw new Error("Firebase App/Auth compat SDK failed to load.");
    }

    var existingApp = firebase.apps.find(app => app.name === "[DEFAULT]");
    if (existingApp) {
        var existingOptions = existingApp.options;
        var configKeys = ["apiKey", "authDomain", "projectId", "messagingSenderId", "appId"];
        var configMismatch = configKeys.some(key => existingOptions[key] !== firebaseConfig[key]);
        if (configMismatch) {
            throw new Error(`The existing Firebase app does not match the ${firebaseConfig.projectId} configuration.`);
        }
        firebaseApp = existingApp;
    } else {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    auth = firebase.auth(firebaseApp);
    if (auth.app.options.projectId !== firebaseConfig.projectId) {
        throw new Error(`Firebase Auth is connected to unexpected project "${auth.app.options.projectId}".`);
    }

    if (isLocalAuthTesting) {
        auth.settings.appVerificationDisabledForTesting = true;
        console.info("Firebase Auth test-number-only mode enabled for local development.");
    }

    db = firebase.firestore(firebaseApp);
    if (typeof firebaseApp.functions === "function") {
        functions = firebaseApp.functions("us-central1");
    } else {
        console.error("Firebase Functions compat SDK failed to load.");
    }
} catch (error) {
    firebaseInitError = error;
    auth = null;
    db = null;
    functions = null;
    console.error("Firebase initialization failed.", error);
}