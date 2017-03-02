var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	   if(mySrc === 'images/img1.png'){
	   	myImage.setAttribute('src', 'images/img2.png');
	   }else{
	   	myImage.setAttribute('src', 'images/img1.png');
	   }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt("Please enter your name:");
	localStorage.setItem('name', myName);
	myHeading.textContent ='Welcome to your website ' + myName;

	if(!localStorage.getItem('name')){
		setUserName();
	}else{
		var storedName = localStorage.getItem('name');
		myHeading.textContent ='Welcome to your website ' + myName;
	}
}
myButton.onclick = function(){
	setUserName();
}