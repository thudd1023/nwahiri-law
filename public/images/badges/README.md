# Award Badges

Place award badge images in this directory.

## Required Files

- `national-trial-lawyers.png` — Official National Trial Lawyers Top 40 Under 40 badge
  - Source: Download from your National Trial Lawyers member portal
  - Recommended size: 200×200px or larger, transparent PNG
  - Used on: Home page (Recognition section)

## Optional

- `best-lawyers-ones-to-watch.png` — Best Lawyers Ones to Watch badge (only if you purchase logo rights)
  - Note: Per brand guidelines, Best Lawyers is currently displayed as text-only (no logo) because rights have not been purchased. Add this file only if you obtain the official logo license.

## Usage in Code

Once you add `national-trial-lawyers.png`, replace the placeholder div in `app/page.tsx` Recognition section:

```tsx
import Image from 'next/image';

<Image
  src="/images/badges/national-trial-lawyers.png"
  alt="National Trial Lawyers Top 40 Under 40"
  width={100}
  height={100}
  className="object-contain"
/>
```
