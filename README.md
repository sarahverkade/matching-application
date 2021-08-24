# matching-application
Project-Tech  - create and update account information - designed to view on IPhone X

## What it does
Welcome. This feature allows users to register an account, login and update their account information. 



### How it works

This feature can be run locally with index.js using `port 3000`. 


**Installs - Packages**

For this feature to work you will need to have [Node.js][1] [npm][2], [Express][3] and [Ejs][4] installed. 

When you download Node.js, Npm is automatically installed on your computer. Run the following commands in your terminal to see if you have Node and npm installed. 

Check version of Node.js `node -v`
    
Check version of Npm ` npm -v`

If you haven't already you can install the dependencies using the command line like so:

- Install npm `install npm@latest -g`

- Install Express `npm install express --save`

- Install Ejs `npm install ejs`

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

