// TINA COLLECTIONS - PREMIUM AFRICAN FASHION
// Sample Products Data
const products = [
    // SHIRTS COLLECTION - Premium African Print Shirts
    {
        id: 1,
        name: "African Print Shirt - Ankara",
        price: 45.99,
        image: "images/products/PKRB4859.JPG",
        description: "Premium cotton shirt with vibrant Ankara African design. Available in Black, White, Red, Blue, Green, Yellow, and more colors!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Red", "Blue", "Green", "Yellow", "Purple", "Orange"],
        inStock: true
    },
    {
        id: 2,
        name: "African Print Shirt - Kente",
        price: 49.99,
        image: "images/products/UNZJ8573.JPG",
        description: "Elegant shirt with traditional Kente pattern accents. Available in all colors including Black, White, Royal Blue, Gold, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Royal Blue", "Gold", "Red", "Green", "Purple"],
        inStock: true
    },
    {
        id: 3,
        name: "African Print Shirt - Dashiki",
        price: 47.99,
        image: "images/products/PNOW1876.JPG",
        description: "Classic shirt featuring bold Dashiki African prints. Available in White, Black, Navy, Burgundy, Teal, and many other colors!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Navy", "Burgundy", "Teal", "Brown", "Gray"],
        inStock: true
    },
    {
        id: 4,
        name: "African Print Shirt - Adire",
        price: 44.99,
        image: "images/products/LLZYE0588.JPG",
        description: "Beautiful shirt with Adire indigo-inspired design. Available in all colors - Black, White, Indigo Blue, Light Blue, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Indigo Blue", "Light Blue", "Navy", "Turquoise"],
        inStock: true
    },
    {
        id: 5,
        name: "African Print Shirt - Mudcloth",
        price: 46.99,
        image: "images/products/BGWF5645.JPG",
        description: "Cotton shirt with authentic Mudcloth pattern details. Available in White, Black, Beige, Brown, Tan, and all other colors!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Beige", "Brown", "Tan", "Cream", "Rust"],
        inStock: true
    },
    {
        id: 6,
        name: "African Print Shirt - Traditional",
        price: 48.99,
        image: "images/products/BUYV2310.JPG",
        description: "Beautiful shirt with traditional African motifs. Available in all colors including White, Black, Red, Green, Gold, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Red", "Green", "Gold", "Orange", "Maroon"],
        inStock: true
    },
    {
        id: 7,
        name: "African Print Shirt - Modern",
        price: 46.99,
        image: "images/products/XHJSE2634.JPG",
        description: "Modern shirt with contemporary African design. Available in Brown, Black, White, Olive, Charcoal, and all other colors!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Brown", "Black", "White", "Olive", "Charcoal", "Tan"],
        inStock: true
    },
    {
        id: 8,
        name: "African Print Shirt - Elite",
        price: 50.99,
        image: "images/products/BGSS3429.JPG",
        description: "Elite shirt featuring premium African designs. Available in White, Black, Sky Blue, Pink, and every other color you can imagine!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Sky Blue", "Pink", "Coral", "Mint"],
        inStock: true
    },
    {
        id: 9,
        name: "African Print Shirt - Premium",
        price: 51.99,
        image: "images/products/UPCM2752.JPG",
        description: "Premium shirt with exclusive African prints. Available in all colors including White, Black, Cobalt Blue, Scarlet, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Cobalt Blue", "Scarlet", "Mustard", "Sage"],
        inStock: true
    },
    {
        id: 10,
        name: "African Print Shirt - Designer",
        price: 52.99,
        image: "images/products/QYIH1550.JPG",
        description: "Designer shirt with curated African patterns. Available in White, Black, Violet, Amber, Jade, and any color you desire!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Violet", "Amber", "Jade", "Slate"],
        inStock: true
    },
    {
        id: 11,
        name: "African Print Shirt - Signature",
        price: 48.99,
        image: "images/products/GQMUE5842.JPG",
        description: "Signature shirt with distinctive African style. Available in all colors - White, Black, Magenta, Lime, Aqua, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Magenta", "Lime", "Aqua", "Copper"],
        inStock: true
    },
    {
        id: 15,
        name: "African Print Shirt - Premium",
        price: 71.99,
        image: "images/products/NHKS8666.JPG",
        description: "Premium quality shirt with authentic African artistry. Available in Black, White, Royal Purple, Emerald, Gold, and all other colors!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Royal Purple", "Emerald", "Gold", "Crimson", "Sapphire"],
        inStock: true
    },
    {
        id: 16,
        name: "African Print Shirt - Urban",
        price: 67.99,
        image: "images/products/RKAG4072.JPG",
        description: "Urban style shirt with African street fashion. Available in all colors - Black, White, Neon Green, Hot Pink, Electric Blue, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Neon Green", "Hot Pink", "Electric Blue", "Red", "Yellow"],
        inStock: true
    },
    {
        id: 17,
        name: "African Print Shirt - Luxury",
        price: 72.99,
        image: "images/products/ADEYE9977.JPG",
        description: "Luxury shirt with high-end African design elements. Available in every color - Black, White, Platinum, Rose Gold, Champagne, and more!",
        category: "shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Platinum", "Rose Gold", "Champagne", "Onyx", "Pearl"],
        inStock: true
    },

    // HOODIES COLLECTION - Cozy African Print Hoodies
    {
        id: 13,
        name: "African Print Hoodie - Heritage",
        price: 47.99,
        image: "images/products/CIVS3929.JPG",
        description: "Heritage hoodie with African cultural designs. Available in Black, White, Forest Green, Burgundy, and all colors!",
        category: "hoodie",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Forest Green", "Burgundy", "Navy", "Gray"],
        inStock: true
    },
    {
        id: 14,
        name: "African Print Hoodie - Royal",
        price: 49.99,
        image: "images/products/CURR1851.JPG",
        description: "Royal hoodie with elegant African patterns. Available in all colors - Black, White, Royal Purple, Gold, Emerald, and more!",
        category: "hoodie",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Royal Purple", "Gold", "Emerald", "Crimson"],
        inStock: true
    },
    {
        id: 20,
        name: "African Print Hoodie - Wax Print",
        price: 70.99,
        image: "images/products/GFTL4366.JPG",
        description: "Exclusive hoodie with colorful African wax print patterns. Available in every color - Red, Orange, Yellow, Green, Blue, Purple, and more!",
        category: "hoodie",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Multicolor"],
        inStock: true
    },
    {
        id: 22,
        name: "African Print Hoodie - Classic",
        price: 66.99,
        image: "images/products/YFTF4069.JPG",
        description: "Classic hoodie with timeless African prints. Available in all colors - Black, White, Gray, Navy, Olive, and more!",
        category: "hoodie",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Gray", "Navy", "Olive", "Charcoal", "Brown"],
        inStock: true
    }
];

