const admin = require('firebase-admin');
const cors = require('cors');

// Initialize the app with your service account
admin.initializeApp({
    storageBucket: 'engineerr1983meet.appspot.com',  // Replace with your bucket name
});

const bucket = admin.storage().bucket();

// Set CORS
const corsConfiguration = [
    {
        origin: ['https://engineerr1983.github.io'],
        method: ['GET'],
        maxAgeSeconds: 3600,
    },
];

bucket.setCorsConfiguration(corsConfiguration).then(() => {
    console.log('CORS configuration set successfully');
}).catch((error) => {
    console.error('Error setting CORS configuration:', error);
});
