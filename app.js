const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "fruitDB";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect((err) => {
    assert.equal(null, err);
    console.log("Connect successfully to server");

    const db = client.db(dbName);

    client.close();
});