// Filter and sort state
let currentFilter = 'all';
let currentSort = 'default';
let displayedProducts = [...products];

// Shopping Cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();

    // Make phone number fields accept only numbers
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove any character that is not a number, +, -, space, or ()
            this.value = this.value.replace(/[^0-9+\-\s()]/g, '');
        });

        input.addEventListener('keypress', function(e) {
            // Prevent typing letters
            const char = String.fromCharCode(e.which);
            if (!/[0-9+\-\s()]/.test(char)) {
                e.preventDefault();
            }
        });
    });

    // Make name fields accept only letters and spaces
    const nameInputs = document.querySelectorAll('#message-name, #customer-name');
    nameInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove any character that is not a letter or space
            this.value = this.value.replace(/[^A-Za-z\s]/g, '');
        });

        input.addEventListener('keypress', function(e) {
            // Prevent typing numbers and special characters
            const char = String.fromCharCode(e.which);
            if (!/[A-Za-z\s]/.test(char)) {
                e.preventDefault();
            }
        });
    });
});

// Load products into the grid
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    displayedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-badge">${product.category === 'shirt' ? 'Shirt' : 'Hoodie'}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy"
                 onclick="openFullImage('${product.image}', '${product.name}')"
                 style="cursor: zoom-in;"
                 title="Click to view full image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-sizes">
                    <span class="sizes-label">Available Sizes:</span>
                    <div class="sizes-list">
                        ${product.sizes.map(size => `<span class="size-badge">${size}</span>`).join('')}
                    </div>
                </div>
                <div class="product-footer">
                    <div class="product-price">L$${product.price.toFixed(2)}</div>
                    <button class="btn btn-add-cart" onclick="openProductModal(${product.id})">
                        <span>Select Size</span>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    updateProductsCount();
}

