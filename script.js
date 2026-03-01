document.addEventListener('DOMContentLoaded', function() {
    // Your WhatsApp number (Algeria +213, no leading 0)
    const whatsappNumber = "213770542266"; 
    const pricePerUnit = "150 DA";

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
            description: "Le plaisir gourmand du chocolat et de la noisette."
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

    // Create cards one by one
    products.forEach(product => {
        // 1. Create the Card Element
        const card = document.createElement('div');
        card.classList.add('product-card');

        // 2. Add the inner HTML (Removed the onclick from here)
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${pricePerUnit}</div>
            <button class="order-btn">Commander via WhatsApp</button>
        `;

        // 3. Add the Event Listener to the button specifically
        const button = card.querySelector('.order-btn');
        button.addEventListener('click', function() {
            const message = encodeURIComponent(`Bonjour Tiramisu SLM ! Je souhaiterais commander le ${product.name}. Pouvez-vous me confirmer la disponibilité ?`);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappLink, '_blank');
        });

        // 4. Put the card in the container
        container.appendChild(card);
    });
});