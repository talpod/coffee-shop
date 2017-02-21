var bornYear = prompt ("YOB?");
var currentTime = new Date();
var year = currentTime.getFullYear();
var age1 = (year - bornYear);
var age2 = (age1 - 1);
var calcAge = function () {
  console.log("You are either " + age1 + " or " + age2 + " years old");
}
calcAge ();