var Stack = function(){
    this.stack = [];
    this.print = function(){
      console.log(this.stack);
    }

    this.push = function(x){
      this.stack.push(x);
    }

    this.isEmpty = function(){
      return this.stack.length == 0;
    }

    this.peek = function(){
      if(!this.isEmpty()){
        return this.stack[this.stack.length - 1]
      }
      return null;
    }

    this.pop = function(){
    if(!this.isEmpty()){
      return this.stack.pop();
    }
  }
}
  var myStack = new Stack();
  var getMin = function () {
    var numbers = ;
    console.log(Math.min(...numbers))

  }
