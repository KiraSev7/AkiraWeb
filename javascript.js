// Mengambil tombol dan status mode malam dari local storage
const nightModeButton = document.getElementById('nightModeButton');
const nightModeEnabled = localStorage.getItem('nightModeEnabled');

// Fungsi untuk mengaktifkan mode malam
function enableNightMode() {
  document.body.classList.add('night-mode');
  localStorage.setItem('nightModeEnabled', 'true');
}

// Fungsi untuk menonaktifkan mode malam
function disableNightMode() {
  document.body.classList.remove('night-mode');
  localStorage.setItem('nightModeEnabled', 'false');
}

// Fungsi untuk mengubah mode malam berdasarkan status saat ini
function toggleNightMode() {
  const isNightModeEnabled = document.body.classList.contains('night-mode');
  if (isNightModeEnabled) {
    disableNightMode();
  } else {
    enableNightMode();
  }
}

// Menambahkan event listener ke tombol "Mode Malam"
nightModeButton.addEventListener('click', toggleNightMode);

// Memeriksa status mode malam saat halaman dimuat
if (nightModeEnabled === 'true') {
  enableNightMode();
}

// Fungsi untuk menampilkan dropdown saat tombol "Lessons" diklik
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Tambahkan event listener ke tombol "Lessons"
document.querySelector(".dropbtn").addEventListener("click", toggleDropdown);

// Tambahkan event listener ke elemen dokumen untuk menutup dropdown saat mengklik di luar dropdown
document.addEventListener("click", function(event) {
    var dropdownContent = document.querySelector(".dropdown-content");
    var dropbtn = document.querySelector(".dropbtn");
    
    if (event.target !== dropbtn && event.target !== dropdownContent) {
        dropdownContent.style.display = "none";
    }
});
