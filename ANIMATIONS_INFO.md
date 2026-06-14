# Smooth Animations Guide

## Quick Start Command

```bash
# Copy & paste this in VS Code terminal:
pnpm install && pnpm dev
```

The site opens automatically at **http://localhost:3000**

---

## All Animations Included

Every section has **smooth slide-in/out animations with ease-in-out timing**:

| Section | Animation | Effect |
|---------|-----------|--------|
| Hero | Slide-in left (text) + Slide-in right (image) | Text enters from left, image from right |
| Features | Staggered slide-in + Hover scale | Cards slide in with delay, scale on hover |
| Tips Banner | Slide-up container | Banner slides up with button animation |
| Who For | Dual slide-in columns | Left side slides left, right slides right |
| Gallery | Staggered slide-up | Images slide up one by one |
| FAQ | Slide-in sections | Accordion with smooth slide animations |
| Contact | Slide-in form + info | Form fields and info slide in |
| Footer | Staggered fade-in | Links animate with stagger delay |

---

## Mobile & Desktop

✓ All animations work smoothly on both devices
✓ Reduced animation distances on mobile for better performance
✓ Touch-friendly 44px+ buttons
✓ Respects `prefers-reduced-motion` setting

---

## Customizing Animations

Edit `/app/globals.css` to change animation values:

```css
/* Default animation durations */
.slide-in-left {
  animation: slideInLeft 0.7s ease-in-out forwards;
}

/* Mobile (auto-applies at 768px and below) */
@media (max-width: 768px) {
  .slide-in-left {
    animation: slideInLeftMobile 0.6s ease-in-out forwards;
  }
}
```

---

## File Structure

```
project/
├── app/
│   ├── globals.css          ← All animations defined here
│   └── layout.tsx
├── components/
│   ├── hero.tsx             ← Each component has animations
│   ├── features.tsx
│   ├── tips-banner.tsx
│   ├── who-for.tsx
│   ├── gallery.tsx
│   ├── faq.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── SETUP.md                 ← Quick setup guide
└── ANIMATIONS_INFO.md       ← This file
```

---

## Troubleshooting

**Port 3000 already in use:**
```bash
pnpm dev -- -p 3001
```

**Clear cache if animations don't show:**
```bash
rm -rf .next node_modules
pnpm install
pnpm dev
```

**Animations too fast/slow:**
Edit animation duration in globals.css or component files

---

## Animation Timing Reference

- Desktop: 0.7-0.8s (smooth, deliberate)
- Mobile: 0.5-0.6s (snappier, responsive)
- Ease function: `ease-in-out` (all animations)
- Stagger delay: 0.1s between elements

That's it! Run `pnpm dev` and enjoy smooth animations.