// Update products count text
function updateProductsCount() {
    const count = displayedProducts.length;
    const countText = document.getElementById('products-count-text');
    const category = currentFilter === 'all' ? 'products' : currentFilter === 'shirt' ? 'shirts' : 'hoodies';
    countText.textContent = `Showing ${count} ${category}`;
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter products
    if (category === 'all') {
        displayedProducts = [...products];
    } else {
        displayedProducts = products.filter(p => p.category === category);
    }

    // Apply current sort
    applySorting();
    loadProducts();
}

// Sort products
function sortProducts(sortType) {
    currentSort = sortType;
    applySorting();
    loadProducts();
}

// Apply sorting to displayed products
function applySorting() {
    switch(currentSort) {
        case 'price-low':
            displayedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            displayedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Default order (as defined in products array)
            break;
    }
}

// Open product modal for size selection
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProductModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeProductModal()">&times;</button>
            <div class="modal-product">
                <div class="modal-image-container">
                    <img src="${product.image}" alt="${product.name}" class="modal-image" onclick="openFullImage('${product.image}', '${product.name}')">
                    <div class="image-zoom-hint">Click to view full image</div>
                </div>
                <div class="modal-details">
                    <h2>${product.name}</h2>
                    <p class="modal-description">${product.description}</p>
                    <div class="modal-price">L$${product.price.toFixed(2)}</div>
                    <div class="modal-sizes">
                        <h3>Select Size:</h3>
                        <div class="size-selector">
                            ${product.sizes.map(size => `
                                <button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>
                            `).join('')}
                        </div>
                    </div>
                    <button class="btn btn-primary btn-large" onclick="addToCartWithSize(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Open full image in lightbox
