# matching-application
Project-Tech  _multi-select dropdown_

## What is does
Welcome. This feature allows users to filter their preferences using a multi-select dropdown. 

The preferences used in this feature are:

|preference|
|:------------------:|
|wanting kids|
|not wanting kids|
|no preference|

The above preferences are used for selecting preferences in a dating app but feel free to change this data into whatever you need for your own application. 

### How it works

This feature can be run locally with index.js using `port 3000`. Preferences can be filtered, updated and deleted using MogoDB.


**Installs**

For this feature to work you will need to have [Node.js][1] [npm][2], [Express][3] and [Ejs][4] installed. 

When you download Node.js, Npm is automatically installed on your computer. Run the following commands in your terminal to see if you have Node and npm installed. 

Check version of Node.js `node -v`
    
Check version of Npm ` npm -v`

If you haven't already you can install the dependencies using the command line like so:

- Install npm `install npm@latest -g`

- Install Express `npm install express --save`

- Install Ejs `npm install ejs`


**Express Middleware** 

You will also need to have body-parser installed. Body-parser is a piece of Express middleware that is used to read HTTP POSTS. If you are not familiar with Body-parser here's some documentation <https://www.npmjs.com/package/body-parser>.<br>With Express 4.16+ Body-parser is built in so you won't have to install this package. 


[1]: https://nodejs.org/en/
[2]: https://www.npmjs.com/
[3]: https://expressjs.com/
[4]: https://ejs.co/
