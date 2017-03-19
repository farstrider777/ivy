#Hackathon - Ivy  w8d

#Objectives

#Learning Objectives:

* Demonstrate an understanding of Node.js, Express, and Sequelize
* Demonstrate an understanding of AngularJS and UI Router
* Demonstrate how to build an application from scratch, integrating the Front End and Back End

#Performance Objectives

* Writing migrations and models for the various data in your application
* Defining appropriate HTTP routes for the functionality in your application
* Writing controller methods that handle data from the request and return JSON responses
* Querying the database using Sequelize and models
* Hashing passwords and generating access tokens

----

#API Documentation

----
#USERS
----
POST `/users`

Create a `User` to post `Photos` and write `Comments`.(And soon `Tag` your favorite photos!)
Required entries:

* username: STRING
* email: STRING
* password: STRING
* profilePhoto: STRING

Example:

`{
  "id": 9,
  "username": "Final Test",
  "email": "final@test.com",
  "password": "$2a$10$L/ThSRxd.vS1D.O22ZW.h.DIBxgBYwfJbciEFefG4iCV8gUe4QHt.",
  "salt": "$2a$10$L/ThSRxd.vS1D.O22ZW.h.",
  "updatedAt": "2017-03-19T14:36:59.723Z",
  "createdAt": "2017-03-19T14:36:59.723Z",
  "profilePhoto": null
}`

----
POST `/login`

Requires correct authentication!

Verifies `Users`.
Required entries:

* username: STRING
* email: STRING

Example:

`{
  "user": {
    "id": 9,
    "username": "Final Test",
    "password": "$2a$10$L/ThSRxd.vS1D.O22ZW.h.DIBxgBYwfJbciEFefG4iCV8gUe4QHt.",
    "email": "final@test.com",
    "salt": "$2a$10$L/ThSRxd.vS1D.O22ZW.h.",
    "profilePhoto": null,
    "createdAt": "2017-03-19T14:36:59.723Z",
    "updatedAt": "2017-03-19T14:36:59.723Z"
  },
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwibmFtZSI6IkZpbmFsIFRlc3QifQ.x8etsdCvQT3TpM4xlq9vvT1BcwAJNcd--SWsD_w-SHo"
}`

----
GET `/users/name/:id`

Get `username` with some associated data

Verifies `Users`.
Required entries:

* userId: INTEGER

Example:

`{
  "username": "Final Test",
  "Comments": []
}`

----
GET `/users/:id/comments`

Returns all of the `Comment`, sorted by the most recent.


Required entries:

* userId: INTEGER

Example:

`{
  "id": 6,
  "username": "josh3",
  "password": "$2a$10$nRiigrRLnT8w0YdjREedvu/CdbJJQiDP40hIanCy.F1QpbYe6gtja",
  "email": "josh3@cory.com",
  "salt": "$2a$10$nRiigrRLnT8w0YdjREedvu",
  "profilePhoto": null,
  "createdAt": "2017-03-17T15:42:36.948Z",
  "updatedAt": "2017-03-17T15:42:36.948Z",
  "Comments": [
    {
      "id": 4,
      "userId": 6,
      "photoId": 1,
      "text": "he sure is!",
      "createdAt": "2017-03-17T20:46:49.028Z",
      "updatedAt": "2017-03-17T20:46:49.028Z"
  }`

----
#Photos
----
POST `/photos`

*Must be authenticated*

Posting `Photos` to share with other `Users`.
Required entries:

* title: string
* photoUrl: string
* userId: integer (foreign key)

Example:

`{
  "id": 28,
  "title": "Red Panda",
  "photoUrl": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
  "userId": 6,
  "updatedAt": "2017-03-19T15:08:09.876Z",
  "createdAt": "2017-03-19T15:08:09.876Z",
  "likes": null
}`

----
GET `/photos`

Getting `Photos` from ALL `Users`.
Required entries:

Example:

` {
    "id": 16,
    "title": "he's big",
    "photoUrl": "https://media1.fdncms.com/orlando/imager/u/original/2455343/gator.jpg",
    "userId": 5,
    "likes": 39,
    "createdAt": "2017-03-18T21:19:52.105Z",
    "updatedAt": "2017-03-19T13:14:05.080Z"
  },
  {
    "id": 15,
    "title": "bob",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/Giraffe08_-_melbourne_zoo.jpg",
    "userId": 5,
    "likes": 8,
    "createdAt": "2017-03-18T18:06:00.812Z",
    "updatedAt": "2017-03-19T04:10:56.988Z"
  },`

----
GET `/users/:id/photos`

Pulls `Photos` by `UserId`

Required entries:

* userId: INTEGER

Example:

