# Wedding Invitation

A responsive digital wedding invitation built with Next.js, React, and TypeScript. It presents the wedding celebrations for two couples, with an animated invitation, event information, venue details, and music.

## Features

- Animated invitation letter with guest-name personalization using `?to=Name` or `?toName=Name`.
- Hero and couple sections showing both couples.
- Wedding date and time, a live countdown, and a Google Calendar link.
- Venue information with a map link and a multi-day event schedule.
- Closing message and an audio player for wedding music.
- Responsive section navigation, mobile navigation button, and scroll progress indicator.
- English and Hindi translations with an in-app language selector.
- Motion-based animations and scroll-triggered section effects.

## Wedding page sections

The home page displays these sections in order:

1. **Invitation letter** — opens into the wedding invitation and can address a guest by name.
2. **Hero** — invitation welcome and the two couples.
3. **Couple introduction** — couple names, family details, and wedding greeting.
4. **Wedding details** — date, time, countdown, and add-to-calendar action.
5. **Venue and schedule** — ceremony location, directions, event details, and timeline.
6. **Closing message** — a final thank-you from the families.

Floating navigation links to Home, Couple, Details, and Venue. A mobile navigation button and scroll progress indicator are also available.

## Getting started

### Requirements

- Node.js 18.18 or newer
- npm or pnpm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use a guest name in the invitation letter with either query parameter:

```text
http://localhost:3000?to=Anurag
http://localhost:3000?toName=Anurag
```

### Available scripts

```bash
npm run dev     # Start the development server
npm run build   # Build the production application
npm run start   # Start the production server
npm run lint    # Run Next.js linting
```

## Project structure

```text
src/
├── app/                   # Next.js App Router page, layout, and global styles
├── components/            # Shared UI (invitation letter, language toggle, particles)
├── constants/             # Wedding and navigation configuration
├── hooks/                 # Countdown and scroll-spy hooks
├── lib/                   # Wedding date, calendar, and map helpers
├── locales/               # i18next setup and English/Hindi translations
├── sections/home/
│   ├── components/        # Invitation page sections and navigation
│   └── view/              # Home page composition
├── types/                 # TypeScript types
└── utils/                 # Shared utilities
public/
└── assets/
    ├── audio/             # Wedding background music
    └── images/            # Invitation, couple, and schedule imagery
```

## Wedding configuration

Edit [`src/constants/wedding.ts`](./src/constants/wedding.ts) to update the wedding dates, couple names and photos, ceremony location, map URL, and times. The current configuration includes:

- Bhawana Tulera and Anurag Dosad, with the main wedding date set to November 25, 2026.
- Manshi Rana and Anuj Dosad, with their wedding date set to November 27, 2026.

The shared wedding details card and countdown use the top-level `date` and `venue` values in `WEDDING_CONFIG`. The couple list is configured separately in its `weddings` array.

Edit [`src/constants/navigation.ts`](./src/constants/navigation.ts) to change the section navigation or its animation settings.

### Translations

English and Hindi text is stored in:

- `src/locales/langs/en/home.json`
- `src/locales/langs/hi/home.json`

Keep translation keys aligned between the files when adding or changing displayed text. English is the default language for new visitors. The language toggle lets visitors switch to Hindi, and their selection is saved in a browser cookie for later visits.

### Media

The page refers to these files under `public/assets`:

- Images: `images/holding-hands.jpeg`, `images/bride_icon.png`, `images/groom_icon.png`, `images/bride-circle.png`, `images/groom-circle.png`, `images/lord-ganesh.png`, and `images/Wedding-theme.png`.
- Audio: `audio/Phera-Bhanvara.mp3`.

Provide the referenced files at those paths, or update the paths in the corresponding components and wedding configuration.

## Technology

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Motion for React animations
- i18next and react-i18next
- Vercel Analytics

## Deployment

The application can be deployed to Vercel or another platform that supports Next.js. For Vercel, import the repository and use the default Next.js build settings. Set `NEXT_PUBLIC_SITE_URL` if a deployment environment or integration requires the public site URL.
