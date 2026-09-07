/* =========================================================
   FOOD DELIVERY WEBSITE
   Complete JavaScript
   Features:
   - Food Menu
   - Search
   - Category Filter
   - Cart
   - Favorites
   - Dark Mode
   - Checkout
   - LocalStorage
   ========================================================= */


/* =========================================================
   FOOD DATA
   ========================================================= */

const foods = [

    // ================= PIZZA =================

    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 199,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Farmhouse Pizza",
        category: "Pizza",
        price: 299,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 349,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Cheese Burst Pizza",
        category: "Pizza",
        price: 329,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80"
    },


    // ================= BURGER =================

    {
        id: 5,
        name: "Classic Chicken Burger",
        category: "Burger",
        price: 179,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Cheese Burger",
        category: "Burger",
        price: 199,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Veg Supreme Burger",
        category: "Burger",
        price: 159,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Double Patty Burger",
        category: "Burger",
        price: 249,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
    },


    // ================= BIRYANI =================

    {
        id: 9,
        name: "Chicken Biryani",
        category: "Biryani",
        price: 249,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 10,
        name: "Hyderabadi Biryani",
        category: "Biryani",
        price: 279,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 11,
        name: "Mutton Biryani",
        category: "Biryani",
        price: 349,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=800&q=80"
    },


    // ================= CHINESE =================

    {
        id: 12,
        name: "Veg Noodles",
        category: "Chinese",
        price: 149,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 13,
        name: "Chicken Noodles",
        category: "Chinese",
        price: 189,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "Schezwan Fried Rice",
        category: "Chinese",
        price: 169,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 15,
        name: "Chicken Fried Rice",
        category: "Chinese",
        price: 199,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
    },


    // ================= PASTA =================

    {
        id: 16,
        name: "White Sauce Pasta",
        category: "Pasta",
        price: 199,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 17,
        name: "Red Sauce Pasta",
        category: "Pasta",
        price: 189,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 18,
        name: "Chicken Alfredo Pasta",
        category: "Pasta",
        price: 249,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80"
    },


    // ================= SNACKS =================

    {
        id: 19,
        name: "Veg Sandwich",
        category: "Snacks",
        price: 99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 20,
        name: "French Fries",
        category: "Snacks",
        price: 99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 21,
        name: "Chicken Nuggets",
        category: "Snacks",
        price: 149,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 22,
        name: "Garlic Bread",
        category: "Snacks",
        price: 129,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=80"
    },


    // ================= DESSERT =================

    {
        id: 23,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 149,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 24,
        name: "Chocolate Brownie",
        category: "Dessert",
        price: 119,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 25,
        name: "Ice Cream",
        category: "Dessert",
        price: 99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 26,
        name: "Cheesecake",
        category: "Dessert",
        price: 179,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
    },


    // ================= DRINKS =================

    {
        id: 27,
        name: "Cold Coffee",
        category: "Drinks",
        price: 119,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 28,
        name: "Fresh Lime Soda",
        category: "Drinks",
        price: 79,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 29,
        name: "Mango Shake",
        category: "Drinks",
        price: 129,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 30,
        name: "Strawberry Milkshake",
        category: "Drinks",
        price: 149,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
    }

];


/* =========================================================
   VARIABLES
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("foodCart")) || [];

let favorites =
    JSON.parse(localStorage.getItem("foodFavorites")) || [];

let currentCategory = "All";


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const foodContainer =
    document.getElementById("foodContainer") ||
    document.querySelector(".food-grid");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const categoryContainer =
    document.getElementById("categories") ||
    document.querySelector(".categories");

const cartCount =
    document.getElementById("cartCount");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItemsContainer =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartBtn =
    document.getElementById("cartBtn");

const closeCartBtn =
    document.getElementById("closeCart");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeModalBtn =
    document.getElementById("closeModal");

const checkoutForm =
    document.getElementById("checkoutForm");

const darkModeBtn =
    document.getElementById("darkModeBtn");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


/* =========================================================
   DISPLAY FOOD
   ========================================================= */

