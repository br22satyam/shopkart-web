# ShopKart – E-Commerce Store
**BCA Cyber Security | Team Leader:** Satyam Kumar Soni  
**Team Members:**satyam

## Project Overview
ShopKart is a responsive e-commerce demo built with HTML, CSS, vanilla JavaScript, Firebase Authentication, Cloud Functions, and Cloud Firestore. The existing ShopKart catalog and visual branding are retained. The demo checkout does not collect money or connect to a payment provider.

## Features
- Search, category and maximum-price filters, sorting, featured products, image fallbacks, and product details.
- Responsive catalog, persistent browser cart and wishlist, quantity controls, delivery calculation, and checkout summary.
- Validated demo checkout stores customer details, order items, totals, status, and a unique order ID in Firestore.
- Guest orders receive a private tracking code. Save it with the order ID to look up status.
- Signed-in users with a verified phone number can view and cancel their pending demo orders.
- Admin product create, edit, and delete operations include stock and cover built-in products as well as added products.
- Inventory is reserved atomically when an order is placed and restored when a pending order is cancelled.
- Admin order status workflow: Pending → Confirmed → Shipped → Delivered, or Pending → Cancelled.
- Admin dashboard shows product and order counts plus pending and delivered totals.
- Firebase rules restrict product writes to the admin claim. Cloud Functions provide trusted order creation, inventory reservation, account order management, and admin order management when deployed.
- On the Firebase Spark plan, guest demo checkout can fall back to a strictly-shaped client-written Firestore order if its callable is unavailable. The private tracking code is a random UUID and is used as the order document key.
- The cart and wishlist use browser storage only; product and order records use Firebase. Browser storage is not used as a database.

Ratings and reviews, coupons, returns/refunds, address book, image uploads, analytics, and real payment processing are intentionally not part of this demo.

## Firebase Setup
1. Create a Firebase project and register a Web App. `js/firebase-config.js` contains the provided Web App configuration for `shopkart-ecommerce22`. Replace its values with your own Firebase Web App configuration if you use a different project. Do not put service-account keys or other private credentials in browser code.
2. In Firebase Console, enable Firestore and Email/Password authentication. Add the Live Server and deployed Hosting domains under Authentication → Settings → Authorized domains.
3. Install the Firebase CLI and sign in. From the project root, select the Firebase project with `firebase use --add`.
4. Configure the `ADMIN_UID` Functions parameter with the Firebase Authentication UID of the one administrator account. The callable `claimAdminAccess` grants the admin claim only to this UID. Admin dashboard and account order history require a signed-in user with a verified phone number; arrange a phone-linked administrator account in Firebase Authentication.
5. In `functions`, run `npm install`. From the project root, deploy with `firebase deploy`. This publishes the Firestore rules, Cloud Functions, and Hosting configuration. Firebase may ask for the `ADMIN_UID` parameter on first deploy.
6. Firebase Functions require a billing-enabled Firebase project. Guest checkout and tracking also rely on the Functions rate limit and Firestore TTL index configured in `firestore.indexes.json`.
7. Older deployments may still have the former Stripe/UPI Functions. Remove those payment Functions from Firebase after deployment if the CLI reports them as obsolete. ShopKart no longer needs Stripe secrets or a Stripe account.

The browser Firebase configuration contains public web-app identifiers, not admin credentials. Keep Firestore rules deployed. The Spark-plan guest fallback allows bounded guest demo-order creates and reads only by the high-entropy tracking-code document key. Because the client controls this demo payload, Firestore rules cannot establish trusted product prices or reserve stock; do not use this fallback for real commerce. Admin product CRUD requires the admin custom claim. Cloud Functions use the Admin SDK for trusted order writes, stock changes, and order status changes.

The direct guest fallback is for a college demo only: it permits public, bounded order creation, limits each order to 10 line items, and does not rate-limit submissions or reserve inventory. A transient callable/CORS failure can be ambiguous if the server completed the order but its response was blocked, so retrying through the fallback could create a second demo order. Deploy `firestore.rules` for the fallback; an unavailable Firestore database still prevents checkout. Account orders, admin order management, and trusted inventory updates continue to require Cloud Functions.

Products from an earlier version without a `stock` field must be opened in **Admin Panel → Manage Products → Edit** and saved with an inventory quantity before they can be ordered. The first demo order for a built-in product creates its Firestore inventory record. Deleted built-in products are represented by a hidden Firestore tombstone so they do not reappear from the built-in catalog.

If the catalog reports that Firestore is unavailable, enable the Cloud Firestore API and create/enable the Firestore database in `shopkart-ecommerce22` (or your configured project), then deploy the rules and Functions before testing database operations.

## Run with VS Code Live Server
1. Open the project folder in VS Code and install the Live Server extension if needed.
2. Right-click `HTML/index.html` and choose **Open with Live Server**. The project is configured for the `HTML` folder and relative assets.
3. Ensure the Firebase Web App configuration, Firestore, Authentication, and Cloud Functions are set up as described above. Live Server only serves the front end; it does not emulate/deploy Firebase services.

If Firebase is unreachable, the built-in catalog remains visible with an error message. Product changes and guest demo order placement/tracking require Firestore; account orders and admin order management also require deployed Cloud Functions.
