const menuBar = document.getElementById('menu-bar');
const hiddenPosts = document.getElementsByClassName('hidden');
const btnExpandPosts = document.getElementById('btn-expand-posts');
let displayMenu = false;
let displayPosts = false;

document.body.addEventListener('click', handleClick);

function handleClick(e) {
    if (e.target.id === 'menu-btn' | e.target.id === 'close-menu-btn') {
        !displayMenu ? menuBar.style.display = 'block' : menuBar.style.display = 'none';
        displayMenu = !displayMenu;
    }

    if (e.target.id === 'btn-expand-posts') {
        for (let post of hiddenPosts) {
            !displayPosts ? post.style.display = 'block' : post.style.display = 'none'
        };

        displayPosts = !displayPosts;

        (displayPosts) ? (btnExpandPosts.textContent = 'Show Less') : (btnExpandPosts.textContent = 'View More');
    }
}
