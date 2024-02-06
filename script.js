
function tellFortune() {
  var fortunes = [
      "You will win a <em>million</em> dollars! Yay!",
      "You will step on a piece of gum.",
      "You will be attacked by a fluffy bunny.",
      "You will be rich.",
      "Good fortune will be yours.",
      "You will have many friends.",
      "Do a good deed today.",
      "Someone will call you today.",
      "You will go to a party soon.",
      "Be careful on Tuesday.",
      "You will have very good luck today."
    ];
      
  var randomNumber = Math.floor(Math.random() * fortunes.length);
  document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function changeColor(colorIndex) {
  var colors = ["red", "blue", "green","yellow"];
  document.getElementById("quote").className="content";
  document.getElementById("quote").classList.add(colors[colorIndex]);
}

function convert(){
  var numeric=document.getElementById("fvalue").value;
  var unit=document.getElementById("convto").value;
  if(numeric !==''){
    if(isNaN(numeric)){
      document.getElementById("result").innerHTML='Please enter only numbers';//checking if the input is not a number.
    }
    else{ 
      if(unit=="Pound to Kg"){
        var ans=numeric*0.4536;
        document.getElementById("result").innerHTML= ans + " Kilograms.";
      }
    else{
        var ans=numeric*2.2046;
        document.getElementById("result").innerHTML= ans +" Pounds.";
      }
    }
  }
  else{
    document.getElementById("result").innerHTML='';
  }
}

function calculator(){

  var a = document.getElementById("nvalue").value;
  var b=a.split(",").map(Number);
  var len=b.length;
  var reverse=b.reverse(); 
  document.getElementById("reverse").innerHTML=reverse;
   b.sort(function(a,b){return a-b});
  document.getElementById("max").innerHTML=b[len-1];//last element of the array is max after sorting.
  document.getElementById("min").innerHTML=b[0];//first elemnt is the min after sorting.
  var sum=0;
  for (var i = b.length - 1; i >= 0; i--) {
    sum+=b[i];
  };
  document.getElementById("sum").innerHTML=sum;
  document.getElementById("avg").innerHTML=sum/len;
}

function clearText(){   
  document.getElementById("string").value= "";
}

function strip(){
  var x= document.getElementById("string").value;
  x=x.split("\n");
  var y="";
  for (var i = 0; i <x.length; i++) {
    x[i]=x[i].replace(/\s+/g,'').trim(); //removig extra space and empty lines
    if (x[i] !== '') {
      y=y+x[i]+'\n';  //adding all the elemnts of the array to a string 
    };
    
  };
  document.getElementById("string").value=y.substring(0,y.length-1);//avoiding the extra new line in the string. 
}

function addNumber(){
  var x= document.getElementById("string").value;
  x=x.split("\n");
  var y="";
  for (var i = 0; i <x.length; i++) {
      x[i]=i+1+'. '+x[i];
      y=y+x[i]+'\n';          
  };
  document.getElementById("string").value=y.substring(0,y.length-1);
}

function sortText(){
  var x= document.getElementById("string").value;
  x=x.split("\n");
  x.sort();
 var y="";
  for (var i = 0; i <x.length; i++) {      
      y=y+x[i]+'\n';          
  };
  document.getElementById("string").value=y.substring(0,y.length-1);
}

function reverseText(){
  var x= document.getElementById("string").value;
  x=x.split("\n");
 var y="";
  for (var i = 0; i <x.length; i++) {   
      x[i]=x[i].split("").reverse().join("");
      y=y+x[i]+'\n';          
  };
  document.getElementById("string").value=y.substring(0,y.length-1);
}

function shuffle(){
  var x= document.getElementById("string").value;
   x=x.split("\n");
  var y="";
   for (var i = x.length-1; i >=0; i--) {
     var j=Math.round(Math.random()*(x.length-1));//random number to swap elements in array
       var tmp=x[i];
       x[i]=x[j];
       x[j]=tmp;                        
   };
   for (var i = 0; i <x.length; i++) {      
       y=y+x[i]+'\n';          
   };
   document.getElementById("string").value=y.substring(0,y.length-1);  
 }

 function capitalize() {
  var upper = document.getElementById("string").value.toUpperCase();
  var lower = document.getElementById("string").value.toLowerCase();
  if (document.getElementById("caps").value == "OFF") {
      document.getElementById("caps").value = "ON";
      document.getElementById("string").value = upper;
  }

  else if (document.getElementById("caps").value == "ON") {
      document.getElementById("caps").value = "OFF";
      document.getElementById("string").value = lower;
  }

}
