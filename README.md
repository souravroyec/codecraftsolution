# CodeCraft Solutions - Agency Website

A modern, high-performance website for CodeCraft Solutions, a web development agency specializing in MERN stack development, Next.js applications, AI automation, and WordPress migrations.

## 🚀 Features

- **Modern Stack**: Next.js 13+ with App Router, TypeScript, and Tailwind CSS
- **Animations**: Smooth interactions powered by Framer Motion
- **Responsive Design**: Mobile-first approach with optimized layouts
- **SEO Optimized**: Proper meta tags, OpenGraph, and structured data
- **Contact Forms**: Email integration with Nodemailer
- **CMS Ready**: Markdown-based content system with extensibility
- **Performance**: Optimized images, code splitting, and lazy loading
- **Accessibility**: WCAG compliant with keyboard navigation

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── wordpress-migration/ # WordPress migration page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── ui/                # shadcn/ui components
│   └── wordpress/         # WordPress-specific components
├── lib/                   # Utility functions
├── public/                # Static assets
└── content/               # Markdown content (blog, projects)
```

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd codecraft-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   # Email Configuration (for contact form)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM=noreply@codecraft-solutions.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📧 Email Configuration

The contact form uses Nodemailer for email delivery. Configure your email provider:

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use your Gmail address as `SMTP_USER`
4. Use the App Password as `SMTP_PASSWORD`

### Other Providers
Update the SMTP configuration in `.env.local` with your provider's settings.

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#14B8A6', // Teal
  secondary: '#3B82F6', // Blue
  accent: '#F97316', // Orange
}
```

### Content Management
- **Blog Posts**: Add markdown files to `content/blog/`
- **Projects**: Add project data to `content/projects/`
- **Company Info**: Update in component files

### Typography
The site uses Inter font. Change in `app/layout.tsx`:
```typescript
const customFont = YourFont({ subsets: ['latin'] });
```

## 🔧 WordPress Migration Features

### Migration Process
1. **Content Export**: Automated WordPress content extraction
2. **CMS Setup**: Headless CMS configuration (Sanity/Contentful)
3. **Next.js Build**: Modern application development
4. **SEO Migration**: URL redirects and meta data preservation
5. **Launch**: Deployment and monitoring setup

### Migration Checklist
- [ ] Export WordPress content and media
- [ ] Set up headless CMS
- [ ] Configure URL redirects (301)
- [ ] Migrate SEO meta data
- [ ] Test all functionality
- [ ] Performance optimization
- [ ] Launch and DNS update

## 📊 Performance Optimizations

- **Images**: Next.js Image component with optimization
- **Fonts**: Preloaded web fonts with display swap
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images load on demand
- **Caching**: Static generation where possible

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Example test files included for:
- Contact form functionality
- Navigation component
- SEO meta tags

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on git push

### Other Platforms
The site exports as static files and can be deployed to:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Traditional hosting

Build for production:
```bash
npm run build
```

## 🔒 Security Features

- **HTTPS Enforced**: All connections encrypted
- **Headers**: Security headers configured
- **Validation**: Input validation on forms
- **Sanitization**: Content sanitization
- **Rate Limiting**: API route protection

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tag system
- **Structured Data**: JSON-LD structured data
- **Sitemaps**: Dynamic sitemap generation
- **OpenGraph**: Social media optimization
- **Performance**: Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary to CodeCraft Solutions.

## 📞 Support

For technical support or customization requests:
- Email: hello@codecraft-solutions.com
- Phone: +91 98765 43210
- Website: https://codecraft-solutions.com

## 👥 Team

**Founders:**
- Subhrajit Mukherjee - Full Stack Developer
- Saurav Roy - Full Stack Developer

---

© 2025 CodeCraft Solutions. All rights reserved.
```
