//menu
let menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//blackField
function blackVerticalField(){
    document.getElementById('black-vertical').style.zIndex = '1';
}
function blackHorizontalField(){
    document.getElementById('black-horizontal').style.zIndex = '1';
}
function normalVerticalField(){
    document.getElementById('black-vertical').style.zIndex = '-1';
}
function normalHorizontalField(){
    document.getElementById('black-horizontal').style.zIndex = '-1';
}

//slider
let sliderSlide = document.querySelector('.slider');
let sliderDiv = document.querySelectorAll('.slider div');
let leftSwitcher = document.querySelector('.left-switcher');
let rightSwitcher = document.querySelector('.right-switcher');

let counter = 1;
let size = sliderDiv[0].clientWidth;
sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

leftSwitcher.addEventListener('click', ()=>{
    sliderSlide.style.transition = "transform 0.2s ease-in-out";
    counter--;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
rightSwitcher.addEventListener('click', ()=>{
    sliderSlide.style.transition = "transform 0.2s ease-in-out";
    counter++;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderSlide.addEventListener('transitionend', ()=>{
    if (sliderDiv[counter].id === "lastClone") {
        sliderSlide.style.transition = "none";
        counter = sliderDiv.length -2;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (sliderDiv[counter].id === "firstClone") {
        sliderSlide.style.transition = "none";
        counter = sliderDiv.length -counter;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

//portfolioButton
let portfolioButton = document.getElementById('portfolioButton');
portfolioButton.addEventListener('click', (event) => {
    portfolioButton.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//random
function randomImg(){
let div = document.querySelector('#pf-wrapper');
    for (var i = div.children.length; i >= 0; i--) {
        div.appendChild(div.children[Math.random() * i | 0]);
    }
}

//borderImg
let borderImg = document.getElementById('pf-wrapper');
borderImg.addEventListener('click', (event) => {
    borderImg.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//form
let formButton = document.getElementById('form-button');
let closeButton = document.getElementById('close-button');

formButton.addEventListener('click', (event) => {
    let subject = document.getElementById('subject').value.toString();
    let description = document.getElementById('description').value.toString();
    if(subject){
        document.getElementById('message-subject').innerText = 'Subject: ' + subject;
    }else{
        document.getElementById('message-subject').innerText = 'Without subject'
    }
    if(description){
        document.getElementById('message-description').innerText = 'Description: ' + subject;
    }else{
        document.getElementById('message-description').innerText = 'Without description'
    }
    document.getElementById('message-block').classList.remove('hidden');
});

closeButton.addEventListener('click', (event) => {
    document.getElementById('message-subject').innerText = '';
    document.getElementById('message-description').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});

//stop sending 
document.querySelector('form').addEventListener("click", function(event){
    event.preventDefault()
  });

//formReset
function formReset(){
    document.getElementById('myform').reset();
}