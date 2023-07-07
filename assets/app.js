const img = document.getElementById('img');
const btn = document.getElementById('btn');
const container = document.querySelector('.container');

var currentState = true;

btn.addEventListener('click', () => {
    if(currentState){
        currentState = false;
        img.src = "assets/images/on.png";
        container.style.backgroundColor = 'black';
        btn.innerHTML = "OFF";  
        btn.style.backgroundColor = "red";
        img.classList.add('bulb-on');
    }
    else{
        currentState = true;
        img.src = "assets/images/off.png";
        container.style.backgroundColor = 'white';
        btn.innerHTML = "ON";
        btn.style.backgroundColor = "green";
        img.classList.remove('bulb-on');
    }
})


img.addEventListener('click', () => {
    if(currentState){
        currentState = false;
        img.src = "assets/images/on.png";
        container.style.backgroundColor = 'black';
        btn.innerHTML = "OFF";  
        btn.style.backgroundColor = "red";
        img.classList.add('bulb-on');
    }
    else{
        currentState = true;
        img.src = "assets/images/off.png";
        container.style.backgroundColor = 'white';
        btn.innerHTML = "ON";
        btn.style.backgroundColor = "green";
        img.classList.remove('bulb-on');
    }
})