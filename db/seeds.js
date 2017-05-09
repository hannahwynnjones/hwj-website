const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Blog = require('../models/blog');
User.collection.drop();
Blog.collection.drop();

User
  .create([{

    username: 'Hannah',
    password: 'p',
    email: 'h@h',
    location: 'London',
    // profileImage: '/images/seed-pics/red.jpg',
    passwordConfirmation: 'p'

  }])

  .then((users) => {
    console.log(`${users.length} users created!`);

    return Blog.create([{
      name: 'Addidas Jumper',
      // imageSRC: '/images/seed-pics/Addidas.jpg',
      body: 'Vinateg, mens jumper in perfect conditon - well loved!',
      createdBy: users[0]
    }])
.then((blogs) => {
  console.log(`${blogs.length} blogs created!`);
});
  })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
