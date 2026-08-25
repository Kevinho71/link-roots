import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/link-roots",       // ← nombre exacto de tu repo en GitHub
  images: {
    unoptimized: true,           // necesario para export estático
  },
};

export default nextConfig;
