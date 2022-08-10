asd = (elem) => {
    document.getElementById(elem).style.display = 'flex'
    if (elem === 'inicio') {
        document.getElementById('menu').style.display = 'none'
        document.getElementById('carta').style.display = 'none'
        document.getElementById('contacto').style.display = 'none'
    }
    if (elem === 'menu') {
        document.getElementById('inicio').style.display = 'none'
        document.getElementById('contacto').style.display = 'none'
        document.getElementById('carta').style.display = 'none'
    }
    if (elem === 'carta') {
        document.getElementById('inicio').style.display = 'none'
        document.getElementById('menu').style.display = 'none'
        document.getElementById('contacto').style.display = 'none'
    }
    if (elem === 'contacto') {
        document.getElementById('inicio').style.display = 'none'
        document.getElementById('menu').style.display = 'none'
        document.getElementById('carta').style.display = 'none'
    }
}
phone = false
loadMenu = () => {
    if (phone == false) {
        document.getElementById("menu-icon").src = "assets/icon/closemenu.svg"
        document.getElementById('phone-menu').style.display = "flex"
        document.getElementById('wrapper').style.display = "none"
        phone = true
    } else {
        document.getElementById("menu-icon").src = "assets/icon/menu.svg"
        document.getElementById('wrapper').style.display = "flex"
        document.getElementById('phone-menu').style.display = 'none'
        phone = false
    }
}