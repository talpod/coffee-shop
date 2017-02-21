var myColor = ["Red", "Green", "White", "Black"];
for (i=0; i < myColor.length; i++) {
var test = (myColor[i-3]+" + "+myColor[i-2]+" + "+myColor[i-1]+" + "+myColor[i]);
}
console.log(test);