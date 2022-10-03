// import { google } from 'googleapis';
import { auth } from '@googleapis/youtube';

// const googleAuth = new google.auth.GoogleAuth({
const gAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
  },
  scopes: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/youtube.readonly'
  ]
});

export default gAuth;
