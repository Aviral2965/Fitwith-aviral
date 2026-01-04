// Products Data
const products = {
    equipment: [
        {
            id: 1,
            name: "Adjustable Dumbbells Set",
            description: "Premium adjustable dumbbells with weight range from 5kg to 25kg per dumbbell. Perfect for home gyms and professional use. Features quick-change weight plates and ergonomic grip handles.",
            price: 8999,
            icon: "🏋️",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 2,
            name: "Olympic Barbell Set",
            description: "Professional-grade Olympic barbell with 7ft length and 20kg weight. Includes 2x10kg, 2x5kg, 2x2.5kg, and 2x1.25kg plates. Chrome-plated for durability and rust resistance.",
            price: 15999,
            icon: "🏋️‍♂️",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 3,
            name: "Adjustable Bench Press",
            description: "Heavy-duty adjustable bench with 7 back positions and 3 seat positions. Supports up to 300kg. Padded with high-density foam for comfort and safety during workouts.",
            price: 12999,
            icon: "💪",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 4,
            name: "Resistance Bands Set",
            description: "Complete resistance bands set with 5 different resistance levels (light to extra heavy). Includes door anchor, handles, and ankle straps. Perfect for full-body workouts.",
            price: 1999,
            icon: "🎯",
            image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 5,
            name: "Kettlebell Set (3-Piece)",
            description: "Cast iron kettlebells in 8kg, 12kg, and 16kg. Smooth finish with comfortable grip. Ideal for strength training, cardio, and functional fitness exercises.",
            price: 4999,
            icon: "⚖️",
            image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 6,
            name: "Pull-Up Bar",
            description: "Wall-mounted pull-up bar with multiple grip positions. Supports up to 150kg. Easy installation with all mounting hardware included. Perfect for upper body strength.",
            price: 2499,
            icon: "🤸",
            image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 7,
            name: "Yoga Mat Premium",
            description: "Extra-thick 10mm yoga mat with non-slip surface. Eco-friendly TPE material. Perfect for yoga, pilates, and floor exercises. Includes carrying strap.",
            price: 1499,
            icon: "🧘",
            image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 8,
            name: "Foam Roller",
            description: "High-density foam roller for muscle recovery and flexibility. 30cm length with textured surface for deep tissue massage. Essential for post-workout recovery.",
            price: 999,
            icon: "🔄",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&q=80"
        }
    ],
    wear: [
        {
            id: 9,
            name: "Unisex Training T-Shirt",
            description: "Moisture-wicking training t-shirt made from premium breathable fabric. Features anti-odor technology and UV protection. Available in multiple vibrant colors. Perfect for intense workouts.",
            price: 899,
            icon: "👕",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 10,
            name: "Compression Shorts",
            description: "High-performance compression shorts with 4-way stretch fabric. Provides muscle support and reduces fatigue. Quick-dry technology keeps you comfortable during long training sessions.",
            price: 1299,
            icon: "🩳",
            image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 11,
            name: "Sports Leggings",
            description: "Full-length sports leggings with high-waist design and tummy control. Made from premium stretch fabric with moisture-wicking properties. Perfect for yoga, running, and gym workouts.",
            price: 1499,
            icon: "👖",
            image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 12,
            name: "Training Tank Top",
            description: "Sleeveless training tank top with mesh panels for maximum ventilation. Lightweight and breathable fabric. Ideal for hot weather workouts and intense training sessions.",
            price: 799,
            icon: "🎽",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 13,
            name: "Sports Bra (Unisex Support)",
            description: "High-support sports bra with adjustable straps and wide band. Maximum compression for high-impact activities. Moisture-wicking and breathable fabric for all-day comfort.",
            price: 1199,
            icon: "👙",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 14,
            name: "Gym Hoodie",
            description: "Premium gym hoodie with zip-up front and kangaroo pocket. Soft fleece lining for warmth. Perfect for warm-ups, cool-downs, and casual gym wear. Available in multiple colors.",
            price: 1999,
            icon: "🧥",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 15,
            name: "Training Shorts",
            description: "Lightweight training shorts with built-in compression liner. Features side pockets and drawstring waist. Quick-dry fabric perfect for running, training, and sports activities.",
            price: 1099,
            icon: "🩲",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop&q=80"
        },
        {
            id: 16,
            name: "Athletic Socks (3-Pair Pack)",
            description: "High-performance athletic socks with cushioned sole and arch support. Moisture-wicking technology prevents blisters. Seamless toe design for maximum comfort during workouts.",
            price: 599,
            icon: "🧦",
            image: "https://images.unsplash.com/photo-1586350977772-b3b0abd50c82?w=500&h=500&fit=crop&q=80"
        }
    ]
};

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    loadCartItems();
    
    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    document.getElementById('paymentMethod').addEventListener('change', togglePaymentDetails);
});

