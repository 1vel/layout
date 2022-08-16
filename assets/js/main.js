/* LOAD PAGE FROM MENU */
loadPage = (page) => {
    let pages = document.getElementsByClassName('pages')
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none'
    }
    document.getElementById(page).style.display = 'flex'
    /* CHECK FIXED MENU */
    if (document.getElementById('details__menu').open === true) {
        document.getElementById('details__menu').open = false
    }
}

// JS CHECK
let js = document.getElementsByClassName("--js");
for (let i = 0; i < js.length; i++) {
    js[i].style.display = 'flex'
}