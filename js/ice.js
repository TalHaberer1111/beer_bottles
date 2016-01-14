$(document).ready(function() {
 var bottles = 99;
 for (bottles= 99; bottles >= 1; bottles -=1) {

   $(".song").append(bottles + " bottles of beer on the wall," +  bottles + "bottles of beer Take one down and pass it around," + bottles + "bottles of beer on the wall.")

 }
})
