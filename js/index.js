"use strict"
let serchInput = document.getElementById("serch");
let serchButton = document.getElementById("submit");
let today = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let data = []

console.log(today.getTime());
//add background color in input 
serchInput.addEventListener("focus" , function()
{
 serchInput.style.backgroundColor = "#1E202B";
})

// fetch respones
async function getRespone(location)
{
   var respons =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${location}&days=3`)
   data = await respons.json();
   displayThisDay()
   displayNextDay()
   displayThirdDay()
}
getRespone("cairo ")


// add event in input to serch
serchInput.addEventListener("keyup" , function(e)
{
   let serchInputValue = serchInput.value;
if (serchInputValue != "") {
   getRespone(serchInputValue)
}
else{
getRespone("cairo ")

}



})


//desply this day
function displayThisDay()
{
document.querySelector(".today").innerHTML = days[(today.getDay())]
document.querySelector(".now-date").innerHTML = `${today.getDate()} ${months [(today.getMonth())]} `
document.querySelector(".location").innerHTML = data.location.name
document.querySelector(".degree span").innerHTML = data.current.temp_c
document.querySelector(".icon").src =data.current.condition.icon
document.querySelector(".custom").innerHTML =data.current.condition.text
}

// display Next day

function displayNextDay()
{
   document.querySelector(".day").innerHTML = days[new Date(data.forecast.forecastday[1].date).getDay()];
   document.querySelector(".img-tom").src =data.forecast.forecastday[1].day.condition.icon
   document.querySelector(".tom-degree span").innerHTML = data.forecast.forecastday[1].day.maxtemp_c
   document.querySelector(".tom-degree-cap span").innerHTML = data.forecast.forecastday[1].day.mintemp_c
   document.querySelector(".custom-tom").innerHTML = data.forecast.forecastday[1].day.condition.text
}



//display the day after Next
function displayThirdDay()
{
   document.querySelector(".day2").innerHTML = days[new Date(data.forecast.forecastday[2].date).getDay()];
   document.querySelector(".img-tom-after").src = data.forecast.forecastday[2].day.condition.icon
   document.querySelector(".tom-after-degree span").innerHTML = data.forecast.forecastday[2].day.maxtemp_c
   document.querySelector(".tom-after-degree-cap span").innerHTML = data.forecast.forecastday[2].day.mintemp_c
   document.querySelector(".custom-after-tom").innerHTML = data.forecast.forecastday[2].day.condition.text
}






// add event in input to serch
serchButton.addEventListener("click" , function(e)
{

   let serchInputValue = serchInput.value;
   getRespone(serchInputValue)

})





