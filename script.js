document.addEventListener('DOMContentLoaded', function() {
    const whatsappNumber = "213770542266";
    
    const products = [
        {
            name: "Tiramisu Classique",
            sticker: "images/tiramisu_classique.png",
            hero: "images/tiramisu_classique_hero.png",
            description: "L'original : Café intense, biscuits imbibés et un nuage de cacao."
        },
        {
            name: "Tiramisu Fraise",
            sticker: "images/tiramisu_fraise.png",
            hero: "images/tiramisu_fraise_hero.png",
            description: "Une explosion de fraîcheur avec des fraises juteuses et une crème légère."
        },
        {
            name: "Tiramisu Pistache",
            sticker: "images/tiramisu_pistache.png",
            hero: "images/tiramisu_pistache_hero.png",
            description: "Le luxe de la pistache craquante mariée à l'onctuosité italienne."
        },
        {
            name: "Tiramisu Bueno",
            sticker: "images/tiramisu_bueno.png",
            hero: "images/tiramisu_bueno_hero.png",
            description: "Gourmandise absolue au goût noisette-chocolat façon Bueno."
        },
        {
            name: "Tiramisu Citron",
            sticker: "images/tiramisu_citron.png",
            hero: "images/tiramisu_citron_hero.png",
            description: "Un zeste de soleil ! Léger, frais et parfaitement acidulé."
        },
        {
            name: "Tiramisu Orange",
            sticker: "images/tiramisu_orange.png",
            hero: "images/tiramisu_orange_hero.png",
            description: "Une douceur d'agrumes parfumée pour un voyage fruité unique."
        }
    ];

    const container = document.querySelector('.products-container');
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close-button');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.cursor = "pointer"; // Show it's clickable

        card.innerHTML = `
            <img src="${product.sticker}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">150 DA</div>
            <p>Cliquez pour voir les détails</p>
        `;

        // CLICK ACTION: Open Modal
        card.addEventListener('click', () => {
            document.getElementById('modal-img').src = product.hero;
            document.getElementById('modal-title').innerText = product.name;
            document.getElementById('modal-desc').innerText = product.description;
            
            const message = encodeURIComponent(`Bonjour Tiramisu SLM ! Je veux commander le ${product.name} (150DA).`);
            document.getElementById('modal-whatsapp').onclick = () => {
                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            };

            modal.style.display = "block";
        });

        container.appendChild(card);
    });

    // Close modal logic
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
});