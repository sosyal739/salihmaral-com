'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Cookie, Mail, Clock, Lock, Eye, Menu, X, ChevronDown } from 'lucide-react'
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

export default function DatenschutzPage() {
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
          <span className="text-slate-800 font-semibold">Gizlilik Politikası & KVKK Aydınlatma Metni</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Gizlilik Politikası & KVKK</h1>
          </div>
          <p className="text-lg text-slate-600 mb-8">
            6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında kişisel verilerinizin güvenliği en yüksek önceliğimizdir.
          </p>

          <div className="space-y-6">
            {/* Veri Sorumlusu */}
            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="pt-6 pb-6 px-6 md:px-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <span>1. Veri Sorumlusu ve İletişim</span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  6698 sayılı KVKK ve GDPR uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla <strong>Salih Maral (Resmi Google Partner Dijital Pazarlama Danışmanlığı)</strong> tarafından aşağıda açıklanan kapsamda işlenmektedir.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-1.5">
                  <div><strong>Veri Sorumlusu:</strong> Salih Maral</div>
                  <div><strong>Merkez:</strong> İstanbul / Türkiye</div>
                  <div>
                    <strong>Resmi E-Posta:</strong>{' '}
                    <a href="mailto:info@salihmaral.com" className="text-blue-600 font-semibold hover:underline">
                      info@salihmaral.com
                    </a>
                  </div>
                  <div>
                    <strong>İletişim Formu:</strong>{' '}
                    <a href="/#contact" className="text-blue-600 font-semibold hover:underline">
                      https://www.salihmaral.com/#contact
                    </a>
                  </div>
                  <div className="text-emerald-700 font-semibold pt-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>KVKK & İletişim Taleplerine 24 Saat İçinde Garantili Geri Dönüş Sağlanır.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* İşlenen Kişisel Veriler */}
            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="pt-6 pb-6 px-6 md:px-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <span>2. İşlenen Kişisel Veriler ve İşleme Amaçları</span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Web sitemizdeki iletişim ve ücretsiz analiz formlarını doldurduğunuzda veya e-posta gönderdiğinizde yalnızca aşağıdaki verileriniz işlenir (sitemizde telefon numarası talep edilmemektedir):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                  <li><strong>Kimlik ve İletişim Bilgileri:</strong> Adınız, soyadınız ve kurumsal/bireysel e-posta adresiniz.</li>
                  <li><strong>Proje ve Şirket Bilgileri:</strong> Web sitesi adresiniz, şirket adınız, tahmini reklam bütçeniz ve mesaj içeriğiniz.</li>
                  <li><strong>İşleme Amacı:</strong> Talebinizi değerlendirmek, ücretsiz dijital pazarlama/SEO analizini hazırlamak ve <strong>24 saat içinde</strong> e-posta yoluyla size geri dönüş sağlamak.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Çerezler ve Analitik */}
            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="pt-6 pb-6 px-6 md:px-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-blue-600" />
                  <span>3. Çerezler (Cookies), Google Consent Mode v2 ve Analitik</span>
                </h2>
                <p className="text-slate-700 leading-relaxed text-sm mb-3">
                  Web sitemizde Google Consent Mode v2 uyumlu çerez yönetim sistemi kullanılmaktadır. Açık rızanız olmadan analitik veya pazarlama çerezleri etkinleştirilmez.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                  <li><strong>Zorunlu Çerezler:</strong> Sitenin güvenli çalışması, dil tercihi ve çerez onay durumunuzun saklanması için kullanılır.</li>
                  <li><strong>Analitik Çerezler (Google Analytics 4):</strong> Yalnızca onay vermeniz halinde, ziyaretçi trafiğini anonimleştirilmiş IP ile analiz etmek amacıyla kullanılır.</li>
                </ul>
              </CardContent>
            </Card>

            {/* KVKK Hakları */}
            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="pt-6 pb-6 px-6 md:px-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>4. KVKK Madde 11 ve GDPR Kapsamındaki Haklarınız</span>
                </h2>
                <p className="text-slate-700 leading-relaxed text-sm mb-3">
                  Kişisel verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz. Tüm taleplerinizi <a href="mailto:info@salihmaral.com" className="text-blue-600 font-semibold hover:underline">info@salihmaral.com</a> adresine veya <a href="/#contact" className="text-blue-600 font-semibold hover:underline">iletişim formumuza</a> iletebilirsiniz; tüm başvurulara <strong>24 saat içinde</strong> yanıt verilmektedir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rich Agency Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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

            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Büyüme Stratejileri
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="/blog/b2b-google-ads-kurumsal-lead-ve-musteri-kazanma-rehberi-2026" className="hover:text-blue-400 transition-colors">B2B Google Ads & Kurumsal Lead</a></li>
                <li><a href="/blog/e-ticaret-roas-artirma-ve-reklam-butcesi-olcekleme-2026" className="hover:text-blue-400 transition-colors">E-Ticaret ROAS & Bütçe Ölçekleme</a></li>
                <li><a href="/blog/conversion-rate-optimization-ai-personalization" className="hover:text-blue-400 transition-colors">CRO & Dönüşüm Optimizasyonu</a></li>
                <li><a href="/blog/ai-seo-geoptimierung" className="hover:text-blue-400 transition-colors">GEO & Yapay Zeka SEO</a></li>
              </ul>
            </div>

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
                <div><a href="/impressum" className="text-slate-400 hover:text-white transition-colors">Yasal Künye</a></div>
                <div><a href="/datenschutz" className="text-blue-400 font-semibold">Gizlilik Politikası & KVKK</a></div>
              </div>
            </div>
          </div>

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
