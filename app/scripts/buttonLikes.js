 var countClicks = 0;
    var totalClicks = 0;
    var rating = 0;
    var stars = 0;
    
    function total() {
      totalClicks++; 
    }

    function going() {
      alert("Congrats You're Going! Have Fun!");
      countClicks++;
    }
    
    function counts() { 
      rating = countClicks/totalClicks;  
      if(rating >= .6) {
        stars = 5;
        document.getElementById("pic").innerHTML = ":) :) :) :) :)";
      } else if (rating >= .5 && rating < .6) {
        stars = 4;
        document.getElementById("pic").innerHTML = ":) :) :) :)";

      } else if (rating >= .4 && rating < .5) {
        stars = 3;
        document.getElementById("pic").innerHTML = ":) :) :)";
        
      } else if (rating >= .2 && rating < .4) {
        stars = 2; 
        document.getElementById("pic").innerHTML = ":) :)";
  
      } else {
        stars = 1; 
        document.getElementById("pic").innerHTML = ":)";
      }
      
      //document.getElementById("info").innerHTML = countClicks + " People are Going! Gets " + stars + " buzz";
    alert("countClicks + 'People are Going! Gets'  + stars +  'buzz");
      
    }
