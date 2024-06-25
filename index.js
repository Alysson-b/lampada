
const container = document.querySelector('.container')

container.addEventListener('mouseover',() => {

    let lampadaOff = document.querySelector('.off')
    let lampadaOn = document.querySelector('.on')

    lampadaOn.style.zIndex = '2';

    setTimeout(() => {
        lampadaOn.style.zIndex = '0';
    }, 1000)

   
})
