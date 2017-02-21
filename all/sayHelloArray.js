var sayHello = function () {
 alert('Hello!');
};

var sayGoodbye = function () {
 alert('Goodbye!');
};

var sayWhatever = function (phrase) {
 alert(phrase);
};

var sentence = 'Im not a function but I still want to alert!';

var sayings = [sayHello, sayGoodbye, sayWhatever, sentence];

var i = 0;

for (i = 0; i < sayings.length; i++) {
   if (typeof sayings[i] === "function") {
       sayings[i]();
   } else {
      alert(sayings[i]);
   }
 };