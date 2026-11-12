const { onCall, HttpsError } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { defineString } = require("firebase-functions/params");
const { createHash, randomBytes, timingSafeEqual } = require("node:crypto");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore, FieldValue, Timestamp } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();
const adminUid = defineString("ADMIN_UID");

const catalog = {
    prod_1: {
        title: "Apple MacBook Air M2", price: 99990, category: "Electronics", stock: 10,
        image: "images/Apple-MacBook-Air-M2.jpg",
        description: "Supercharged by M2 chip, 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage."
    },
    prod_2: {
        title: "Sony WH-1000XM5 Headphones", price: 29990, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        description: "Industry-leading noise canceling with two processors and 8 microphones for crystal clear audio."
    },
    prod_3: {
        title: 'Dell UltraSharp 27" 4K Monitor', price: 42500, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        description: "Stunning 4K UHD resolution with IPS technology, 99% sRGB color accuracy, and USB-C connectivity."
    },
    prod_4: {
        title: "Logitech MX Master 3S Wireless Mouse", price: 8995, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        description: "High-precision 8000 DPI optical sensor, quiet clicks, electromagnetic MagSpeed scrolling wheel, and ergonomic comfort."
    },
    prod_5: {
        title: "JBL Flip 6 Portable Bluetooth Speaker", price: 9999, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        description: "Bold sound, IP67 waterproof and dustproof design with 12 hours of playtime under a single charge."
    },
    prod_6: {
        title: "Amazon Watch series 6", price: 44999, category: "Electronics", stock: 10,
        image: "images/watch.jpg.jpg",
        description: "Stay connected on the go with a stylish smartwatch featuring activity tracking, notifications, and an easy-to-read display."
    },
    prod_7: {
        title: "Samsung Galaxy S24", price: 74999, category: "Mobiles", stock: 10,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        description: "A powerful everyday smartphone with a vivid display, advanced camera system, and all-day battery life."
    },
    prod_8: {
        title: "Apple iPhone 15", price: 69999, category: "Mobiles", stock: 10,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        description: "Capture detailed photos and enjoy smooth performance in a sleek smartphone designed for everyday use."
    },
    prod_9: {
        title: "Lenovo IdeaPad Slim 5", price: 68990, category: "Laptops", stock: 10,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        description: "A slim, versatile laptop for work and study with a crisp display, responsive performance, and portable design."
    },
    prod_10: {
        title: "Canon EOS 2000D DSLR Camera", price: 37999, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        description: "Explore photography with a beginner-friendly DSLR, interchangeable lenses, and detailed image capture."
    },
    prod_11: {
        title: "Classic Cotton Crewneck T-Shirt", price: 799, category: "Fashion", stock: 25,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        description: "A soft, breathable everyday cotton T-shirt with a comfortable crew neckline and easy-to-style fit."
    },
    prod_12: {
        title: "Nike Air Running Shoes", price: 5495, category: "Shoes", stock: 15,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Lightweight running shoes with a cushioned feel and a grippy outsole for daily training and walks."
    },
    prod_13: {
        title: "Everyday Crossbody Bag", price: 1899, category: "Accessories", stock: 18,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        description: "A compact crossbody bag with an adjustable strap and practical space for daily essentials."
    },
    prod_14: {
        title: "Minimal Ceramic Table Lamp", price: 2499, category: "Home", stock: 12,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        description: "Add warm ambient light to a bedside table or living space with a clean, modern lamp design."
    },
    prod_15: {
        title: "Daily Skincare Essentials Set", price: 1299, category: "Beauty", stock: 20,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "A simple skincare routine set with gentle daily-care essentials for a fresh, comfortable feel."
    },
    prod_16: {
        title: "Stainless Steel French Press", price: 1499, category: "Home", stock: 14,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        description: "Brew rich coffee at home with a reusable French press designed for easy pouring and cleanup."
    },
    prod_17: {
        title: "Ergonomic Mesh Office Chair", price: 8999, category: "Home", stock: 8,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
        description: "A supportive office chair with a breathable mesh back and adjustable seating for your workspace."
    },
    prod_18: {
        title: "Classic Stainless Steel Watch", price: 3299, category: "Accessories", stock: 10,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        description: "A versatile analog watch with a clean dial and stainless-steel styling for everyday wear."
    },
    prod_19: {
        title: "Samsung Galaxy Tab S9 FE", price: 36999, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        description: "A versatile tablet for reading, streaming, and creative work with a bright display and portable design."
    },
    prod_20: {
        title: "Keychron K2 Wireless Mechanical Keyboard", price: 8499, category: "Electronics", stock: 12,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        description: "A compact mechanical keyboard with wireless connectivity and tactile keys for work or gaming."
    },
    prod_21: {
        title: "TP-Link Archer AX55 Wi-Fi 6 Router", price: 7999, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
        description: "Upgrade your home network with a dual-band Wi-Fi 6 router designed for smooth streaming and connected devices."
    },
    prod_22: {
        title: "Anker 20,000mAh Power Bank", price: 3999, category: "Electronics", stock: 20,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
        description: "Keep compatible devices charged on the go with a high-capacity portable battery and convenient USB charging."
    },
    prod_23: {
        title: "Apple AirPods Pro (2nd Generation)", price: 24900, category: "Electronics", stock: 10,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
        description: "True wireless earbuds with an immersive listening experience, active noise cancellation, and a compact charging case."
    },
    prod_24: {
        title: "SanDisk Extreme Portable SSD 1TB", price: 10999, category: "Electronics", stock: 8,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
        description: "Carry and back up files with a compact 1TB portable solid-state drive built for everyday use."
    },
    prod_25: {
        title: "Insulated Stainless Steel Water Bottle", price: 799, category: "Daily Use", stock: 30,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        description: "A reusable insulated bottle for carrying water to work, class, the gym, or while traveling."
    },
    prod_26: {
        title: "Two-Compartment Lunch Box", price: 599, category: "Daily Use", stock: 25,
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500",
        description: "Pack meals and snacks in a practical reusable lunch box with separate compartments."
    },
    prod_27: {
        title: "Soft Cotton Bath Towel Set", price: 999, category: "Daily Use", stock: 20,
        image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?w=500",
        description: "A set of soft everyday cotton towels for a comfortable, absorbent post-shower routine."
    },
    prod_28: {
        title: "Reusable Grocery Tote Bags (Set of 3)", price: 349, category: "Daily Use", stock: 40,
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500",
        description: "Carry shopping and daily essentials in a set of reusable bags that fold away for storage."
    },
    prod_29: {
        title: "Stackable Food Storage Containers", price: 699, category: "Daily Use", stock: 18,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
        description: "Keep pantry ingredients and leftovers organized with a set of reusable stackable containers."
    },
    prod_30: {
        title: "Rechargeable LED Desk Lamp", price: 1199, category: "Daily Use", stock: 14,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        description: "Add focused light to reading or desk tasks with a compact lamp suited to everyday use."
    },
    prod_31: {
        title: "Compact Home Cleaning Brush Set", price: 449, category: "Daily Use", stock: 22,
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500",
        description: "A practical set of reusable brushes for routine cleaning around the kitchen and home."
    },
    prod_32: {
        title: "Everyday Desk Organizer", price: 549, category: "Daily Use", stock: 16,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
        description: "Keep pens, notes, and small accessories tidy with a simple organizer for your desk or study space."
    },
    prod_33: {
        title: "Automatic Electric Kettle", price: 1499, category: "Electronics", stock: 16,
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b171e3?w=500",
        description: "Quickly boil water for tea, coffee, and everyday cooking with a countertop electric kettle."
    },
    prod_34: {
        title: "USB-C 30W Fast Wall Charger", price: 1299, category: "Electronics", stock: 24,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        description: "A compact USB-C wall adapter for charging compatible phones, earbuds, and other personal devices."
    },
    prod_35: {
        title: "Rechargeable Electric Toothbrush", price: 1899, category: "Electronics", stock: 14,
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500",
        description: "Make daily brushing simple with a rechargeable toothbrush designed for regular home use."
    },
    prod_36: {
        title: "Compact Ionic Hair Dryer", price: 2199, category: "Electronics", stock: 12,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500",
        description: "A compact hair dryer with multiple heat settings for everyday at-home hair drying and styling."
    },
    prod_37: {
        title: "6-Outlet Surge Protector Power Strip", price: 899, category: "Electronics", stock: 18,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
        description: "Connect and organize multiple household electronics with a handy multi-outlet power strip."
    },
    prod_38: {
        title: "Digital Kitchen Food Scale", price: 999, category: "Electronics", stock: 15,
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500",
        description: "Measure ingredients for daily cooking and baking with a compact digital kitchen scale."
    }
};

