const key = document.querySelector('.key')

key.addEventListener('click', () => {
    key.setAttribute('state', 'keypress')
})