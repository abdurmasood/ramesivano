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
- **Typography**: Playfair Display font from Google Fonts
- **Animations**: Framer Motion for smooth transitions
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
│   ├── lore/              # Artist lore and storytelling
│   └── studio-x/          # Studio X integration page
├── components/
│   ├── animations/        # Framer Motion animation components
│   ├── layout/            # Header and Footer components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions and fonts
```

## Key Pages

- **Home** (`/`) - Artist introduction and latest release
- **Lore** (`/lore`) - Deep storytelling and artistic narrative
- **Studio X** (`/studio-x`) - Studio X platform integration and connection

## Design System

- **Primary Blue**: `#23b9d6`
- **Accent Orange**: `#ff6b3d`
- **Background**: `#051b2c`
- **Typography**: Playfair Display (elegant serif for artistic feel)

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