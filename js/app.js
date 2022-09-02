let btn = document.querySelectorAll('button');
let val = document.getElementById('input');
btn[0].style.backgroundColor = 'rgb(164, 126, 235)';
btn[1].style.backgroundColor = 'rgb(230, 109, 109)';

btn[0].addEventListener('click',function(){
    val.textContent++
   
})
btn[1].addEventListener('click',function(){
    val.textContent = 0
})