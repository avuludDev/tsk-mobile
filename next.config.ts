import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF для браузерів, що його підтримують, WebP - як запасний варіант
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
