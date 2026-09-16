   let cartCount = 0; // Keeping track of the items

        function addToCart() {
            cartCount++; // Increase the count by 1
            const statusMessage = document.getElementById('cart-status');
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