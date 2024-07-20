document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.login');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const loginForm = document.getElementById('loginForm');

    loginLink.addEventListener('click', function () {
        loginPopup.style.display = 'block';
        
    });

    closePopup.addEventListener('click', function () {
        loginPopup.style.display = 'none';

    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        loginPopup.style.display = 'none';
        
    });
});

// document.getElementById('hamburger').addEventListener('click', function() {
//     document.getElementById('menu').classList.toggle('active');
// });

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

