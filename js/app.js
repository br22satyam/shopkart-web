// ShopKart Core Application Logic - Team 2 (Satyam Kumar Soni - Team Leader)[cite: 6]

const defaultProducts = [
    {
        id: "prod_1",
        title: "Apple MacBook Air M2",
        category: "Electronics",
        price: 99990,
        stock: 10,
        featured: true,
        image: "images/Apple-MacBook-Air-M2.jpg",
        description: "Supercharged by M2 chip, 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage."
    },
    {
        id: "prod_2",
        title: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 29990,
        stock: 10,
        featured: true,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        description: "Industry-leading noise canceling with two processors and 8 microphones for crystal clear audio."
    },
    {
        id: "prod_3",
        title: "Dell UltraSharp 27\" 4K Monitor",
        category: "Electronics",
        price: 42500,
        stock: 10,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        description: "Stunning 4K UHD resolution with IPS technology, 99% sRGB color accuracy, and USB-C connectivity."
    },
    {
        id: "prod_4",
        title: "Logitech MX Master 3S Wireless Mouse",
        category: "Electronics",
        price: 8995,
        stock: 10,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        description: "High-precision 8000 DPI optical sensor, quiet clicks, electromagnetic MagSpeed scrolling wheel, and ergonomic comfort."
    },
    {
        id: "prod_5",
        title: "JBL Flip 6 Portable Bluetooth Speaker",
        category: "Electronics",
        price: 9999,
        stock: 10,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        description: "Bold sound, IP67 waterproof and dustproof design with 12 hours of playtime under a single charge."
    },
    {
        id: "prod_6",
        title: "Amazon Watch series 6",
        category: "Electronics",
        price: 44999,
        stock: 10,
        featured: true,
        image: "images/watch.jpg.jpg",
        description: "Stay connected on the go with a stylish smartwatch featuring activity tracking, notifications, and an easy-to-read display."
    },
    {
        id: "prod_7",
        title: "Samsung Galaxy S24",
        category: "Mobiles",
        price: 74999,
        stock: 10,
        featured: true,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        description: "A powerful everyday smartphone with a vivid display, advanced camera system, and all-day battery life."
    },
    {
        id: "prod_8",
        title: "Apple iPhone 15",
        category: "Mobiles",
        price: 69999,
        stock: 10,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        description: "Capture detailed photos and enjoy smooth performance in a sleek smartphone designed for everyday use."
    },
    {
        id: "prod_9",
        title: "Lenovo IdeaPad Slim 5",
        category: "Laptops",
        price: 68990,
        stock: 10,
        featured: true,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        description: "A slim, versatile laptop for work and study with a crisp display, responsive performance, and portable design."
    },
    {
        id: "prod_10",
        title: "Canon EOS 2000D DSLR Camera",
        category: "Electronics",
        price: 37999,
        stock: 10,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        description: "Explore photography with a beginner-friendly DSLR, interchangeable lenses, and detailed image capture."
    },
    {
        id: "prod_11",
        title: "Classic Cotton Crewneck T-Shirt",
        category: "Fashion",
        price: 799,
        stock: 25,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        description: "A soft, breathable everyday cotton T-shirt with a comfortable crew neckline and easy-to-style fit."
    },
    {
        id: "prod_12",
        title: "Nike Air Running Shoes",
        category: "Shoes",
        price: 5495,
        stock: 15,
        featured: true,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Lightweight running shoes with a cushioned feel and a grippy outsole for daily training and walks."
    },
    {
        id: "prod_13",
        title: "Everyday Crossbody Bag",
        category: "Accessories",
        price: 1899,
        stock: 18,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        description: "A compact crossbody bag with an adjustable strap and practical space for daily essentials."
    },
    {
        id: "prod_14",
        title: "Minimal Ceramic Table Lamp",
        category: "Home",
        price: 2499,
        stock: 12,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        description: "Add warm ambient light to a bedside table or living space with a clean, modern lamp design."
    },
    {
        id: "prod_15",
        title: "Daily Skincare Essentials Set",
        category: "Beauty",
        price: 1299,
        stock: 20,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "A simple skincare routine set with gentle daily-care essentials for a fresh, comfortable feel."
    },
    {
        id: "prod_16",
        title: "Stainless Steel French Press",
        category: "Home",
        price: 1499,
        stock: 14,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        description: "Brew rich coffee at home with a reusable French press designed for easy pouring and cleanup."
    },
    {
        id: "prod_17",
        title: "Ergonomic Mesh Office Chair",
        category: "Home",
        price: 8999,
        stock: 8,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
        description: "A supportive office chair with a breathable mesh back and adjustable seating for your workspace."
    },
    {
        id: "prod_18",
        title: "Classic Stainless Steel Watch",
        category: "Accessories",
        price: 3299,
        stock: 10,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        description: "A versatile analog watch with a clean dial and stainless-steel styling for everyday wear."
    },
    {
        id: "prod_19",
        title: "Samsung Galaxy Tab S9 FE",
        category: "Electronics",
        price: 36999,
        stock: 10,
        featured: true,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        description: "A versatile tablet for reading, streaming, and creative work with a bright display and portable design."
    },
    {
        id: "prod_20",
        title: "Keychron K2 Wireless Mechanical Keyboard",
        category: "Electronics",
        price: 8499,
        stock: 12,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        description: "A compact mechanical keyboard with wireless connectivity and tactile keys for work or gaming."
    },
    {
        id: "prod_21",
        title: "TP-Link Archer AX55 Wi-Fi 6 Router",
        category: "Electronics",
        price: 7999,
        stock: 10,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
        description: "Upgrade your home network with a dual-band Wi-Fi 6 router designed for smooth streaming and connected devices."
    },
    {
        id: "prod_22",
        title: "Anker 20,000mAh Power Bank",
        category: "Electronics",
        price: 3999,
        stock: 20,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
        description: "Keep compatible devices charged on the go with a high-capacity portable battery and convenient USB charging."
    },
    {
        id: "prod_23",
        title: "Apple AirPods Pro (2nd Generation)",
        category: "Electronics",
        price: 24900,
        stock: 10,
        featured: true,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
        description: "True wireless earbuds with an immersive listening experience, active noise cancellation, and a compact charging case."
    },
    {
        id: "prod_24",
        title: "SanDisk Extreme Portable SSD 1TB",
        category: "Electronics",
        price: 10999,
        stock: 8,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
        description: "Carry and back up files with a compact 1TB portable solid-state drive built for everyday use."
    },
    {
        id: "prod_25",
        title: "Insulated Stainless Steel Water Bottle",
        category: "Daily Use",
        price: 799,
        stock: 30,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        description: "A reusable insulated bottle for carrying water to work, class, the gym, or while traveling."
    },
    {
        id: "prod_26",
        title: "Two-Compartment Lunch Box",
        category: "Daily Use",
        price: 599,
        stock: 25,
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500",
        description: "Pack meals and snacks in a practical reusable lunch box with separate compartments."
    },
    {
        id: "prod_27",
        title: "Soft Cotton Bath Towel Set",
        category: "Daily Use",
        price: 999,
        stock: 20,
        image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?w=500",
        description: "A set of soft everyday cotton towels for a comfortable, absorbent post-shower routine."
    },
    {
        id: "prod_28",
        title: "Reusable Grocery Tote Bags (Set of 3)",
        category: "Daily Use",
        price: 349,
        stock: 40,
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500",
        description: "Carry shopping and daily essentials in a set of reusable bags that fold away for storage."
    },
    {
        id: "prod_29",
        title: "Stackable Food Storage Containers",
        category: "Daily Use",
        price: 699,
        stock: 18,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
        description: "Keep pantry ingredients and leftovers organized with a set of reusable stackable containers."
    },
    {
        id: "prod_30",
        title: "Rechargeable LED Desk Lamp",
        category: "Daily Use",
        price: 1199,
        stock: 14,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        description: "Add focused light to reading or desk tasks with a compact lamp suited to everyday use."
    },
    {
        id: "prod_31",
        title: "Compact Home Cleaning Brush Set",
        category: "Daily Use",
        price: 449,
        stock: 22,
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500",
        description: "A practical set of reusable brushes for routine cleaning around the kitchen and home."
    },
    {
        id: "prod_32",
        title: "Everyday Desk Organizer",
        category: "Daily Use",
        price: 549,
        stock: 16,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
        description: "Keep pens, notes, and small accessories tidy with a simple organizer for your desk or study space."
    },
    {
        id: "prod_33",
        title: "Automatic Electric Kettle",
        category: "Electronics",
        price: 1499,
        stock: 16,
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b171e3?w=500",
        description: "Quickly boil water for tea, coffee, and everyday cooking with a countertop electric kettle."
    },
    {
        id: "prod_34",
        title: "USB-C 30W Fast Wall Charger",
        category: "Electronics",
        price: 1299,
        stock: 24,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        description: "A compact USB-C wall adapter for charging compatible phones, earbuds, and other personal devices."
    },
    {
        id: "prod_35",
        title: "Rechargeable Electric Toothbrush",
        category: "Electronics",
        price: 1899,
        stock: 14,
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500",
        description: "Make daily brushing simple with a rechargeable toothbrush designed for regular home use."
    },
    {
        id: "prod_36",
        title: "Compact Ionic Hair Dryer",
        category: "Electronics",
        price: 2199,
        stock: 12,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500",
        description: "A compact hair dryer with multiple heat settings for everyday at-home hair drying and styling."
    },
    {
        id: "prod_37",
        title: "6-Outlet Surge Protector Power Strip",
        category: "Electronics",
        price: 899,
        stock: 18,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
        description: "Connect and organize multiple household electronics with a handy multi-outlet power strip."
    },
    {
        id: "prod_38",
        title: "Digital Kitchen Food Scale",
        category: "Electronics",
        price: 999,
        stock: 15,
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500",
        description: "Measure ingredients for daily cooking and baking with a compact digital kitchen scale."
    }
];

