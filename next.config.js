/** @type {import('next').NextConfig} */
// `output: 'standalone'` is required by Layero's Next SSR runtime image
// (it COPYs .next/standalone). No `output: 'export'` → real SSR.
module.exports = { reactStrictMode: true, output: "standalone" };
