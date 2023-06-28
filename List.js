
/*var myPassword = "123";

var userPassword = prompt("Please enter the password:");

if (myPassword === userPassword) {

  alert("Access granted!");
  window.location.href="Sinan.html"
} 
else {
    alert("Access denied!");
    window.location.href = "jsjs.html";
}*/




/*{
window.alert("hello, welcome to my web page. Now type your age.")

var age = prompt("Please enter your age:");
window.alert("Thanks a lot, now you can enter my site");


 document.write("Your age is: " +  age);
}*/


function Additem(){

    var itemValue= document.getElementById('MyInput').value;
   
    var listItem=document.createElement('li');
    listItem.innerHTML=itemValue;
  
    var MyItems= document.getElementById('MyItems')
    MyItems.appendChild(listItem)
  
  
  }