let products = [];
let cart = [];
let wishlist = [];
let currentCategory = "All";
let currentUser = null;
let storeInitialized = false;
let editingProductId = null;
let noticeTimeout = null;

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    if (auth) {
        auth.onAuthStateChanged(user => {
            currentUser = user;
            const hasVerifiedPhone = Boolean(user && user.phoneNumber);
            document.getElementById("signInBtn").hidden = Boolean(user);
            document.getElementById("signOutBtn").hidden = !user;
            document.getElementById("ordersBtn").hidden = !hasVerifiedPhone;
            document.getElementById("adminBtn").hidden = !hasVerifiedPhone;
            if (user && user.phoneNumber) {
                document.getElementById("custPhone").value = user.phoneNumber;
            }
            if (user && user.email) {
                document.getElementById("custEmail").value = user.email;
            }
            loadUserShoppingData();
            if (!storeInitialized) {
                storeInitialized = true;
                initializeApp();
            }
        }, error => {
            console.error("Unable to check the existing Firebase session.", error);
            showNotice("Firebase Authentication could not verify the current session.", "error");
            loadUserShoppingData();
            if (!storeInitialized) {
                storeInitialized = true;
                initializeApp();
            }
        });
        return;
    }

    console.warn("Firebase Authentication is unavailable. Continuing in guest browsing mode.");
    document.getElementById("signOutBtn").hidden = true;
    loadUserShoppingData();
    storeInitialized = true;
    initializeApp();
});

function getUserStorageKey(name) {
    return currentUser
        ? `shopkart_${name}_${currentUser.uid}`
        : `shopkart_${name}_guest`;
}

function loadUserShoppingData() {
    cart = [];
    wishlist = [];
    for (const [name, assign] of [
        ["cart", value => { cart = value; }],
        ["wishlist", value => { wishlist = value; }]
    ]) {
        try {
            const stored = localStorage.getItem(getUserStorageKey(name));
            const parsed = stored ? JSON.parse(stored) : [];
            if (!Array.isArray(parsed) || parsed.some(item =>
                !item || typeof item.id !== "string" ||
                (name === "cart" && (!Number.isInteger(item.qty) || item.qty < 1 || item.qty > 10 ||
                    !Number.isSafeInteger(Number(item.price)) || Number(item.price) < 1)))) {
                throw new Error(`Saved ${name} has an invalid format.`);
            }
            assign(parsed);
        } catch (error) {
            console.error(`Unable to restore the saved ${name}.`, error);
        }
    }
    updateCartCount();
    renderCartDrawer();
}

