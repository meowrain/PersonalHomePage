# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Vue 3, TypeScript, and Vite. It features a dark-themed design with pink accents, showcasing projects, albums, videos, and an about page.

## Development Commands

- **Start dev server**: `npm run dev` (or `bun run dev`)
- **Build for production**: `npm run build` - runs `vue-tsc -b` for type checking then `vite build`
- **Preview production build**: `npm run preview`

## Tech Stack & Architecture

### Core Framework
- **Vue 3** with Composition API using `<script setup>` syntax in all Single File Components
- **TypeScript** with strict type checking (`vue-tsc` required before builds)
- **Vite** for build tooling and dev server
- **Vue Router 4** for client-side routing

### Styling System
- **Tailwind CSS** (v3.4.17) as primary utility framework
- **DaisyUI** (v4.12.23) component library on top of Tailwind
- **UnoCSS** (v65.4.3) with icon presets for optimized icon rendering
- **Font Awesome** for icons via `@fortawesome/vue-fontawesome`

The styling follows a pink/white color scheme on black background with custom gradient animations and hover effects.

### Component Architecture

**Feature-based organization**: Components are grouped by functionality:
- `src/components/home/` - Home page specific components
- `src/components/about/` - About page components
- `src/components/album/` - Photo gallery components
- `src/components/videos/` - Video collection components
- `src/components/projects/` - Project showcase components
- `src/components/common/` - Shared/reusable components

**Layout structure**:
- `src/App.vue` - Root component with fixed layout: NavBar → RouterView → Footer
- Sticky navigation bar with mobile responsive menu
- Fixed bottom footer
- Content area with flexible spacing (responsive padding)

### State Management Pattern

Uses Vue 3 Composition API with **composables** for reusable logic:
- `src/composables/useDataFetch.ts` - Data fetching utilities
- `src/composables/useMouseGlow.ts` - Interactive hover effects
- `src/composables/usePagination.ts` - Pagination logic
- All composables export functions following Vue 3 best practices

No centralized state management (Vuex/Pinia) - local component state with shared composables.

### Routing Architecture

Routes are lazy-loaded for code splitting:
- `/` - Home page (video hero section, navigation cards, skills)
- `/about` - Personal profile with education and social links
- `/projects` - Project showcase
- `/album` - Photo gallery with filtering
- `/loved-videos` - Video collection

Router configuration in `src/router/index.ts` with dynamic imports for all routes.

### Path Aliases

Configured in `vite.config.ts`:
- `@/` → `src/`
- `@views/` → `src/views/`
- `@assets/` → `src/assets/`

Always use these aliases when importing to maintain consistency.

### Type Safety

- TypeScript interfaces in `src/types/`
- All Vue components are typed (`<script setup lang="ts">`)
- Type checking is mandatory before builds via `vue-tsc -b`
- Never bypass type checking - fix type errors rather than using `@ts-ignore`

## Key Development Patterns

### Component Structure
All components use the Vue 3 `<script setup>` pattern:
```vue
<script setup lang="ts">
// Imports
// Composables
// Reactive state
// Methods
</script>

<template>
  // Template with Tailwind classes
</template>

<style scoped>
// Component-specific styles if needed
</style>
```

### Styling Approach
- Use Tailwind utility classes for 95% of styling needs
- DaisyUI components for complex UI elements
- Custom CSS only when Tailwind utilities are insufficient
- Responsive design with mobile-first approach (use `sm:`, `md:`, `lg:` breakpoints)
- Pink accent colors on dark background (avoid changing this theme)

### Adding New Features
1. Create feature components in appropriate `src/components/[feature]/` directory
2. Add route in `src/router/index.ts` with lazy loading
3. Extract reusable logic into composables in `src/composables/`
4. Define TypeScript interfaces in `src/types/` if needed
5. Use path aliases for all imports

### Data Management
- Static data lives in `src/assets/data/`
- For dynamic data, use the `useDataFetch` composable
- Keep data fetching logic in composables, not components
- Type all data structures with TypeScript interfaces

## Deployment

Configured for Vercel deployment via `vercel.json` with SPA fallback (all routes redirect to index.html).