function requirePhoneAuth(request) {
    if (!request.auth || typeof request.auth.token.phone_number !== "string") {
        throw new HttpsError("unauthenticated", "Sign in with a verified phone number first.");
    }

    return {
        uid: request.auth.uid,
        phoneNumber: request.auth.token.phone_number
    };
}

function requireAdmin(request) {
    const user = requirePhoneAuth(request);
    if (request.auth.token.admin !== true) {
        throw new HttpsError("permission-denied", "Administrator access is required.");
    }
    return user;
}

function validateCustomer(data) {
    const customerName = typeof data.customerName === "string" ? data.customerName.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
    const address = typeof data.address === "string" ? data.address.trim() : "";
    const city = typeof data.city === "string" ? data.city.trim() : "";
    const state = typeof data.state === "string" ? data.state.trim() : "";
    const pincode = typeof data.pincode === "string" ? data.pincode.trim() : "";

    if (customerName.length < 2 || customerName.length > 100) {
        throw new HttpsError("invalid-argument", "Enter a valid name.");
    }
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        throw new HttpsError("invalid-argument", "Enter a valid email address.");
    }
    if (!/^[+()\d\s-]{7,20}$/.test(phone)) {
        throw new HttpsError("invalid-argument", "Enter a valid phone number.");
    }
    if (address.length < 8 || address.length > 500) {
        throw new HttpsError("invalid-argument", "Enter a valid delivery address.");
    }
    if (city.length < 2 || city.length > 100 || state.length < 2 || state.length > 100 ||
        !/^\d{6}$/.test(pincode)) {
        throw new HttpsError("invalid-argument", "Enter a valid city, state, and six-digit PIN code.");
    }

    return { customerName, email, phone, address, city, state, pincode };
}

