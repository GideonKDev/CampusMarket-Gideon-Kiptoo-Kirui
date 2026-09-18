# Campus Market-Kirui

Campus Market-Kirui is a static product storefront for browsing and purchasing everyday technology products.

## Project Structure

```text
sokotech/
|-- index.html   # Page structure, navigation, product cards, and footer
|-- styles.css   # Layout, colors, typography, responsive styles, and product controls
|-- script.js    # Search, category filtering, mobile navigation, and cart feedback
`-- README.md    # Project documentation and update log
```

## Current Features

- Responsive storefront layout for desktop and mobile screens
- Product search that matches product names, categories, and descriptions
- Category filter for Work essentials and Study gear
- Product count that updates with the active search and filter
- No-results message when no product matches
- Two products:
  - Mechanical Coding Keyboard
  - Ergonomic Wireless Mouse
- Add to Cart buttons with an item count and product-specific success message
- Mobile navigation menu
- Accessible labels, live regions, and image alternative text

## How It Works

### HTML

`index.html` contains the storefront structure. Each product uses a `.product-card` element with data attributes used by the search and filter logic:

```html
<div
    class="product-card"
    data-product-title="product name"
    data-product-category="category"
    data-product-description="product description"
>
```

### CSS

`styles.css` controls the visual design, product grid, search controls, buttons, mobile layout, and hidden states for filtered products.

### JavaScript

`script.js`:

- Reads all elements with the `.product-card` class
- Filters products as the user types
- Filters products when the category changes
- Updates the visible product count
- Displays the no-results message when necessary
- Tracks cart additions during the current page session

## Adding Another Product

1. Add another `.product-card` inside `.product-grid` in `index.html`.
2. Add `data-product-title`, `data-product-category`, and `data-product-description` attributes.
3. Add the matching visible category label and product details.
4. Add a new category `<option>` if the product uses a category that does not already exist.
5. Use `onclick="addToCart(this)"` on the product's Add to Cart button.
6. Add a status element inside the card using either `class="cart-status"` or `id="cart-status"`.

Example:

```html
<div
    class="product-card"
    data-product-title="usb c hub"
    data-product-category="work essentials"
    data-product-description="compact hub with multiple ports"
>
    <div class="product-details">
        <span class="category">Work essentials</span>
        <h2 class="product-title">USB-C Hub</h2>
        <p class="product-desc">Compact hub with multiple ports.</p>
        <div class="purchase-row">
            <p class="price">KSh 1,500</p>
            <button class="btn" onclick="addToCart(this)">Add to Cart</button>
        </div>
        <div class="cart-status" aria-live="polite"></div>
    </div>
</div>
```

## Running the Project

This project does not require a build tool or package installation.

Open `index.html` in a browser, or serve the folder with any local static file server.

## Planned Updates

Use this section to record upcoming work:

- Add persistent cart storage
- Create a cart view for selected products
- Add product quantity controls
- Add checkout or contact flow
- Replace placeholder product images with local assets
- Add more products and categories
- Improve navigation links for Features, Pricing, and About

## Update Log

Record completed changes here with the date and a short description.

### 2026-09-18

- Added product search controls.
- Added category filtering.
- Added the Ergonomic Wireless Mouse product.
- Added product count and no-results feedback.
- Added responsive product grid styling.
- Added product-specific cart feedback.

### Future Entry

- Date:
- Changes:
- Notes:
