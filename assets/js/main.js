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
    document.getElementById('absol__menu').open = false
}

// JS CHECK
let js = document.getElementsByClassName("--js");
for (let i = 0; i < js.length; i++) {
    js[i].style.display = 'flex'
}