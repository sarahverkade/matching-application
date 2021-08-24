# matching-application Registration and Login
Project-Tech  - create and update account information 

## What is does
Welcome. This feature allows a user to register an account, login and update their account information. 

<img src="https://github.com/sarahverkade/matching-application/blob/main/public/images/wireframeApp.png" width="600">

<img src="https://github.com/sarahverkade/matching-application/blob/main/public/images/wireframeApp.png" width="300">

See how the apps works on https://sarah-blok-tech.herokuapp.com/

### Built with

- [Node.js][1]
- [npm][2]
- [Express][3]
- [Ejs][4]


## Installation 

For this feature to work you will need to have Node.js and Git installed. Type the following commands in your terminal for installation:

- Install node `node install`
- Install Git `git install`

### Clone this repo

``` git clone https://github.com/sarahverkade/matching-application.git```

### Install NPM 

To use npm type in your terminal in the root of your directory: 

``` npm install ```

### Run the App

This feature can be run locally with ``` npm start ``` using `port 3000`. 


**Installs - Database**

For this project I am using MongoDB Atlas. In index.js I am using two variables to connect to the database. You need to use a .env file in which you store these variables and replace it with your own databse name and password. Below an example of how you need these variables declared in your personal .env file.

```
DB_URI="mongodb+srv://<username>:<password>@backendapp.ehlwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
DB_NAME ="yourDatabaseNAme"
```

**Express Middleware** 

You will also need to have body-parser installed. Body-parser is a piece of Express middleware that is used to read HTTP POSTS. If you are not familiar with Body-parser here's some documentation <https://www.npmjs.com/package/body-parser>.<br>With Express 4.16+ Body-parser is built in so you won't have to install this package. 


[1]: https://nodejs.org/en/
[2]: https://www.npmjs.com/
[3]: https://expressjs.com/
[4]: https://ejs.co/