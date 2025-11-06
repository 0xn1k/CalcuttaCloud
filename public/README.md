# Public Assets Folder

## How to Add Your Background Image

1. **Add your image** (e.g., Hooghly Bridge photo) to this folder
2. **Rename it to:** `ImageTest.png`
   - Or update the filename in `app/page.tsx` line 111

## Current Background Image Setup

- **Location:** `/public/ImageTest.png`
- **Opacity:** 5% (light mode), 10% (dark mode) - very subtle
- **Effect:** Creates a heritage feel behind the gradient

## Recommended Image Specs

- **Format:** PNG or JPG
- **Size:** 1920x1080 or larger (will be scaled)
- **Subject:** Iconic Calcutta landmarks like:
  - Hooghly Bridge
  - Victoria Memorial
  - Howrah Bridge
  - City skyline

## To Adjust Opacity

Edit `app/page.tsx` line 109:
```tsx
className="... opacity-5 dark:opacity-10"
         // Change to opacity-10 or opacity-20 for more visible
```
