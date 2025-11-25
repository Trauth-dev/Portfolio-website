# Portfolio Web - Matías Trauth

Professional portfolio website showcasing web development projects, technical skills, certifications, and professional experience. Built with modern web technologies for optimal performance and user experience.

## 🎯 Project Overview

This portfolio serves as a comprehensive professional presentation platform designed for employment opportunities and client outreach. It features a responsive design, smooth animations, and an intuitive user interface that highlights technical expertise and completed projects.

## 🛠 Technology Stack

### Core Framework
- **Next.js 16.0.0** - React framework with server-side rendering and optimal performance
- **React 19.2.0** - JavaScript library for building user interfaces
- **TypeScript 5.x** - Typed superset of JavaScript for enhanced code quality

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities for Tailwind
- **Class Variance Authority** - CSS-in-JS variant management
- **Lucide React** - Icon library with consistent design

### UI Components
- **Radix UI** - Comprehensive collection of accessible components:
  - Accordion, Alert Dialog, Avatar
  - Checkbox, Dialog, Dropdown Menu
  - Navigation Menu, Popover, Tabs
  - Toast notifications, Tooltips
  - And 20+ additional components

### Form Management
- **React Hook Form 7.60.0** - Performant form validation
- **Zod 3.25.76** - Schema validation with TypeScript integration
- **@hookform/resolvers** - Form validation resolver integration

### Additional Libraries
- **date-fns 4.1.0** - Date manipulation and formatting
- **Embla Carousel** - Touch-friendly carousel component
- **Recharts 2.15.4** - Composable charting library
- **Sonner** - Toast notification system
- **Vaul** - Drawer component for mobile interfaces

### Analytics & Monitoring
- **Vercel Analytics** - Performance and visitor analytics

## 📂 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Main portfolio page component
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── public/
│   └── images/             # Static images and assets
├── lib/
│   └── utils.ts            # Utility functions
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS configuration
\`\`\`

## 🎨 Key Features

### 1. Responsive Navigation
- Fixed header with smooth scroll navigation
- Mobile-optimized hamburger menu
- Active section highlighting
- Accessible navigation links

### 2. Hero Section
- Professional profile image
- Animated introduction
- Social media integration (GitHub, LinkedIn, WhatsApp)
- Call-to-action button

### 3. About Section
- Professional summary
- Educational background
- Work experience timeline
- Technical expertise overview

### 4. Services Showcase
- 7 specialized service offerings:
  - Web Development (React, Next.js)
  - UI/UX Design
  - E-commerce Solutions (Shopify, WordPress)
  - Data Analysis & SQL
  - No-Code Development
  - Moodle LMS Administration
  - SEO Optimization

### 5. Skills Matrix
- Three-tier proficiency system:
  - **Básico**: HTML, JavaScript, TypeScript, React, Next.js, SQL, SEO
  - **Intermedio**: WordPress, Moodle, Data Analysis, UI/UX, Responsive Design
  - **Avanzado**: Office Suite (Advanced)
- Visual badge system for easy comprehension

### 6. Portfolio Gallery
- **Interactive Carousel**: Featured project slideshow with navigation
- **Static Grid**: Overview of all projects
- **Project Details**: 
  - Project titles and descriptions
  - Live demo links
  - Demo credentials for protected applications
  - High-quality screenshots

**Featured Projects**:
1. Inventory Management System (MEC)
2. Time Control System
3. Supervisor Registration Platform (MEC)
4. Personal Finance Dashboard
5. Fundación Principios de Vida Website

### 7. Certificates Section
- 7 professional certifications from 2025:
  - SQL Data Analysis (Smart Data)
  - SEO Specialization (Netzun)
  - UX Design Specialization (Netzun - San Ignacio University)
  - WordPress Development (Netzun)
  - Advanced SEO (Netzun)
  - Moodle 5 Administration (Udemy)
  - React 19 Full Stack with Supabase (Udemy)

### 8. Contact Form
- Email, phone, and location information
- Interactive contact form
- Social media quick links
- WhatsApp direct messaging integration

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/Trauth-dev/portfolio-website.git
cd portfolio-website
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Run development server**
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📊 Performance Optimization

- **Server-Side Rendering**: Optimized initial page load
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load on-demand
- **Minification**: CSS and JavaScript minification in production

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4) - Call-to-action elements
- **Background**: Dark gradient (Navy to Purple)
- **Text**: White and gray tones for optimal contrast
- **Accents**: Blue, Purple, Pink for visual hierarchy

### Typography
- **Headings**: Bold, large-scale typography for impact
- **Body**: Readable font sizes with proper line-height
- **Responsive**: Scales appropriately across device sizes

### Spacing
- Consistent spacing scale using Tailwind's spacing system
- Responsive padding and margins
- Proper visual hierarchy through whitespace

## 🔧 Configuration

### Tailwind Configuration
The project uses Tailwind CSS v3 with custom configuration for:
- Custom color schemes
- Extended spacing utilities
- Animation configurations
- Responsive breakpoints

### TypeScript Configuration
Strict type checking enabled for code quality and maintainability.

## 📱 Responsive Design

The portfolio is fully responsive across:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔐 Security & Best Practices

- TypeScript for type safety
- Form validation with Zod schemas
- Secure external links with `rel="noopener noreferrer"`
- Accessible components using Radix UI
- SEO-optimized metadata

## 🌐 Deployment

This portfolio is optimized for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Vercel Deployment
\`\`\`bash
vercel --prod
\`\`\`

## 📄 License

© 2025 Matías Trauth. All rights reserved.

## 👤 Author

**Matías Trauth**
- Systems Analyst & Web Developer
- Email: matiastrauth64@gmail.com
- Phone: +595 976 148-630
- Location: Asunción, Paraguay
- GitHub: [@Trauth-dev](https://github.com/Trauth-dev)
- LinkedIn: [Matías Trauth](https://www.linkedin.com/in/mat%C3%ADas-trauth-092b6921a)

## 🤝 Professional Background

Final-year Systems Analysis student with 2+ years of professional experience in:
- Full-stack web development (React, Next.js)
- Data analysis and SQL automation
- UI/UX design and responsive development
- E-commerce platforms (Shopify, WordPress)
- Educational platform management (Moodle)
- SEO optimization and digital marketing

Currently collaborating with the Ministry of Education and Sciences of Paraguay (MEC) through official agreement.

---

**Note**: This portfolio demonstrates real-world application development skills and serves as a professional showcase for employment opportunities and freelance projects.