function calculateDeliveryFee(subtotal) {
    return subtotal > 0 && subtotal < 999 ? 99 : 0;
}

function getOrderSubtotal(items) {
    const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
    if (!Number.isSafeInteger(subtotal)) {
        throw new HttpsError("invalid-argument", "Your order total is too large.");
    }
    return subtotal;
}

async function saveDemoOrder(orderRef, customer, userId, requestedItems, extraFields = {}) {
    if (!Array.isArray(requestedItems) || requestedItems.length === 0 || requestedItems.length > 20) {
        throw new HttpsError("invalid-argument", "Your cart is empty or invalid.");
    }
    const productIds = requestedItems.map(item => item && item.id);
    if (productIds.some(id => typeof id !== "string" || id.length > 128) ||
        new Set(productIds).size !== productIds.length) {
        throw new HttpsError("invalid-argument", "Your cart contains an invalid or repeated product.");
    }

    const productRefs = productIds.map(id => db.collection("products").doc(id));
    return db.runTransaction(async transaction => {
        const snapshots = await Promise.all(productRefs.map(reference => transaction.get(reference)));
        const resolvedProducts = requestedItems.map((item, index) => {
            if (!Number.isInteger(item.qty) || item.qty < 1 || item.qty > 10) {
                throw new HttpsError("invalid-argument", "Your cart contains an invalid quantity.");
            }
            const snapshot = snapshots[index];
            const product = snapshot.exists
                ? { ...(catalog[item.id] || {}), ...snapshot.data() }
                : catalog[item.id];
            if (!product || product.deleted === true || product.available === false) {
                throw new HttpsError("failed-precondition", "A product in your cart is no longer available.");
            }
            const stock = Number.isSafeInteger(product.stock) ? product.stock : 0;
            if (!Number.isSafeInteger(product.price) || product.price < 1 ||
                !Number.isSafeInteger(product.price * item.qty) ||
                typeof product.title !== "string" || product.title.length > 200 ||
                stock < item.qty) {
                throw new HttpsError("failed-precondition", "A product in your cart has invalid pricing or insufficient stock.");
            }
            return {
                id: item.id,
                title: product.title,
                price: product.price,
                qty: item.qty,
                stock,
                product
            };
        });

        const items = resolvedProducts.map(({ id, title, price, qty }) => ({ id, title, price, qty }));
        const subtotal = getOrderSubtotal(items);
        const deliveryFee = calculateDeliveryFee(subtotal);
        const totalAmount = subtotal + deliveryFee;
        if (!Number.isSafeInteger(totalAmount)) {
            throw new HttpsError("invalid-argument", "Your order total is too large.");
        }

        resolvedProducts.forEach((item, index) => {
            const nextStock = item.stock - item.qty;
            const stockUpdate = {
                stock: nextStock,
                available: nextStock > 0,
                updatedAt: FieldValue.serverTimestamp()
            };
            if (snapshots[index].exists) {
                transaction.update(productRefs[index], stockUpdate);
            } else {
                transaction.set(productRefs[index], {
                    ...item.product,
                    ...stockUpdate,
                    deleted: false
                });
            }
        });
        const orderId = `ORD_${orderRef.id}`;
        transaction.set(orderRef, {
            ...customer,
            ...extraFields,
            userId,
            guestOrder: userId === null,
            orderId,
            items,
            subtotal,
            deliveryFee,
            totalAmount,
            currency: "inr",
            paymentMethod: "Demo checkout",
            paymentStatus: "No payment collected",
            status: "Pending",
            createdAt: FieldValue.serverTimestamp()
        });
        return { orderId, items, subtotal, deliveryFee, totalAmount };
    });
}