// Load Products
function loadProducts() {
    const equipmentGrid = document.getElementById('equipmentGrid');
    const wearGrid = document.getElementById('wearGrid');
    
    products.equipment.forEach(product => {
        equipmentGrid.appendChild(createProductCard(product));
    });
    
    products.wear.forEach(product => {
        wearGrid.appendChild(createProductCard(product));
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${product.icon}'">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Add to Cart
function addToCart(productId) {
    if (!currentUser) {
        alert('Please login to add items to cart');
        openLoginModal();
        return;
    }
    
    const allProducts = [...products.equipment, ...products.wear];
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    loadCartItems();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    loadCartItems();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            loadCartItems();
        }
    }
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Load Cart Items
function loadCartItems() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('cartTotal').textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image || '#'}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${item.icon}'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} × ${item.quantity}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

// Open/Close Cart
function openCart() {
    if (!currentUser) {
        alert('Please login to view your cart');
        openLoginModal();
        return;
    }
    document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
}

// Login Modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function showSignup() {
    closeLoginModal();
    document.getElementById('signupModal').style.display = 'block';
}

function showLogin() {
    closeSignupModal();
    openLoginModal();
}

// Signup Modal
function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in real app, this would connect to backend)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeLoginModal();
        showNotification('Login successful!');
        updateLoginButton();
    } else {
        alert('Invalid email or password');
    }
}

// Handle Signup
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    closeSignupModal();
    showNotification('Account created successfully!');
    updateLoginButton();
}

// Update Login Button
function updateLoginButton() {
    const loginBtn = document.querySelector('.login-btn');
    if (currentUser) {
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        loginBtn.onclick = function() {
            if (confirm('Do you want to logout?')) {
                currentUser = null;
                localStorage.removeItem('currentUser');
                updateLoginButton();
                showNotification('Logged out successfully');
            }
        };
    } else {
        loginBtn.innerHTML = '<i class="fas fa-user"></i> Login';
        loginBtn.onclick = openLoginModal;
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    closeCart();
    openCheckoutModal();
}

// Open Checkout Modal
function openCheckoutModal() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    
    document.getElementById('checkoutModal').style.display = 'block';
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Toggle Payment Details
function togglePaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const cardDetails = document.getElementById('cardDetails');
    const upiDetails = document.getElementById('upiDetails');
    
    cardDetails.style.display = paymentMethod === 'card' ? 'block' : 'none';
    upiDetails.style.display = paymentMethod === 'upi' ? 'block' : 'none';
    
    // Clear required attributes
    document.getElementById('cardNumber').required = paymentMethod === 'card';
    document.getElementById('expiry').required = paymentMethod === 'card';
    document.getElementById('cvv').required = paymentMethod === 'card';
    document.getElementById('upiId').required = paymentMethod === 'upi';
}

// Handle Checkout
function handleCheckout(e) {
    e.preventDefault();
    
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (!paymentMethod) {
        alert('Please select a payment method');
        return;
    }
    
    // Validate payment details
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!cardNumber || !expiry || !cvv) {
            alert('Please fill in all card details');
            return;
        }
    } else if (paymentMethod === 'upi') {
        const upiId = document.getElementById('upiId').value;
        if (!upiId) {
            alert('Please enter your UPI ID');
            return;
        }
    }
    
    // Simulate payment processing
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`Order placed successfully!\n\nTotal Amount: ₹${total.toLocaleString('en-IN')}\nPayment Method: ${paymentMethod.toUpperCase()}\n\nThank you for shopping with FitWith Aviral!`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    loadCartItems();
    
    // Reset form
    document.getElementById('checkoutForm').reset();
    closeCheckoutModal();
    closeCart();
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #4caf50, #00bcd4);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Format card number
document.addEventListener('DOMContentLoaded', function() {
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    const expiry = document.getElementById('expiry');
    if (expiry) {
        expiry.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    const cvv = document.getElementById('cvv');
    if (cvv) {
        cvv.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
    
    // Close modals when clicking outside
    window.onclick = function(event) {
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const checkoutModal = document.getElementById('checkoutModal');
        
        if (event.target === loginModal) {
            closeLoginModal();
        }
        if (event.target === signupModal) {
            closeSignupModal();
        }
        if (event.target === checkoutModal) {
            closeCheckoutModal();
        }
    }
    
    updateLoginButton();
});

