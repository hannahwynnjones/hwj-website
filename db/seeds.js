const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Item = require('../models/item');
User.collection.drop();
Item.collection.drop();

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

    return Item.create([{
      name: 'Addidas Jumper',
      // imageSRC: '/images/seed-pics/Addidas.jpg',
      description: 'Vinateg, mens jumper in perfect conditon - well loved!',
      createdBy: users[0]
    }])
.then((items) => {
  console.log(`${items.length} items created!`);
});
  })
    .then((requests) => {
      console.log(`${requests.length} requests created!`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
