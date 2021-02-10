/*
const person = {
    name: 'Satish',
    age: 31,
    location: {
        city: 'Visakhapatnam',
        temp: 85
    }
};

const {name: firstName = 'Anonymous', age} = person

const {city, temp: temperature} = person.location;

console.log(`${firstName} is ${age}`)
if(city && temperature){
    console.log(`It is ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);

*/

const address = ['Qtr. no. 109/A, ', 'Ukkunagaram PO', 'Visakhapatnam', '530032']

const [, street, city = 'Vizag'] = address

console.log(`You are in ${street}, ${city}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , price] = item 

console.log(`A medium ${coffee} costs ${price}`)