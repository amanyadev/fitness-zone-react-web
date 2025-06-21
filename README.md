# K4 Fitness Zone Website

A modern, responsive website for K4 Fitness Zone, built with React and Tailwind CSS. The website showcases the gym's facilities, services, and provides easy contact options for potential members.

## 🌐 Live Website

Visit the website: [K4 Fitness Zone](https://amanyadev.github.io/fitness-zone-react-web/)

## 🚀 Features

- Modern, responsive design
- Interactive contact forms
- Real-time location mapping
- Social media integration (WhatsApp, Instagram)
- Working hours display
- Mobile-friendly interface

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/amanyadev/fitness-zone-react-web.git
cd fitness-zone-react-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered when:

1. Changes are pushed to the `main` branch
2. Manual deployment is triggered from the Actions tab

### Manual Deployment

You can manually deploy the site using:

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy it to the `gh-pages` branch
3. Update the live site

## 📞 Contact Information

For inquiries about gym membership and services:
- Primary Phone: +91 96487 45611
- Secondary Phone: +91 87564 77778
- Email: info@k4fitness.com
- Instagram: [@k4fitnesszone](https://www.instagram.com/k4fitnesszone)

## 📍 Location

K4 Fitness Zone is located at:
Sector 6A, K.K. Complex, In front of Akash Enclave,
Vrindavan Colony, Telibagh,
Lucknow, Uttar Pradesh 226002

## ⏰ Working Hours

- Monday - Saturday: 
  - Morning: 5:00 AM - 10:00 AM
  - Evening: 5:00 PM - 10:00 PM
- Sunday: Closed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## Image Optimization

This project includes advanced image optimization for better web performance:

### Automatic Optimization

The build process automatically optimizes images using `vite-plugin-imagemin` with:
- JPEG compression (MozJPEG)
- PNG optimization (PNGQuant)
- GIF optimization (Gifsicle)
- SVG optimization (SVGO)

### WebP Conversion

To create optimized WebP versions of gallery images:

```bash
npm run optimize-images
```

This script:
- Converts all gallery images to WebP format
- Creates multiple sizes (thumbnail, medium, large, original)
- Maintains aspect ratios
- Reduces file sizes by 60-80%

### Optimized Image Component

The `OptimizedImage` component provides:
- Responsive image loading
- WebP format with fallbacks
- Lazy loading
- Loading states
- Error handling

Usage:
```tsx
import OptimizedImage from '@/components/ui/OptimizedImage';

<OptimizedImage
  src="/gallery/gym-equipment-1.jpg"
  alt="Gym Equipment"
  aspectRatio="4/3"
  className="rounded-lg"
/>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run optimize-images` - Optimize gallery images
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Gallery.tsx     # Image gallery
│   ├── Testimonials.tsx # Customer testimonials
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
└── lib/                # Utility functions

public/
├── gallery/            # Original gallery images
├── gallery-optimized/  # Optimized WebP images
└── ...
```

## Performance Features

- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Images load only when needed
- **Responsive Images**: Different sizes for different screen sizes
- **Code Splitting**: Automatic chunk splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JS minification

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
