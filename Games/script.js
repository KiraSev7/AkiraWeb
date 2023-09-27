const snake = document.getElementById('snake');
const food = document.getElementById('food');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const scoreDisplay = document.getElementById('score'); // Elemen untuk menampilkan skor

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let snakeLength = 1;
let score = 0; // Variabel untuk menyimpan skor
const snakeBody = [];

function updateFoodPosition() {
    foodX = Math.floor(Math.random() * 15) * 20;
    foodY = Math.floor(Math.random() * 15) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function moveSnake(direction) {
    let newSnakeX = snakeX;
    let newSnakeY = snakeY;

    switch (direction) {
        case 'up':
            newSnakeY -= 20;
            break;
        case 'down':
            newSnakeY += 20;
            break;
        case 'left':
            newSnakeX -= 20;
            break;
        case 'right':
            newSnakeX += 20;
            break;
    }

    // Cek apakah ular memakan makanan
    if (newSnakeX === foodX && newSnakeY === foodY) {
        snakeLength++;
        updateFoodPosition();
        score += 10; // Menambahkan 10 poin ke skor
        scoreDisplay.innerText = 'Skor: ' + score; // Memperbarui tampilan skor
    }

    // Memindahkan tubuh ular
    snakeBody.push({ x: snakeX, y: snakeY });

    // Hapus bagian tubuh yang lebih lama jika panjang ular melebihi panjang yang diizinkan
    if (snakeBody.length > snakeLength) {
        const removedSegment = snakeBody.shift();
        document.getElementById('segment-' + removedSegment.x + '-' + removedSegment.y)?.remove();
    }

    // Perbarui posisi kepala ular
    snakeX = newSnakeX;
    snakeY = newSnakeY;
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';

    // Tampilkan segmen tubuh ular
    const segment = document.createElement('div');
    segment.className = 'segment';
    segment.id = 'segment-' + snakeX + '-' + snakeY;
    segment.style.left = snakeX + 'px';
    segment.style.top = snakeY + 'px';
    document.getElementById('game-container').appendChild(segment);
}

updateFoodPosition();

upButton.addEventListener('click', () => {
    moveSnake('up');
});

downButton.addEventListener('click', () => {
    moveSnake('down');
});

leftButton.addEventListener('click', () => {
    moveSnake('left');
});

rightButton.addEventListener('click', () => {
    moveSnake('right');
});


// Fungsi untuk menggerakkan ular berdasarkan tombol keyboard
function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveSnake('up');
            break;
        case 'ArrowDown':
            moveSnake('down');
            break;
        case 'ArrowLeft':
            moveSnake('left');
            break;
        case 'ArrowRight':
            moveSnake('right');
            break;
    }
}

// Menambahkan event listener keyboard
document.addEventListener('keydown', handleKeyPress);

