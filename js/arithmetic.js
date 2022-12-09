function addition(){
let x;
x=document.getElementById("xvalue").Value;
x=Number(x);console.log(typeofx);
//assigning 3 to variable x
let y;
y=document.getElementById("yvalue").value;
y=Number(y);console.log(typeofy);
//assigning 2 to variable y
let z=x+y;
document.getElementById("add").innerHTML=z;
}