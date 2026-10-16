
## 🛠️ Technologies Used
* **Framework:** React 18+ (via Vite)
* **Styling:** Tailwind CSS with custom theme tokens (Poppins, curated hex codes: `#C2F578`, `#373636`, `#ECEDEF`, `#F5F5F5`)
* **Animations:** Framer Motion (micro-interactions, page entrances, float animations, mobile drawers)
* **Icons:** Lucide React & original SVG icons
* **Routing:** React Router v6

---

## 📂 Project Architecture

```text
classiq-web/
├── public/
│   └── assets/                     # 14 original SVGs, logos & high-res PNGs
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Sticky responsive header with mobile drawer
│   │   │   └── Footer.jsx          # Multi-column footer, newsletter & social links
│   │   └── sections/
│   │       ├── Hero.jsx            # Hero headline, accent underline, CTAs & glow
│   │       ├── Partners.jsx        # 5,000+ companies partner logos
│   │       ├── CertifiedCourses.jsx# 3-track professional certificates
│   │       ├── SolutionSection.jsx # All-In-One Solution with feature badges
│   │       └── CourseGrid.jsx      # Curated courses with interactive enrollment
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Courses.jsx             # Dedicated course catalog with search & filters
│   │   ├── Login.jsx               # Client authentication with feedback toast
│   │   ├── Signup.jsx              # Account creation
│   │   └── Dashboard.jsx           # Student learning portal with custom banner
│   ├── context/
│   │   └── AuthContext.jsx         # Client-side authentication & toast notification state
│   ├── data/
│   │   └── mockData.js             # Course catalog & partner lists
│   ├── App.jsx                     # Application router
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind directives & Poppins font utilities
├── index.html                      # Semantic HTML5, metadata & Google Font import
├── tailwind.config.js              # Custom color palette & typography
├── package.json
└── vite.config.js
```

---

## ⚡ How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build Production Bundle:**
   ```bash
   npm run build
   ```

---

## 🌟 Best Practices Followed
1. **Design Accuracy:** Exact spacing, typography (Poppins 100-900), and custom color tokens matching the reference.
2. **Full Responsiveness:** Fluid layouts across Mobile (<640px), Tablet (768px), and Desktop (1024px+).
3. **SEO & Accessibility:** Proper meta tags, page titles, semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), and alt attributes on all images.
4. **Performance:** Lightweight, modular code without unused dependencies; optimized SVGs and instant client-side transitions.
