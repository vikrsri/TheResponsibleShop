document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Fairphone 5',
            image: 'images/fairphone.png',
            description: 'A sustainable smartphone.',
            cost: '$599',
            comparison: 'iPhone 13, Samsung Galaxy S24, OnePlus 12.',
            ethics: 'The battery is made from 100% IRMA-Assessed lithium. Fairphone accounts for 100% of the cobalt used in the battery by buying cobalt credits, which support the improvement of working conditions for artisanal cobalt miners in the DRC.',
            sustainability: 'The Fairphone 5 is made with over 70% recycled materials.'
        },
        {
            name: 'Nimble CHAMP Portable Charger',
            image: 'images/nimble.png',
            description: 'A sustainable portable charger.',
            cost: '$59',
            comparison: 'Anker Portable Charger, Mophie Powerstation.',
            ethics: 'Nimble expanded their partnership with Homeboy, which employs & trains people committed to life transformation after incarceration.',
            sustainability: 'Nimble offsets 100% of their CO2 emissions via project investments & operational reductions. All packaging is made from 100% recycled materials.'
        },
        {
            name: 'Fairbuds XL',
            image: 'images/fairbuds.jpeg',
            description: 'Sustainable headphones.',
            cost: '$249',
            comparison: 'Airpods Max, Sony WH-1000XM4',
            ethics: 'Gold is sourced from Fairtrade-certified artisanal mines. These mines have improved working conditions and receive a premium for the gold they produce',
            sustainability: 'Made from over 80% recycled plastics and 100% recycled aluminium in the headband base. Fairphone also recycles the same amount of electronic waste, which makes the headphones e-waste neutral.'
        },
        
        {
            name: 'MPOWERD Luci Outdoor 2.0',
            image: 'images/mpowered.jpeg',
            description: 'A sustainable solar-powered lamp.',
            cost: '$30',
            comparison: 'Philips Floor Lamp.',
            ethics: 'MPOWERD works with over 700 NGOs and non-profits to provide clean energy to those who need it most. They distribute clean energy options that provide a more economical and environmentally friendly approach to everyday tasks.',
            sustainability: 'Averted 2.4 million tons of CO2 as of 2022. '
        },
    ];

    const productList = document.getElementById('product-list');
    const modal = document.getElementById('product-modal');
    const span = document.getElementsByClassName("close-button")[0];

    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.onclick = function() { showModal(index); };

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productInfo.appendChild(productName);
        productInfo.appendChild(productDescription);

        productElement.appendChild(productImage);
        productElement.appendChild(productInfo);

        productList.appendChild(productElement);
    });

    function showModal(index) {
        const product = products[index];
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-description').textContent = product.description;
        
        document.getElementById('modal-product-cost').innerHTML = `<span class="modal-detail-title">Cost:</span> ${product.cost}`;
        document.getElementById('modal-product-comparison').innerHTML = `<span class="modal-detail-title">Comparable to:</span> ${product.comparison}`;
        // document.getElementById('modal-product-sourcing').innerHTML = `<span class="modal-detail-title">Sourcing:</span> ${product.sourcing}`;
        document.getElementById('modal-product-ethics').innerHTML = `<span class="modal-detail-title">Ethics:</span> ${product.ethics}`;
        document.getElementById('modal-product-sustainability').innerHTML = `<span class="modal-detail-title">Sustainability:</span> ${product.sustainability}`;
        
        modal.style.display = "block";
    }


    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