function openFullImage(imageSrc, productName) {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay" onclick="closeFullImage()"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeFullImage()">&times;</button>
            <img src="${imageSrc}" alt="${productName}" class="lightbox-image">
            <div class="lightbox-caption">${productName}</div>
        </div>
    `;

    document.body.appendChild(lightbox);

    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Add fade-in animation
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);

    // Close on Escape key
    document.addEventListener('keydown', handleLightboxEscape);
}

// Handle Escape key for lightbox
function handleLightboxEscape(e) {
    if (e.key === 'Escape') {
        closeFullImage();
    }
}

// Close full image lightbox
function closeFullImage() {
    const lightbox = document.querySelector('.image-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');

        // Remove escape key listener
        document.removeEventListener('keydown', handleLightboxEscape);

        setTimeout(() => {
            lightbox.remove();
            // Restore scrolling if no modals are open
            if (!document.querySelector('.product-modal')) {
                document.body.style.overflow = 'auto';
            }
        }, 300);
    }
}

// Close product modal
function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Select size in modal
let selectedSize = null;
function selectSize(button, size) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedSize = size;
}

// Add product to cart with size
function addToCartWithSize(productId) {
    if (!selectedSize) {
        alert('Please select a size first!');
        return;
    }

    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId && item.size === selectedSize);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1, size: selectedSize });
    }

    updateCartCount();
    showNotification(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
    closeProductModal();
    selectedSize = null;
}

// Add product to cart (legacy function - redirects to modal)
function addToCart(productId) {
    openProductModal(productId);
}

// Update cart count in navigation
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Show cart
function showCart() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
    window.scrollTo(0, 0);

    displayCart();
}

// Display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart"><h3>Your cart is empty</h3><p>Start shopping to add items to your cart!</p></div>';
        document.querySelector('.cart-summary').style.display = 'none';
        return;
    }

    document.querySelector('.cart-summary').style.display = 'block';
    cartItemsDiv.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>L$${item.price.toFixed(2)} each</p>
                ${item.size ? `<p class="item-size">Size: <strong>${item.size}</strong></p>` : ''}
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantityByIndex(${index}, -1)">-</button>
                    <span style="font-weight: bold; font-size: 1.1rem;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantityByIndex(${index}, 1)">+</button>
                </div>
                <span style="font-weight: bold; font-size: 1.2rem;">L$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCartByIndex(${index})">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    updateCartTotal();
}

// Update quantity by index
function updateQuantityByIndex(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;

        if (cart[index].quantity <= 0) {
            removeFromCartByIndex(index);
        } else {
            displayCart();
            updateCartCount();
        }
    }
}

// Remove from cart by index
function removeFromCartByIndex(index) {
    cart.splice(index, 1);
    displayCart();
    updateCartCount();
}

// Legacy functions for compatibility
function updateQuantity(productId, change) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        updateQuantityByIndex(index, change);
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        removeFromCartByIndex(index);
    }
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Show home page
function showHomePage() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    window.scrollTo(0, 0);
}

// Show products page
function showProductsPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    window.scrollTo(0, 0);
}

// Legacy function - redirect to home page
function showProducts() {
    showHomePage();
}

// Show checkout
function showCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    window.scrollTo(0, 0);

    displayCheckout();
}

// Display checkout items
function displayCheckout() {
    const checkoutItemsDiv = document.getElementById('checkout-items');
    checkoutItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const checkoutItemDiv = document.createElement('div');
        checkoutItemDiv.className = 'checkout-item';
        checkoutItemDiv.innerHTML = `
            <span>${item.name}${item.size ? ` (Size: ${item.size})` : ''} x ${item.quantity}</span>
            <span>L$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        checkoutItemsDiv.appendChild(checkoutItemDiv);
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkout-total').textContent = total.toFixed(2);
}

// Complete order
async function completeOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (!name || !phone || !address) {
        alert('Please fill in all customer information fields!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentName = paymentMethod === 'orange-money' ? 'Orange Money' : 'Lonestar Money';

    // Save order to Supabase
    const orderData = {
        customerName: name,
        customerPhone: phone,
        customerAddress: address,
        paymentMethod: paymentName,
        totalAmount: total,
        items: cart
    };

    const result = await SupabaseAPI.saveOrder(orderData);

    if (result.success) {
        alert(`Order Confirmed! (Order #${result.orderId})\n\nThank you, ${name}!\n\nTotal: L$${total.toFixed(2)}\nPayment Method: ${paymentName}\n\nYour order will be delivered to:\n${address}\n\nWe will contact you at ${phone} for confirmation.`);

        // Clear cart
        cart = [];
        updateCartCount();

        // Reset form
        document.getElementById('customer-name').value = '';
        document.getElementById('customer-phone').value = '';
        document.getElementById('customer-address').value = '';

        // Return to home page
        showHomePage();
    } else {
        alert('There was an error processing your order. Please try again or contact support.');
        console.error('Order error:', result.error);
    }
}

// Show notification
function showNotification(message) {
    // Simple notification using alert for this demo
    // In production, you might want to use a more elegant notification system
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #2c2c2c;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Add animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Send message function
async function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('message-name').value;
    const email = document.getElementById('message-email').value;
    const phone = document.getElementById('message-phone').value;
    const message = document.getElementById('message-text').value;

    // Save message to Supabase
    const messageData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    const result = await SupabaseAPI.saveMessage(messageData);

    if (result.success) {
        alert(`Thank you for your message, ${name}!\n\nWe have received your inquiry and will get back to you soon.\n\nEmail: ${email}\nPhone: ${phone}`);

        // Reset form
        document.getElementById('message-name').value = '';
        document.getElementById('message-email').value = '';
        document.getElementById('message-phone').value = '';
        document.getElementById('message-text').value = '';
    } else {
        alert('There was an error sending your message. Please try again or contact us directly.');
        console.error('Message error:', result.error);
    }
}

// Show contact page
function showContact() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    window.scrollTo(0, 0);
}

