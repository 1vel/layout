toggle = () => {
  let state = document.getElementById('absol__menu').style
  if (state.visibility === 'visible') {
    document.getElementById('absol__menu--toggle').src = 'assets/icon/menu.svg'
    state.visibility = 'hidden'
  } else {
    document.getElementById('absol__menu--toggle').src = 'assets/icon/closemenu.svg'
    state.visibility = 'visible'
  }
}