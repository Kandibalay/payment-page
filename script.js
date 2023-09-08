document.querySelector('#number1').oninput = () =>{
    document.querySelector('#box1').innerText = document.querySelector('#number1').value;
}
document.querySelector('#number2').oninput = () =>{
    document.querySelector('#box2').innerText = document.querySelector('#number2').value;
}
document.querySelector('#number3').oninput = () =>{
    document.querySelector('#box3').innerText = document.querySelector('#number3').value;
}
document.querySelector('#number4').oninput = () =>{
    document.querySelector('#box4').innerText = document.querySelector('#number4').value;
}
document.querySelector('.card-holder').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder').value;
}
document.querySelector('#month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('#month-input').value;
}
document.querySelector('#year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('#year-input').value;
}
document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
    
}

const submit = document.querySelector('.submit-btn')


submit.addEventListener('click',
function() {
    document.querySelector('#successful').style.display = 'block';
    document.querySelector('body').style.opacity = 'rgba(0, 0, 0, 0.3)'
    document.querySelector('#successful').style.opacity = '1';
    
})

const back = document.getElementById('complete')

back.addEventListener('click', 
function(){
    document.querySelector('#successful').style.display = 'none'
    
})




