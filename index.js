document.body.addEventListener('click', handleClick);

function handleClick(e) {
    if (e.target.id) {
        document.getElementById('menu-bar').classList.toggle('hidden');
    }
}
