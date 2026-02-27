document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: "Tiramisu Classique",
            image: "images/tiramisu_classique.png",
            description: "L'original : Café intense et cacao fondant."
        },
        {
            name: "Tiramisu Fraise",
            image: "images/tiramisu_fraise.png",
            description: "Fraîcheur fruitée avec de vrais morceaux de fraise."
        },
        {
            name: "Tiramisu Pistache",
            image: "images/tiramisu_pistache.png",
            description: "Crème onctueuse à la pistache véritable."
        },
        {
            name: "Tiramisu Bueno",
            image: "images/tiramisu_bueno.png",
            description: "Le goût irrésistible de la noisette et du chocolat."
        },
        {
            name: "Tiramisu Citron",
            image: "images/tiramisu_citron.png",
            description: "Léger, aérien et délicieusement acidulé."
        },
        {
            name: "Tiramisu Orange",
            image: "images/tiramisu_orange.png",
            description: "Une harmonie douce et parfumée à l'orange."
        }
    ];

    const container = document.querySelector('.products-container');
    const pricePerUnit = "150 DA";

    // Loop through the 6 products and create the HTML for each
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${pricePerUnit}</div>
            <button class="order-btn" onclick="window.location.href='about.html'">Commander</button>
        `;
        
        container.appendChild(card);
    });
});