toggle = () => {
    let state = document.getElementById('menu')
    if (state.style.display === 'flex') {
      document.getElementById('toggle').src = 'assets/icon/menu.svg'
      state.style.display = 'none'
    } else {
      document.getElementById('toggle').src = 'assets/icon/closemenu.svg'
      state.style.display = 'flex'
    }
    console.log('flex');
}