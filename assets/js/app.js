// sanity check
console.log("App.js is connected!");

$(document).ready(function(){

 setInterval(moveStarship, 20);
 var keys = {}

 $(document).keydown(function(e) {
     keys[e.keyCode] = true;
 });

 $(document).keyup(function(e) {
     delete keys[e.keyCode];
 });



 function moveStarship() {

     for (var direction in keys) {
         if (!keys.hasOwnProperty(direction)) continue;

         if (direction == 37) {
             $("#enterprise").animate({left: "-=5"}, 0);
         }
         if (direction == 38) {
             $("#enterprise").animate({top: "-=5"}, 0);
         }
         if (direction == 39) {
             $("#enterprise").animate({left: "+=5"}, 0);
         }
         if (direction == 40) {
             $("#enterprise").animate({top: "+=5"}, 0);
         }
     }
     for (var direction in keys) {
         if (!keys.hasOwnProperty(direction)) continue;
         if (direction == 65) {
             $("#warbird").animate({left: "-=5"}, 0);
         }
         if (direction == 87) {
             $("#warbird").animate({top: "-=5"}, 0);
         }
         if (direction == 68) {
             $("#warbird").animate({left: "+=5"}, 0);
         }
         if (direction == 83) {
             $("#warbird").animate({top: "+=5"}, 0);
         }
     }
 }
})
