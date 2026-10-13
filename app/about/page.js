'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Award, BarChart3, Globe, Users, Target, TrendingUp, CheckCircle, Mail, Menu, X, ChevronDown, MapPin, ArrowUpRight, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const servicesList = {
  de: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Growth', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO & GEO Optimierung', slug: 'seo' },
    { title: 'Schlüsselfertige Website & CMS', slug: 'web-sitesi-tasarimi' }
  ],
  tr: [
    { title: 'Google Ads Yönetimi', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Büyüme', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO & GEO Optimizasyonu', slug: 'seo' },
    { title: 'Anahtar Teslim Web Sitesi', slug: 'web-sitesi-tasarimi' }
  ],
  en: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Growth', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO & GEO Services', slug: 'seo' },
    { title: 'Turnkey Web Design & CMS', slug: 'web-sitesi-tasarimi' }
  ]
}

const getLocalizedServiceUrl = (targetLang, serviceSlug) => {
  const pathSegment = targetLang === 'de' ? 'dienstleistungen' : targetLang === 'en' ? 'services' : 'hizmetler'
  let slug = serviceSlug
  if (serviceSlug === 'bewertungsmanagement' || serviceSlug === 'yorum-yonetimi' || serviceSlug === 'review-management' || serviceSlug === 'web-sitesi-tasarimi' || serviceSlug === 'web-design') {
    slug = targetLang === 'en' ? 'web-design' : 'web-sitesi-tasarimi'
  }
  return `/${targetLang}/${pathSegment}/${slug}`
}

