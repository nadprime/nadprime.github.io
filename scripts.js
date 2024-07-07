function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function () {
    const goToTopButton = document.querySelector('.go-to-top');
    if (window.pageYOffset > 300) {
        goToTopButton.classList.add('visible');
    } else {
        goToTopButton.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}