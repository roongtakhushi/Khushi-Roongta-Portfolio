# 🌟 Khushi Roongta - Competition Portfolio Website

A stunning, competition-grade portfolio website featuring advanced animations, interactive elements, and a sophisticated design system.

## ✨ Features

### 🎨 Design Highlights
- **Cosmic Twilight Color Palette**: Unique dark theme with Electric Violet (#8b5cf6), Cyber Teal (#06b6d4), and Sunset Coral (#f97316)
- **Space Grotesk + Inter Typography**: Modern, professional font pairing
- **Glassmorphism Effects**: Frosted glass aesthetic throughout
- **Responsive Design**: Flawless on mobile, tablet, and desktop

### 🚀 Interactive Elements

#### Hero Section
- **Particle Animation System**: 80 interactive particles with mouse tracking
- **Dynamic Gradient Mesh**: Animated background overlay
- **Tech Stack Ticker**: Continuous horizontal scroll of technology icons
- **Smooth Scroll Indicator**: Animated arrow guiding users

#### About/Education Section
- **Creative Timeline**: Visual education journey
- **Radial Skill Meters**: SVG-based progress gauges that animate on scroll
  - HTML (90%), CSS (85%), JavaScript (80%)
  - MongoDB (75%), SQL (70%), Python (75%)
  - Cybersecurity (65%)

#### Projects Showcase
- **Interactive Card Layout**: Staggered grid with hover effects
- **Live Demo Mini-Window**: Click "Live Preview" to open iframe modal
- **5 Featured Projects**:
  1. AlgoSprint - Search Algorithm Visualizer
  2. The Soap Making Website - Chemistry Prototype
  3. EduTrack - Attendance Tracker
  4. Lost & Found Portal (In Development)
  5. Campus Tradz (In Development)

#### Certificates Gallery
- **3D Flip Cards**: Hover to reveal certificate details
- **Masonry Layout**: Responsive grid system
- **6 Sample Certificates** (ready for your actual certificates)

#### Contact Section
- **Click-to-Copy Email**: Animated button with toast notification
- **Social Media Links**: LinkedIn, GitHub, and Email
- **No Forms**: Direct mailto links for simplicity

## 🎯 How to Use

### Running Locally

1. **Open the website**:
   - Simply double-click `index.html` in your file explorer
   - OR use a local server (recommended):
     ```bash
     # If you have Python installed:
     python -m http.server 8000
     
     # Then open: http://localhost:8000
     ```

2. **Test all features**:
   - Scroll through all sections to trigger animations
   - Hover over skill meters to see them animate
   - Click "Live Preview" on projects to test iframe modals
   - Hover over certificate cards to see flip effect
   - Click email button to test copy functionality

### Customizing Content

#### Replacing Certificate Images

1. Take screenshots of your LinkedIn certificates
2. Save them in the same folder as `index.html`
3. Open `script.js` and find the `CertificateGallery` class (around line 180)
4. Update the certificate data:

```javascript
this.certificates = [
    {
        title: 'Your Certificate Title',
        organization: 'Issuing Organization',
        date: 'Month Year',
        credentialId: 'Your Credential ID'
    },
    // Add more certificates...
];
```

5. In the `render()` method, replace the placeholder image URL:

```javascript
// Change this line:
<img src="https://via.placeholder.com/400x300/8b5cf6/ffffff?text=${encodeURIComponent(cert.title)}" 

// To this (for local images):
<img src="certificate-${index + 1}.png" alt="${cert.title}">
```

6. Name your certificate images: `certificate-1.png`, `certificate-2.png`, etc.

#### Adding More Projects

1. Open `index.html`
2. Find the Projects Section (around line 200)
3. Copy a project card and modify:

```html
<div class="project-card reveal-on-scroll">
    <div class="project-card-inner">
        <div class="tech-ribbon">
            <span class="tech-tag">Your Tech</span>
        </div>
        <h3 class="project-title">Project Name</h3>
        <p class="project-tagline">Short Description</p>
        <p class="project-description">Detailed description...</p>
        <div class="project-links">
            <button class="btn-preview" onclick="openPreview('YOUR_URL')">
                <i class="fas fa-eye"></i> Live Preview
            </button>
            <a href="YOUR_URL" target="_blank" class="btn-link">
                <i class="fas fa-external-link-alt"></i> Full Demo
            </a>
            <a href="GITHUB_URL" target="_blank" class="btn-link">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

#### Updating Personal Information

All personal information is in `index.html`:
- **Name**: Line 48 (hero section)
- **Tagline**: Line 51
- **Education**: Line 66
- **Email**: Line 373, 385, 392
- **LinkedIn**: Line 377
- **GitHub**: Line 381

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🎨 Color Palette Reference

```css
--space-navy: #0a0e27;        /* Background */
--electric-violet: #8b5cf6;   /* Primary accent */
--cyber-teal: #06b6d4;         /* Secondary accent */
--sunset-coral: #f97316;       /* Highlight */
--soft-white: #f8fafc;         /* Text */
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Upload all files (`index.html`, `style.css`, `script.js`)
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

## 🎯 Competition Tips

### What Makes This Portfolio Stand Out

1. **Unique Color Palette**: Not generic blues - sophisticated Cosmic Twilight theme
2. **Advanced Animations**: Particle system, scroll reveals, skill meters
3. **Interactive Features**: Live project previews, flip cards, copy-to-clipboard
4. **Professional Design**: Glassmorphism, gradients, micro-interactions
5. **Performance**: Optimized with Intersection Observer, lazy loading
6. **Code Quality**: Clean, commented, modular ES6+ JavaScript

### Before Submitting

- [ ] Replace all placeholder certificates with actual images
- [ ] Test on mobile, tablet, and desktop
- [ ] Verify all project links work
- [ ] Check email copy functionality
- [ ] Test iframe previews for deployed projects
- [ ] Ensure smooth scrolling on all devices
- [ ] Validate HTML/CSS (optional but recommended)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Advanced animations, gradients, transforms
- **Tailwind CSS**: Utility classes via CDN
- **Vanilla JavaScript (ES6+)**: Classes, modules, async/await
- **Canvas API**: Particle animation system
- **Intersection Observer API**: Scroll-triggered animations
- **Clipboard API**: Copy-to-clipboard functionality

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Customization Ideas

1. **Add More Sections**: Testimonials, Blog, Achievements
2. **Change Theme**: Modify CSS variables for different color schemes
3. **Add More Animations**: GSAP library for advanced effects
4. **Dark/Light Toggle**: Add theme switcher
5. **Add Music**: Background music toggle (be subtle!)

## 🎓 Learning Resources

If judges ask about your implementation:

- **Particle System**: Canvas API + requestAnimationFrame
- **Scroll Animations**: Intersection Observer API
- **Skill Meters**: SVG circles with stroke-dashoffset animation
- **Flip Cards**: CSS 3D transforms (rotateY)
- **Responsive Design**: CSS Grid, Flexbox, media queries

## 📞 Support

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all files are in the same folder
3. Use a local server instead of opening directly
4. Clear browser cache and reload

---

**Created with 💜 for competition excellence**

Good luck with your portfolio competition! 🚀
