//Dupla: Grazielli Salles e Nicolie Vieira

const cascao = document.querySelector('.cascao');
const agua = document.querySelector('.agua');

const jump = () => {
    cascao.classList.add('jump');

    setTimeout(() => {
        cascao.classList.remove('jump');
    }, 500);
}


const loop =  setInterval(() => {

console.log('loop')

const aguaPosition = agua.offsetLeft;
const cascaoPosition = +window.getComputedStyle(cascao).bottom.replace('px','');


if(aguaPosition <= 120 && aguaPosition > 0 && cascaoPosition < 80){
    
    agua.style.animation = 'none';
    agua.style.left = `${aguaPosition}px`;
    
    cascao.style.animation = 'none';
    cascao.style.bottom = `${cascaoPosition}px`;


    cascao.src ='/images/Turma_da_Mônica-removebg-preview.png';
    cascao.style.width = '140px'
    cascao.style.marginLeft = '50px'

    clearInterval(loop);

}

},10);

 
document.addEventListener('keydown',jump);