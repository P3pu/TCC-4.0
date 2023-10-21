const btnMenu = document.querySelector(".hamburguer");
const menu = document.querySelector('.menu')
btnMenu.addEventListener('click', () => {

    if (menu.style.display === 'block') {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    btnMenu.style.display = 'block'

    
})

