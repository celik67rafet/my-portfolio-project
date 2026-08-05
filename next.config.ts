import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Geliştirme modunda önbelleği devre dışı bırakır:
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Static generation cache'ini sıfırlar:
  staticPageGenerationTimeout: 1,

};

export default nextConfig;