async function cancelDemoOrder(orderRef, userId = null) {
    await db.runTransaction(async transaction => {
        const orderSnapshot = await transaction.get(orderRef);
        if (!orderSnapshot.exists || (userId && orderSnapshot.data().userId !== userId)) {
            throw new HttpsError("not-found", "Order not found.");
        }
        const order = orderSnapshot.data();
        if (order.status !== "Pending" || order.paymentMethod !== "Demo checkout") {
            throw new HttpsError("failed-precondition", "Only pending demo orders can be cancelled.");
        }
        if (!Array.isArray(order.items)) {
            throw new HttpsError("failed-precondition", "Order inventory data is invalid.");
        }
        const productRefs = order.items.map(item => db.collection("products").doc(item.id));
        const productSnapshots = await Promise.all(productRefs.map(reference => transaction.get(reference)));
        productSnapshots.forEach((snapshot, index) => {
            if (!snapshot.exists || snapshot.data().deleted === true) return;
            const currentStock = Number.isSafeInteger(snapshot.data().stock) ? snapshot.data().stock : 0;
            const restoredStock = currentStock + order.items[index].qty;
            if (!Number.isSafeInteger(restoredStock) || restoredStock > 100000) {
                throw new HttpsError("failed-precondition", "Product stock cannot be restored safely.");
            }
            transaction.update(productRefs[index], {
                stock: restoredStock,
                available: restoredStock > 0,
                updatedAt: FieldValue.serverTimestamp()
            });
        });
        transaction.update(orderRef, {
            status: "Cancelled",
            updatedAt: FieldValue.serverTimestamp()
        });
    });
}

function hashValue(value) {
    return createHash("sha256").update(value).digest("hex");
}

function logOrderFailure(functionName, stage, error) {
    const details = error instanceof Error
        ? { stage, message: error.message, stack: error.stack }
        : { stage, message: String(error) };
    logger.error(`${functionName} failed unexpectedly`, details);
}

