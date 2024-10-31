let isNoite = true; // Estado inicial

function toogleDayMode() {
    const sky = document.querySelector('.sky');
    const windows = document.querySelectorAll('.window');
    const moon = document.querySelector('.moon');
    const luz1 = document.querySelector('.luz1');
    const luz2 = document.querySelector('.luz2');
    
    if (isNoite) {
        // Muda para noite
        sky.classList.remove('skyDay');
        windows.forEach(window => window.classList.remove('windowDay'));
        moon.classList.remove('sun');
    } else {
        // Muda para dia
        sky.classList.add('skyDay');
        moon.classList.add('sun');
        windows.forEach(window => window.classList.add('windowDay'));
    }

    isNoite = !isNoite;
}
