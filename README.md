# Portfolio Kyel Rui Saputra Saroinsong

Website portfolio pribadi berbasis **Next.js 14** dengan desain dark minimal modern.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** CSS Keyframes + React state
- **Fonts:** Space Mono + DM Sans (Google Fonts)
- **Deployment:** Vercel (free tier)

## 📦 Instalasi

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
http://localhost:3000
```

## 🌐 Deploy ke Vercel

### Cara 1 — Via GitHub (Recommended)
1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Login → "Add New Project" → Import repo
4. Klik Deploy → **Selesai!**

### Cara 2 — Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📁 Struktur Project

```
portfolio-kyel/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Main page (semua section)
│   └── globals.css      # Global styles + CSS variables
├── components/
│   ├── CustomCursor.tsx # Animated cursor (desktop)
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Hero.tsx         # Landing section + typewriter
│   ├── About.tsx        # About me + profile card
│   ├── Skills.tsx       # Tech stack + skill bars
│   ├── Projects.tsx     # Project showcase (accordion)
│   ├── Education.tsx    # Education timeline
│   ├── Certifications.tsx # Certificates grid
│   ├── Contact.tsx      # Contact form + info
│   └── Footer.tsx       # Footer
├── public/              # Static assets (tambahkan foto di sini)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Kustomisasi

### Ubah warna aksen
Edit di `app/globals.css`:
```css
:root {
  --accent: #00ff88;  /* ganti warna di sini */
}
```

### Tambah foto profil
1. Simpan foto di `/public/foto-profil.jpg`
2. Gunakan di komponen manapun:
```tsx
import Image from "next/image";
<Image src="/foto-profil.jpg" alt="Kyel" width={300} height={300} />
```

### Update data project
Edit array `projects` di `components/Projects.tsx`

### Update skill
Edit array `skillGroups` di `components/Skills.tsx`

## 📞 Kontak

- **Email:** Kyelrui321@gmail.com
- **WhatsApp:** +62 823-1278-2729
- **Lokasi:** Palu, Sulawesi Tengah
