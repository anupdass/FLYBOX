const menu = document.getElementById('menu')
const navitem = document.getElementById('navitem')


menu.addEventListener('click', () => {
    navitem.classList.toggle('active')
})