function saveUserShoppingData(name, value) {
    const key = getUserStorageKey(name);
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Unable to save the ${name}.`, error);
        if (name === "cart") {
            showCheckoutError("Cart could not be saved in this browser. Check available storage.");
        }
    }
}

function showNotice(message, type = "info") {
    const notice = document.getElementById("appNotice");
    notice.textContent = message;
    notice.className = `app-notice app-notice-${type}`;
    notice.hidden = false;
    window.clearTimeout(noticeTimeout);
    noticeTimeout = window.setTimeout(() => {
        notice.hidden = true;
    }, 6000);
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

async function initializeApp() {
    const catalogStatus = document.getElementById("catalogStatus");
    products = [...defaultProducts];
    renderProducts();
    updateCartCount();

    try {
        if (!db) throw new Error("Firebase Firestore is unavailable.");
        const snapshot = await db.collection("products").get({ source: "server" });
        const catalog = new Map(defaultProducts.map(product => [product.id, product]));
        snapshot.forEach(doc => {
            catalog.set(doc.id, {
                ...(catalog.get(doc.id) || {}),
                ...doc.data(),
                id: doc.id
            });
        });
        products = Array.from(catalog.values())
            .filter(product => product.deleted !== true);
        cart = cart.map(item => {
            const currentProduct = products.find(product => product.id === item.id);
            return currentProduct ? { ...currentProduct, qty: item.qty } : item;
        });
        saveUserShoppingData("cart", cart);
        catalogStatus.textContent = `${products.length} products · Firebase catalog connected`;
        catalogStatus.classList.remove("is-error");
        renderProducts();
        renderAdminProducts();
    } catch (err) {
        console.error("Unable to load the Firebase catalog.", err);
        catalogStatus.textContent = "Firebase catalog is unavailable. Built-in products are shown; product changes and orders need a database connection.";
        catalogStatus.classList.add("is-error");
    }
}

function renderProducts(filterText = "", category = "All") {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";
    const maxPriceValue = document.getElementById("priceFilter").value;
    const maxPrice = maxPriceValue === "" ? Infinity : Number(maxPriceValue);
    const sortOrder = document.getElementById("sortProducts").value;

    const filtered = products.filter(product => {
        const title = String(product.title || "");
        const description = String(product.description || "");
        const productCategory = String(product.category || "");
        const matchesCategory = category === "All" || productCategory === category;
        const query = filterText.trim().toLowerCase();
        const matchesSearch = !query ||
            `${title} ${description} ${productCategory} ${product.brand || ""}`.toLowerCase().includes(query);
        const matchesPrice = Number.isFinite(Number(product.price)) && Number(product.price) <= maxPrice;
        return matchesCategory && matchesSearch && matchesPrice;
    });

    if (sortOrder === "price-low") filtered.sort((a, b) => Number(a.price) - Number(b.price));
    if (sortOrder === "price-high") filtered.sort((a, b) => Number(b.price) - Number(a.price));
    if (sortOrder === "newest") filtered.sort((a, b) =>
        getCreatedAtMillis(b.createdAt) - getCreatedAtMillis(a.createdAt));

    if (filtered.length === 0) {
        grid.textContent = "No products match your search. Try another keyword or category.";
        renderFeaturedProducts();
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.cursor = "pointer";
        card.addEventListener("click", () => openProductDetail(product.id));
        const rating = Number(product.rating);
        const ratingText = Number.isFinite(rating) && rating > 0
            ? `<span class="product-rating">★ ${rating.toFixed(1)}${Number.isInteger(Number(product.reviewCount)) ? ` (${Number(product.reviewCount)})` : ""}</span>`
            : "<span>No ratings yet</span>";
        const originalPrice = Number(product.originalPrice);
        const isAvailable = product.available !== false && Number(product.stock ?? 0) > 0;
        const priceInfo = Number.isFinite(originalPrice) && originalPrice > Number(product.price)
            ? `<p class="product-meta"><del>₹${originalPrice.toLocaleString("en-IN")}</del><span>${Math.round((1 - Number(product.price) / originalPrice) * 100)}% off</span></p>`
            : "";
        const isWishlisted = wishlist.some(item => item.id === product.id);
        card.innerHTML = `
            <img src="${escapeHTML(product.image || "")}" alt="${escapeHTML(product.title)}" class="product-img" onerror="this.onerror=null;this.src='images/watch.jpg.jpg'">
            <div class="product-info">
                <span class="product-category">${escapeHTML(product.category || "General")}</span>
                <h3 class="product-title">${escapeHTML(product.title)}</h3>
                <p class="product-price">₹${Number(product.price).toLocaleString("en-IN")}</p>
                ${priceInfo}
                <p class="product-meta">${ratingText}</p>
                ${isAvailable ? "" : '<p class="out-of-stock">Out of stock</p>'}
                ${isAvailable && Number.isInteger(Number(product.stock)) ? `<p class="product-meta">${Number(product.stock)} in stock</p>` : ""}
                <p class="product-desc">${escapeHTML(product.description || "")}</p>
            </div>
            <div class="card-actions">
                <button class="add-to-cart-btn" type="button" ${isAvailable ? "" : "disabled"}>Add to Cart</button>
                <button class="buy-now-btn" type="button" ${isAvailable ? "" : "disabled"}>Buy now</button>
                <button class="wishlist-toggle" type="button" aria-label="Toggle wishlist" aria-pressed="${isWishlisted}"><i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
            </div>
        `;
        card.querySelector(".add-to-cart-btn").addEventListener("click", event => {
            event.stopPropagation();
            addToCart(product.id);
        });
        card.querySelector(".buy-now-btn").addEventListener("click", event => {
            event.stopPropagation();
            addToCart(product.id, true);
        });
        card.querySelector(".wishlist-toggle").addEventListener("click", event => {
            event.stopPropagation();
            toggleWishlist(product.id);
        });
        grid.appendChild(card);
    });
    renderFeaturedProducts();
}

function renderFeaturedProducts() {
    const container = document.getElementById("featuredGrid");
    container.replaceChildren();
    const featuredProducts = products
        .filter(product => product.featured === true && product.available !== false &&
            product.deleted !== true && Number(product.stock ?? 0) > 0)
        .slice(0, 3);
    if (!featuredProducts.length) {
        container.textContent = "Featured products are not available right now.";
        return;
    }

    featuredProducts.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card featured-card";
        const image = document.createElement("img");
        image.className = "product-img";
        image.src = product.image || "images/watch.jpg.jpg";
        image.alt = product.title || "Featured product";
        image.addEventListener("error", () => { image.src = "images/watch.jpg.jpg"; }, { once: true });

        const info = document.createElement("div");
        info.className = "product-info";
        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = product.title;
        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = `₹${Number(product.price).toLocaleString("en-IN")}`;
        info.append(title, price);

        const actions = document.createElement("div");
        actions.className = "card-actions";
        const detailsButton = document.createElement("button");
        detailsButton.type = "button";
        detailsButton.className = "buy-now-btn";
        detailsButton.textContent = "View details";
        detailsButton.addEventListener("click", () => openProductDetail(product.id));
        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "add-to-cart-btn";
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => addToCart(product.id));
        actions.append(detailsButton, addButton);
        card.append(image, info, actions);
        container.appendChild(card);
    });
}

function getCreatedAtMillis(value) {
    if (value && typeof value.toDate === "function") return value.toDate().getTime();
    const timestamp = new Date(value || 0).getTime();
    return Number.isFinite(timestamp) ? timestamp : 0;
}

async function handleAddProduct(e) {
    e.preventDefault();
    let authorized;
    try {
        authorized = await hasAdminAccess();
    } catch (error) {
        console.error("Unable to verify product-management access.", error);
        showNotice("Admin access could not be verified. Please sign in again.", "error");
        return;
    }
    if (!authorized) {
        showNotice("Admin access is required to add products.", "error");
        return;
    }

    const newProd = {
        title: document.getElementById("pTitle").value.trim(),
        category: document.getElementById("pCategory").value,
        price: Number(document.getElementById("pPrice").value),
        stock: Number(document.getElementById("pStock").value),
        image: document.getElementById("pImg").value.trim(),
        description: document.getElementById("pDesc").value.trim(),
        createdAt: new Date().toISOString(),
        available: Number(document.getElementById("pStock").value) > 0,
        deleted: false
    };

    const isLocalImage = ["images/Apple-MacBook-Air-M2.jpg", "images/watch.jpg.jpg"].includes(newProd.image);
    if (newProd.title.length < 2 || newProd.title.length > 200 ||
        !Number.isSafeInteger(newProd.price) || newProd.price <= 0 ||
        !Number.isSafeInteger(newProd.stock) || newProd.stock < 0 || newProd.stock > 100000 ||
        (!isLocalImage && !/^https:\/\/.{1,2000}$/i.test(newProd.image)) ||
        newProd.description.length < 5 || newProd.description.length > 2000) {
        showNotice("Enter a product title, valid price, stock quantity, HTTPS image URL, and description.", "error");
        return;
    }

    const saveButton = document.querySelector("#addProductForm button[type='submit']");
    saveButton.disabled = true;
    try {
        if (!db) throw new Error("Firebase Firestore is unavailable.");
        if (editingProductId) {
            const updateData = { ...newProd };
            delete updateData.createdAt;
            updateData.updatedAt = new Date().toISOString();
            await db.collection("products").doc(editingProductId).set(updateData, { merge: true });
            products = products.map(product =>
                product.id === editingProductId ? { ...product, ...updateData } : product);
            editingProductId = null;
        } else {
            const documentRef = await db.collection("products").add(newProd);
            products.push({ id: documentRef.id, ...newProd });
        }
        renderProducts();
        renderAdminProducts();
        document.getElementById("addProductForm").reset();
        document.getElementById("pStock").value = "10";
        saveButton.textContent = "Save Product to Database";
        document.getElementById("cancelProductEditBtn").hidden = true;
        document.getElementById("adminModal").style.display = "none";
        showNotice("Product saved to the Firebase catalog.", "success");
    } catch (error) {
        console.error("Unable to save product.", error);
        showNotice("Product could not be saved. Check admin access and Firestore configuration.", "error");
    } finally {
        saveButton.disabled = false;
    }
}

function renderAdminProducts() {
    const container = document.getElementById("adminProducts");
    container.replaceChildren();
    document.getElementById("statProducts").textContent = String(products.length);
    if (!products.length) {
        container.textContent = "No products available to manage.";
        return;
    }
    products.forEach(product => {
        const row = document.createElement("div");
        row.className = "order-card";
        const title = document.createElement("strong");
        title.textContent = `${product.title} · ₹${Number(product.price).toLocaleString("en-IN")} · Stock: ${Number(product.stock ?? 0)}`;
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "remove-cart-btn";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            editingProductId = product.id;
            document.getElementById("pTitle").value = product.title || "";
            const categorySelect = document.getElementById("pCategory");
            if (product.category && !Array.from(categorySelect.options).some(option => option.value === product.category)) {
                const customCategory = document.createElement("option");
                customCategory.value = product.category;
                customCategory.textContent = product.category;
                categorySelect.appendChild(customCategory);
            }
            categorySelect.value = product.category || "Electronics";
            document.getElementById("pPrice").value = product.price || "";
            document.getElementById("pStock").value = Number.isInteger(Number(product.stock)) ? product.stock : 10;
            document.getElementById("pImg").value = product.image || "";
            document.getElementById("pDesc").value = product.description || "";
            document.querySelector("#addProductForm button[type='submit']").textContent = "Update Product";
            document.getElementById("cancelProductEditBtn").hidden = false;
            document.querySelector("[data-tab='addProductTab']").click();
        });
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "remove-cart-btn";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", async () => {
            await deleteProduct(product.id);
            renderAdminProducts();
        });
        row.append(title, editButton, deleteButton);
        container.appendChild(row);
    });
}

async function deleteProduct(productId) {
    let authorized;
    try {
        authorized = await hasAdminAccess();
    } catch (error) {
        console.error("Unable to verify product-management access.", error);
        showNotice("Admin access could not be verified. Please sign in again.", "error");
        return;
    }
    if (!authorized) {
        showNotice("Admin access is required to delete products.", "error");
        return;
    }
    if (!confirm("Are you sure you want to delete this product from the database?")) return;
    try {
        if (!db) throw new Error("Firebase Firestore is unavailable.");
        const reference = db.collection("products").doc(productId);
        const product = products.find(item => item.id === productId);
        if (defaultProducts.some(item => item.id === productId)) {
            await reference.set({
                ...product,
                available: false,
                deleted: true,
                stock: 0,
                updatedAt: new Date().toISOString()
            });
        } else {
            await reference.delete();
        }
        products = products.filter(product => product.id !== productId);
        cart = cart.filter(item => item.id !== productId);
        wishlist = wishlist.filter(item => item.id !== productId);
        saveUserShoppingData("cart", cart);
        saveUserShoppingData("wishlist", wishlist);
        updateCartCount();
        renderProducts();
        renderAdminProducts();
        showNotice("Product deleted from the catalog.", "success");
    } catch (error) {
        console.error("Unable to delete product.", error);
        showNotice("Product was not deleted. Check admin access and Firestore configuration.", "error");
    }
}

async function hasAdminAccess() {
    if (!currentUser) return false;
    const token = await currentUser.getIdTokenResult();
    return token.claims.admin === true;
}

function addToCart(productId, goToCheckout = false) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (product.available === false || Number(product.stock ?? 0) < 1) {
        showNotice("This product is out of stock.", "error");
        return;
    }

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        if (existing.qty >= Math.min(10, Number(product.stock ?? 0))) {
            showNotice(`Only ${Math.min(10, Number(product.stock ?? 0))} units are available.`, "error");
            return;
        }
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveUserShoppingData("cart", cart);
    updateCartCount();
    renderCartDrawer();
    if (goToCheckout) {
        renderCheckoutSummary();
        document.getElementById("checkoutModal").style.display = "flex";
    } else {
        document.getElementById("cartDrawer").classList.add("open");
    }
}

function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").innerText = String(totalCount);
}

function renderCartDrawer() {
    const container = document.getElementById("cartItems");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.textContent = "Your cart is empty.";
        document.getElementById("cartSubtotal").innerText = "₹0";
        document.getElementById("cartDelivery").innerText = "₹0";
        document.getElementById("cartTotal").innerText = "₹0";
        renderCheckoutSummary();
        return;
    }

    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.qty;
        const div = document.createElement("div");
        div.className = "cart-item-card";
        const image = document.createElement("img");
        image.className = "cart-item-img";
        image.src = item.image || "images/watch.jpg.jpg";
        image.alt = item.title || "Product image";
        image.addEventListener("error", () => { image.src = "images/watch.jpg.jpg"; }, { once: true });
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${escapeHTML(item.title)}</h4>
                <p>₹${Number(item.price).toLocaleString("en-IN")} × ${item.qty}</p>
            </div>
            <div>
                <button type="button" aria-label="Increase quantity" style="padding:2px 8px;">+</button>
                <span style="margin:0 5px;">${item.qty}</span>
                <button type="button" aria-label="Decrease quantity" style="padding:2px 8px;">-</button>
                <button type="button" class="remove-cart-btn">Remove</button>
            </div>
        `;
        const buttons = div.querySelectorAll("button");
        buttons[0].disabled = item.qty >= Math.min(10, Number(item.stock ?? 10));
        buttons[0].addEventListener("click", () => changeQty(item.id, 1));
        buttons[1].addEventListener("click", () => changeQty(item.id, -1));
        buttons[2].addEventListener("click", () => removeFromCart(item.id));
        div.prepend(image);
        container.appendChild(div);
    });

    const deliveryCharge = totalAmount > 0 && totalAmount < 999 ? 99 : 0;
    document.getElementById("cartSubtotal").innerText = `₹${totalAmount.toLocaleString("en-IN")}`;
    document.getElementById("cartDelivery").innerText = deliveryCharge
        ? `₹${deliveryCharge.toLocaleString("en-IN")}`
        : "FREE";
    document.getElementById("cartTotal").innerText = `₹${(totalAmount + deliveryCharge).toLocaleString("en-IN")}`;
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    const container = document.getElementById("checkoutSummary");
    if (!container) return;
    container.replaceChildren();
    if (!cart.length) {
        container.textContent = "Your cart is empty.";
        return;
    }

    const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
    const delivery = subtotal > 0 && subtotal < 999 ? 99 : 0;
    const lines = document.createElement("ul");
    cart.forEach(item => {
        const line = document.createElement("li");
        line.textContent = `${item.title} × ${item.qty} — ₹${(item.price * item.qty).toLocaleString("en-IN")}`;
        lines.appendChild(line);
    });
    const total = document.createElement("strong");
    total.textContent = `Total: ₹${(subtotal + delivery).toLocaleString("en-IN")}${delivery ? " (includes ₹99 delivery)" : " (free delivery)"}`;
    container.append(lines, total);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveUserShoppingData("cart", cart);
    updateCartCount();
    renderCartDrawer();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const product = products.find(p => p.id === id);
    const stock = product ? Number(product.stock ?? 10) : Number(item.stock ?? 10);
    const maxQuantity = Math.min(10, stock);
    if (delta > 0 && item.qty >= maxQuantity) {
        showNotice(`Only ${maxQuantity} units are available.`, "error");
        return;
    }
    item.qty = Math.min(maxQuantity, item.qty + delta);
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    saveUserShoppingData("cart", cart);
    updateCartCount();
    renderCartDrawer();
}

