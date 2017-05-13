//PORT will be stored in your zhrc file, so if its not there you'll go to the localhost:4000 instead.
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGOLAB_URI || `mongodb://<dbuserone>:<dbuserone>@ds139801.mlab.com:39801/heroku_zft6jd8k`; //linking to the const env
const secret = process.env.SECRET || 'Ever since you left the city, You gotta reputation for yourself now!';

module.exports = { port, env, dbURI, secret };

//above mongo replaced the following:
//const dbURI = process.env.MONGODB_URI || `mongodb://localhost/hwj-${env}`; //linking to the const env

//mongodb://<dbuserone>:<dbuserone>@ds139801.mlab.com:39801/heroku_zft6jd8k
