# Claude AI Assistant Instructions

This document provides context and guidelines for Claude when working with this Next.js starter template project.

## Project Overview

This is a modern Next.js starter template designed for building production-ready web applications. It uses:
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS 4 for styling
- Vercel for deployment

## Key Architecture Decisions

### Framework Choice
- **Next.js App Router** is used for its modern features, better performance, and improved developer experience
- Server Components are the default, with Client Components used only when necessary
- File-based routing with the `app/` directory structure

### Styling Approach
- **Tailwind CSS 4** with PostCSS for utility-first styling
- Custom design system using CSS variables for consistent theming
- No external UI component libraries - all components are custom-built
- Mobile-first responsive design

### Component Organization
```
app/components/
├── layouts/     # Page wrapper components
├── sections/    # Large page sections
└── ui/          # Reusable UI components
```

### Type Safety
- Full TypeScript implementation
- Interfaces defined in `app/types/` directory
- Strict type checking enabled

## Development Guidelines

### When Adding New Features

1. **Check existing patterns** - Look at similar components/pages first
2. **Use TypeScript** - Define interfaces for all data structures
3. **Follow component structure** - Small, focused components in appropriate directories
4. **Maintain consistency** - Use existing CSS variables and Tailwind classes
5. **Consider reusability** - Extract common patterns into shared components

### Code Style Preferences

- Use functional components with TypeScript
- Prefer `interface` over `type` for object shapes
- Use meaningful component and variable names
- Keep components under 150 lines when possible
- Extract complex logic into utility functions

### Common Tasks

#### Adding a New Page
1. Create directory in `app/` matching the route
2. Add `page.tsx` file
3. Use `PageLayout` component for consistent structure
4. Import metadata helper for SEO

#### Creating a Component
1. Place in appropriate subdirectory of `app/components/`
2. Create TypeScript interface for props
3. Use Tailwind classes for styling
4. Export as default if it's a page component, named export otherwise

#### Modifying Styles
1. Check CSS variables in `globals.css` first
2. Use Tailwind utilities when possible
3. Add custom CSS only when necessary
4. Maintain responsive design

## Important Files

- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `app/layout.tsx` - Root layout with metadata

## Testing & Quality

- Run `npm run lint` before committing
- Run `npm run type-check` to ensure type safety
- Test responsive design at key breakpoints (mobile, tablet, desktop)
- Verify SEO metadata is properly set

## Performance Considerations

- Use Next.js Image component for all images
- Implement lazy loading for heavy components
- Keep bundle size minimal - avoid large dependencies
- Use dynamic imports for code splitting when appropriate

## Deployment Notes

- Project is optimized for Vercel deployment
- Environment variables should be prefixed with `NEXT_PUBLIC_` for client-side access
- Static assets go in the `public/` directory
- API routes (if needed) should be created in `app/api/`

## Common Patterns

### Service/Feature Pages
The template includes a pattern for creating similar pages (like services):
1. Data definition in `app/data/`
2. Shared layout component
3. Dynamic routing with `[slug]` pattern
4. Type-safe data handling

### Navigation
- Responsive navigation with mobile menu
- Dropdown support for nested items
- Active link highlighting
- Smooth scroll for anchor links

### Forms
- Client-side form handling
- TypeScript interfaces for form data
- Tailwind styling for form elements
- Ready for backend integration

## Do's and Don'ts

### Do's
- ✅ Use existing components when possible
- ✅ Follow established naming conventions
- ✅ Keep accessibility in mind (ARIA labels, semantic HTML)
- ✅ Use CSS variables for colors and spacing
- ✅ Test on multiple devices and browsers

### Don'ts
- ❌ Don't install UI libraries without discussing architecture
- ❌ Don't use inline styles except for dynamic values
- ❌ Don't create duplicate components
- ❌ Don't ignore TypeScript errors
- ❌ Don't commit without running lint and type-check

## Getting Help

When working on this project:
1. Check existing code for patterns
2. Review Next.js 15 documentation for new features
3. Consult Tailwind CSS 4 docs for utility classes
4. Look at TypeScript handbook for type questions