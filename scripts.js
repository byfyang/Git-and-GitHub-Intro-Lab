// JavaScript to be added
window.onload =function(){

var changeButton = document.querySelector("#button-yellow");
console.log("changeButton is " + changeButton);
changeButton.addEventListener("click",function(){
  var emailAddress = prompt("please enter your email address");
  changeButton.textContent = "Thanks for your email!";
});

}