const translations = {
  de: {
    back: 'Zurück',
    badge: 'Google Partner Agentur',
    title: 'Über uns',
    subtitle: 'Ihr Partner für digitales Wachstum',
    intro: 'Salih Maral ist Digital-Marketing-Spezialist und offizieller Google Partner. Seit 2009, also mehr als 17 Jahre, betreut er Google Ads, Meta Ads, YouTube Ads und SEO für E-Commerce und ambitionierte Unternehmen. Der Maßstab ist nicht der Klick, sondern die Anfrage, der Termin oder der messbare Verkauf.',
    mission: {
      title: 'Unsere Mission',
      text: 'Wir helfen Unternehmen jeder Größe, im digitalen Zeitalter erfolgreich zu sein. Unser datengetriebener Ansatz und unsere tiefe Expertise in Google Ads, Meta Ads und SEO ermöglichen es uns, maßgeschneiderte Strategien zu entwickeln, die echte Ergebnisse liefern — nicht nur Klicks, sondern zahlende Kunden.'
    },
    identity: {
      title: 'Wer wir sind',
      items: [
        { title: 'Zertifizierter Google Partner', desc: 'Offiziell von Google als Partner-Agentur anerkannt. Wir erfüllen die strengen Anforderungen von Google an Kompetenz, Leistung und Kundenzufriedenheit.' },
        { title: '17+ Jahre Erfahrung', desc: 'Seit 2009 im Performance Marketing. Kampagnen für E-Commerce, Dienstleister, Kliniken und B2B, auf Deutsch, Türkisch und Englisch.' },
        { title: '300+ Marken betreut', desc: 'Mehr als 300 Unternehmen und Marken haben uns ihr digitales Wachstum anvertraut — von Start-ups bis zu internationalen Unternehmen.' },
        { title: 'Transparenter Festpreis', desc: 'Feste monatliche Betreuungspauschalen ohne prozentuale Budgetprovisionen — 100% ROI-Fokus.' }
      ]
    },
    services: {
      title: 'Was wir tun',
      items: [
        'Google Ads Management (Search, Display, Shopping, YouTube)',
        'Meta Ads Management (Facebook & Instagram)',
        'TikTok & X (Twitter) Advertising',
        'Suchmaschinenoptimierung (SEO & GEO)',
        'Schlüsselfertiges Webdesign (Next.js 16 & Admin CMS)',
        'Conversion-Optimierung & Server-Side Tracking'
      ]
    },
    values: {
      title: 'Unsere Werte',
      items: [
        { title: 'Transparenz', desc: 'Klare, ehrliche Kommunikation und detaillierte Berichte — Sie wissen immer, wohin Ihr Budget fließt.' },
        { title: 'Ergebnisorientierung', desc: 'Wir messen Erfolg nicht an Klicks, sondern an Umsatz und ROI. Jede Strategie zielt auf messbare Geschäftsergebnisse ab.' },
        { title: 'Partnerschaft', desc: 'Wir betrachten unsere Kunden als Partner. Ihr Erfolg ist unser Erfolg — deshalb nehmen wir nur eine begrenzte Anzahl von Kunden an.' }
      ]
    },
    process: {
      title: 'So läuft die Zusammenarbeit',
      steps: [
        { title: 'Konto und Zielgruppen', desc: 'Wir analysieren bestehende Kontodaten, Suchbegriffe und Kaufintentionen präzise nach Branchenanforderungen.' },
        { title: 'Messung', desc: 'Anrufe, Formulare und Käufe werden serverseitig erfasst. Ohne diese Zahlen wird kein Budget erhöht.' },
        { title: 'Festpreis', desc: 'Die Betreuung kostet einen monatlichen Festpreis. Sie steigt nicht, wenn das Werbebudget steigt.' },
        { title: 'Bericht nach 30 Tagen', desc: 'Sie sehen Suchbegriffe, Ausschlüsse, Kosten pro Anfrage und das Gebiet. Was keine Anfrage bringt, wird gestrichen.' }
      ]
    },
    cta: {
      title: 'Bereit für digitales Wachstum?',
      desc: 'Kontaktieren Sie uns für eine kostenlose Erstberatung.',
      btn1: 'Kostenloses Angebot',
      btn2: 'E-Mail senden'
    },
    footer: { rights: 'Alle Rechte vorbehalten.' },
    nav: {
      services: 'Dienstleistungen',
      standorte: 'Standorte',
      blog: 'Blog',
      about: 'Über mich',
      contact: 'Kontakt',
      home: 'Startseite'
    }
  },
  tr: {
    back: 'Geri',
    badge: 'Google Partner Ajans',
    title: 'Hakkımızda',
    subtitle: 'Dijital büyümenizde güvenilir partneriniz',
    intro: 'Salih Maral, dijital pazarlama uzmanı ve resmi Google Partneridir. 2009’dan beri, yani 17 yılı aşkın süredir, e-ticaret markaları, KOBİ\'ler ve kurumsal işletmeler için Google Ads, Meta Ads, YouTube Ads ve SEO yönetir. Ölçüt tıklama değil; gerçek talep, randevu ve karlı satıştır.',
    mission: {
      title: 'Misyonumuz',
      text: 'Her büyüklükteki işletmenin dijital çağda karlı büyümesine yardımcı oluyoruz. Veri odaklı yaklaşımımız ve Google Ads, Meta Ads ve SEO\'daki derin uzmanlığımız, gerçek sonuçlar sunan özelleştirilmiş stratejiler geliştirmemizi sağlıyor — sadece tıklama değil, ödeme yapan sadık müşteriler.'
    },
    identity: {
      title: 'Biz Kimiz',
      items: [
        { title: 'Sertifikalı Google Partner', desc: 'Google tarafından resmi olarak Partner Ajans olarak tanınmaktayız. Yetkinlik, performans ve müşteri memnuniyeti konusunda Google\'ın en yüksek gereksinimlerini karşılıyoruz.' },
        { title: '17+ Yıl Deneyim', desc: '2009’dan beri performans pazarlaması. E-ticaret, sağlık, hukuk büroları, B2B ve ihracat markaları için Türkçe ve İngilizce yüksek performanslı kampanyalar.' },
        { title: '300+ Marka', desc: '300\'den fazla işletme ve marka dijital büyümelerini bize emanet etti — yerel KOBİ\'lerden uluslararası şirketlere kadar.' },
        { title: 'Şeffaf ve Komisyonsuz', desc: 'Reklam harcamanızdan komisyon almayan, sabit aylık paketlerle çalışan ve tamamen karlılık odaklı modern ajans modeli.' }
      ]
    },
    services: {
      title: 'Ne Yapıyoruz',
      items: [
        'Google Ads Yönetimi (Arama, Alışveriş, PMax, YouTube)',
        'Meta Ads Yönetimi (Facebook & Instagram)',
        'TikTok & X (Twitter) Reklamları',
        'Arama Motoru Optimizasyonu (SEO & GEO)',
        'Anahtar Teslim Web Sitesi (Next.js 16, Admin Paneli & Sınırsız Revize)',
        'Server-Side Tracking (sGTM & Meta CAPI)'
      ]
    },
    values: {
      title: 'Değerlerimiz',
      items: [
        { title: 'Şeffaflık', desc: 'Net, dürüst iletişim ve detaylı canlı raporlar — bütçenizin nereye gittiğini her an kendi panelinizden görürsünüz.' },
        { title: 'Sonuç Odaklılık', desc: 'Başarıyı boş tıklamalarla değil, net karlılık ve ROAS ile ölçüyoruz. Her strateji ölçülebilir iş sonuçlarına yöneliktir.' },
        { title: 'Ortaklık', desc: 'Müşterilerimizi iş ortağı olarak görüyoruz. Başarınız bizim başarımızdır — bu yüzden sınırlı sayıda seçkin marka kabul ediyoruz.' }
      ]
    },
    process: {
      title: 'Çalışma nasıl yürür',
      steps: [
        { title: 'Hesap ve hedef kitle', desc: 'Mevcut reklam hesabını, arama terimlerini ve gerçek satın alma niyetlerini derinlemesine analiz ederiz.' },
        { title: 'Ölçüm', desc: 'Aramalar, formlar ve satışlar sunucu tarafında (Server-Side) kaydedilir. Bu sayılar doğrulanmadan bütçe artırılmaz.' },
        { title: 'Sabit ücret', desc: 'Yönetim aylık sabit ücrettir. Reklam bütçeniz arttıkça ajans komisyonu artmaz.' },
        { title: '30 gün sonra rapor', desc: 'Arama terimlerini, engellenen gereksiz tıklamaları ve müşteri başına maliyeti şeffafça görürsünüz.' }
      ]
    },
    cta: {
      title: 'Dijital büyümeye hazır mısınız?',
      desc: 'Ücretsiz ilk danışmanlık için bizimle iletişime geçin.',
      btn1: 'Ücretsiz Teklif Alın',
      btn2: 'E-Posta Gönderin'
    },
    footer: { rights: 'Tüm hakları saklıdır.' },
    nav: {
      services: 'Hizmetler',
      standorte: 'Şehirler',
      blog: 'Blog',
      about: 'Hakkımda',
      contact: 'İletişim',
      home: 'Ana Sayfa'
    }
  },
  en: {
    back: 'Back',
    badge: 'Google Partner Agency',
    title: 'About Us',
    subtitle: 'Your trusted partner for digital growth',
    intro: 'Salih Maral is a digital marketing specialist and official Google Partner. Since 2009, more than 17 years, he has run Google Ads, Meta Ads, YouTube Ads and SEO for e-commerce brands and growth-oriented businesses. The measure is not the click. It is the enquiry, the qualified appointment, or the profitable sale.',
    mission: {
      title: 'Our Mission',
      text: 'We help businesses of all sizes succeed in the digital age. Our data-driven approach and deep expertise in Google Ads, Meta Ads, and SEO allow us to develop customized strategies that deliver real results — not just clicks, but paying customers.'
    },
    identity: {
      title: 'Who We Are',
      items: [
        { title: 'Certified Google Partner', desc: 'Officially recognized by Google as a Partner Agency. We meet Google\'s strict requirements for competence, performance, and customer satisfaction.' },
        { title: '17+ Years Experience', desc: 'In performance marketing since 2009. Campaigns for e-commerce, healthcare, B2B, and professional services in Turkish, English, and German.' },
        { title: '300+ Brands Served', desc: 'More than 300 businesses and brands have entrusted us with their digital growth — from start-ups to international enterprises.' },
        { title: 'Transparent Flat Fee', desc: 'Monthly flat-fee management with zero commission on ad spend — 100% aligned with your profitability.' }
      ]
    },
    services: {
      title: 'What We Do',
      items: [
        'Google Ads Management (Search, Display, Shopping, YouTube)',
        'Meta Ads Management (Facebook & Instagram)',
        'TikTok & X (Twitter) Advertising',
        'Search Engine Optimization (SEO & GEO)',
        'Turnkey Web Design & Development (Next.js 16, Custom CMS & Unlimited Revisions)',
        'Server-Side Tracking (sGTM & Meta CAPI)'
      ]
    },
    values: {
      title: 'Our Values',
      items: [
        { title: 'Transparency', desc: 'Clear, honest communication and detailed reports — you always know where your budget goes.' },
        { title: 'Results-Oriented', desc: 'We measure success not by clicks, but by revenue and ROI. Every strategy aims at measurable business results.' },
        { title: 'Partnership', desc: 'We view our clients as partners. Your success is our success — that\'s why we only take on a limited number of clients.' }
      ]
    },
    process: {
      title: 'How the work runs',
      steps: [
        { title: 'Account and audience', desc: 'We audit your existing ad accounts, search queries, and purchase funnels to identify profit leaks.' },
        { title: 'Measurement', desc: 'Calls, forms and purchases are recorded server-side. The budget does not rise without verified data.' },
        { title: 'Flat fee', desc: 'Management is a monthly flat fee. It does not rise when your media budget rises.' },
        { title: 'Report after 30 days', desc: 'You see search terms, exclusions, cost per enquiry and return on ad spend with full clarity.' }
      ]
    },
    cta: {
      title: 'Ready for digital growth?',
      desc: 'Contact us for a free initial consultation.',
      btn1: 'Get Free Proposal',
      btn2: 'Send E-Mail'
    },
    footer: { rights: 'All rights reserved.' },
    nav: {
      services: 'Services',
      standorte: 'Locations',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      home: 'Home'
    }
  }
}

