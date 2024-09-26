// const prac2 = require("./prac2")
// console.log("The value are " , prac2)   

let baseUrl = 'https://jsonplaceholder.typicode.com/todos/2'

async function API() {
    const response = await fetch(baseUrl);
    const data = await response.json(); // Parse the response to JSON
    return data;
} 

async function fetching() {
    let finaldata  = await API();
    console.log(finaldata)
}

module.exports = fetching()