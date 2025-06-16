# Next.js + TypeScript + Tailwind CSS Starter Template

A modern, production-ready starter template for building fast, type-safe web applications with Next.js 15, TypeScript, and Tailwind CSS 4.

## Features

- ⚡️ **Next.js 15** with App Router - Latest features and optimizations
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS framework
- 📝 **TypeScript** - Full type safety and better DX
- 🎯 **SEO Optimized** - Server-side rendering and metadata management
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Vercel Ready** - Optimized for one-click deployment
- 🧩 **Component Architecture** - Well-organized, reusable components
- 🎨 **Custom Design System** - CSS variables for consistent theming

## Tech Stack

- **Framework:** Next.js 15.3.3
- **UI:** React 19.1.0
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 4.1.10
- **Deployment:** Vercel

## Project Structure

```
├── app/
│   ├── components/       # Reusable React components
│   │   ├── layouts/     # Page layout templates
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── services/        # Service/feature pages
│   ├── data/           # Data definitions
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Helper functions
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── public/             # Static assets
├── .eslintrc.json     # ESLint configuration
├── next.config.mjs    # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd claude-vercel-starter-template
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Customization

### Design System

The template includes a custom design system with CSS variables defined in `globals.css`:

- Update color palette in CSS variables
- Modify typography settings
- Adjust spacing and sizing scales
- Customize component styles

### Adding New Pages

1. Create a new directory in `app/` for your route
2. Add a `page.tsx` file
3. Use the `PageLayout` component for consistent structure
4. Import and use existing components from `app/components/`

### Components

The template includes several pre-built components:

- **UI Components:** Button, Card, Navigation, etc.
- **Layout Components:** PageLayout, ServicePageLayout
- **Section Components:** HeroSection, ServicesSection, etc.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Build the application:
```bash
npm run build
```

The output will be in the `.next` directory, ready for deployment to any Node.js hosting platform.

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=
```

## Best Practices

- Use TypeScript interfaces for all data structures
- Keep components small and focused
- Use Tailwind utility classes for styling
- Implement proper SEO with Next.js metadata
- Follow the established project structure
- Use CSS variables for theming consistency

## License

MIT License - feel free to use this template for any project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.