function displayFoods(foodList) {

    if (!foodContainer) {
        console.error(
            "Food container not found. Add id='foodContainer' to your food grid."
        );
        return;
    }

    foodContainer.innerHTML = "";

    if (foodList.length === 0) {

        foodContainer.innerHTML = `
            <div class="no-results">

                <div style="font-size:50px;">
                    🍽️
                </div>

                <h2>No Food Found</h2>

                <p>
                    Try another food name or category.
                </p>

            </div>
        `;

        return;
    }

    foodList.forEach(food => {

        const favorite =
            favorites.includes(food.id);

        const card =
            document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `

            <div class="food-image">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://placehold.co/800x500?text=${encodeURIComponent(food.name)}';"
                >

                <button
                    class="favorite-btn ${favorite ? "active" : ""}"
                    onclick="toggleFavorite(${food.id})"
                    aria-label="Favorite ${food.name}"
                >
                    ${favorite ? "♥" : "♡"}
                </button>

                <span class="food-category">
                    ${food.category}
                </span>

            </div>

            <div class="food-info">

                <h3 title="${food.name}">
                    ${food.name}
                </h3>

                <div class="food-details">

                    <span class="food-price">
                        ₹${food.price.toFixed(2)}
                    </span>

                    <span class="food-rating">
                        ⭐ ${food.rating}
                    </span>

                </div>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${food.id})"
                >
                    + Add to Cart
                </button>

            </div>
        `;

        foodContainer.appendChild(card);
    });
}


/* =========================================================
   CATEGORY FILTERS
   ========================================================= */

function createCategories() {

    if (!categoryContainer) {
        return;
    }

    const categories = [
        "All",
        ...new Set(
            foods.map(food => food.category)
        )
    ];

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-btn";

        if (category === currentCategory) {
            button.classList.add("active");
        }

        button.textContent = category;

        button.addEventListener(
            "click",
            () => {

                currentCategory = category;

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                filterFoods();
            }
        );

        categoryContainer.appendChild(button);
    });
}


/* =========================================================
   SEARCH + FILTER
   ========================================================= */

function filterFoods() {

    const searchTerm =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    let filteredFoods = foods.filter(food => {

        const matchesCategory =
            currentCategory === "All" ||
            food.category === currentCategory;

        const matchesSearch =
            food.name
                .toLowerCase()
                .includes(searchTerm) ||

            food.category
                .toLowerCase()
                .includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    displayFoods(filteredFoods);
}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterFoods
    );
}

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        filterFoods
    );
}


/* =========================================================
   CART
   ========================================================= */

function addToCart(foodId) {

    const food =
        foods.find(item => item.id === foodId);

    if (!food) {
        return;
    }

    const existingItem =
        cart.find(item => item.id === foodId);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            ...food,
            quantity: 1
        });
    }

    saveCart();

    updateCart();

    showToast(
        `${food.name} added to cart 🛒`
    );
}


/* =========================================================
   REMOVE CART ITEM
   ========================================================= */

