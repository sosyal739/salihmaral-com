'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Menu, X, ChevronDown, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const servicesList = [
  { title: 'Google Ads Yönetimi', slug: 'google-ads' },
  { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
  { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
  { title: 'YouTube Ads & Video Büyüme', slug: 'youtube-ads' },
  { title: 'TikTok Ads', slug: 'tiktok-ads' },
  { title: 'SEO & GEO Optimizasyonu', slug: 'seo' },
  { title: 'Anahtar Teslim Web Sitesi', slug: 'web-sitesi-tasarimi' }
]

export default function ImpressumPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Fixed Agency Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo & Google Partner Badge */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="/" className="flex items-center gap-2">
                <picture>
                  <source srcSet="/logo-sm.webp" type="image/webp" />
                  <img src="/logo.png" alt="Salih Maral Logo" className="h-9 sm:h-10 w-auto" width="40" height="40" />
                </picture>
                <span className="text-xl font-black text-slate-900 tracking-tight">
                  Salih Maral<span className="text-blue-600">.</span>
                </span>
              </a>
              <div className="hidden lg:flex items-center pl-3 border-l border-slate-200">
                <a
                  href="https://www.google.com/partners/agency?id=5868261912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                    alt="Resmi Google Partner"
                    className="h-7 w-auto"
                    width="48"
                    height="28"
                  />
                  <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                    Resmi Google Partner
                  </span>
                </a>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700">
              <a href="/" className="hover:text-blue-600 transition-colors">
                Ana Sayfa
              </a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors py-2 cursor-pointer"
                >
                  <span>Hizmetlerimiz</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                  >
                    {servicesList.map((svc) => (
                      <a
                        key={svc.slug}
                        href={`/tr/hizmetler/${svc.slug}`}
                        className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {svc.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/about" className="hover:text-blue-600 transition-colors">
                Hakkımda
              </a>
              <a href="/blog" className="hover:text-blue-600 transition-colors">
                Rehberler & Blog
              </a>
              <a href="/#contact" className="hover:text-blue-600 transition-colors">
                İletişim
              </a>
            </div>

            {/* Right: CTA & Mobile Hamburger */}
            <div className="flex items-center space-x-3">
              <a
                href="/#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xs"
              >
                Form ile Ulaşın (24s Dönüş)
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Menüyü aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t border-slate-200 mt-3 space-y-2">
              <a href="/" className="block py-2 text-sm font-semibold text-slate-800">
                Ana Sayfa
              </a>
              <div className="py-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Hizmetlerimiz</span>
                <div className="pl-3 mt-1 space-y-1">
                  {servicesList.map((svc) => (
                    <a
                      key={svc.slug}
                      href={`/tr/hizmetler/${svc.slug}`}
                      className="block py-1 text-xs text-slate-600 hover:text-blue-600"
                    >
                      {svc.title}
                    </a>
                  ))}
                </div>
              </div>
              <a href="/about" className="block py-2 text-sm font-semibold text-slate-800">
                Salih Maral Hakkında
              </a>
              <a href="/blog" className="block py-2 text-sm font-semibold text-slate-800">
                Rehberler & Blog
              </a>
              <a href="/#contact" className="block py-2 text-sm font-semibold text-blue-600">
                İletişim Formu (24 Saatte Geri Dönüş)
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Visual Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2">
          <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Yasal Künye & Kurumsal Bilgiler</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Yasal Künye (Legal Notice)</h1>

          <Card className="bg-white shadow-xs border border-slate-200">
            <CardContent className="pt-8 pb-8 px-6 md:px-10 prose prose-lg max-w-none text-slate-700 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Hizmet Sağlayıcı & Kurumsal Kimlik</h2>
                <p>
                  <strong>Salih Maral</strong><br />
                  Kıdemli Dijital Pazarlama & Performans Danışmanı<br />
                  Resmi Google Partner (Ajans Kimliği: 5868261912)
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Merkez & Hizmet Bölgesi</h2>
                <p>
                  İstanbul / Türkiye &bull; Global Remote Dijital Pazarlama ve Yazılım Danışmanlığı<br />
                  Hizmet Bölgeleri: Türkiye, Birleşik Krallık (UK), Amerika Birleşik Devletleri (US) ve Küresel Pazarlar
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <h2 className="text-xl font-bold text-emerald-950 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>Resmi İletişim Kanalları & 24 Saat Geri Dönüş Garantisi</span>
                </h2>
                <p className="text-sm text-emerald-900 leading-relaxed mb-3">
                  Tüm analiz, teklif ve destek talepleriniz yazılı olarak kayıt altına alınmakta ve doğrudan <strong>Salih Maral</strong> tarafından incelenmektedir. Bize e-posta veya online iletişim formu üzerinden ulaştığınızda <strong>en geç 24 saat içinde garantili geri dönüş</strong> sağlanır.
                </p>
                <ul className="text-sm text-slate-800 space-y-1.5 list-none pl-0">
                  <li>
                    <strong>E-Posta:</strong>{' '}
                    <a href="mailto:info@salihmaral.com" className="text-blue-600 font-semibold hover:underline">
                      info@salihmaral.com
                    </a>
                  </li>
                  <li>
                    <strong>Online İletişim & Analiz Formu:</strong>{' '}
                    <a href="/#contact" className="text-blue-600 font-semibold hover:underline">
                      https://www.salihmaral.com/#contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Mesleki Unvan & Uzmanlık Kapsamı</h2>
                <p>
                  Google Ads Yönetimi, Meta Ads (Facebook & Instagram), YouTube Ads, TikTok Ads, SEO & GEO (Yapay Zeka Arama Motoru Optimizasyonu), Server-Side Tracking (sGTM & CAPI) ve Next.js 16 tabanlı Anahtar Teslim Web Sitesi geliştirme hizmetleri.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Çalışma ve Danışmanlık Kriteri</h2>
                <p>
                  Performans pazarlaması danışmanlık hizmetlerimiz yalnızca <strong>B2B işletmelere</strong> ve <strong>aylık minimum 25.000 TL reklam harcaması</strong> bulunan markalara sunulmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">İçerik ve Bağlantı Sorumluluğu</h2>
                <p>
                  Bu web sitesinde yer alan tüm teknik rehberler, vaka analizleri ve içerikler 5651 sayılı Kanun ve ilgili mevzuat çerçevesinde bilgilendirme amacıyla hazırlanmıştır. Sitedeki dış bağlantılar (üçüncü taraf web siteleri) ilgili site sahiplerinin sorumluluğundadır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Fikri Mülkiyet ve Telif Hakları</h2>
                <p>
                  <code>salihmaral.com</code> alan adı altında yayınlanan tüm özgün metinler, kod yapıları, grafikler ve strateji rehberleri Salih Maral&apos;a aittir. Yazılı izin olmaksızın kopyalanamaz veya çoğaltılamaz.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rich Agency Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & E-E-A-T */}
            <div className="space-y-4">
              <a href="/" className="inline-block">
                <span className="text-2xl font-black tracking-tight text-white">
                  Salih Maral<span className="text-blue-500">.</span>
                </span>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resmi Google Partner sertifikalı Salih Maral, 17+ yıllık tecrübesiyle Türkiye ve küresel pazarlarda Google Ads, Meta Ads, SEO ve Server-Side Tracking ile karlı büyüme sağlar.
              </p>
              <div className="text-xs text-slate-400 space-y-1.5 pt-1">
                <div>İstanbul / Türkiye &bull; Remote &amp; Global</div>
                <div>
                  <a href="mailto:info@salihmaral.com" className="hover:text-blue-400 transition-colors">
                    ✉️ info@salihmaral.com (24 Saatte Geri Dönüş)
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Hizmetlerimiz
              </div>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {servicesList.map((svc) => (
                  <li key={svc.slug}>
                    <a href={`/tr/hizmetler/${svc.slug}`} className="hover:text-white transition-colors">
                      {svc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Solutions */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Büyüme Stratejileri
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="/blog/b2b-google-ads-kurumsal-lead-ve-musteri-kazanma-rehberi-2026" className="hover:text-blue-400 transition-colors">B2B Google Ads & Kurumsal Lead</a></li>
                <li><a href="/blog/e-ticaret-roas-artirma-ve-reklam-butcesi-olcekleme-2026" className="hover:text-blue-400 transition-colors">E-Ticaret ROAS & Bütçe Ölçekleme</a></li>
                <li><a href="/blog/conversion-rate-optimization-ai-personalization" className="hover:text-blue-400 transition-colors">CRO & Dönüşüm Optimizasyonu</a></li>
                <li><a href="/blog/geo-ai-seo-generative-engine-optimization-guide-2026" className="hover:text-blue-400 transition-colors">GEO & Yapay Zeka SEO</a></li>
              </ul>
            </div>

            {/* Col 4: Quick Links & Legal */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Rehber & Kurumsal
              </div>
              <ul className="space-y-2.5 text-xs mb-6 text-slate-400">
                <li><a href="/" className="hover:text-white transition-colors">Ana Sayfa</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Salih Maral Hakkında</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog & Stratejik Rehberler</a></li>
                <li><a href="/#contact" className="text-blue-400 hover:underline">İletişim Formu (24 Saatte Dönüş)</a></li>
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div><a href="/impressum" className="text-blue-400 font-semibold">Yasal Künye</a></div>
                <div><a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">Gizlilik Politikası & KVKK</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; 2026 Salih Maral &mdash; Resmi Google Partneri. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>İstanbul / Türkiye &bull; Global Remote</span>
              <span>&bull;</span>
              <span className="text-slate-400">%100 KVKK & GDPR Uyumlu</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
