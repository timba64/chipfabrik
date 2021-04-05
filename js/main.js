function makeMenu() {
    const mb = document.querySelector('.mobtn'),
        hd = document.querySelector('.top-menu');

    mb.addEventListener('click', function() {
        this.classList.toggle('open');
        hd.classList.toggle('open');
    });
};

document.addEventListener('DOMContentLoaded', function() {
    makeMenu();
    // add here your own functions
}, false);
