/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age  = 35;
let kids = age <= 10;
let study = true;
let Students = age >= 18 && age <=26 && study == true?true:false;
let seniorCitizens = age >= 60;

if(kids){
    console.log("you get free Ticket");


}
else if(seniorCitizens){
    console.log("you get 15% Discount");

} else if(Students){
    console.log("you get 50% Discount");

}
else{
    console.log("your ticket price 850Tk");

}
