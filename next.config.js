/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // English: /en/services/:service → /en/hizmetler/:service
      { source: '/en/services/web-design', destination: '/en/hizmetler/web-sitesi-tasarimi' },
      { source: '/en/services/review-management', destination: '/en/hizmetler/web-sitesi-tasarimi' },
      { source: '/en/services/:service', destination: '/en/hizmetler/:service' },
    ];
  },
  async redirects() {
    return [
      // 301: Standorte routes redirect to / (salihmaral.com is independent of Germany)
      { source: '/:lang/standorte/:city*', destination: '/', statusCode: 301 },
      { source: '/:lang/standorte', destination: '/', statusCode: 301 },
      { source: '/standorte/:city*', destination: '/', statusCode: 301 },
      { source: '/standorte', destination: '/', statusCode: 301 },
      // 301: German routes redirect to / (salihmaral.com is bilingual TR/EN only)
      { source: '/de/:path*', destination: '/', statusCode: 301 },
      { source: '/de', destination: '/', statusCode: 301 },
      // 301: Eski Yorum Yönetimi URL'leri → Yeni Anahtar Teslim Web Sitesi URL'leri
      { source: '/tr/hizmetler/yorum-yonetimi', destination: '/tr/hizmetler/web-sitesi-tasarimi', statusCode: 301 },
      { source: '/en/services/review-management', destination: '/en/services/web-design', statusCode: 301 },
      // 301: Eski Türkçe EN URL'ler → Yeni İngilizce URL'ler
      { source: '/en/hizmetler/web-sitesi-tasarimi', destination: '/en/services/web-design', statusCode: 301 },
      { source: '/en/hizmetler/yorum-yonetimi', destination: '/en/services/web-design', statusCode: 301 },
      { source: '/en/hizmetler/:service', destination: '/en/services/:service', statusCode: 301 },

      // 301: Thin / Eski Blog Yazıları → Yetkin 2026 Ana Rehberleri (GSC Dizine Ekleme Çözümü)
      { source: '/blog/meta-ads-basari', destination: '/blog/meta-reklamlarinda-para-kaybetmeyi-durdurun-2026', statusCode: 301 },
      { source: '/blog/seo-stratejileri-2026', destination: '/blog/google-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/blog/tiktok-ads-rehber', destination: '/blog/tiktok-shop-vs-meta-advantage-plus-e-commerce-2026', statusCode: 301 },
      { source: '/tr/blog/seo-stratejileri-2026', destination: '/blog/google-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/en/blog/meta-ads-basari', destination: '/blog/meta-reklamlarinda-para-kaybetmeyi-durdurun-2026', statusCode: 301 },

      // 301: Kelime Yamyamlığı (Cannibalization) Konsolidasyonu & Otorite Birleştirme
      // 1. Consent Mode v2
      { source: '/blog/google-consent-mode-v2-cerezsiz-takip-veri-kaybi-onleme-2026', destination: '/blog/google-consent-mode-v2-cookieless-ai-tracking-2026', statusCode: 301 },
      { source: '/en/blog/google-consent-mode-v2-cerezsiz-takip-veri-kaybi-onleme-2026', destination: '/en/blog/google-consent-mode-v2-cookieless-ai-tracking-2026', statusCode: 301 },
      { source: '/tr/blog/google-consent-mode-v2-cerezsiz-takip-veri-kaybi-onleme-2026', destination: '/blog/google-consent-mode-v2-cookieless-ai-tracking-2026', statusCode: 301 },
      // 2. TikTok Shop vs Meta Advantage+
      { source: '/blog/tiktok-shop-ads-vs-meta-advantage-plus-sosyal-ticaret-karsilastirmasi-2026', destination: '/blog/tiktok-shop-vs-meta-advantage-plus-e-commerce-2026', statusCode: 301 },
      { source: '/en/blog/tiktok-shop-ads-vs-meta-advantage-plus-sosyal-ticaret-karsilastirmasi-2026', destination: '/en/blog/tiktok-shop-vs-meta-advantage-plus-e-commerce-2026', statusCode: 301 },
      { source: '/tr/blog/tiktok-shop-ads-vs-meta-advantage-plus-sosyal-ticaret-karsilastirmasi-2026', destination: '/blog/tiktok-shop-vs-meta-advantage-plus-e-commerce-2026', statusCode: 301 },
      // 3. Server-Side GTM & Meta CAPI
      { source: '/blog/meta-capi-google-cloud-server-side-gtm-kurulum-rehberi-2026', destination: '/blog/server-side-gtm-meta-capi-setup-2026', statusCode: 301 },
      { source: '/en/blog/meta-capi-google-cloud-server-side-gtm-kurulum-rehberi-2026', destination: '/en/blog/server-side-gtm-meta-capi-setup-2026', statusCode: 301 },
      { source: '/tr/blog/meta-capi-google-cloud-server-side-gtm-kurulum-rehberi-2026', destination: '/blog/server-side-gtm-meta-capi-setup-2026', statusCode: 301 },
      // 4. Google Haritalar Local SEO (3 kopya → 1 Flagship)
      { source: '/blog/google-maps-local-seo-guide', destination: '/blog/google-maps-local-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/en/blog/google-maps-local-seo-guide', destination: '/en/blog/google-maps-local-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/tr/blog/google-maps-local-seo-guide', destination: '/blog/google-maps-local-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/blog/local-seo-google-maps', destination: '/blog/google-maps-local-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/en/blog/local-seo-google-maps', destination: '/en/blog/google-maps-local-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/tr/blog/local-seo-google-maps', destination: '/blog/google-maps-local-seo-ranking-factors-2026', statusCode: 301 },
      // 5. B2B Google Ads vs LinkedIn Ads
      { source: '/blog/b2b-google-ads-vs-linkedin-ads-karsilastirmasi-2026', destination: '/blog/b2b-google-ads-vs-linkedin-ads-karsilastirmasi-cpl-analizi-2026', statusCode: 301 },
      { source: '/en/blog/b2b-google-ads-vs-linkedin-ads-karsilastirmasi-2026', destination: '/en/blog/b2b-google-ads-vs-linkedin-ads-karsilastirmasi-cpl-analizi-2026', statusCode: 301 },
      { source: '/tr/blog/b2b-google-ads-vs-linkedin-ads-karsilastirmasi-2026', destination: '/blog/b2b-google-ads-vs-linkedin-ads-karsilastirmasi-cpl-analizi-2026', statusCode: 301 },
      // 6. Reklamveren Doğrulaması
      { source: '/blog/google-ads-reklamveren-dogrulamasi-takilma-cozumleri-2026', destination: '/blog/google-ads-reklamveren-dogrulamasi-rehberi-2026', statusCode: 301 },
      { source: '/en/blog/google-ads-reklamveren-dogrulamasi-takilma-cozumleri-2026', destination: '/en/blog/google-ads-reklamveren-dogrulamasi-rehberi-2026', statusCode: 301 },
      { source: '/tr/blog/google-ads-reklamveren-dogrulamasi-takilma-cozumleri-2026', destination: '/blog/google-ads-reklamveren-dogrulamasi-rehberi-2026', statusCode: 301 },
      // 7. Meta Advantage+ AI Creative
      { source: '/blog/meta-advantage-plus-ai-creative-scaling', destination: '/blog/meta-advantage-plus-creative-ai-2026', statusCode: 301 },
      { source: '/en/blog/meta-advantage-plus-ai-creative-scaling', destination: '/en/blog/meta-advantage-plus-creative-ai-2026', statusCode: 301 },
      { source: '/tr/blog/meta-advantage-plus-ai-creative-scaling', destination: '/blog/meta-advantage-plus-creative-ai-2026', statusCode: 301 },
      // 8. Eski Almanca URL Slug Kalıntıları → %100 Türkçe/İngilizce SEO URL'leri (301 Otorite Aktarımı)
      { source: '/blog/google-ads-agentur-kosten-preise-2026', destination: '/blog/google-ads-ajans-ucretleri-fiyatlari-2026', statusCode: 301 },
      { source: '/en/blog/google-ads-agentur-kosten-preise-2026', destination: '/en/blog/google-ads-ajans-ucretleri-fiyatlari-2026', statusCode: 301 },
      { source: '/tr/blog/google-ads-agentur-kosten-preise-2026', destination: '/blog/google-ads-ajans-ucretleri-fiyatlari-2026', statusCode: 301 },
      { source: '/blog/google-ads-kosten-2026', destination: '/blog/google-ads-reklam-ucretleri-tiklama-maliyeti-2026', statusCode: 301 },
      { source: '/en/blog/google-ads-kosten-2026', destination: '/en/blog/google-ads-reklam-ucretleri-tiklama-maliyeti-2026', statusCode: 301 },
      { source: '/tr/blog/google-ads-kosten-2026', destination: '/blog/google-ads-reklam-ucretleri-tiklama-maliyeti-2026', statusCode: 301 },
      { source: '/blog/google-ads-fixpreis-vs-prozent-agentur-modell-2026', destination: '/blog/google-ads-sabit-fiyat-vs-komisyon-ajans-modeli-2026', statusCode: 301 },
      { source: '/en/blog/google-ads-fixpreis-vs-prozent-agentur-modell-2026', destination: '/en/blog/google-ads-sabit-fiyat-vs-komisyon-ajans-modeli-2026', statusCode: 301 },
      { source: '/tr/blog/google-ads-fixpreis-vs-prozent-agentur-modell-2026', destination: '/blog/google-ads-sabit-fiyat-vs-komisyon-ajans-modeli-2026', statusCode: 301 },
      { source: '/blog/google-ads-fehler-vermeiden', destination: '/blog/google-ads-butce-yakan-hatalar-ve-cozumleri-2026', statusCode: 301 },
      { source: '/en/blog/google-ads-fehler-vermeiden', destination: '/en/blog/google-ads-butce-yakan-hatalar-ve-cozumleri-2026', statusCode: 301 },
      { source: '/tr/blog/google-ads-fehler-vermeiden', destination: '/blog/google-ads-butce-yakan-hatalar-ve-cozumleri-2026', statusCode: 301 },
      { source: '/blog/google-ads-pmax-negative-keywords-kampagnen-2026', destination: '/blog/google-ads-pmax-negatif-anahtar-kelime-rehberi-2026', statusCode: 301 },
      { source: '/en/blog/google-ads-pmax-negative-keywords-kampagnen-2026', destination: '/en/blog/google-ads-pmax-negatif-anahtar-kelime-rehberi-2026', statusCode: 301 },
      { source: '/tr/blog/google-ads-pmax-negative-keywords-kampagnen-2026', destination: '/blog/google-ads-pmax-negatif-anahtar-kelime-rehberi-2026', statusCode: 301 },
      { source: '/blog/ai-seo-geoptimierung', destination: '/blog/geo-ai-seo-generative-engine-optimization-guide-2026', statusCode: 301 },
      { source: '/en/blog/ai-seo-geoptimierung', destination: '/en/blog/geo-ai-seo-generative-engine-optimization-guide-2026', statusCode: 301 },
      { source: '/tr/blog/ai-seo-geoptimierung', destination: '/blog/geo-ai-seo-generative-engine-optimization-guide-2026', statusCode: 301 },
      // 9. TikTok Shop Yamyamlık Konsolidasyonu
      { source: '/blog/tiktok-shop-social-commerce', destination: '/blog/tiktok-shop-ecommerce-scaling', statusCode: 301 },
      { source: '/en/blog/tiktok-shop-social-commerce', destination: '/en/blog/tiktok-shop-ecommerce-scaling', statusCode: 301 },
      { source: '/tr/blog/tiktok-shop-social-commerce', destination: '/blog/tiktok-shop-ecommerce-scaling', statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|css|js)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
