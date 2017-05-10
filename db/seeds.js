const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Blog = require('../models/blog');
const Project = require('../models/project');
User.collection.drop();
Blog.collection.drop();
Project.collection.drop();

User
  .create([{
    username: 'Bird',
    password: 'p',
    email: 'bird@bird',
    passwordConfirmation: 'p'
  },{
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

    return Project.create([{
      name: 'Addidas Jumper',
      // imageSRC: '/images/seed-pics/Addidas.jpg',
      description: 'Vinateg, mens jumper in perfect conditon - well loved!',
      link: 'www.awesomeproject.com',
      createdBy: users[0]
    }]);
  })

    .then((projects) => {
      console.log(`${projects.length} projects created!`);
    });

  })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
