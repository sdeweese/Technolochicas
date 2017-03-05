 var event = {
      name: "Softball game",
      type: "sports",
      address: "701 Accolti Way, Santa Clara, CA 95053",
      time: "3:30",
      cost: "$5",
      ageReq: "none",
      likes: 100,
    };
document.getElementById("demo").innerHTML = "<strong> Title: </strong>" + event.name + 
"<br> <strong>Type: </strong>" + event.type +
 "<br> <strong>Address: </strong>" + event.address + 
 "<strong><br> Time: </strong>" + event.time + "<br> <strong>Cost: </strong>"
  + event.cost + "<br> <strong>Likes: </strong>" + event.likes; 