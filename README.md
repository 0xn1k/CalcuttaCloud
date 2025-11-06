# Calcutta Cloud

A modern, sleek, and beautiful Next.js website for Calcutta Cloud - your next-generation cloud infrastructure provider.

## Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Dark Mode**: Full dark mode support with theme toggle
- **Responsive**: Works perfectly on all devices
- **TypeScript**: Type-safe code throughout
- **Animations**: Smooth Framer Motion animations
- **Tailwind CSS**: Utility-first styling with shadcn/ui design system

## Pages

1. **Home** - Hero section with features and call-to-action
2. **Pricing** - Three-tier pricing plans with feature comparison
3. **Blog** - Blog grid with articles and categories
4. **Testimonials** - Customer testimonials with ratings
5. **Showcase** - Success stories and case studies
6. **Privacy Policy** - Comprehensive privacy policy
7. **Cookies Policy** - Cookie usage policy
8. **Terms of Service** - Terms and conditions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode
- **Icons**: lucide-react

## Getting Started

### Install dependencies:

```bash
npm install
```

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production:

```bash
npm run build
```

### Start production server:

```bash
npm start
```

## Project Structure

```
.
├── app/
│   ├── blog/                 # Blog page
│   ├── cookies-policy/       # Cookies policy page
│   ├── pricing/              # Pricing page
│   ├── privacy-policy/       # Privacy policy page
│   ├── showcase/             # Showcase page
│   ├── terms-of-service/     # Terms of service page
│   ├── testimonials/         # Testimonials page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer
│   ├── theme-provider.tsx    # Theme provider
│   └── theme-toggle.tsx      # Dark mode toggle
└── lib/
    └── utils.ts              # Utility functions

```

## Customization

### Colors

Edit `tailwind.config.ts` and `app/globals.css` to customize the color scheme.

### Content

- Update page content in the respective files under `app/`
- Modify navbar links in `components/navbar.tsx`
- Update footer links in `components/footer.tsx`

## Deployment

This project is ready to deploy on Vercel, Netlify, or any other platform that supports Next.js.

### Deploy on Vercel:

```bash
npm install -g vercel
vercel
```

## License

MIT License - feel free to use this project for your own purposes.
