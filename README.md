## Motivatr

[View on Heroku](https://ehl-motivatr.herokuapp.com)

Motivatr is an app designed to help you and your friends stay motivated to achieve your goals and live a happier life. From heartfelt to hilarious, Motivatr lets you create the motivation you're looking for, and share it with others who need a little motivation, too.

## Features / User Stories

1. As a user, I want to view motivational posts so I feel better.

   - All users can view all posts.
   - Login not required to view posts or post details.

2. As a user, I want to create motivational posts so I can share with other people the things that motivate me.

   - Logged in user can create post that includes two areas for text and an image.
   - User can select an image from Unsplash - image assortment is refreshed daily.
   - User can see a list of suggested quotes.

3. As a user, I want to send motivational posts to my friends via email, so I can make them feel better.

   - User can email the post to a friend, and include an additonal message and email subject.

4. As a user, I want to be able to edit or delete my posts.

   - Logged in users are able to edit and delete their own posts.
   - Users are not allowed to edit or delte other users' posts.

5. As a user, I want to be able to "like" a post, so I can express my appreciation of the post.

   - From product detail page, user can select the hear icon on any post to like it. Like count is shown next to icon.

6. As a product owner, I want to allow only registered users to create posts.
   - Only logged in users will see the Create link in header.

## Future Features

1. Improved display of posts on home page - remove extra white space, sort by recently added.
2. Users can comment on posts.
3. Malicious users can be blocked from creating posts.
4. Users can flag posts as inappropriate and alert is sent to admin user.
5. Users can drag and drop images to create posts.
6. Increased assortement of images to choose from.
7. Image upload.
8. Better integration of quote finder into post builder.
9. Additional quote selections/categories to choose from.
10. User can create a profile page.

## Technologies used

- MERN stack: MongoDB/Mongoose, Express, React, Node
- Heroku production hosting
- mLab MongoDB sandbox on Heroku
- JWT authorization of logged in user
- Bcrypt password encryption
- Axios API calls
- Nodemailer email send module
- Ethereal fake SMTP service to test emails sent
- Unsplash images API
- [Ron Swanson quotes API](https://github.com/jamesseanwright/ron-swanson-quotes)
- [Jack Handey quotes API](https://github.com/andrewmundy/jackhandeyapi)

## Installation steps

1. Fork this repo
2. Fork the backend [repo](https://github.com/EmilyHLane/WDI-finalProject-Motivatr)
3. Install NPM node modules and other dependencies:
   - express
   - jwt
   - bcrypt
   - nodemailer
   - axios
   - react-router-dom

4) Get an API key from Unsplash, save in a hidden file, update frontend KEY variable in SelectImage component.
5) Create your own secret for JWT, save in a hidden file, update backend references to SECRET_OR_KEY in userController and server.js files.
6) Update baseURL environment variables in front end components, and in backend models>index.js.
