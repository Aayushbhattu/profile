# Personal developer portfolio

A responsive, static portfolio site for an IT graduate interested in mobile apps, web development, and IoT. It is built with Vite and vanilla JavaScript and can be hosted on any static-site platform—no backend is required.

## Portfolio details

The portfolio is personalized for Aayush Bhandari in Pokhara-7, Nepal. It uses the supplied portrait, links to the GitHub profile `Aayushbhattu`, and features the `futsal-mate-mobile`, `ESP32_QR_Payment_Display`, and `chatting-system` repositories. The contact links use `aayushbhandari151@gmail.com` and WhatsApp. CV-based experience, education, and technology skills are included.

The mobile, Laravel, and IoT sections describe your areas of interest based on the information provided. Update their copy and technologies in `src/main.js` to match your actual experience. Add project-specific screenshots or case studies when ready.

## Run locally

Requires a current Node.js LTS release.

```sh
npm install
npm run dev
```

Open the local address printed by Vite. To verify a production build and preview it locally:

```sh
npm run build
npm run preview
```

The deployable site is generated in `dist/`.

## Deploy to your domain with Vercel

1. Push this project to a GitHub repository.
2. Import the repository into Vercel. It detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory.
3. Deploy and open **Project Settings → Domains** to add your domain.
4. At your domain registrar/DNS provider, add the exact DNS records Vercel shows for the domain, then wait for DNS verification and HTTPS provisioning.
5. Redeploy after editing your details. Vercel can also redeploy automatically whenever you push to GitHub.

You can also publish the contents of `dist/` with Netlify, Cloudflare Pages, or another static host. Follow that host’s custom-domain setup and configure DNS using the records it provides.
# profile
