# Attorney Photos

Place attorney photos in this directory.

## Required Files

- `attorney-nwahiri.jpg` — Primary headshot of Attorney Tobechuku Nwahiri
  - Recommended: Professional headshot, 800×1000px minimum, JPG or WebP
  - Used on: Home page (attorney intro section), About page

## Optional Additional Files

- `attorney-nwahiri-court.jpg` — Courtroom or professional action photo
- `attorney-nwahiri-office.jpg` — Office/desk photo

## Usage in Code

```tsx
import Image from 'next/image';

<Image
  src="/images/attorney/attorney-nwahiri.jpg"
  alt="Attorney Tobechuku Nwahiri"
  width={400}
  height={533}
  className="rounded object-cover"
/>
```

Replace the placeholder `<div>` in `app/about/page.tsx` and `app/page.tsx` with the `<Image>` component above once the photo is added.
