document.addEventListener('DOMContentLoaded', function() {
    fetch('header/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 250) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
});