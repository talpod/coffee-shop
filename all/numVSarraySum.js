var bob = [1, 2, 3, 4, 5, 6, 7]

var lessThanAvg = function(arr, num) {
 sum = 0;
 for (i = 0; i < arr.length; i++) {
   if (arr[i] < num) {
     sum = sum + (arr[i]);
     console.log(arr[i]);
     console.log("The sum of numbers in the given array smaller than the given number = "+sum);
   }
 }
}

lessThanAvg(bob, 5);