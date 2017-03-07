var Robot = function() {
    this.drive = function() {
        console.log('moving!');
    }
}

var MurderRobot = function() {
    Robot.call(this);

    this.kill = function() {
        console.log('killing!')
    }
}

var CleaningRobot = function() {
    Robot.call(this);

    this.clean = function() {
        console.log('cleaning!');
    }
}

var Animal = function() {
    this.poop = function() {
        console.log('pooping everywhere!')
    }
}

var Dog = function() {
    Animal.call(this);

    this.bark = function() {
        console.log('woof!');
    }
}

var Cat = function() {
    Animal.call(this);

    this.meow = function() {
        console.log('meow');
    }
}

var MurderRobotDog = function () {
  Robot.call(this);
  MurderRobot.call(this);

  this.bark = function () {
    console.log('woof');
  }
}

var myBot = new MurderRobot()
myBot.drive()
var myDog = new Dog()
myDog.poop()