async function handleCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) {
        showCheckoutError("Your cart is empty. Add a product before checking out.");
        return;
    }

    const checkoutButton = document.querySelector("#checkoutForm .submit-order-btn");
    checkoutButton.disabled = true;
    checkoutButton.textContent = "Placing order...";
    document.getElementById("checkoutError").hidden = true;
    let endpoint = "createGuestOrder";
    try {
        const orderInput = {
            customerName: document.getElementById("custName").value.trim(),
            email: document.getElementById("custEmail").value.trim(),
            phone: document.getElementById("custPhone").value.trim(),
            address: document.getElementById("custAddress").value.trim(),
            city: document.getElementById("custCity").value.trim(),
            state: document.getElementById("custState").value.trim(),
            pincode: document.getElementById("custPincode").value.trim(),
            paymentMethod: "Demo checkout",
            items: cart.map(item => ({ id: item.id, qty: item.qty }))
        };
        const accountPhone = currentUser && currentUser.phoneNumber;
        const isGuestOrder = accountPhone !== orderInput.phone;
        endpoint = isGuestOrder ? "createGuestOrder" : "createManualOrder";
        let order;
        if (functions) {
            try {
                const response = await functions.httpsCallable(endpoint)(orderInput);
                order = response.data;
            } catch (error) {
                if (!isGuestOrder || !isCallableUnavailableError(error)) throw error;
                console.warn("Guest order callable is unavailable; using the Firestore demo fallback.", error);
                order = await createGuestOrderInFirestore(orderInput);
            }
        } else if (isGuestOrder) {
            order = await createGuestOrderInFirestore(orderInput);
        } else {
            throw new Error("Firebase Cloud Functions are unavailable for signed-in account orders.");
        }

        showOrderConfirmation(order);

        cart = [];
        saveUserShoppingData("cart", cart);
        updateCartCount();
        renderCartDrawer();
        document.getElementById("checkoutModal").style.display = "none";
        document.getElementById("checkoutForm").reset();
        document.getElementById("cartDrawer").classList.remove("open");
        await initializeApp();
    } catch (error) {
        console.error(`Unable to place order via ${endpoint}.`, {
            code: error.code || "unknown",
            message: error.message,
            error
        });
        const message = error.code === "functions/internal"
            ? "The order service encountered an unexpected error. Please try again later. If the problem continues, contact the store."
            : error.message || "Order could not be placed. Please check the details and try again.";
        showCheckoutError(message);
    } finally {
        checkoutButton.disabled = false;
        checkoutButton.textContent = "Place Order";
    }
}

