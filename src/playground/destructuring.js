// Object destructuring

const person = {
    name: 'Anna',
    age: 32,
    location: {
        city: 'Stockholm',
        temp: 20
    }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'self-published'} = book.publisher;
console.log(publisherName); 

//Array destructuring

const address = ['6 Lilla Vasterbron', 'Stockholm', 'Sweden', '11219'];
const [street, place, state, zip] = address;
console.log(`You are in ${place} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);