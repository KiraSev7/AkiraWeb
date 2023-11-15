function SHow1() {
    var LI = document.getElementById('li1');
    LI.addEventListener('click', function() {
        var C1 = document.getElementById('c1');
        var computedStyle = window.getComputedStyle(C1);

        if (computedStyle.getPropertyValue('height') !== '200px') {
            var Content = document.getElementById('content');
            Content.style.display = 'none';
            C1.style.height = '200px';
        }
    });
}

function SHow2() {
    var LI = document.getElementById('li2');
    LI.addEventListener('click', function() {
        var C1 = document.getElementById('c2');
        var computedStyle = window.getComputedStyle(C1);

        if (computedStyle.getPropertyValue('height') !== '200px') {
            var Content = document.getElementById('content');
            Content.style.display = 'none';
            C1.style.height = '200px';
        }
    });
}

function SHow3() {
    var LI = document.getElementById('li3');
    LI.addEventListener('click', function() {
        var C1 = document.getElementById('c3');
        var computedStyle = window.getComputedStyle(C1);

        if (computedStyle.getPropertyValue('height') !== '200px') {
            var Content = document.getElementById('content');
            Content.style.display = 'none';
            C1.style.height = '200px';
        }
    });
}

function SHow4() {
    var LI = document.getElementById('li4');
    LI.addEventListener('click', function() {
        var C1 = document.getElementById('c4');
        var computedStyle = window.getComputedStyle(C1);

        if (computedStyle.getPropertyValue('height') !== '200px') {
            var Content = document.getElementById('content');
            Content.style.display = 'none';
            C1.style.height = '200px';
        }
    });
}


SHow1();
SHow2();
SHow3();
SHow4();

// Deteksi perangkat
var isAndroid = /Android/i.test(navigator.userAgent);

// Jika perangkat bukan Android, tampilkan pesan alert
if (!isAndroid) {
    var contentDiv = document.getElementById('cvs');
    contentDiv.style.display = 'none';
    alert('Konten ini hanya tersedia di perangkat Android.');
}