// Show about page
function showAboutPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    window.scrollTo(0, 0);
}

// Scroll to products section (legacy - now goes to products page)
function scrollToProducts() {
    showProductsPage();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');

    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking a link
function closeMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');

    navLinks.classList.remove('active');
    toggle.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Handle navigation clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href="#home"]')) {
        e.preventDefault();
        showHomePage();
        closeMobileMenu();
    } else if (e.target.matches('a[href="#products"]')) {
        e.preventDefault();
        showProductsPage();
        closeMobileMenu();
    } else if (e.target.matches('a[href="#about"]')) {
        e.preventDefault();
        showAboutPage();
        closeMobileMenu();
    } else if (e.target.matches('a[href="#cart"]')) {
        e.preventDefault();
        showCart();
        closeMobileMenu();
    } else if (e.target.matches('a[href="#contact"]')) {
        e.preventDefault();
        showContact();
        closeMobileMenu();
    }
});

// Chat Widget Functions
// Generate unique session ID for tracking conversations
let chatSessionId = localStorage.getItem('chatSessionId');
if (!chatSessionId) {
    chatSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('chatSessionId', chatSessionId);
}

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const chatButton = document.getElementById('chat-button');

    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
        chatButton.style.display = 'none';
    } else {
        chatWindow.style.display = 'none';
        chatButton.style.display = 'flex';
    }
}

async function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to UI
    addChatMessage(message, 'user');
    input.value = '';

    // Save user message to Supabase
    await SupabaseAPI.saveChatMessage({
        sessionId: chatSessionId,
        sender: 'user',
        message: message
    });

    // Simulate bot response
    setTimeout(async () => {
        const response = getChatBotResponse(message.toLowerCase());
        addChatMessage(response, 'bot');

        // Save bot response to Supabase
        await SupabaseAPI.saveChatMessage({
            sessionId: chatSessionId,
            sender: 'bot',
            message: response
        });
    }, 1000);
}

function addChatMessage(message, type) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getChatBotResponse(message) {
    // Simple response logic
    if (message.includes('hello') || message.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (message.includes('price') || message.includes('cost')) {
        return 'Our products range from L$44.99 to L$72.99. You can browse our full catalog in the Products section.';
    } else if (message.includes('size')) {
        return 'We offer sizes S, M, L, XL, and XXL for all our products. You can select your size when adding items to cart.';
    } else if (message.includes('color')) {
        return 'All our products are available in multiple colors! Each item comes in 6-8 different color options. Check out our Products page to see the available colors for each design.';
    } else if (message.includes('delivery') || message.includes('shipping')) {
        return 'We offer fast delivery across Liberia. Delivery time typically takes 2-5 business days depending on your location.';
    } else if (message.includes('payment')) {
        return 'We accept Orange Money and Lonestar Money for secure and convenient payments.';
    } else if (message.includes('contact') || message.includes('phone')) {
        return 'You can reach us at +231 XXX XXX XXX or email us at info@tinacollections.com. Our business hours are Monday-Saturday, 9:00 AM - 6:00 PM.';
    } else if (message.includes('order') || message.includes('buy')) {
        return 'To place an order, browse our Products page, select your size, add items to cart, and proceed to checkout. It\'s that simple!';
    } else if (message.includes('return') || message.includes('refund')) {
        return 'We have a 7-day return policy for unused items. Please contact us for return instructions.';
    } else {
        return 'Thank you for your message. For more specific questions, please contact us at +231 XXX XXX XXX or visit our Contact page.';
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

