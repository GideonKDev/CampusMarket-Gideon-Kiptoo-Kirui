   let cartCount = 0; // Keeping track of the items

        function addToCart(button) {
            cartCount++; // Increase the count by 1
            const productCard = button.closest('.product-card');
            const statusMessage = productCard.querySelector('.cart-status, #cart-status');
            statusMessage.innerText = `Success! Added to cart. (Total items: ${cartCount})`;
            console.log(`Item added. Cart currently holds ${cartCount} item(s).`);
        }

        const menuToggle = document.querySelector('.menu-toggle');
        const navigation = document.getElementById('navMain');

        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            navigation.classList.toggle('is-open', !isOpen);
        });

        navigation.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                navigation.classList.remove('is-open');
            });
        });

        const searchInput = document.getElementById('product-search');
        const categoryFilter = document.getElementById('category-filter');
        const productCards = document.querySelectorAll('.product-card');
        const productCount = document.getElementById('product-count');
        const noResults = document.getElementById('no-results');

        function filterProducts() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const selectedCategory = categoryFilter.value;
            let visibleCount = 0;

            productCards.forEach((productCard) => {
                const searchableText = `${productCard.dataset.productTitle} ${productCard.dataset.productCategory} ${productCard.dataset.productDescription}`;
                const matchesSearch = searchableText.includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || productCard.dataset.productCategory === selectedCategory;
                const isVisible = matchesSearch && matchesCategory;

                productCard.hidden = !isVisible;
                if (isVisible) visibleCount++;
            });

            noResults.hidden = visibleCount > 0;
            productCount.textContent = `${visibleCount} product${visibleCount === 1 ? '' : 's'}`;
        }

        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);