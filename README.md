# CovidLive
# Nodejs wrapper to call Covid API  using RapidAPI 
This is a basic express app which gives information about the current scenario of Covid in different parts of the
world. 

# Pre-requisites
1. Create your account with [RapidAPI](https://rapidapi.com) 
2. Subscribe [VACCOVID - coronavirus, vaccine and treatment tracker](https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker)
    - It's free to use this API with a quota of 500 requests per month free.
3. Get your API-Key  
    - You can find API-Key from the Endpoints section or settings
## Clone or download
```terminal
$ git clone https://github.com/TAbhay/Covid
$ npm i
``` 
## To run this code
   ```terminal 
   $ npm install all

   $ npm run nodemon

   ```

Once started successfully, you can access endpoints using URL http://localhost:8000

## Configure API Key
A sample env file is provided. Check it out in the repo.
# Endpoints
Following are the endpoints to execute all functionalities of FaiRESTdb

Get HomePage 

    GET: http://localhost:8000

Get world data of Covid

    GET: http://localhost:8000/world
    
Get all countries data

    GET: http://localhost:8000/countries

Get specific country data

    GET: http://localhost:8000/country/India/ind

Get contacts data
   GET: http://localhost:8000/contact

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
```
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```
## BUGs or comments

[Create new Issues](https://github.com/TAbhay/Covid/issues) (preferred)


## To Do
 
