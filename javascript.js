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


// Slide Images
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Otomatis ganti slide setiap lima detik
setInterval(nextSlide, 5000);



//Calender
function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formattedDateTime = now.toLocaleDateString('id-ID', options);
    currentDateTimeElement.textContent = formattedDateTime;
}

document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.getElementById("calendarBody");
    const currentMonthElement = document.getElementById("currentMonth");
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        currentMonthElement.textContent = new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long' }).format(currentDate);

        let day = 1;
        let html = '';

        for (let i = 0; i < 6; i++) {
            html += '<tr>';
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDay.getDay()) || day > daysInMonth) {
                    html += '<td></td>';
                } else {
                    const isCurrentDay = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
                    html += `<td class="${isCurrentDay ? 'current-day' : ''}">${day}</td>`;
                    day++;
                }
            }
            html += '</tr>';
        }

        calendarBody.innerHTML = html;
    }

    renderCalendar();
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update time every second

    prevMonthButton.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
});

function checkPassword() {
    var password = prompt("Masukkan kata sandi:");

    // Ganti "passwordanda" dengan kata sandi yang Anda inginkan
    if (password === "Arashi") {
        window.location.href = "Portofolio/portofolio.html";
    } else {
        alert("Kata sandi salah. Akses ditolak.");
    }
}

// Panggil fungsi checkPassword() saat link "My Portfolio" diklik
document.querySelector('a[href="Portofolio/portofolio.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    checkPassword();
});

document.oncontextmenu = function () { return false; } // Melarang klik kanan
//document.onselectstart = function() { return false; } // Melarang pemilihan teks
