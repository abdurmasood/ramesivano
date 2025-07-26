# Ramé Sivano - Official Website

A Next.js 15 application showcasing music artist Ramé Sivano, featuring an e-commerce system for merchandise and artist portfolio.

## Features

- **Artist Portfolio**: Showcase of latest releases and music content
- **E-commerce System**: Merchandise shop with cart functionality
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Fade transitions and hover effects

## Tech Stack

- **Framework**: Next.js 15.0.3 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Typography**: Poppins font from Google Fonts
- **State Management**: React Context API for cart functionality
- **Icons**: Lucide React
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
│   ├── album/             # Album showcase page
│   ├── cart/              # Shopping cart page
│   ├── kon-hai-tu/        # Merchandise shop page
│   └── tour/              # Tour dates page
├── components/
│   ├── layout/            # Header and Footer components
│   └── ui/                # shadcn/ui components
└── features/
    └── cart/              # Cart functionality (context, hooks, types)
```

## Key Pages

- **Home** (`/`) - Artist introduction and latest release
- **Album** (`/album`) - Album showcase with responsive images
- **Shop** (`/kon-hai-tu`) - Merchandise store with 6 products
- **Cart** (`/cart`) - Shopping cart with session persistence
- **Tour** (`/tour`) - Tour dates and newsletter signup

## Design System

- **Primary Blue**: `#23b9d6`
- **Accent Orange**: `#ff6b3d`
- **Background**: `#051b2c`
- **Typography**: Poppins (light weight for melancholic feel)

## External Links

- [Studio X](https://studiox.vip)
- [Instagram](https://www.instagram.com/ramesivano/)
- [TikTok](https://www.tiktok.com/@ramesivano)
- [Twitter](https://twitter.com/ramesivano)
- [Spotify](https://open.spotify.com/artist/5nkyoqkxYOlgg6lbofcBZB)
- [YouTube](https://www.youtube.com/channel/UCgha49SDKezqu_RUe_u6qaQ)

## Development Notes

- Cart state persists in sessionStorage
- All images optimized with Next.js Image component
- External images configured for Vercel blob storage
- Responsive design with mobile-first approach
- Ambient light effects and smooth transitions

## License

© 2024 Ramé Sivano. All rights reserved.