// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const value = document.querySelector(".links");
const btn = document.querySelector(".nav-toggle");

btn.addEventListener("click",function(){
     
    value.classList.toggle("show-links")

});