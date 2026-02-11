# 🚀 Quick Start Guide

## Running Your Portfolio

### Option 1: Double-Click (Easiest)
1. Navigate to `d:\Whole info portfolio\`
2. Double-click `index.html`
3. Opens in your default browser

### Option 2: Local Server (Recommended for Testing)
```bash
cd "d:\Whole info portfolio"
python -m http.server 8000
# Open: http://localhost:8000
```

---

## 📝 Quick Customization Guide

### Replace Certificate Images

**Step 1**: Take screenshots of your LinkedIn certificates

**Step 2**: Save them in `d:\Whole info portfolio\` as:
- `certificate-1.png`
- `certificate-2.png`
- `certificate-3.png`
- etc.

**Step 3**: Open `script.js` and find line 180 (CertificateGallery class)

**Step 4**: Update the certificate data:
```javascript
this.certificates = [
    {
        title: 'Your Certificate Title',
        organization: 'LinkedIn Learning',
        date: 'January 2026',
        credentialId: 'CERT-XXX-2026-001'
    },
    // Add more...
];
```

**Step 5**: In the `render()` method (around line 210), change:
```javascript
// FROM:
<img src="https://via.placeholder.com/400x300/8b5cf6/ffffff?text=${encodeURIComponent(cert.title)}" 

// TO:
<img src="certificate-${index + 1}.png" alt="${cert.title}">
```

---

### Update Personal Info

All in `index.html`:

| What | Line | Current Value |
|------|------|---------------|
| Name | 48 | Khushi Roongta |
| Tagline | 51 | Engineering secure digital... |
| Education | 66-70 | MIT College details |
| Email | 373, 385, 392 | khushiroongta0801@gmail.com |
| LinkedIn | 377 | Your LinkedIn URL |
| GitHub | 381 | Your GitHub URL |

---

### Add More Projects

1. Open `index.html`
2. Find Projects Section (line ~200)
3. Copy a project card
4. Update:
   - Title
   - Tagline
   - Description
   - Tech tags
   - Links (GitHub, Demo)
   - `onclick="openPreview('YOUR_URL')"` for iframe

---

## 🎨 Color Customization

Want different colors? Edit `style.css` line 5-10:

```css
:root {
    --space-navy: #0a0e27;        /* Background */
    --electric-violet: #8b5cf6;   /* Primary */
    --cyber-teal: #06b6d4;         /* Secondary */
    --sunset-coral: #f97316;       /* Highlight */
    --soft-white: #f8fafc;         /* Text */
}
```

---

## 🌐 Deploy to GitHub Pages

1. Create new repo on GitHub
2. Upload all files
3. Settings → Pages
4. Source: main branch
5. Save
6. Your site: `https://yourusername.github.io/repo-name`

---

## ✅ Pre-Submission Checklist

- [ ] Replace certificate placeholders with actual images
- [ ] Test on desktop browser
- [ ] Test on mobile (or DevTools mobile view)
- [ ] Click all project links to verify they work
- [ ] Test email copy functionality
- [ ] Test project iframe previews
- [ ] Hover over certificate cards to see flip
- [ ] Scroll through entire page to see animations
- [ ] Check for any console errors (F12)

---

## 🎯 What Makes This Portfolio Special

1. **Unique Colors**: Cosmic Twilight theme (not generic blue)
2. **Particle Animation**: Custom Canvas API implementation
3. **Interactive Previews**: Live project demos in modals
4. **3D Flip Cards**: Certificate gallery
5. **Radial Skill Meters**: Animated on scroll
6. **Professional Design**: Glassmorphism, gradients, micro-interactions

---

## 🆘 Troubleshooting

**Particles not showing?**
- Open browser console (F12)
- Check for JavaScript errors
- Try a different browser

**Animations not working?**
- Scroll slowly to trigger them
- Check if JavaScript is enabled

**Iframe previews not loading?**
- Some sites block iframes
- Your deployed projects should work fine

**Email copy not working?**
- Try a modern browser (Chrome, Firefox, Edge)
- Check clipboard permissions

---

## 📞 File Structure

```
d:\Whole info portfolio\
├── index.html       ← Main file
├── style.css        ← All styling
├── script.js        ← Interactivity
├── README.md        ← Full documentation
└── QUICKSTART.md    ← This file
```

---

**Ready to impress the judges? Good luck! 🚀💜**