function isCallableUnavailableError(error) {
    const code = String(error && error.code || "").replace(/^firebase\//, "");
    return [
        "functions/unavailable",
        "functions/deadline-exceeded",
        "functions/internal",
        "functions/unknown"
    ].includes(code) || error instanceof TypeError;
}

function createSecureUuid() {
    if (!window.crypto || typeof window.crypto.getRandomValues !== "function") {
        throw new Error("Secure random generation is unavailable in this browser. Use HTTPS or localhost.");
    }

    return typeof window.crypto.randomUUID === "function"
        ? window.crypto.randomUUID()
        : (() => {
            const bytes = window.crypto.getRandomValues(new Uint8Array(16));
            bytes[6] = (bytes[6] & 0x0f) | 0x40;
            bytes[8] = (bytes[8] & 0x3f) | 0x80;
            const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
            return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
        })();
}

function createTrackingCode() {
    return `SK-${createSecureUuid()}`;
}

async function createGuestOrderInFirestore(orderInput) {
    if (!db) {
        throw new Error("Firestore is unavailable. Check your Firebase configuration and database setup.");
    }

    const customerName = orderInput.customerName.trim();
    const email = orderInput.email.trim();
    const phone = orderInput.phone.trim();
    const address = orderInput.address.trim();
    const city = orderInput.city.trim();
    const state = orderInput.state.trim();
    const pincode = orderInput.pincode.trim();
    if (customerName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
        !/^[+()\d\s-]{7,20}$/.test(phone) || address.length < 8 ||
        city.length < 2 || state.length < 2 || !/^\d{6}$/.test(pincode)) {
        throw new Error("Enter valid customer and delivery details before placing your order.");
    }

    const items = cart.map(item => {
        const quantity = Number(item.qty);
        const price = Number(item.price);
        if (!item.id || !item.title || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > 10 ||
            !Number.isSafeInteger(price) || price < 1) {
            throw new Error("Your cart contains an invalid product or quantity. Review the cart and try again.");
        }
        return {
            id: String(item.id),
            title: String(item.title).slice(0, 200),
            price,
            qty: quantity
        };
    });
    if (!items.length || items.length > 10) {
        throw new Error("Demo checkout supports 1 to 10 different products per order.");
    }

    const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
    if (!Number.isSafeInteger(subtotal) || subtotal < 1 || subtotal > 100000000) {
        throw new Error("The order total is outside the supported demo checkout range.");
    }
    const deliveryFee = subtotal < 999 ? 99 : 0;
    const trackingCode = createTrackingCode();
    const orderId = `ORD_${createSecureUuid()}`;
    const order = {
        customerName,
        email,
        phone,
        address,
        city,
        state,
        pincode,
        userId: null,
        guestOrder: true,
        orderId,
        trackingCode,
        items,
        subtotal,
        deliveryFee,
        totalAmount: subtotal + deliveryFee,
        currency: "inr",
        paymentMethod: "Demo checkout",
        paymentStatus: "No payment collected",
        status: "Pending",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    await db.collection("orders").doc(trackingCode).set(order);
    return { ...order, createdAt: new Date() };
}

function showOrderConfirmation(order) {
    const status = document.getElementById("paymentStatus");
    status.className = "payment-status payment-status-success";
    status.replaceChildren();
    const confirmation = document.createElement("p");
    confirmation.textContent = `Demo order ${order.orderId} placed successfully. Total: ₹${Number(order.totalAmount).toLocaleString("en-IN")}. No payment was collected.`;
    status.appendChild(confirmation);
    if (order.trackingCode) appendGuestTrackingInfo(status, order);
    status.hidden = false;
}

function appendGuestTrackingInfo(container, order) {
    const tracking = document.createElement("p");
    tracking.className = "guest-tracking-code";
    tracking.textContent = `Private tracking code (save it): ${order.trackingCode}`;
    container.appendChild(tracking);

    document.getElementById("guestOrderTracker").hidden = false;
    document.getElementById("guestOrderId").value = order.orderId;
    document.getElementById("guestTrackingCode").value = order.trackingCode;
    document.getElementById("guestOrderStatus").textContent = "";
    document.getElementById("guestOrderTracker").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function lookupGuestOrder(event) {
    event.preventDefault();
    const result = document.getElementById("guestOrderStatus");
    const submitButton = event.currentTarget.querySelector("button[type='submit']");
    result.textContent = "Checking order...";
    submitButton.disabled = true;
    try {
        const orderId = document.getElementById("guestOrderId").value.trim();
        const trackingCode = document.getElementById("guestTrackingCode").value.trim();
        let order;
        if (functions) {
            try {
                const response = await functions.httpsCallable("getGuestOrderStatus")({ orderId, trackingCode });
                order = response.data;
            } catch (error) {
                console.warn("Guest order lookup callable failed; checking the direct Firestore demo order.", error);
                order = await getDirectGuestOrder(orderId, trackingCode);
            }
        } else {
            order = await getDirectGuestOrder(orderId, trackingCode);
        }
        const itemSummary = order.items.map(item => `${item.title} × ${item.qty}`).join(", ");
        result.textContent =
            `${order.orderId}: ${order.status} · ${order.paymentStatus} · ₹${Number(order.totalAmount).toLocaleString("en-IN")}. ${itemSummary}`;
    } catch (error) {
        console.error("Unable to look up guest order.", error);
        result.textContent = error.message || "Order could not be found. Check the order ID and private tracking code.";
    } finally {
        submitButton.disabled = false;
    }
}

async function getDirectGuestOrder(orderId, trackingCode) {
    if (!db || !/^SK-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(trackingCode)) {
        throw new Error("Order not found. Check the order ID and private tracking code.");
    }
    const snapshot = await db.collection("orders").doc(trackingCode).get();
    if (!snapshot.exists) {
        throw new Error("Order not found. Check the order ID and private tracking code.");
    }
    const order = snapshot.data();
    if (order.guestOrder !== true || order.trackingCode !== trackingCode || order.orderId !== orderId) {
        throw new Error("Order not found. Check the order ID and private tracking code.");
    }
    return order;
}

function showCheckoutError(message) {
    const errorMessage = document.getElementById("checkoutError");
    errorMessage.textContent = message;
    errorMessage.hidden = false;
}

function toggleWishlist(productId) {
    if (wishlist.some(item => item.id === productId)) {
        wishlist = wishlist.filter(item => item.id !== productId);
    } else {
        const product = products.find(item => item.id === productId);
        if (product) wishlist.push({ id: product.id });
    }
    saveUserShoppingData("wishlist", wishlist);
    renderProducts(document.getElementById("searchInput").value, currentCategory);
    renderWishlist();
}

function renderWishlist() {
    const container = document.getElementById("wishlistItems");
    container.replaceChildren();
    const savedProducts = wishlist
        .map(saved => products.find(product => product.id === saved.id))
        .filter(Boolean);
    if (!savedProducts.length) {
        container.textContent = "Your wishlist is empty.";
        return;
    }
    savedProducts.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";
        const image = document.createElement("img");
        image.className = "product-img";
        image.src = product.image || "images/watch.jpg.jpg";
        image.alt = product.title || "Product image";
        image.addEventListener("error", () => { image.src = "images/watch.jpg.jpg"; }, { once: true });
        const title = document.createElement("h3");
        title.className = "product-title product-info";
        title.textContent = product.title;
        const price = document.createElement("p");
        price.className = "product-price product-info";
        price.textContent = `₹${Number(product.price).toLocaleString("en-IN")}`;
        const actions = document.createElement("div");
        actions.className = "card-actions";
        const addButton = document.createElement("button");
        addButton.className = "add-to-cart-btn";
        addButton.type = "button";
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => addToCart(product.id));
        const removeButton = document.createElement("button");
        removeButton.className = "remove-cart-btn";
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => toggleWishlist(product.id));
        actions.append(addButton, removeButton);
        card.append(image, title, price, actions);
        container.appendChild(card);
    });
}