export default function AboutPage() {
  const router = useRouter()
  const [lang, setLang] = useState('tr')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage')
    if (saved && ['de', 'tr', 'en'].includes(saved)) setLang(saved)
  }, [])

  const t = translations[lang]

  const iconConfigs = [
    { icon: <Award className="h-8 w-8 text-[#4285F4]" />, color: 'border-[#4285F4]' },
    { icon: <BarChart3 className="h-8 w-8 text-[#EA4335]" />, color: 'border-[#EA4335]' },
    { icon: <Users className="h-8 w-8 text-[#FBBC04]" />, color: 'border-[#FBBC04]' },
    { icon: <Globe className="h-8 w-8 text-[#34A853]" />, color: 'border-[#34A853]' },
  ]

  const valueIcons = [
    <Target key={0} className="h-8 w-8 text-[#4285F4]" />,
    <TrendingUp key={1} className="h-8 w-8 text-[#34A853]" />,
    <Users key={2} className="h-8 w-8 text-[#FBBC04]" />,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs">
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo & Partner Badge */}
            <div className="flex items-center gap-3">
              <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center gap-2 group">
                <picture>
                  <source srcSet="/logo-sm.webp" type="image/webp" />
                  <img src="/logo.png" alt="Salih Maral Logo" className="h-9 w-auto" width="36" height="36" />
                </picture>
                <span className="text-xl font-black text-gray-900 tracking-tight group-hover:text-[#4285F4] transition-colors">
                  Salih Maral<span className="text-[#4285F4]">.</span>
                </span>
              </a>
              <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-[11px] font-semibold text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Offizieller Google Partner
              </span>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors flex items-center py-2 cursor-pointer">
                  {t.nav.services}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                {servicesDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-2xl p-2 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="py-1">
                      {servicesList[lang].map((s, idx) => (
                        <a
                          key={idx}
                          href={getLocalizedServiceUrl(lang, s.slug)}
                          className="block px-3 py-2 text-xs font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-[#4285F4] transition-colors"
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href={`/${lang}/standorte`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                {t.nav.standorte}
              </a>
              <a href="/blog" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                Blog
              </a>
              <a href="/about" className="text-sm font-bold text-[#4285F4] transition-colors">
                {t.nav.about}
              </a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* Right: Languages & Mobile Hamburger */}
            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
                <Button
                  variant={lang === 'de' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLang('de')}
                  className={lang === 'de' ? 'bg-[#4285F4] text-white hover:bg-blue-600' : 'text-gray-700'}
                >
                  DE
                </Button>
                <Button
                  variant={lang === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLang('en')}
                  className={lang === 'en' ? 'bg-[#4285F4] text-white hover:bg-blue-600' : 'text-gray-700'}
                >
                  EN
                </Button>
                <Button
                  variant={lang === 'tr' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLang('tr')}
                  className={lang === 'tr' ? 'bg-[#4285F4] text-white hover:bg-blue-600' : 'text-gray-700'}
                >
                  TR
                </Button>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors ml-1 cursor-pointer"
                aria-label="Menü"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4 shadow-xl animate-in fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-xl border border-slate-200/80">
              <button
                onClick={() => { setLang('de'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg text-center transition-all ${lang === 'de' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-700'}`}
              >
                🇩🇪 DE
              </button>
              <button
                onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg text-center transition-all ${lang === 'en' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-700'}`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => { setLang('tr'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg text-center transition-all ${lang === 'tr' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-700'}`}
              >
                🇹🇷 TR
              </button>
            </div>

            <div className="font-bold text-xs uppercase tracking-wider text-gray-400">
              {t.nav.services}
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#4285F4]">
              {servicesList[lang].map((s, idx) => (
                <a
                  key={idx}
                  href={getLocalizedServiceUrl(lang, s.slug)}
                  className="text-xs font-semibold text-gray-700 hover:text-[#4285F4] py-1.5 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.title}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2 text-sm font-semibold">
              <a href={`/${lang}/standorte`} className="text-[#4285F4] hover:underline py-1" onClick={() => setMobileMenuOpen(false)}>
                📍 {t.nav.standorte} (18 Metropolen)
              </a>
              <a href="/blog" className="text-gray-800 hover:text-[#4285F4] py-1" onClick={() => setMobileMenuOpen(false)}>
                📚 Blog & Ratgeber
              </a>
              <a href="/about" className="text-[#4285F4] py-1" onClick={() => setMobileMenuOpen(false)}>
                👤 {t.nav.about}
              </a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-gray-800 hover:text-[#4285F4] py-1" onClick={() => setMobileMenuOpen(false)}>
                ✉️ {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Visual Breadcrumb Bar */}
      <div className="pt-20 bg-slate-50/80 border-b border-gray-200/60">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="hover:text-[#4285F4] font-medium transition-colors">
              {t.nav.home}
            </a>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{t.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-[#4285F4]/10 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-[#4285F4]" />
            <span className="text-sm font-medium text-[#4285F4]">{t.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-testid="about-title">{t.title}</h1>
          <p className="text-xl text-gray-500 mb-8">{t.subtitle}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.intro}</p>
          {/* Google Partners Badge */}
          <div className="mt-8">
            <a href="https://www.google.com/partners/agency?id=5868261912" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <img src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg" alt="Google Partner" className="h-24 w-auto mx-auto" width="163" height="96" />
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-[#4285F4]/20 overflow-hidden">
            <div className="bg-gradient-to-r from-[#4285F4] to-[#34A853] p-6">
              <h2 className="text-2xl font-bold text-white">{t.mission.title}</h2>
            </div>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-600 leading-relaxed">{t.mission.text}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.identity.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.identity.items.map((item, idx) => (
              <Card key={idx} className={`border-l-4 ${iconConfigs[idx].color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    {iconConfigs[idx].icon}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#4285F4]/5 to-[#34A853]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.services.items.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-[#34A853] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.process.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.process.steps.map((step, idx) => (
              <Card key={step.title} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <p className="text-sm font-bold text-[#4285F4] mb-2">0{idx + 1}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            <a href={lang === 'tr' ? '/tr/hizmetler/google-ads' : lang === 'en' ? '/en/services/google-ads' : '/de/dienstleistungen/google-ads'} className="text-[#4285F4] font-semibold hover:underline">Google Ads</a>
            {' · '}
            <a href={lang === 'tr' ? '/tr/hizmetler/meta-ads' : lang === 'en' ? '/en/services/meta-ads' : '/de/dienstleistungen/meta-ads'} className="text-[#4285F4] font-semibold hover:underline">Meta Ads</a>
            {' · '}
            <a href={lang === 'tr' ? '/tr/hizmetler/seo' : lang === 'en' ? '/en/services/seo' : '/de/dienstleistungen/seo'} className="text-[#4285F4] font-semibold hover:underline">SEO & GEO</a>
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.values.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.values.items.map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">{valueIcons[idx]}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4285F4] to-[#34A853] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{t.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100" onClick={() => router.push(lang === 'de' ? '/#contact' : `/${lang}#contact`)}>
              {t.cta.btn1}
            </Button>
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold" asChild>
              <a href="mailto:info@salihmaral.com">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                {t.cta.btn2}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Solutions Cross-Link */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200/70">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Büyüme & Performans Çözümleri' : lang === 'en' ? 'Growth & Performance Solutions' : 'Wachstums- und Performance-Lösungen'}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              {lang === 'tr'
                ? "Ölçülebilir & Karlı Dijital Pazarlama Kanalları"
                : lang === 'en'
                ? "Measurable & Profitable Digital Marketing Channels"
                : "Planbare & profitable Performance-Marketing Kanäle"}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {lang === 'tr'
                ? 'İşletmenizin ciro ve karlılığını artırmak için test edilmiş, komisyonsuz ve şeffaf büyüme sistemleri.'
                : lang === 'en'
                ? 'Battle-tested, commission-free, and transparent growth systems engineered to maximize your ROI.'
                : 'Erprobte, transparente Marketingsysteme zur Maximierung Ihres ROI ohne versteckte Provisionen.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {[
              { name: 'Google Ads', slug: 'google-ads', tag: 'Arama & Shopping' },
              { name: 'Meta Ads', slug: 'meta-ads', tag: 'Advantage+ & CAPI' },
              { name: 'Server-Side Tracking', slug: 'server-side-tracking', tag: 'sGTM & First-Party' },
              { name: 'SEO & GEO', slug: 'seo', tag: 'Yapay Zeka & Harita' },
              { name: 'TikTok Ads', slug: 'tiktok-ads', tag: 'Spark Ads & UGC' },
              { name: 'Yorum Yönetimi', slug: 'yorum-yonetimi', tag: 'İtibar & Koruma' }
            ].map((sol) => (
              <a
                key={sol.slug}
                href={getLocalizedServiceUrl(lang, sol.slug)}
                className="p-3 bg-white rounded-xl border border-gray-200/80 hover:border-[#4285F4] hover:shadow-md transition-all text-center group"
              >
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors">
                  {sol.name}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  {sol.tag}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={lang === 'de' ? '/#contact' : `/${lang}#contact`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4285F4] hover:text-blue-700 bg-white border border-blue-200 px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <span>{lang === 'tr' ? 'Hemen Ücretsiz Strateji Görüşmesi Planlayın' : lang === 'en' ? 'Schedule a Free Strategy Call' : 'Kostenloses Strategiegespräch vereinbaren'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Rich Agency Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & E-E-A-T */}
            <div className="space-y-4">
              <a href={lang === 'de' ? '/' : `/${lang}`} className="inline-block group">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Salih Maral<span className="text-blue-500">.</span>
                </span>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'tr'
                  ? 'Resmi Google Partner sertifikalı Salih Maral, 17+ yıllık tecrübesiyle Türkiye ve küresel pazarlarda Google Ads, Meta Ads, SEO ve Server-Side Tracking ile karlı büyüme sağlar.'
                  : lang === 'en'
                  ? 'Official Google Partner Salih Maral delivers scalable revenue growth across global markets through Google Ads, Meta Ads, SEO and Server-Side Tracking with 17+ years experience.'
                  : 'Offizieller Google Partner Salih Maral liefert planbares Umsatzwachstum durch Google Ads, Meta Ads, SEO und Server-Side Tracking mit über 17 Jahren Erfahrung.'}
              </p>

              {/* Partner Badge */}
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 text-[11px] text-blue-200">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <span>⭐</span>
                  <span>{lang === 'tr' ? 'Resmi Google Partner Güvencesi' : lang === 'en' ? 'Official Google Partner' : 'Zertifizierter Google Partner'}</span>
                </div>
                <div>{lang === 'tr' ? 'E-ticaret ve işletmeler için şeffaf, komisyonsuz ve sabit ücretli büyüme danışmanlığı.' : lang === 'en' ? 'Transparent flat-fee growth consulting for e-commerce and scaling brands.' : 'Transparente Festpreis-Betreuung für E-Commerce und wachsende Unternehmen.'}</div>
              </div>

              <div className="text-xs text-slate-400 space-y-1.5 pt-1">
                <div>İstanbul / Türkiye &bull; Remote &amp; Global</div>
                <div>
                  <a href="mailto:info@salihmaral.com" className="hover:text-blue-400 transition-colors">
                    ✉️ info@salihmaral.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {lang === 'tr' ? 'Hizmetlerimiz' : lang === 'en' ? 'Core Services' : 'Dienstleistungen'}
              </div>
              <ul className="space-y-2 text-xs">
                {servicesList[lang].map((srv, idx) => (
                  <li key={idx}>
                    <a
                      href={getLocalizedServiceUrl(lang, srv.slug)}
                      className="text-slate-400 hover:text-blue-400 transition-colors block"
                    >
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Strategic Focus Areas */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {lang === 'tr' ? 'Büyüme Alanları' : lang === 'en' ? 'Strategic Growth' : 'Strategische Schwerpunkte'}
              </div>
              <div className="grid grid-cols-1 gap-y-2 text-xs">
                {[
                  { name: 'E-Ticaret ROAS Skalalama', slug: 'google-ads' },
                  { name: 'Meta Advantage+ Reklamları', slug: 'meta-ads' },
                  { name: 'Server-Side CAPI Tracking', slug: 'server-side-tracking' },
                  { name: 'Google Haritalar & Yerel SEO', slug: 'seo' },
                  { name: 'Olumsuz Yorum Temizleme', slug: 'yorum-yonetimi' },
                  { name: 'TikTok Shop & Spark Ads', slug: 'tiktok-ads' }
                ].map((c) => (
                  <a
                    key={c.name}
                    href={getLocalizedServiceUrl(lang, c.slug)}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <a
                  href={lang === 'de' ? '/#contact' : `/${lang}#contact`}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  {lang === 'tr' ? 'Ücretsiz Analiz Alın ➔' : lang === 'en' ? 'Get Free Analysis ➔' : 'Kostenlose Analyse ➔'}
                </a>
              </div>
            </div>

            {/* Col 4: Quick Links & Legal */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {lang === 'tr' ? 'Rehber & Şirket' : lang === 'en' ? 'Guides & Company' : 'Ratgeber & Unternehmen'}
              </div>
              <ul className="space-y-2.5 text-xs mb-6 text-slate-400">
                <li>
                  <a href={lang === 'de' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
                    {lang === 'tr' ? 'Ana Sayfa' : lang === 'en' ? 'Home' : 'Startseite'}
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blue-400 font-semibold">
                    {lang === 'tr' ? 'Hakkımda & Deneyim' : lang === 'en' ? 'About Salih Maral' : 'Über Salih Maral'}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    {lang === 'tr' ? 'Blog & Stratejik Rehberler' : lang === 'en' ? 'Guides & Articles' : 'Ratgeber & Blog'}
                  </a>
                </li>
                <li>
                  <a href="/blog/e-ticaret-reklam-var-satis-yok-donusum-optimizasyonu-2026" className="hover:text-white transition-colors">
                    {lang === 'tr' ? 'E-Ticaret Dönüşüm Rehberi' : lang === 'en' ? 'E-Commerce Conversion Guide' : 'E-Commerce Leitfaden'}
                  </a>
                </li>
                <li>
                  <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-blue-400 hover:underline">
                    {lang === 'tr' ? 'Ücretsiz Analiz Talebi' : lang === 'en' ? 'Request Free Analysis' : 'Kostenlose Analyse anfordern'}
                  </a>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div>
                  <a href="/impressum" className="text-slate-400 hover:text-white transition-colors">
                    Impressum
                  </a>
                </div>
                <div>
                  <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">
                    Datenschutz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; 2026 Salih Maral &mdash; Offizieller Google Partner. {lang === 'tr' ? 'Tüm hakları saklıdır.' : lang === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>İstanbul &bull; Türkiye &bull; Global Remote</span>
              <span>&bull;</span>
              <span className="text-slate-400">100% DSGVO / KVKK-konform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

