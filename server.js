// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();
// initilize dependencies
const bodyParser=require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Initialize port number with 8000 , 3000 or 8080 etc  
const port=8080;
// Setup Server
const server=app.listen(port,listening());
// callback function 
function listening(){
// printing message in the cosole to show server is running with port number
console.log(`running server on localhost ${port}`);
}
//  get function with two arguments
app.get('/all',function(resq,res){
// sending projectData 
res.send(projectData);
}) ;
// Post with two arguments Url and addData function 
app.post('/add', addData);
// callback function 
function addData(req , res){
// printing in terminal 
console.log(req.body);
// newEntry object 
newEntry={
// date (key) , req.body.date (value)
date: req.body.date,
//temp (key) , req.body.temp ( value)
temp: req.body.temp,
//content (key) , req.body.content ( value)
content: req.body.content
}; 
// push in projectData bject newEntry object 
projectData.newInfo=newEntry;
} // end of addData function