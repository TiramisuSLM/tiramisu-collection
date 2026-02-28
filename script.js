document.addEventListener('DOMContentLoaded', function() {
    // Your WhatsApp number in international format (Algeria +213)
    const whatsappNumber = "213770542266"; 

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

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // This creates a custom message for each product
        const message = encodeURIComponent(`Bonjour ! Je souhaiterais commander le ${product.name}. Pouvez-vous me donner plus d'informations ?`);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${pricePerUnit}</div>
            <button class="order-btn" onclick="window.open('${whatsappLink}', '_blank')">
                Commander via WhatsApp
            </button>
        `;
        
        container.appendChild(card);
    });
});