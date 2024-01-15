// INI UNTUK HAMBURGER NAVBAR
const checkbox = document.getElementById('check');
const offCanvas = document.querySelector('.off-canvas');
const menuHb = document.querySelectorAll('.menu li a');

// Fungsi untuk menutup menu
const closeMenu = () => {
    checkbox.checked = false;
};

checkbox.addEventListener('change', function () {
    // Tambahkan event listener untuk menutup menu saat diklik di luar menu
    offCanvas.addEventListener('click', closeMenu);
});

// Tambahkan event listener untuk setiap item menu
menuHb.forEach(function (item) {
    item.addEventListener('click', closeMenu);
});

const textWrite = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        textWrite.textContent = "Engineer";
    }, 0);
    setTimeout(() => {
        textWrite.textContent = "Designer";
    }, 2000);
    setTimeout(() => {
        textWrite.textContent = "Administrator";
    }, 4000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);