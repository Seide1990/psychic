var Wins=document.querySelector("#Wins");
var Losses=document.querySelector("#Losses") 
var Guesses_Left=document.querySelector("#Guesses_Left")
var Guesses_so_far=document.querySelector("#Guesses_so_far")

array='abcdefghijklmnopqrstuvwxyz';
let y=array.length;
let select=game(y);
let count_wins=0;
let count=9;
let count_losses=0;
var losses_array=[];
console.log(select);
count=9;
Guesses_Left.innerHTML="Guesses_Left:  "+count;
window.addEventListener("keyup",function(e){
    let klv=e.key;
     klv=klv.toLowerCase();
     if(select==klv){
        count_wins++;
        Wins.innerHTML="Wins:  "+count_wins;
        losses_array=[];
        Guesses_so_far.innerHTML="Guesses_so_far:  "+losses_array;
        count=9;
        Guesses_Left.innerHTML="Guesses_Left:  "+count;
  
        let  select=game(y);
        console.log(select);
     }
     else if(count==0){
        count_losses++;
        Losses.innerHTML="Losses: "+count_losses;
        losses_array=[];
        Guesses_so_far.innerHTML="Guesses_so_far:  "+losses_array;
  
       let  select=game(y);
       console.log(select);
       count=9;
       Guesses_Left.innerHTML="Guesses_Left:  "+count;

     }
     else {
        count--;
        Guesses_Left.innerHTML="Guesses_Left "+count;
        losses_array.push(klv)
        Guesses_so_far.innerHTML="Guesses_so_far:  "+losses_array;

     }

   }   )





function game(y){
    var komp_secim=(Math.floor(Math.random()*y))
        var select=array[komp_secim];
    return  select
}
