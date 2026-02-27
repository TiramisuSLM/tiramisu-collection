document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: "Le tiramisu classique",
            description: "La saveur intemporelle, notre recette signature",
            price: "150 DA",
            characterClass: "classic" // For character styling, but using grid image for now
        },
        {
            name: "Tiramisu Pistache",
            description: "Au parfum de pistache sicilienne, pour un goût unique",
            price: "150 DA",
            characterClass: "pistachio"
        },
        {
            name: "Tiramisu Citron",
            description: "Zeste de fraîcheur et notes acidulées, léger et délicieux",
            price: "150 DA",
            characterClass: "lemon"
        },
        {
            name: "Tiramisu Orange",
            description: "Douceur de l'orange, une association gourmande",
            price: "150 DA",
            characterClass: "orange"
        }
    ];

    const productsContainer = document.querySelector('.products-container');

    // For simplicity, we are displaying the complete grid layout image.
    // However, if you add individual product images, this script is ready to generate the cards.
    // Let's add the image of the complete grid to this container.

    const gridImage = document.createElement('img');
    gridImage.src = 'images/products_grid.png';
    gridImage.alt = 'Notre Collection de Tiramisu';
    gridImage.classList.add('products-grid-image');
    gridImage.style.maxWidth = '100%';
    gridImage.style.height = 'auto';

    productsContainer.appendChild(gridImage);
});