async function showMyOrders() {
    if (!currentUser || !currentUser.phoneNumber) {
        showNotice("My Orders requires a signed-in account with a verified phone number.", "error");
        return;
    }
    const container = document.getElementById("customerOrders");
    container.textContent = "Loading orders...";
    document.getElementById("ordersModal").style.display = "flex";
    try {
        const getOrders = functions.httpsCallable("getMyOrders");
        const response = await getOrders();
        renderOrderCards(container, response.data.orders, false);
    } catch (error) {
        console.error("Unable to load customer orders.", error);
        container.textContent = "Orders could not be loaded. Check your connection and try again.";
    }
}

function renderOrderCards(container, orders, isAdmin) {
    container.replaceChildren();
    if (!orders.length) {
        container.textContent = "No orders found.";
        return;
    }
    orders.forEach(order => {
        const card = document.createElement("article");
        card.className = isAdmin ? "order-card" : "customer-order-card";
        const heading = document.createElement("strong");
        heading.textContent = `Order ${order.orderId}`;
        const detail = document.createElement("p");
        detail.textContent = `${order.customerName || "Customer"} · ${order.email || "Email unavailable"} · ${order.phone || "Phone unavailable"} · ₹${Number(order.totalAmount || 0).toLocaleString("en-IN")}`;
        const items = document.createElement("p");
        items.textContent = Array.isArray(order.items)
            ? order.items.map(item => `${item.title || item.id} × ${item.qty}`).join(", ")
            : "Order items unavailable.";
        const status = document.createElement("p");
        status.className = "order-status";
        status.textContent = `Status: ${order.status || "Unavailable"} · Payment: ${order.paymentStatus || "Unavailable"}`;
        const delivery = document.createElement("p");
        delivery.textContent = [order.address, order.city, order.state, order.pincode].filter(Boolean).join(", ");
        const created = document.createElement("p");
        const createdAt = order.createdAt ? new Date(order.createdAt) : null;
        created.textContent = createdAt && !Number.isNaN(createdAt.getTime())
            ? `Placed ${createdAt.toLocaleString()}`
            : "";
        card.append(heading, detail, items, status, delivery, created);

        if (!isAdmin && order.status === "Pending") {
            const cancelButton = document.createElement("button");
            cancelButton.className = "remove-cart-btn";
            cancelButton.type = "button";
            cancelButton.textContent = "Cancel order";
            cancelButton.addEventListener("click", async () => {
                cancelButton.disabled = true;
                try {
                    await functions.httpsCallable("cancelMyOrder")({
                        orderId: order.orderId
                    });
                    await showMyOrders();
                } catch (error) {
                    console.error("Unable to cancel order.", error);
                    cancelButton.disabled = false;
                    showNotice(error.message || "This order could not be cancelled.", "error");
                }
            });
            card.appendChild(cancelButton);
        }

        if (isAdmin) {
            const statusSelect = document.createElement("select");
            statusSelect.setAttribute("aria-label", `Update status for ${order.orderId}`);
            const transitions = {
                "Pending": ["Confirmed", "Cancelled"],
                "Confirmed": ["Shipped"],
                "Shipped": ["Delivered"]
            };
            const statuses = [...(transitions[order.status] || [])];
            if (order.status && !statuses.includes(order.status)) statuses.unshift(order.status);
            statuses.forEach(value => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = value;
                option.selected = order.status === value;
                statusSelect.appendChild(option);
            });
            statusSelect.value = order.status;
            const updateButton = document.createElement("button");
            updateButton.type = "button";
            updateButton.className = "remove-cart-btn";
            updateButton.textContent = "Update status";
            updateButton.disabled = statuses.length === 1 || statusSelect.value === order.status;
            statusSelect.addEventListener("change", () => {
                updateButton.disabled = statusSelect.value === order.status;
            });
            updateButton.addEventListener("click", async () => {
                updateButton.disabled = true;
                try {
                    await functions.httpsCallable("updateOrderStatus")({
                        orderId: order.orderId,
                        status: statusSelect.value
                    });
                    await loadAdminOrders();
                } catch (error) {
                    console.error("Unable to update order status.", error);
                    showNotice(error.message || "Order status could not be updated.", "error");
                    updateButton.disabled = false;
                }
            });
            card.append(statusSelect, updateButton);
        }
        container.appendChild(card);
    });
}

