// date using vanilla JS
// var today = new Date();
// var date = today.toLocaleString("default", { weekday: "long" }) + ", " + today.toLocaleString("default", {month: "long"}) + " " +today.getDate() + " " + today.getFullYear();
// var dateEl = $("#date").text(date);
// console.log(date)

 
$("#date").text(moment().format('dddd, MMMM Do')); 

