var myImage = document.querySelector('img');

myImage.onclick = function(){
   var mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/firefox.png'){
        myImage.setAttribute('src', 'img/firefox2.png')
    } else {
        myImage.setAttribute('src','img/firefox.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Enter you name','');
    localStorage.setItem('Name', myName);
    myHeading.innerHTML = 'Mozilla welcomes ' + myName;
}

myButton.addEventListener("click", setUserName);


// myButton.onclick = function(){
//     setUserName();
// }

//https://www.youtube.com/watch?v=zm9bqSSiIdo coding math


// var para = document.querySelectorAll('p');
// addEventListener("click", updateName);

// function updateName(){
//     var name = prompt('Enter your name');
//     for ( var i; i < para.length; i++ ){
//         para[i].textContent = 'your paragraph has been changed to entered name ' + name;
//     }
//
//
// }

function createParagraph(){
    var newParagraph = document.createElement('p');
    newParagraph.textContent =  'You clicked the button';
    document.body.appendChild(newParagraph);
}

var buttons = document.querySelectorAll('button');
for ( var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", createParagraph);
}


