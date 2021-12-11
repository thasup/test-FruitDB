// Setup
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true});
};

// Create fruit schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name is specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

// Create Fruit model
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit (
    {
        name: "Apple",
        rating: 8,
        review: "Great fruit"
    }
);

const pineapple = new Fruit (
    {
        name: "Pineapple",
        rating: 10,
        review: "Super delicious fruit"
    }
);

// pineapple.save();

// Create person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const people = new Person (
    {
        name: "Amy",
        age: 12,
        favouriteFruit: pineapple
    }
);

// people.save();

const kiwi = new Fruit (
    {
        name: "Kiwi",
        rating: 10,
        review: "The best fruit!"
    }
);

const orange = new Fruit (
    {
        name: "Orange",
        rating: 4,
        review: "Kinda sour"
    }
);

const banana = new Fruit (
    {
        name: "Banana",
        rating: 3,
        review: "Weird texture"
    }
);

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to the fruitDB");
//         mongoose.connection.close();
//     };
// });

// Fruit.find((err, fruits) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const basket = [];
//         fruits.forEach((fruit) => {
//             basket.push(fruit.name);
//         })
//         console.log(basket);

//         mongoose.connection.close();
//     }
// });

// Person.updateOne({name: "John"}, {favouriteFruit: kiwi}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the collection");
//         mongoose.connection.close();
//     };
// });