//Instantiating our server

const express = require('express');                       //we created an instance of express
const app = express();                                    //we initiated a single instance of express and named it as 'app'

//used to parse req.body in express -> PUT or POST

const bodyParser = require('body-parser');               //body parser object

//now we need to power up our 'app' server with 'body parser' object
//specifically parse JSON data and add it to request.Body object

app.use(bodyParser.json());

//The app listens at port number 3000 and does the task inside arrow fucntion
app.listen(3000,() => {
    console.log("Server started at port number 3000")
});

//Thus we created our first server

//Now  create a route
//we applied a get request on app
//Whenever it will come on '/' route then we will send a response 'Hello Everyone,How are you all?'

app.get('/' , (request , response) => {
    response.send("Hello Everone,How are you all?");
})

//We defined our own route '/api/cars' of POST on 'app' server
//Whenever we go on this route the behaviour will be as:
//The data is in the request body
//The name and brand will be removed from request.body, name and brand will be printed and then in response the string "Car Submitted successfully!" will be sent
//But if we try to see this in browser we cant see like above case
//There will also be an error in Postman
//This is because there is a problem/issue in 'Parsing'
//As we have not defined a logic for Parsing
//hence we use middle-ware which is called as body parser
//'Body parser' means the data in our request body will be parsed

app.post('/api/cars', (request , response) => {
    const{name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted successfully!")
})

//we need to link express.js (server) with mongodb(Data base)
//For this we use mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,                                     //here we used a syntax for connecting express and mongodb using mongoose
    useUnifiedTopology:true                                   //these are some configurations that we need to write otherwise there will be an error
})                                                            //this entire part is promise(two states:Resolve or Reject)

//myDatabase is the name of db we created, we can also write already existing db here
//we need to send to 2 things in connect->1)Configuration object

//then we apply method
.then(() => {console.log("Connection successful")})
//but there can be error also
.catch((error) => {console.log("Received an error")});