`"id": 6,
  "username": "josh3",
  "password": "$2a$10$nRiigrRLnT8w0YdjREedvu/CdbJJQiDP40hIanCy.F1QpbYe6gtja",
  "email": "josh3@cory.com",
  "salt": "$2a$10$nRiigrRLnT8w0YdjREedvu",
  "profilePhoto": null,
  "createdAt": "2017-03-17T15:42:36.948Z",
  "updatedAt": "2017-03-17T15:42:36.948Z",
  "Photos": [
    {
      "id": 12,
      "title": "bear!!!",
      "photoUrl": "http://www.wikiality.com/file/2016/11/bears1.jpg",
      "userId": 6,
      "likes": 2,
      "createdAt": "2017-03-18T17:33:09.432Z",
      "updatedAt": "2017-03-19T00:45:21.047Z"
    },
    {
      "id": 11,
      "title": "scary!",
      "photoUrl": "http://i.huffpost.com/gen/1446453/images/o-SNAKES-facebook.jpg",
      "userId": 6,
      "likes": 1,
      "createdAt": "2017-03-18T17:32:04.512Z",
      "updatedAt": "2017-03-19T00:45:28.430Z"
    },
    {
      "id": 10,
      "title": "water turtle!!!",
      "photoUrl": "http://www.backwaterreptiles.com/images/turtles/red-eared-slider-turtle-for-sale.jpg",
      "userId": 6,
      "likes": 2,
      "createdAt": "2017-03-18T17:30:02.351Z",
      "updatedAt": "2017-03-19T00:45:38.209Z"
    }...`

----
GET `/photos/:id`

Gets `Photos` by its Id.

Required entries:

* photoId: INTEGER

Example:

` {
  "id": 1,
  "title": "my dog",
  "photoUrl": "https://www.aspcapetinsurance.com/media/1064/mountain-dog.jpg",
  "userId": 5,
  "likes": 4,
  "createdAt": "2017-03-17T19:02:08.484Z",
  "updatedAt": "2017-03-19T00:19:46.790Z"
}`

----
PUT `/likes/:id`

Gets `Likes` from `Photo`.

Required entries:

* photoId: INTEGER

Example:

` {
  "id": 1,
  "title": "my dog",
  "photoUrl": "https://www.aspcapetinsurance.com/media/1064/mountain-dog.jpg",
  "userId": 5,
  "likes": 4,
  "createdAt": "2017-03-17T19:02:08.484Z",
  "updatedAt": "2017-03-19T00:19:46.790Z"
}`

----
GET `/likes/:id`

Gets `Likes` from `Photo`.

Required entries:

* photoId: INTEGER

Example:

` {
  "id": 1,
  "title": "my dog",
  "photoUrl": "https://www.aspcapetinsurance.com/media/1064/mountain-dog.jpg",
  "userId": 5,
  "likes": 4,
  "createdAt": "2017-03-17T19:02:08.484Z",
  "updatedAt": "2017-03-19T00:19:46.790Z"
}`

----
#Comments
----
POST `/comments/:id`

*Must be authenticated*

Posting `Comments` on `Photos`

Required entries:
* photoId: INTEGER (foreign key)
* userId: INTEGER (foreign key)
* text: STRING

Example:

`{
  "id": 56,
  "photoId": 2,
  "userId": 6,
  "text": "What a great comment!",
  "updatedAt": "2017-03-19T15:20:42.532Z",
  "createdAt": "2017-03-19T15:20:42.532Z"
}`


----
GET `/comments/:id`

Listing `Comments` by `Photos`

Required entries:
* photoId: INTEGER (foreign key)

Example:

` {
    "id": 10,
    "userId": 6,
    "photoId": 2,
    "text": "gu",
    "createdAt": "2017-03-17T20:52:14.381Z",
    "updatedAt": "2017-03-17T20:52:14.381Z"
  },
  {
    "id": 11,
    "userId": 6,
    "photoId": 2,
    "text": "hey you are cute!",
    "createdAt": "2017-03-17T20:53:52.703Z",
    "updatedAt": "2017-03-17T20:53:52.703Z"
  },`

  ----
  GET `/comments/by/:id`

  Listing `Comments` by `User`

  Required entries:
  * UserId: INTEGER (foreign key)

  Example:

  `  {
    "id": 53,
    "userId": 6,
    "photoId": 9,
    "text": "my favorite box turtle",
    "createdAt": "2017-03-19T13:49:02.901Z",
    "updatedAt": "2017-03-19T13:49:02.901Z"
  },
  {
    "id": 56,
    "userId": 6,
    "photoId": 2,
    "text": "What a great comment!",
    "createdAt": "2017-03-19T15:20:42.532Z",
    "updatedAt": "2017-03-19T15:20:42.532Z"
  }`

----
#Tags
----
POST `/tags`

Post `Tags` to be used on `Photos`

Required entries:
* text: STRING

Example:

`{
  "id": 9,
  "text": "Tag",
  "updatedAt": "2017-03-19T15:25:11.222Z",
  "createdAt": "2017-03-19T15:25:11.222Z"
}`

----
GET `/tags/photos`

Lists ALL `Tags`

Required entries:

Example:

` {
    "id": 9,
    "text": "Tag",
    "createdAt": "2017-03-19T15:25:11.222Z",
    "updatedAt": "2017-03-19T15:25:11.222Z"
  },
   {
    "id": 5,
    "text": "beers",
    "createdAt": "2017-03-19T11:32:21.465Z",
    "updatedAt": "2017-03-19T11:32:21.465Z"
  },`

----
GET `/single/:id/tags`

Gets ONE `Tags` by `tagId`

Required entries:
* tagId: INTEGER

Example:

`{
  "id": 1,
  "text": "earl",
  "createdAt": "2017-03-19T11:32:06.888Z",
  "updatedAt": "2017-03-19T11:32:06.888Z"
}`


#Heroku Site#
https://mysterious-tundra-23151.herokuapp.com



#LIVE SITE#

http://tiy-josh-ivy.surge.sh
