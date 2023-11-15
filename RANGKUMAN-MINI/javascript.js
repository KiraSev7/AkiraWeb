// Deteksi perangkat
var isAndroid = /Android/i.test(navigator.userAgent);

// Jika perangkat bukan Android, tampilkan pesan alert
if (!isAndroid) {
    var contentDiv = document.getElementById('cvs');
    contentDiv.style.display = 'none';
    alert('Konten ini hanya tersedia di perangkat Android.');
}