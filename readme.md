# Tate shopping cart project

### 1. Requirements:
 - MongoDB
 - NodeJS@8LTS+
 - NPM

### 2. Setting up MongoDB:

Start up your mongo service with `mongod &&`.

Then import the information by navigating to the directory and restoring the data.
```
~ $ cd tate-db/
tate-db $ mongorestore data
```

Congratulations, MongoDB is up and running

### 3. Setting up the API server

The node app created is running on sails.js, a node framework that can do a lot of stuff.
In a minimal implementation, it connects to a DB and fullfills queries in a default REST style.

To get Sails up and running, enter
```
~ $ cd tate-api/
tate-api $ npm start
```

#### 3.1. Understanding sails.js ⛵️

Our two models in question are `Artist` and `Artwork`.
Using HTTP we can `GET ://localhost:1337/artist` to get sails to ship (pun intended) information from the store.
If a user has selected all their images, the order array will be stored in the `Order` collection.

### 4. Setting up the front-end

Most of the magic happens here. Either copy the `./tate-frontend/dist/`directory to your favourite HTTP host or navigate to the directory and launch a HTTP script of your
```
~ $ cd tate-frontend/dist/
dist $ python -m SimpleHTTPServer 8000
```
(https://docs.python.org/2/library/simplehttpserver.html)

### 5. Enjoy paintings
Then go ahead and visit http://localhost:8000 to see the result.
