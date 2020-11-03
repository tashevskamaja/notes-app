// what is json?
// It is nothing more than a string representation of what looks like an object or an array

const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book);//stringify takes the object and converted into json string
// fs.writeFileSync('1-json.json', bookJSON);


// const pharseData = JSON.parse(bookJSON); //it takes the json data and converted into object
// console.log(parsedData.author)
//json is string is not object
//book object has title property json does not


// const dataBuffer = fs.readFileSync('1-json.json');// binary data not string - buffer
// const dataJSON = dataBuffer.toString(); // convert that data into javascript string
// const data = JSON.parse(dataJSON);// pharsed json data into object
// console.log(data.title);// access property

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Maja';
user.age = '25';

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);