function removeFromCart(foodId) {

    cart =
        cart.filter(item => item.id !== foodId);

    saveCart();

    updateCart();
}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(foodId, change) {

    const item =
        cart.find(item => item.id === foodId);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== foodId
            );
    }

    saveCart();

    updateCart();
}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    updateCartCount();

    renderCart();

    updateCartTotal();
}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    if (!cartCount) {
        return;
    }

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    cartCount.textContent =
        totalQuantity;

    cartCount.style.display =
        totalQuantity > 0
            ? "flex"
            : "none";
}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    if (!cartItemsContainer) {
        return;
    }

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>Your Cart is Empty</h3>

                <p>
                    Add some delicious food!
                </p>

            </div>
        `;

        return;
    }

    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {

        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";

        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="this.onerror=null; this.src='https://placehold.co/150x150?text=Food';"
            >

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-item-price">
                    ₹${item.price.toFixed(2)}
                </div>

                <div class="quantity-controls">

                    <button
                        class="quantity-btn"
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span class="quantity">
                        ${item.quantity}
                    </span>

                    <button
                        class="quantity-btn"
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}


/* =========================================================
   CART TOTAL
   ========================================================= */

function calculateCartTotal() {

    return cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
}


function updateCartTotal() {

    if (!cartTotal) {
        return;
    }

    cartTotal.textContent =
        `₹${calculateCartTotal().toFixed(2)}`;
}


/* =========================================================
   LOCAL STORAGE - CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "foodCart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

    if (cartSidebar) {
        cartSidebar.classList.add("active");
    }

    if (cartOverlay) {
        cartOverlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCart() {

    if (cartSidebar) {
        cartSidebar.classList.remove("active");
    }

    if (cartOverlay) {
        cartOverlay.classList.remove("active");
    }

    document.body.style.overflow = "";
}


if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        openCart
    );
}

if (closeCartBtn) {

    closeCartBtn.addEventListener(
        "click",
        closeCart
    );
}

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );
}


/* =========================================================
   FAVORITES
   ========================================================= */

function isFavorite(foodId) {

    return favorites.includes(foodId);
}


function toggleFavorite(foodId) {

    const food =
        foods.find(item => item.id === foodId);

    if (!food) {
        return;
    }

    if (favorites.includes(foodId)) {

        favorites =
            favorites.filter(
                id => id !== foodId
            );

        showToast(
            `${food.name} removed from favorites`
        );

    } else {

        favorites.push(foodId);

        showToast(
            `${food.name} added to favorites ❤️`
        );
    }

    localStorage.setItem(
        "foodFavorites",
        JSON.stringify(favorites)
    );

    filterFoods();
}


/* =========================================================
   DARK MODE
   ========================================================= */

function loadDarkMode() {

    const darkMode =
        localStorage.getItem("darkMode");

    if (darkMode === "true") {

        document.body.classList.add(
            "dark-mode"
        );

        updateDarkModeIcon();
    }
}


function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );

    const enabled =
        document.body.classList.contains(
            "dark-mode"
        );

    localStorage.setItem(
        "darkMode",
        enabled
    );

    updateDarkModeIcon();
}


function updateDarkModeIcon() {

    if (!darkModeBtn) {
        return;
    }

    const enabled =
        document.body.classList.contains(
            "dark-mode"
        );

    darkModeBtn.textContent =
        enabled ? "☀️" : "🌙";
}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        toggleDarkMode
    );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

            menuToggle.textContent =
                navLinks.classList.contains(
                    "active"
                )
                    ? "✕"
                    : "☰";
        }
    );

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuToggle.textContent =
                        "☰";
                }
            );
        });
}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty! 🛒"
        );

        return;
    }

    if (checkoutModal) {

        checkoutModal.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";
    }
}


function closeCheckout() {

    if (checkoutModal) {

        checkoutModal.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";
    }
}


if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        openCheckout
    );
}


if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        closeCheckout
    );
}


/* =========================================================
   CHECKOUT FORM
   ========================================================= */

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty!"
                );

                return;
            }

            const formData =
                new FormData(checkoutForm);

            const customerName =
                formData.get("name") ||
                formData.get("customerName") ||
                "Customer";

            const orderId =
                "FD" +
                Date.now()
                    .toString()
                    .slice(-8);

            const order = {

                orderId: orderId,

                customerName:
                    customerName,

                items: [...cart],

                total:
                    calculateCartTotal(),

                date:
                    new Date().toISOString()
            };


            /* Save order */

            const orders =
                JSON.parse(
                    localStorage.getItem(
                        "foodOrders"
                    )
                ) || [];

            orders.push(order);

            localStorage.setItem(
                "foodOrders",
                JSON.stringify(orders)
            );


            /* Clear cart */

            cart = [];

            saveCart();

            updateCart();


            /* Close checkout */

            closeCheckout();

            closeCart();


            /* Reset form */

            checkoutForm.reset();


            /* Success */

            showToast(
                `Order ${orderId} placed successfully! 🎉`
            );
        }
    );
}


/* =========================================================
   TOAST MESSAGE
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById("toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "toast";

        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

if (checkoutModal) {

    checkoutModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                checkoutModal
            ) {
                closeCheckout();
            }
        }
    );
}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeCart();

            closeCheckout();
        }
    }
);


/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createCategories();

        displayFoods(foods);

        updateCart();

        loadDarkMode();
    }
);


/* =========================================================
   ALSO INITIALIZE IMMEDIATELY
   Useful when script is loaded at bottom of body
   ========================================================= */

createCategories();

displayFoods(foods);

updateCart();

loadDarkMode();
/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        // Get form values
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        // Basic validation
        if (!name || !email || !message) {
            showToast("Please fill in all fields.");
            return;
        }

        // Show success message
        showToast(
            `Thank you, ${name}! Your message has been sent successfully. ✅`
        );

        // Clear form fields
        contactForm.reset();

    });

}