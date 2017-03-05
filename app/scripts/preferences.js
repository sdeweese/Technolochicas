var adult = false;
var art = false;
var family = false;
var food = false;
var music = false;
var parks = false;
var science = false;
var shopping = false;
var sports = false;

function check() {
  adult = false;
  art = false;
  family = false;
  food = false;
  music = false;
  parks = false;
  science = false;
  shopping = false;
  sports = false;
  if (document.getElementById("adult").checked == true) {
    document.getElementById("info").innerHTML = "hello";
    adult = true;
  }  
  if (document.getElementById("art").checked == true) {
    document.getElementById("info1").innerHTML = "hello1";
    art = true;
  }  
  if (document.getElementById("family").checked == true) {
    document.getElementById("info2").innerHTML = "hello2";
    family = true;
  }  
  if (document.getElementById("food").checked == true) {
    document.getElementById("info3").innerHTML = "hello3";
    food = true;
  }  
  if (document.getElementById("music").checked == true) {
    document.getElementById("info4").innerHTML = "hello4";
    music = true;
  }  
  if (document.getElementById("parks").checked == true) {
    document.getElementById("info5").innerHTML = "hello5";
    parks = true;
  }  
  if (document.getElementById("science").checked == true) {
    document.getElementById("info6").innerHTML = "hello6";
    science = true;
  }  
  if (document.getElementById("shopping").checked == true) {
    document.getElementById("info7").innerHTML = "hello7";
    shopping = true;
  }  
  if (document.getElementById("sports").checked == true) {
    document.getElementById("info8").innerHTML = "hello8";
    sports = true;
  }  
}
