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

toggle = () => {
    let state = document.getElementById('absol__menus').style
    if (state.visibility === 'visible') {
      document.getElementById('absol__menu--toggles').src = 'assets/icon/menu.svg'
      state.visibility = 'hidden'
    } else {
      document.getElementById('absol__menu--toggles').src = 'assets/icon/closemenu.svg'
      state.visibility = 'visible'
    }
}

// JS CHECK
let js = document.getElementsByClassName("--js");
for (let i = 0; i < js.length; i++) {
    js[i].style.display = 'flex'
}