loadPage = (page) => {
    let pages = document.getElementsByClassName('pages')
    for (let i = 0; i < pages.length; i++) {
        if (i === page) {
            pages[i].style.display = 'block'
        } else {
            pages[i].style.display = 'none'
        }
    }
    document.getElementById(page).style.display = 'flex'
    toggle()
}

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


// JS CHECK
let js = document.getElementsByClassName("--js");
for (let i = 0; i < js.length; i++) {
    js[i].style.display = 'flex'
}