Items App — README

A simple full-stack application built using Next.js (App Router), NextAuth.js, and a minimal Express.js backend.
The project includes public pages, protected pages, authentication, item listing, item details, and product management.
# Live Link :https://nextprojec.netlify.app/
# Repository Link :

🚀 Features
✅ Landing Page

Navbar with logo + 4 routes

Login/Register buttons

After login → user dropdown (profile, add product, manage products, logout)

Hero section

4 additional sections (features/items/testimonials/banner)

Footer

✅ Authentication (NextAuth.js)

Google Login

Email/Password Login

Redirects to home after login

Protected routes → redirect to /login

✅ Items

Items List page

Search bar + category filter (UI only)

Cards (image, title, short desc, price, details button)

✅ Item Details

Large image

Title

Full description

Meta info

Back button

✅ Add Product (Protected)

Title

Short description

Full description

Price / date / priority

Optional image URL

Submit + success confirmation

✅ Manage Products (Protected)

List all products

View / Delete actions

Clean and responsive layout

🧑‍💻 Tech Stack

Next.js (App Router)

NextAuth.js

Express.js

Tailwind CSS

MongoDB or simple JSON file (backend)
