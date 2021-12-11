// Setup
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true});
};

// Create fruit schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit (
    {
        name: "Apple",
        rating: 8,
        review: "Great fruit"
    }
);

// fruit.save();

// Create person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const people = new Person (
    {
        name: "John",
        age: 37
    }
);

// people.save();