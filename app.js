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

    findDocuments(db, ()=> {
        client.close();
    });
});

const insertDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection("fruits");
    // Insert some documents
    collection.insertMany(
        [
            {
                name: "Apple",
                score: 8,
                review: "Great fruit",
            }, 
            {
                name: "Orange",
                score: 6,
                review: "Kinda sour",
            }, 
            {
                name: "Banana",
                score: 9,
                review: "Wonderful stuff!",
            }
        ],
        (err, result) => {
            assert.equal(err, null);
            assert.equal(3,result.insertedCount);
            assert.equal(3,Object.keys(result.insertedIds).length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
        }
    );
};

const findDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection("fruits");
    // Find some documents
    collection.find({}).toArray((err, fruits) => {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};