async function applyGuestRateLimit(request, action, limit) {
    const rawRequest = request.rawRequest;
    const clientIp = rawRequest && (
        rawRequest.ip ||
        (rawRequest.socket && rawRequest.socket.remoteAddress)
    );
    if (typeof clientIp !== "string" || !clientIp) {
        throw new HttpsError("unavailable", "Guest checkout is temporarily unavailable. Please try again later.");
    }

    const now = Date.now();
    const windowMs = 60 * 60 * 1000;
    const documentId = `${action}_${hashValue(clientIp)}`;
    const rateLimitRef = db.collection("_guestRateLimits").doc(documentId);
    await db.runTransaction(async transaction => {
        const snapshot = await transaction.get(rateLimitRef);
        const current = snapshot.exists ? snapshot.data() : {};
        const windowStart = Number(current.windowStart) || now;
        const count = now - windowStart >= windowMs ? 0 : Number(current.count) || 0;
        if (count >= limit) {
            throw new HttpsError("resource-exhausted", "Too many requests. Please try again later.");
        }
        transaction.set(rateLimitRef, {
            windowStart: count === 0 ? now : windowStart,
            count: count + 1,
            expiresAt: Timestamp.fromMillis(now + windowMs)
        });
    });
}

function isMatchingTrackingCode(suppliedCode, savedHash) {
    if (typeof suppliedCode !== "string" || !/^[A-Za-z0-9_-]{32}$/.test(suppliedCode) ||
        typeof savedHash !== "string" || !/^[a-f0-9]{64}$/.test(savedHash)) {
        return false;
    }
    return timingSafeEqual(
        Buffer.from(hashValue(suppliedCode), "hex"),
        Buffer.from(savedHash, "hex")
    );
}

exports.claimAdminAccess = onCall(async request => {
    const user = requirePhoneAuth(request);
    const configuredAdminUid = adminUid.value().trim();
    if (!configuredAdminUid || user.uid !== configuredAdminUid) {
        throw new HttpsError("permission-denied", "This account is not configured as the store administrator.");
    }
    const userRecord = await getAuth().getUser(user.uid);
    await getAuth().setCustomUserClaims(user.uid, { ...userRecord.customClaims, admin: true });
    return { admin: true };
});

exports.createGuestOrder = onCall(async request => {
    let stage = "rate-limit";
    try {
        await applyGuestRateLimit(request, "create", 5);
        stage = "customer-validation";
        const data = request.data || {};
        const customer = validateCustomer(data);
        if (data.paymentMethod !== "Demo checkout") {
            throw new HttpsError("invalid-argument", "Only the no-payment demo checkout is supported.");
        }

        const orderRef = db.collection("orders").doc();
        const trackingCode = randomBytes(24).toString("base64url");
        stage = "firestore-order-save";
        const order = await saveDemoOrder(orderRef, customer, null, data.items, {
            guestTrackingCodeHash: hashValue(trackingCode)
        });
        return {
            orderId: order.orderId,
            trackingCode,
            subtotal: order.subtotal,
            deliveryFee: order.deliveryFee,
            totalAmount: order.totalAmount,
            paymentStatus: "No payment collected",
            status: "Pending"
        };
    } catch (error) {
        if (error instanceof HttpsError) throw error;
        logOrderFailure("createGuestOrder", stage, error);
        throw new HttpsError("internal", "Unable to place guest order. Please try again later.");
    }
});

exports.getGuestOrderStatus = onCall(async request => {
    await applyGuestRateLimit(request, "track", 15);
    const data = request.data || {};
    if (typeof data.orderId !== "string" || !/^ORD_[A-Za-z0-9]{20}$/.test(data.orderId)) {
        throw new HttpsError("invalid-argument", "Enter a valid order ID and tracking code.");
    }
    const orderSnapshot = await db.collection("orders").doc(data.orderId.slice(4)).get();
    if (!orderSnapshot.exists) {
        throw new HttpsError("not-found", "Order not found or tracking details are incorrect.");
    }
    const order = orderSnapshot.data();
    if (order.guestOrder !== true ||
        !isMatchingTrackingCode(data.trackingCode, order.guestTrackingCodeHash)) {
        throw new HttpsError("not-found", "Order not found or tracking details are incorrect.");
    }
    return {
        orderId: order.orderId,
        status: order.status,
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        totalAmount: order.totalAmount,
        items: order.items.map(item => ({ title: item.title, qty: item.qty })),
        createdAt: order.createdAt && typeof order.createdAt.toDate === "function"
            ? order.createdAt.toDate().toISOString()
            : null
    };
});

