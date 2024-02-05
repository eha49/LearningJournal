const menuBar = document.getElementById('menu-bar');
const hiddenPosts = document.getElementById('hidden-posts');
const btnExpandPosts = document.getElementById('btn-expand-posts');

document.body.addEventListener('click', handleClick);

function handleClick(e) {
    if (e.target.id === 'menu-btn' | e.target.id === 'close-menu-btn') {
        menuBar.classList.toggle('hidden');
    }

    if (e.target.id === 'btn-expand-posts') {
        hiddenPosts.classList.toggle('hidden');
    }

    (!hiddenPosts.classList.length) && (btnExpandPosts.textContent = 'Show Less');
    
}