async function loadAdminOrders() {
    const listContainer = document.getElementById("ordersList");
    listContainer.textContent = "Loading orders...";
    try {
        if (!(await hasAdminAccess())) {
            listContainer.textContent = "Administrator access is required.";
            return;
        }
        const response = await functions.httpsCallable("getAdminOrders")();
        renderOrderCards(listContainer, response.data.orders, true);
        updateAdminStats(response.data.orders);
    } catch (error) {
        console.error("Unable to load administrator orders.", error);
        listContainer.textContent = "Orders could not be loaded. Check your administrator access.";
    }
}

function updateAdminStats(orders) {
    document.getElementById("statProducts").textContent = String(products.length);
    document.getElementById("statOrders").textContent = String(orders.length);
    document.getElementById("statPending").textContent =
        String(orders.filter(order => order.status === "Pending").length);
    document.getElementById("statDelivered").textContent =
        String(orders.filter(order => order.status === "Delivered").length);
}

function setupEventListeners() {
    document.getElementById("signInBtn").addEventListener("click", openAuthModal);
    document.getElementById("signOutBtn").addEventListener("click", async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Unable to sign out.", error);
            showNotice("You could not be signed out. Please try again.", "error");
        }
    });
    document.getElementById("closeAuthModal").addEventListener("click", closeAuthModal);
    document.getElementById("authModal").addEventListener("click", event => {
        if (event.target.id === "authModal") closeAuthModal();
    });
    document.getElementById("loginForm").addEventListener("submit", handleEmailSignIn);
    document.getElementById("forgotPasswordBtn").addEventListener("click", openPasswordReset);
    document.getElementById("backToLoginBtn").addEventListener("click", showLoginForm);
    document.getElementById("passwordResetForm").addEventListener("submit", handlePasswordReset);

    document.getElementById("searchButton").addEventListener("click", () => {
        renderProducts(document.getElementById("searchInput").value, currentCategory);
        document.getElementById("productsSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.getElementById("searchInput").addEventListener("input", (e) => {
        renderProducts(e.target.value, currentCategory);
    });
    document.getElementById("priceFilter").addEventListener("input", () => {
        renderProducts(document.getElementById("searchInput").value, currentCategory);
    });
    document.getElementById("sortProducts").addEventListener("change", () => {
        renderProducts(document.getElementById("searchInput").value, currentCategory);
    });

    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", (event) => {
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            event.currentTarget.classList.add("active");
            currentCategory = event.currentTarget.getAttribute("data-category");
            renderProducts(document.getElementById("searchInput").value, currentCategory);
        });
    });

    document.getElementById("cartBtn").addEventListener("click", () => {
        document.getElementById("cartDrawer").classList.add("open");
        renderCartDrawer();
    });
    document.getElementById("closeCart").addEventListener("click", () => {
        document.getElementById("cartDrawer").classList.remove("open");
    });
    document.getElementById("wishlistBtn").addEventListener("click", () => {
        renderWishlist();
        document.getElementById("wishlistModal").style.display = "flex";
    });
    document.querySelector(".close-wishlist").addEventListener("click", () => {
        document.getElementById("wishlistModal").style.display = "none";
    });
    document.getElementById("wishlistModal").addEventListener("click", event => {
        if (event.target.id === "wishlistModal") event.currentTarget.style.display = "none";
    });
    document.getElementById("ordersBtn").addEventListener("click", showMyOrders);
    document.querySelector(".close-orders").addEventListener("click", () => {
        document.getElementById("ordersModal").style.display = "none";
    });
    document.getElementById("ordersModal").addEventListener("click", event => {
        if (event.target.id === "ordersModal") event.currentTarget.style.display = "none";
    });

    document.getElementById("checkoutBtn").addEventListener("click", () => {
        if (cart.length === 0) {
            showNotice("Your cart is empty. Add a product before checking out.", "error");
            return;
        }
        renderCheckoutSummary();
        document.getElementById("checkoutModal").style.display = "flex";
    });
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("checkoutModal").style.display = "none";
    });
    document.getElementById("productModal").addEventListener("click", event => {
        if (event.target.id === "productModal" || event.target.closest(".close-product")) {
            closeProductDetail();
        }
    });
    document.getElementById("checkoutForm").addEventListener("submit", handleCheckout);
    document.getElementById("guestOrderTrackerForm").addEventListener("submit", lookupGuestOrder);

    document.getElementById("adminBtn").addEventListener("click", async () => {
        if (!currentUser) {
            showNotice("Admin access requires a signed-in administrator account with a verified phone number.", "error");
            return;
        }
        try {
            if (!(await hasAdminAccess())) {
                await functions.httpsCallable("claimAdminAccess")();
                await currentUser.getIdToken(true);
            }
            if (!(await hasAdminAccess())) {
                throw new Error("Administrator role was not granted to this account.");
            }
            document.getElementById("adminModal").style.display = "flex";
            renderAdminProducts();
            loadAdminOrders();
        } catch (error) {
            console.error("Administrator access check failed.", error);
            showNotice("Admin access is not configured for this account. Set the ADMIN_UID Functions parameter to the administrator's Firebase UID and deploy Functions.", "error");
        }
    });
    document.querySelector(".close-admin").addEventListener("click", () => {
        document.getElementById("adminModal").style.display = "none";
    });

    document.querySelectorAll(".admin-tab-btn").forEach(tabBtn => {
        tabBtn.addEventListener("click", (event) => {
            document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
            
            event.currentTarget.classList.add("active");
            const targetTab = event.currentTarget.getAttribute("data-tab");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    document.getElementById("addProductForm").addEventListener("submit", handleAddProduct);
    document.getElementById("cancelProductEditBtn").addEventListener("click", () => {
        editingProductId = null;
        document.getElementById("addProductForm").reset();
        document.getElementById("pStock").value = "10";
        document.querySelector("#addProductForm button[type='submit']").textContent = "Save Product to Database";
        document.getElementById("cancelProductEditBtn").hidden = true;
    });
}

function openAuthModal() {
    document.getElementById("authModal").style.display = "flex";
    document.getElementById("authModal").setAttribute("aria-hidden", "false");
    showLoginForm();
    if (!auth) {
        showAuthMessage("loginMessage", "Sign-in is unavailable because Firebase Authentication could not be initialized.", true);
    }
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
    document.getElementById("authModal").setAttribute("aria-hidden", "true");
}

function showLoginForm() {
    document.getElementById("loginPanel").hidden = false;
    document.getElementById("passwordResetPanel").hidden = true;
    document.getElementById("passwordResetMessage").textContent = "";
    document.getElementById("loginMessage").textContent = "";
}

function openPasswordReset() {
    const loginEmail = document.getElementById("loginEmail").value.trim();
    document.getElementById("resetEmail").value = loginEmail;
    document.getElementById("loginPanel").hidden = true;
    document.getElementById("passwordResetPanel").hidden = false;
    document.getElementById("passwordResetMessage").textContent = "";
    document.getElementById("resetEmail").focus();
}

function showAuthMessage(elementId, message, isError = false) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.toggle("is-error", isError);
    element.classList.toggle("is-success", !isError);
}

async function handleEmailSignIn(event) {
    event.preventDefault();
    const button = document.getElementById("loginSubmitBtn");
    if (!auth) {
        showAuthMessage("loginMessage", "Sign-in is currently unavailable. Please try again later.", true);
        return;
    }

    button.disabled = true;
    button.textContent = "Signing in...";
    document.getElementById("loginMessage").textContent = "";
    try {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        await auth.signInWithEmailAndPassword(email, password);
        closeAuthModal();
        document.getElementById("loginForm").reset();
    } catch (error) {
        console.error("Unable to sign in with email and password.", error);
        const friendlyMessages = {
            "auth/invalid-email": "Enter a valid email address.",
            "auth/user-not-found": "No account was found for that email address.",
            "auth/wrong-password": "The password is incorrect. Try again or reset your password.",
            "auth/invalid-credential": "The email or password is incorrect.",
            "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
            "auth/network-request-failed": "Network error. Check your connection and try again.",
            "auth/operation-not-allowed": "Email and password sign-in is not enabled for this Firebase project."
        };
        showAuthMessage("loginMessage", friendlyMessages[error.code] || "Sign-in failed. Check your details and try again.", true);
    } finally {
        button.disabled = false;
        button.textContent = "Sign in";
    }
}

async function handlePasswordReset(event) {
    event.preventDefault();
    const button = document.getElementById("passwordResetSubmitBtn");
    if (!auth) {
        showAuthMessage("passwordResetMessage", "Password reset is unavailable because Firebase Authentication could not be initialized.", true);
        return;
    }

    button.disabled = true;
    button.textContent = "Sending...";
    try {
        const email = document.getElementById("resetEmail").value.trim();
        await auth.sendPasswordResetEmail(email);
        showAuthMessage("passwordResetMessage", "If a ShopKart account is registered with that email, a password reset link has been sent.");
    } catch (error) {
        console.error("Unable to send password reset email.", error);
        const friendlyMessages = {
            "auth/invalid-email": "Enter a valid email address.",
            "auth/user-not-found": "No account was found for that email address. Check the email and try again.",
            "auth/too-many-requests": "Too many reset attempts. Please wait a moment before trying again.",
            "auth/network-request-failed": "Network error. Check your connection and try again.",
            "auth/operation-not-allowed": "Email/password authentication is not enabled for this Firebase project."
        };
        showAuthMessage("passwordResetMessage", friendlyMessages[error.code] || "We couldn't send the reset link. Check the email and try again.", true);
    } finally {
        button.disabled = false;
        button.textContent = "Send reset link";
    }
}

// Product par click karne par detail modal kholne ke liye
function openProductDetail(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;
    const stock = Number(prod.stock ?? 0);
    const isAvailable = prod.available !== false && stock > 0;

    const container = document.getElementById("modalProductDetails");
    const rating = Number(prod.rating);
    const ratingText = Number.isFinite(rating) && rating > 0
        ? `★ ${rating.toFixed(1)} (${Number(prod.reviewCount) || 0} reviews)`
        : "No customer ratings yet.";
    container.innerHTML = `
        <img src="${escapeHTML(prod.image || "")}" alt="${escapeHTML(prod.title)}" class="product-detail-img" onerror="this.onerror=null;this.src='images/watch.jpg.jpg'">
        <span class="product-category">${escapeHTML(prod.category || "General")}</span>
        <h2 class="product-detail-title">${escapeHTML(prod.title)}</h2>
        <h3 class="product-detail-price">₹${Number(prod.price).toLocaleString("en-IN")}</h3>
        <p class="product-rating">${ratingText}</p>
        <p class="product-detail-description">${escapeHTML(prod.description || "No description available.")}</p>
        <label for="detailQuantity">Quantity</label>
        <input id="detailQuantity" type="number" min="1" max="${Math.min(10, stock)}" value="1" ${isAvailable ? "" : "disabled"}>
        <button type="button" class="product-detail-cart" ${isAvailable ? "" : "disabled"}>Add to Cart</button>
        <button type="button" class="product-detail-buy" ${isAvailable ? "" : "disabled"}>Buy now</button>
        ${isAvailable ? `<p class="product-meta">${stock} in stock</p>` : '<p class="out-of-stock">Out of stock</p>'}
        <button type="button" class="product-detail-wishlist">${wishlist.some(item => item.id === prod.id) ? "Remove from" : "Add to"} wishlist</button>
    `;

    const addQuantityToCart = goToCheckout => {
        const quantity = Number(container.querySelector("#detailQuantity").value);
        const existing = cart.find(item => item.id === prod.id);
        const maxQuantity = Math.min(10, stock);
        if (!Number.isInteger(quantity) || quantity < 1 ||
            quantity + (existing ? existing.qty : 0) > maxQuantity) {
            showNotice(`Choose a quantity that keeps your cart at or below ${maxQuantity} available units.`, "error");
            return;
        }
        if (existing) existing.qty += quantity;
        else cart.push({ ...prod, qty: quantity });
        saveUserShoppingData("cart", cart);
        updateCartCount();
        renderCartDrawer();
        if (goToCheckout) {
            document.getElementById("checkoutModal").style.display = "flex";
        } else {
            document.getElementById("cartDrawer").classList.add("open");
        }
        closeProductDetail();
    };
    container.querySelector(".product-detail-cart").addEventListener("click", () => {
        addQuantityToCart(false);
    });
    container.querySelector(".product-detail-buy").addEventListener("click", () => {
        addQuantityToCart(true);
    });
    const wishlistButton = container.querySelector(".product-detail-wishlist");
    wishlistButton.addEventListener("click", () => {
        toggleWishlist(prod.id);
        wishlistButton.textContent = wishlist.some(item => item.id === prod.id)
            ? "Remove from wishlist"
            : "Add to wishlist";
    });
    const modal = document.getElementById("productModal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
}

function closeProductDetail() {
    const modal = document.getElementById("productModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
}