# UniLoop — Campus Student Marketplace

UniLoop is a modern, peer-to-peer university student marketplace designed to enable students to buy and sell course textbooks, scientific calculators, academic gear, dorm essentials, and electronics with ease and security.

Built for university communities with zero shipping delays and safe, in-person campus handovers.

---

## 🚀 Week 1: Frontend Foundation

This repository contains the Week 1 frontend foundation built with Next.js App Router, Tailwind CSS v4, daisyUI v5, and JavaScript/JSX.

### Key Highlights
- **Premium Design System**: Dark theme (`#090909`) with restrained yellow-gradient visual identity (`#FFE08A` → `#F5C542` → `#D99A16`), high-contrast typography (`#F8F8F8`), and clean `#2A2A2A` borders.
- **Custom CSS Illustrations**: Local CSS-based visual placeholders for all products and showcase items (no broken remote images or stock photo placeholders).
- **Bangladeshi Taka (৳) Pricing**: Native currency formatting with realistic university course listings and condition badges.
- **Modular Component Hierarchy**: Separation of concerns between layout components, home sections, product cards, and mock data stores.
- **Mobile-First & Accessible**: Working mobile navigation drawer, semantic markup, keyboard focus states, and aria attributes.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, JavaScript / JSX only)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [daisyUI v5](https://daisyui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Node Environment**: Node v24+ / npm v11+

---

## 📁 Project Architecture

```
UniLoop/
├── app/
│   ├── globals.css              # Tailwind v4 directives, daisyUI v5 plugin & theme variables
│   ├── layout.jsx               # Root layout with metadata, navbar, and footer
│   └── page.jsx                 # Homepage composition of modular sections
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx           # Responsive sticky navbar with logo, links, search & mobile drawer
│   │   └── Footer.jsx           # Comprehensive footer with quick links, categories & safety tips
│   ├── home/
│   │   ├── HeroSection.jsx      # High-impact hero banner with custom CSS product showcase
│   │   ├── CategorySection.jsx  # Interactive category cards with item counts
│   │   ├── FeaturedProducts.jsx # Filterable product showcase with responsive grid
│   │   ├── HowItWorks.jsx       # 3-step campus exchange workflow & student verification strip
│   │   └── CallToAction.jsx     # Final conversion CTA with student reassurance points
│   └── products/
│       └── ProductCard.jsx      # Reusable product card with condition pill, ৳ price, & bookmark
├── data/
│   ├── categories.js            # Demo category dataset
│   └── demoProducts.js          # Demo campus product dataset
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration for @tailwindcss/postcss
├── jsconfig.json                # Path alias mapping (@/*)
├── .eslintrc.json               # ESLint configuration
└── package.json                 # Project dependencies & build scripts
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or yarn

### 1. Installation & Run
```bash
cd uniloop-client
npm install
npm run dev
```

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Linting
To check code quality and build for production:
```bash
npm run lint
npm run build
npm run start
```

---

## 🎯 Scope for Week 1
As specified in Week 1 requirements, this milestone covers the frontend foundation only. Authentication (Better Auth), backend database (MongoDB), image upload (imgbb), and real-time chat will be integrated in subsequent milestones.
