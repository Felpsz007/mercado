const images = document.querySelectorAll('.carousel-image');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function changeImage() {
    // Remove a classe 'active' da imagem atual
    images[currentIndex].classList.remove('active');

    // Atualiza o índice da imagem atual
    currentIndex = (currentIndex + 1) % images.length;

    // Adiciona a classe 'active' na nova imagem
    images[currentIndex].classList.add('active');
}

// Função para a navegação para a próxima imagem
nextButton.addEventListener('click', changeImage);

// Função para a navegação para a imagem anterior
prevButton.addEventListener('click', () => {
    // Remove a classe 'active' da imagem atual
    images[currentIndex].classList.remove('active');

    // Atualiza o índice para a imagem anterior
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    // Adiciona a classe 'active' na nova imagem
    images[currentIndex].classList.add('active');
});
