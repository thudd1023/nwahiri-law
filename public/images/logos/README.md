# Firm Logos

Place Nwahiri Law logo files in this directory.

## Recommended Files

- `nwahiri-law-logo.svg` — Primary SVG logo (preferred for web — scales perfectly)
- `nwahiri-law-logo-white.svg` — White version for use on dark navy backgrounds (header top bar, footer)
- `nwahiri-law-logo-dark.png` — Dark version PNG fallback
- `nwahiri-law-favicon.ico` — Favicon (also copy to `app/favicon.ico` to replace the Next.js default)

## Colors

- Primary logo: Deep Navy #0F2044
- On dark backgrounds: White #FFFFFF
- Accent element: Antique Gold #B8973B or Crimson #BE1823

## Usage

Once logos are added, update `components/Header.tsx` to use `<Image>` instead of the text "NWAHIRI LAW":

```tsx
import Image from 'next/image';

// In Header.tsx Logo section:
<Link href="/">
  <Image
    src="/images/logos/nwahiri-law-logo.svg"
    alt="Nwahiri Law"
    width={180}
    height={50}
    priority
  />
</Link>
```