exports.createManualOrder = onCall(async request => {
    let stage = "authentication";
    try {
        const user = requirePhoneAuth(request);
        stage = "customer-validation";
        const data = request.data || {};
        const customer = validateCustomer(data);
        if (customer.phone !== user.phoneNumber) {
            throw new HttpsError("permission-denied", "The order phone number must match your verified account.");
        }
        if (data.paymentMethod !== "Demo checkout") {
            throw new HttpsError("invalid-argument", "Only the no-payment demo checkout is supported.");
        }
        const orderRef = db.collection("orders").doc();
        stage = "firestore-order-save";
        const order = await saveDemoOrder(orderRef, customer, user.uid, data.items);
        return {
            orderId: order.orderId,
            subtotal: order.subtotal,
            deliveryFee: order.deliveryFee,
            totalAmount: order.totalAmount,
            paymentStatus: "No payment collected",
            status: "Pending"
        };
    } catch (error) {
        if (error instanceof HttpsError) throw error;
        logOrderFailure("createManualOrder", stage, error);
        throw new HttpsError("internal", "Unable to place account order. Please try again later.");
    }
});

exports.getMyOrders = onCall(async request => {
    const user = requirePhoneAuth(request);
    const snapshot = await db.collection("orders")
        .where("userId", "==", user.uid)
        .limit(50)
        .get();
    return {
        orders: snapshot.docs.map(document => {
            const order = document.data();
            return {
                ...order,
                createdAt: order.createdAt && typeof order.createdAt.toDate === "function"
                    ? order.createdAt.toDate().toISOString()
                    : null
            };
        }).sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")))
    };
});

exports.cancelMyOrder = onCall(async request => {
    const user = requirePhoneAuth(request);
    const orderId = request.data && request.data.orderId;
    if (typeof orderId !== "string" || !/^ORD_[A-Za-z0-9]{20}$/.test(orderId)) {
        throw new HttpsError("invalid-argument", "Invalid order.");
    }
    const orderRef = db.collection("orders").doc(orderId.slice(4));
    await cancelDemoOrder(orderRef, user.uid);
    return { orderId, status: "Cancelled" };
});

exports.getAdminOrders = onCall(async request => {
    requireAdmin(request);
    const snapshot = await db.collection("orders").limit(100).get();
    return {
        orders: snapshot.docs.map(document => {
            const order = document.data();
            return {
                ...order,
                createdAt: order.createdAt && typeof order.createdAt.toDate === "function"
                    ? order.createdAt.toDate().toISOString()
                    : null
            };
        })
    };
});

exports.updateOrderStatus = onCall(async request => {
    requireAdmin(request);
    const orderId = request.data && request.data.orderId;
    const status = request.data && request.data.status;
    const allowedStatuses = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];
    if (typeof orderId !== "string" || !/^ORD_[A-Za-z0-9]{20}$/.test(orderId) ||
        !allowedStatuses.includes(status)) {
        throw new HttpsError("invalid-argument", "Invalid order or status.");
    }
    const orderRef = db.collection("orders").doc(orderId.slice(4));
    const orderSnapshot = await orderRef.get();
    if (!orderSnapshot.exists) {
        throw new HttpsError("not-found", "Order not found.");
    }
    const transitions = {
        "Pending": ["Confirmed", "Cancelled"],
        "Confirmed": ["Shipped"],
        "Shipped": ["Delivered"]
    };
    const currentStatus = orderSnapshot.data().status;
    if (!(transitions[currentStatus] || []).includes(status)) {
        throw new HttpsError("failed-precondition", "This order cannot transition to that status.");
    }
    if (status === "Cancelled") {
        await cancelDemoOrder(orderRef);
        return { orderId, status };
    }
    await orderRef.update({ status, updatedAt: FieldValue.serverTimestamp() });
    return { orderId, status };
});
