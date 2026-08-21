# MTH Studio local landing page

A responsive Next.js 16 landing page for a Lisbon software studio serving local home service businesses. The page uses Tailwind CSS, shadcn components, Framer Motion, and Lucide icons.

## Run locally

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the local development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

The quote form is an interactive local demo. It validates all fields and shows loading and success states, but it does not transmit data. Connect it to an approved email service or CRM before publishing.

Placeholder home service artwork lives in `public/images/` and is referenced from `components/landing/placeholder-images.ts`.
