const figlet = require("figlet"); 
figlet.text("Hi!", function(err, data) { 
  if (err) { 
    console.log("ณ๖ดํมห"); 
    console.dir(err); 
    return; 
  } 
  console.log(data); 
}); 
