# Surf School Website - Smooth Animations

Professional surf school landing page with smooth slide-in/out animations and ease-in-out timing on every section.

## 🚀 Quick Start (Copy & Paste)

```bash
pnpm install && pnpm dev
```

**That's it!** Your site opens at `http://localhost:3000`

---

## ✨ What's Included

All sections have smooth animations:

| Section | Animation | Timing |
|---------|-----------|--------|
| Hero | Slide-in left + right | 0.8s ease-in-out |
| Features | Staggered slide-in | 0.8s ease-in-out |
| Tips Banner | Slide-up | 0.8s ease-in-out |
| Who For | Dual slide-in | 0.8s ease-in-out |
| Gallery | Staggered slide-up | 0.8s ease-in-out |
| FAQ | Slide-in accordion | 0.8s ease-in-out |
| Contact | Form slide-in | 0.8s ease-in-out |
| Footer | Staggered links | 0.8s ease-in-out |

---

## 📱 Mobile & Desktop

- ✓ All animations work smoothly on both devices
- ✓ Mobile: 0.5-0.6s, 50px distance
- ✓ Desktop: 0.7-0.8s, 100px distance
- ✓ Touch-friendly (44px+ buttons)
- ✓ Respects accessibility preferences

---

## 🛠️ If You Get Errors

**Port 3000 busy?**
```bash
pnpm dev -- -p 3001
```

**Page won't load?**
```bash
# Stop with Ctrl+C, then:
pnpm install
pnpm dev
```

---

## 📝 Customizing Animations

Edit `/app/globals.css`:

```css
.slide-in-left {
  animation: slideInLeft 0.7s ease-in-out forwards;  /* Change 0.7s duration */
}
```

---

## 📚 Documentation Files

- `RUN_PROJECT.txt` - Quick reference
- `SETUP.md` - Full setup guide
- `ANIMATIONS_INFO.md` - Detailed animation docs
- `COMPLETE_CHECKLIST.md` - What's included

---

## 📦 Project Structure

```
components/
  ├── hero.tsx
  ├── features.tsx
  ├── tips-banner.tsx
  ├── who-for.tsx
  ├── gallery.tsx
  ├── faq.tsx
  ├── contact.tsx
  └── footer.tsx

app/
  ├── globals.css (all animations here)
  └── layout.tsx
```

---

## 🎯 Key Features

✓ Smooth slide-in/out animations everywhere
✓ Ease-in-out timing for polished feel
✓ Staggered animation delays
✓ Hover effects with scale & shadow
✓ Mobile-first responsive design
✓ Performance optimized (60fps)
✓ Accessibility built-in

---

**Ready to start?** Run: `pnpm install && pnpm dev`
