## Team
| Mihret Melese -Group Leader |
| Saron Abebe Demisu - Contributor |

# Prodexa

A Product Management Dashboard for a small online store, built with React, React Router, and Tailwind CSS. Product data is fetched live from the [Fake Store API](https://fakestoreapi.com/).

## Features

- Browse products fetched from the Fake Store API
- Search products by name
- Filter products by category (search and filter work together)
- Loading and error states for API requests
- Responsive design with Tailwind CSS
- Pages: Home, Products, About, Contact, Login
- Client-side routing with React Router

## Tech Stack

- React
- React Router
- Tailwind CSS
- Fake Store API

## API Information

This project uses the [Fake Store API](https://fakestoreapi.com/) as its sole source of product data — no local mock data is used.

- Endpoint used: `https://fakestoreapi.com/products`
- Method: `GET`, handled via the Fetch API inside `services/productService.js`
- Data returned: product id, title, price, description, category, image, and rating
- Categories shown in the filter dropdown are pulled dynamically from the fetched products, not hardcoded.

## Installation

```bash
git clone <repository-url>
cd prodexa
npm install
npm run dev
```


## Pages Overview

| Home | `/` | Landing page with hero section, store intro, and featured products |
| Products | `/products` | Full product listing with search and category filtering |
| About | `/about` | Store introduction, mission, vision, and team |
| Contact | `/contact` | Contact form with success message on submission |
| Login | `/login` | Simple login form (no real authentication) |


## Merge Conflict Resolution

During development, a merge conflict occurred when two branches modified the same section of code. We resolved it by reviewing both versions, deciding which code should remain, removing the conflict markers, and accepting the current branch's version. We then tested the application to confirm everything still worked correctly before completing the merge.

## Git Workflow

This project followed a standard collaborative Git workflow:

Issue → Feature Branch → Development → Commit → Push → Pull Request → Code Review → Merge

Each feature (API integration, search, category filter, pages, styling, etc.) was developed on its own branch and merged into `main` via Pull Request after review.

## Team Contributions

*[Mihret Melese]* 
- Project setup (Vite, Tailwind CSS, React Router)
- Products page (loading, error, and success states)
- Product search functionality
- Category filter (working together with search)
- Home page fixes (featured products grid, working navigation)
- About page
- Responsive navbar and layout fixes
- README documentation

*[Saron Abebe Demisu ]:*

- ProductCard component
- Home page (hero section, initial layout)
- Login page
- Contact page
- Fake Store API integration (`productService.js`)


