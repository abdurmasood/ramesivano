# Ramé Sivano - Official Website

A Next.js 15 application showcasing music artist Ramé Sivano, featuring artist storytelling, Studio X integration, and portfolio showcase.

## Features

- **Artist Portfolio**: Showcase of latest releases and music content
- **Artist Lore**: Deep storytelling and artistic narrative
- **Studio X Integration**: Connected to Studio X platform
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Fade transitions and hover effects with Framer Motion

## Tech Stack

- **Framework**: Next.js 15.0.3 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Typography**: Urbanist (layout), Poppins (components) from Google Fonts
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **3D Graphics**: Three.js with @react-three/fiber for Studio X page
- **Package Manager**: pnpm

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── chapter-1/         # Artist lore and storytelling page
│   ├── studio-x/          # Studio X integration page
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with fonts and providers
│   └── page.tsx           # Homepage with artist intro and music
├── components/
│   ├── animations/        # Framer Motion animation components
│   │   ├── FadeIn.tsx     # Fade + slide animations
│   │   ├── FadeOnly.tsx   # Simple fade animations with delay
│   │   ├── PageTransition.tsx # Full page transitions
│   │   └── index.ts       # Animation exports
│   ├── layout/            # Layout components
│   │   ├── DynamicBackground.tsx # Route-based background colors
│   │   ├── Footer.tsx     # Site footer
│   │   └── Header.tsx     # Site header with navigation
│   ├── studiox/           # Studio X specific components
│   │   └── particle-system.tsx # Three.js particle effects
│   └── ui/                # shadcn/ui components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       ├── dialog.tsx     # Dialog/modal component
│       ├── toast.tsx      # Toast notification component
│       └── toaster.tsx    # Toast provider
├── hooks/                 # Custom React hooks
│   └── use-toast.ts       # Toast hook for notifications
└── lib/                   # Utilities and configurations
    └── utils.ts           # Utility functions (cn, etc.)
```

## Key Pages

- **Home** (`/`) - Artist introduction and latest release
- **Chapter 1** (`/chapter-1`) - Deep storytelling and artistic narrative
- **Studio X** (`/studio-x`) - Studio X platform integration and connection

## Design System

- **Primary Blue**: `#23b9d6`
- **Accent Orange**: `#ff6b3d`
- **Background**: `#051b2c`
- **Typography**: Urbanist (elegant sans-serif for layout), Poppins (modern sans-serif for components)

## External Links

- [Studio X](https://studiox.vip)
- [Instagram](https://www.instagram.com/ramesivano/)
- [TikTok](https://www.tiktok.com/@ramesivano)
- [Twitter](https://twitter.com/ramesivano)
- [Spotify](https://open.spotify.com/artist/5nkyoqkxYOlgg6lbofcBZB)
- [YouTube](https://www.youtube.com/channel/UCgha49SDKezqu_RUe_u6qaQ)

## Development Notes

- Built with Next.js 15 App Router for modern React patterns
- All images optimized with Next.js Image component
- External images configured for Vercel blob storage
- Responsive design with mobile-first approach
- Framer Motion animations for smooth transitions
- shadcn/ui components with new-york style
- Vercel Analytics integrated for performance tracking

## License

© 2024 Ramé Sivano. All rights reserved.