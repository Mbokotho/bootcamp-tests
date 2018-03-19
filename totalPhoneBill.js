var totalPhoneBill = function(Comms){
var comms = Comms.split(', ')
var total = 0;

for(var i=0;i<comms.length;i++){
console.log(comms[i]);
 switch(comms[i]){
   case "call":
  total += 2.75;
   break;
   case "sms":
   total += 0.65;
     break;


 }
}return 'R'+total.toFixed(2);
}
