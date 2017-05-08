//PORT will be stored in your zhrc file, so if its not there you'll go to the localhost:4000 instead.
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/hwj-${env}`; //linking to the const env
const sessionSecret = process.env.SESSION_SECRET || 'another seriously awesome secret';

module.exports = { port, env, dbURI, sessionSecret };
