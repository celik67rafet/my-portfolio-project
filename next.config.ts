import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin( "./src/i18n/request.ts" );

const nextConfig: NextConfig = {
  // Yerel ağdaki cihazlardan (tablet, telefon, IP) JS modüllerine erişim izni:
  allowedDevOrigins: ["192.168.1.14", "127.0.0.1", "localhost"],
};

export default withNextIntl( nextConfig );
