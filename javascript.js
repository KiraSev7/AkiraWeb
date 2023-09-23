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

// Mengatur status mode malam berdasarkan preferensi yang tersimpan
if (nightModeEnabled === 'true') {
  enableNightMode();
}

// Mengaktifkan atau menonaktifkan mode malam saat tombol diklik
nightModeButton.addEventListener('click', toggleNightMode);
