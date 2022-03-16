// Create a new date instance dynamically with JS
let d = new Date();
//  formatting style
let format= {weekday: 'long' , year: 'numeric' , month: 'long' , day: 'numeric'};
// date formatting
let newDate = d.toLocaleDateString("en-Us",format);
// intilize server url (local server )
const server="http://localhost:8080";
// intilize Api URL for using zip code to get tempreature
const apiUrl="https://api.openweathermap.org/data/2.5/weather?zip=";
// api valid key for allowance using Api URL 
const key="&appid=03d4136f12079e4c6edcaeb5c15c3fdf&units=imperial";
// check valid zip code 
function check(){
const generate=document.getElementById('generate');
const invalidZip=document.getElementById('invalid');
const inputZip= document.getElementById('zip');
// button clicked function ( arrow function )
generate.addEventListener("click",()=>{
      /* if zip code is empty */
      if(inputZip.value === ''){
      // display error message for user 
     invalidZip.innerHTML="Zip code is required";
    // message error style with red color
    invalidZip.style.color="red";
        }
    /* if zip code is not a number */
    else if (isNaN(inputZip.value)){
    // display error message for user
    invalidZip.innerHTML="please enter valid zip code";
    // message error style with red color
     invalidZip.style.color="red";
        }
    else {
    // error message is empty
        invalidZip.innerHTML="";
        }
	});
}    // end of check function 
// callback check function to check the user enter valid zip code or not 
check();
// action event when clicking generate button with function called generateNewData
document.getElementById("generate").addEventListener("click", generateNewData);
/* initlize generateNewData function */
function generateNewData(e){
// getting value of zip code 
const newZip=document.getElementById("zip").value;
// getting feelings 
const newFeelings=document.getElementById("feelings");
/*function getWeather with three argument apiUrl and zipcode and key 
then function with one argument (data) */
getWeather(apiUrl,newZip,key).then(function (data){
// printing data in console 
console.log(data);
/* using function postData with two arguments URL and object 
selecting only what i want from data that i get ( date , temp and content) 
can also select all data what i want (e.g describtion) */
postData('/add',{date: newDate,
// to get temprature value that exist in main (key) that exist in data ( object ) 
temp: data.main.temp,
// to get value of newfeelings 
content: newFeelings.value
});
// call the updatingUserInterface function 
updatingUserInterface();
})
}  // end of generateNewData function 
// getWeather  asynchrounous ( arrow function ) with three arguments (callback function)
const getWeather= async (baseUrl,zip,key)=> {
// wait fetching 
const res = await fetch (baseUrl+zip+key);
// must use try and catch with asynchrounous and waitting fetching
    try {
// waiting fetching 
const data = await res.json();
// printing data in console 
console.log(data);
/* return the data when call this function (output)
     */
return data ;
} // end of try
// catch with exception argument
catch(error){
/* printing error parameter ( with all details about this error)
in the console */
console.log(error);
} // end of catch
}; // end of getWeather function 
/* PostData function (asynchronous) with two arguments URL as string 
and data as object */
const postData= async (url='', data={})=>
{
// waiting fetching 
const res=await fetch (url,{
// Post
method: 'POST',
// credentials
credentials: 'same-origin',
// headers
headers: {
'Content-Type':'application/json',
},
// body
body: JSON.stringify(data)
});
// must Using try & catch with asynchronous 
try{
// waiting 
const newData=await res.json();
// return new data when calling this function 
return newData;
} // end of try
// catch with excepttion argument
catch(error){
// printing error paramater in the consol 
// printing all details of the error in console
console.log(error);
} // end of catch
};  // end of postData
/* function updatingUserInterface (Asynchronous ) */
const updatingUserInterface=async() => {
// day
const day=document.getElementById("date");
// temperature
const temperature=document.getElementById("temp");
// content
const cont=document.getElementById("content");
// waiting fetching
const req=await fetch(server+'/all');
// must using try & catch with asynchrouns 
try{
// waiting
const allData = await req.json();
// putting data in user Interface in browser 
// date 
day.innerHTML=`Today is : ${allData.newInfo.date}`;
// temperature 
temperature.innerHTML=`temperature's Today is : ${allData.newInfo.temp}`;
// content ( feelings )
cont.innerHTML= ` today, you are feeling: ${allData.newInfo.content}`;
// putting newInfo in allData object in output variable
const output=allData.newInfo;
// printing the output in the console
console.log(output);
} // end of try
// catch with exception (error argument)
catch (error){
// printing error with details in the console
console.log(error);
}// end of catch
} // end of updatingUserInterface function 