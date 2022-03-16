# Weather-Journal App Project

## Installing node-v14.17.6-x64 in my PC .

I Open terminal window and I checked that node is installed in Pc successfully and I get version by writing in terminal npm –v

Installing express by writing in terminal 
        npm install express or npm i express 

in app creating an instance by require express to can run server and route

Installing body-Parser by writing in terminal 
       npm install body-Parser or npm i body-Parser

Server Side

Creating a local server  with customize port number .

in code we initialize dependencies by using require body-Parser  

using express and body-Parser as middleware 

Installing cors by writing in terminal 
     npm install cors or npm I cors 

Initialize the main project folder and making app using it 
And detect the port (e.g 8080 ) then spin up the server 
And utilizing the .listen method() with two arguments port &
Callback function called listening .

Note : it will throw an exception if any error occurs when server is running for example it maybe throws an exception 
because address is already in use 8080 and show more details about it .

Get request ( Routes )  to request and response parameters with taking two parameters (req , res)

Post request (Routes ) to collect and store user data with Url path and callback function .

Client Side 

Regestiration for getting BaseUrl ( API-URL ) from the openwaethermap website and getting APIKey.
Setting up local environment for asynchronous javascript to start to test the code and feedback in abrowser 
to be sure it works efficiently .

Processing the Post requesr ( postData Function ) 

Using Asynchronous promises 

Using a fetch keyword inside of function asynchronous .

Using await ( until the api respond ).

try & catch :
with using API responding , must using try statement 
catch statement to throw an exception if there is any error

Credentials & APIKey

Making chaining promises - Depending Get & Post request
in .then() we could call another async function.

Note : chaining promises with .next() allows you to make multiple dependent HTTP requests .

Dynamic UI updates by using selector and innerHTML and also using the new data object to identifying data which
to update element and setting appropriate property .

and show this specific data to user in browser and also printing this data in the console .
