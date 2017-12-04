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
In a minimal implementation, it connects to node and fullfills queries in a default REST style.

#### Understanding sails.js ⛵️

Our two models in question are `Artist` and `Artwork`.
Using HTTP we can `GET ://localhost:1337/artist` to get sails to ship (pun intended) information from the store.

