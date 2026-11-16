'use client'

import { useState, useEffect } from 'react'
import {
  TrendingUp,
  Zap,
  Sparkles,
  Search,
  Layers,
  Globe,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  BarChart3,
  Mail,
  ExternalLink,
  PhoneCall,
  Target,
  Rocket
} from 'lucide-react'
import { trackLead } from '@/lib/analytics'

const STEP_PALETTES = [
  {
    // Step 01 — Indigo / Royal Blue
    cardBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50',
    border: 'border-blue-200/90 hover:border-blue-400',
    topBar: 'from-blue-600 via-indigo-500 to-blue-400',
    numBg: 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25',
    timeBadge: 'bg-blue-100/90 text-blue-800 border-blue-200',
    pillBg: 'bg-blue-50/70 hover:bg-blue-100/70 border-blue-200/80 text-slate-900',
    iconColor: '#2563EB'
  },
  {
    // Step 02 — Violet / Fuchsia
    cardBg: 'bg-gradient-to-br from-violet-50/90 via-white to-fuchsia-50/50',
    border: 'border-violet-200/90 hover:border-violet-400',
    topBar: 'from-violet-600 via-purple-500 to-fuchsia-500',
    numBg: 'bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/25',
    timeBadge: 'bg-violet-100/90 text-violet-800 border-violet-200',
    pillBg: 'bg-violet-50/70 hover:bg-violet-100/70 border-violet-200/80 text-slate-900',
    iconColor: '#7C3AED'
  },
  {
    // Step 03 — Amber / Orange
    cardBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50',
    border: 'border-amber-200/90 hover:border-amber-400',
    topBar: 'from-amber-500 via-orange-500 to-rose-500',
    numBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/25',
    timeBadge: 'bg-amber-100/90 text-amber-900 border-amber-200',
    pillBg: 'bg-amber-50/70 hover:bg-amber-100/70 border-amber-200/80 text-slate-900',
    iconColor: '#EA580C'
  },
  {
    // Step 04 — Emerald / Teal
    cardBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50',
    border: 'border-emerald-200/90 hover:border-emerald-400',
    topBar: 'from-emerald-500 via-teal-500 to-cyan-500',
    numBg: 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25',
    timeBadge: 'bg-emerald-100/90 text-emerald-900 border-emerald-200',
    pillBg: 'bg-emerald-50/70 hover:bg-emerald-100/70 border-emerald-200/80 text-slate-900',
    iconColor: '#059669'
  }
]

const SERVICE_BLUEPRINTS = {
  'meta-ads': {
    id: 'meta-ads',
    label: { tr: 'Meta Ads (IG & FB)', en: 'Meta Ads (IG & FB)', de: 'Meta Ads (IG & FB)' },
    badge: { tr: 'E-Ticaret & Lead Büyüme Motoru', en: 'E-Commerce & Lead Growth Engine', de: 'E-Commerce & Lead-Wachstumsmotor' },
    color: '#E1306C',
    gradient: 'from-[#E1306C] via-[#FD1D1D] to-[#833AB4]',
    softPanelBg: 'from-rose-50/80 via-pink-50/40 to-indigo-50/50',
    softBorder: 'border-pink-200/90',
    accentBg: 'bg-pink-50 text-pink-700 border-pink-200',
    icon: Zap,
    headline: {
      tr: 'Meta Ads (Instagram & Facebook) Hizmetinde Adım Adım Ne Yapıyoruz?',
      en: 'Step-by-Step: What We Do in Meta Ads (Instagram & Facebook)',
      de: 'Schritt für Schritt: Was wir bei Meta Ads (Instagram & Facebook) tun'
    },
    summary: {
      tr: 'Rastgele gönderi öne çıkarmıyoruz. Veri kaybını önleyen Server-Side CAPI altyapısı, kanca (hook) odaklı kreatif testleri ve Advantage+ mimarisiyle bütçenizi doğrudan satışa ve nitelikli forma dönüştürüyoruz.',
      en: 'We never just boost posts. With Server-Side CAPI tracking, hook-driven creative testing, and Advantage+ architecture, we turn your ad spend into direct sales and qualified leads.',
      de: 'Wir bewerben keine Beiträge blind. Mit Server-Side CAPI, Hook-Tests und Advantage+ verwandeln wir Ihr Budget in messbare Verkäufe und qualifizierte Leads.'
    },
    proofMetric: {
      tr: 'Ort. 6.8x ROAS • EMQ 8.8/10 Veri Eşleşmesi • %0 Komisyon',
      en: 'Avg. 6.8x ROAS • EMQ 8.8/10 Match Score • 0% Commission',
      de: 'Ø 6,8x ROAS • EMQ 8,8/10 Match-Score • 0% Provision'
    },
    kpis: [
      { val: '6.8x', label: { tr: 'Ortalama E-Ticaret ROAS', en: 'Avg. E-Commerce ROAS', de: 'Ø E-Commerce ROAS' }, color: 'from-rose-500 to-pink-600' },
      { val: '8.8/10', label: { tr: 'CAPI Veri Eşleşme Skoru', en: 'CAPI Event Match Score', de: 'CAPI Match-Score' }, color: 'from-violet-600 to-indigo-600' },
      { val: '-%38', label: { tr: 'Müşteri Başı Maliyet (CPA)', en: 'Lower Cost Per Lead (CPA)', de: 'Senkung der CPA-Kosten' }, color: 'from-emerald-500 to-teal-600' }
    ],
    steps: [
      {
        num: '01',
        time: { tr: 'İlk 48 Saat', en: 'First 48 Hours', de: 'Erste 48 Stunden' },
        title: {
          tr: 'Pixel, Server-Side CAPI & Hesap Röntgeni',
          en: 'Pixel, Server-Side CAPI & Account X-Ray',
          de: 'Pixel, Server-Side CAPI & Konto-Röntgen'
        },
        desc: {
          tr: 'iOS 17+ ve reklam engelleyiciler yüzünden kaybolan %30 dönüşüm verisini geri kazanmak için Meta Conversions API (CAPI) ve olay tekilleştirme (deduplication) kurulumunu tamamlıyoruz.',
          en: 'We set up Meta Conversions API (CAPI) and event deduplication to recover the 30% conversion data lost to iOS 17+ and ad blockers.',
          de: 'Wir richten Meta Conversions API (CAPI) und Event-Deduplizierung ein, um 30% Datenverlust durch iOS 17+ und Ad-Blocker zu verhindern.'
        },
        deliverables: {
          tr: ['Business Manager & Pixel Sağlık Denetimi', 'Server-Side CAPI (EMQ 8.5+ Kalite Skoru)', 'Katalog & Dinamik Ürün Feed Senkronizasyonu'],
          en: ['Business Manager & Pixel Health Audit', 'Server-Side CAPI (EMQ 8.5+ Match Score)', 'Catalog & Dynamic Product Feed Sync'],
          de: ['Business Manager & Pixel-Audit', 'Server-Side CAPI (EMQ 8.5+ Score)', 'Katalog & Produkt-Feed-Sync']
        }
      },
      {
        num: '02',
        time: { tr: '1. Hafta', en: 'Week 1', de: 'Woche 1' },
        title: {
          tr: 'Advantage+ & Kreatif Kanca (Hook) Mimarisi',
          en: 'Advantage+ & Creative Hook Architecture',
          de: 'Advantage+ & Creative-Hook-Architektur'
        },
        desc: {
          tr: 'Soğuk kitle (Prospecting), etkileşimde bulunanlar (Warm) ve sepet terk edenler (Retargeting) için ayrı kampanya katmanları ve ilk 3 saniyede dikkat çeken Reels/Carousel reklam setleri kuruyoruz.',
          en: 'We build distinct layers for cold prospecting, warm engagers, and cart abandoners with scroll-stopping 3-second Reels and Carousel ad variations.',
          de: 'Wir erstellen separate Kampagnenschichten für Neukunden, Interessenten und Warenkorbabbrecher mit starken Reels- und Carousel-Hooks.'
        },
        deliverables: {
          tr: ['Advantage+ Alışveriş (ASC) & Lead Kurgusu', 'Reels / UGC İlk 3 Saniye Kanca (Hook) Testleri', 'Anlık Form (Koşullu Sorulu) veya WhatsApp Hunisi'],
          en: ['Advantage+ Shopping (ASC) & Lead Funnel', 'Reels / UGC 3-Second Hook A/B Tests', 'Conditional Instant Forms or WhatsApp Flow'],
          de: ['Advantage+ Shopping (ASC) & Lead-Funnel', 'Reels / UGC 3-Sekunden-Hook-Tests', 'Qualifizierte Lead-Formulare']
        }
      },
      {
        num: '03',
        time: { tr: 'Her Gün', en: 'Daily Execution', de: 'Täglich' },
        title: {
          tr: 'Günlük Bütçe & CPA / ROAS Optimizasyonu',
          en: 'Daily Budget & CPA / ROAS Optimization',
          de: 'Tägliche Budget- & CPA / ROAS-Optimierung'
        },
        desc: {
          tr: 'Kreatif yorgunluğunu (frekans şişmesini) her gün takip ediyor, dönüşüm getirmeyen görselleri kapatıp kazanan reklam setlerini bütçe bozulmadan yatay/dikey ölçekliyoruz.',
          en: 'We monitor creative fatigue and frequency daily, pausing underperforming ads and scaling winning ad sets horizontally and vertically without resetting learning.',
          de: 'Wir überwachen Creative Fatigue täglich, pausieren schwache Anzeigen und skalieren Gewinner-Ad-Sets profitabel.'
        },
        deliverables: {
          tr: ['Frekans & Kreatif Yorgunluk Kontrolü', 'Kazanan Reklam Setlerini %20 Kuralıyla Ölçekleme', 'Sahte Leadleri Eleme & Kalite Skoru Takibi'],
          en: ['Frequency & Creative Fatigue Control', 'Scaling Winners Safely via 20% Rule', 'Lead Quality Filtering & Cost Cap Tuning'],
          de: ['Frequenz- & Creative-Fatigue-Kontrolle', 'Sichere Budget-Skalierung', 'Lead-Qualitätsfilterung']
        }
      },
      {
        num: '04',
        time: { tr: 'Haftalık & Aylık', en: 'Weekly & Monthly', de: 'Wöchentlich & Monatlich' },
        title: {
          tr: 'Şeffaf Raporlama & %0 Komisyonlu Büyüme',
          en: 'Transparent Reporting & 0% Commission Growth',
          de: 'Transparentes Reporting & 0% Provision'
        },
        desc: {
          tr: 'Reklam bütçenizden %10-%15 komisyon almıyoruz. Sabit yönetim ücretiyle çalışıyor; harcanan her kuruşun getirdiği net satışı ve müşteri maliyetini şeffaf tablolarla sunuyoruz.',
          en: 'We never take 10-15% commission on your ad spend. We work on a flat monthly fee and report exact net revenue and cost-per-acquisition transparently.',
          de: 'Keine 10-15% Provision auf Ihr Budget. Wir arbeiten zum festen Monatspreis mit 100% transparentem ROAS-Reporting.'
        },
        deliverables: {
          tr: ['Canlı ROAS / Müşteri Edinme Maliyeti (CPA) Tablosu', 'Sonraki Ay İçin Yeni Kreatif & Teklif Reçetesi', '17+ Yıllık Uzmanla Doğrudan İletişim'],
          en: ['Live ROAS / Cost-Per-Acquisition Dashboard', 'Next-Month Creative & Offer Roadmap', 'Direct Access to 17+ Yr Senior Specialist'],
          de: ['Live ROAS- & CPA-Dashboard', 'Creative-Roadmap für den Folgemonat', 'Direkter Draht zum Senior-Experten']
        }
      }
    ],
    goals: {
      tr: ['E-Ticaret Satış & ROAS Artırma', 'B2B / Hizmet Form & Müşteri (Lead)', 'WhatsApp / DM Sipariş & Randevu', 'Uygulama / Katalog Ölçekleme'],
      en: ['Increase E-Commerce Sales & ROAS', 'B2B / Service Lead Generation', 'WhatsApp / DM Inquiries & Bookings', 'App / Catalog Scaling'],
      de: ['E-Commerce Umsatz & ROAS steigern', 'B2B / Dienstleistungs-Leads', 'WhatsApp / DM Anfragen', 'Katalog-Skalierung']
    }
  },
  'google-ads': {
    id: 'google-ads',
    label: { tr: 'Google Ads', en: 'Google Ads', de: 'Google Ads' },
    badge: { tr: 'Resmi Google Partner • 720+ Kampanya', en: 'Official Google Partner • 720+ Campaigns', de: 'Offizieller Google Partner • 720+ Kampagnen' },
    color: '#2563EB',
    gradient: 'from-[#2563EB] via-[#4285F4] to-[#0D9488]',
    softPanelBg: 'from-blue-50/80 via-indigo-50/40 to-emerald-50/50',
    softBorder: 'border-blue-200/90',
    accentBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
    icon: TrendingUp,
    headline: {
      tr: 'Google Ads Yönetiminde Adım Adım Ne Yapıyoruz?',
      en: 'Step-by-Step: What We Do in Google Ads Management',
      de: 'Schritt für Schritt: Was wir im Google Ads Management tun'
    },
    summary: {
      tr: 'Sizi Google’da tam o anda arayan hazır alıcıların karşısına çıkarıyoruz. Negatif kelime zırhı, Kalite Skoru (10/10) optimizasyonu ve PMax katmanlarıyla boşa giden tıklamaları sıfırlıyoruz.',
      en: 'We put you directly in front of high-intent buyers searching on Google right now. With negative keyword armor, 10/10 Quality Score tuning, and PMax segmentation, we eliminate wasted clicks.',
      de: 'Wir platzieren Sie direkt vor kaufbereiten Nutzern auf Google. Mit Negativ-Keyword-Schutz, Qualitätsfaktor-Optimierung und PMax verhindern wir Budgetverschwendung.'
    },
    proofMetric: {
      tr: '1,74M+ Üretilen Tıklama • 208K+ Gerçek Dönüşüm • Resmi Google Partner',
      en: '1.74M+ Clicks Generated • 208K+ Verified Conversions • Official Google Partner',
      de: '1,74M+ Klicks • 208K+ Conversions • Offizieller Google Partner'
    },
    kpis: [
      { val: '1,74M+', label: { tr: 'Üretilen Nitelikli Tıklama', en: 'Qualified Clicks Generated', de: 'Generierte Klicks' }, color: 'from-blue-600 to-indigo-600' },
      { val: '208K+', label: { tr: 'Doğrulanmış Satış & Form', en: 'Verified Conversions', de: 'Echte Conversions' }, color: 'from-emerald-500 to-teal-600' },
      { val: '10/10', label: { tr: 'Hedef Kalite Skoru & Düşük CPC', en: 'Target Quality Score & Low CPC', de: 'Qualitätsfaktor-Fokus' }, color: 'from-amber-500 to-orange-600' }
    ],
    steps: [
      {
        num: '01',
        time: { tr: 'İlk 48 Saat', en: 'First 48 Hours', de: 'Erste 48 Stunden' },
        title: {
          tr: 'Arama Niyeti Analizi & Gelişmiş Dönüşüm Kurulumu',
          en: 'Search Intent Audit & Enhanced Conversions Setup',
          de: 'Suchintent-Analyse & Enhanced Conversions Setup'
        },
        desc: {
          tr: 'Mevcut hesabınızdaki bütçe kaçaklarını tespit ediyor, GA4 + Google Tag Manager + Gelişmiş Dönüşümler (Enhanced Conversions) kurulumunu eksiksiz yapıyoruz.',
          en: 'We audit your existing account for budget leaks and implement GA4, Google Tag Manager, and Enhanced Conversions with first-party data.',
          de: 'Wir prüfen Ihr Konto auf Budgetlecks und richten GA4, GTM und Enhanced Conversions sauber ein.'
        },
        deliverables: {
          tr: ['Satın Alma Niyetli Anahtar Kelime Haritası', '500+ Sektörel Negatif Kelime Listesi (İlk Günden)', 'Gelişmiş Dönüşüm & Telefon / Form Takibi'],
          en: ['High-Intent Buyer Keyword Blueprint', '500+ Pre-emptive Negative Keywords on Day 1', 'Enhanced Conversions & Call/Form Tracking'],
          de: ['Kaufintent-Keyword-Architektur', '500+ Negativ-Keywords ab Tag 1', 'Enhanced Conversions & Anruf-Tracking']
        }
      },
      {
        num: '02',
        time: { tr: '1. Hafta', en: 'Week 1', de: 'Woche 1' },
        title: {
          tr: 'Search, PMax & Shopping Kampanya Kurulumu',
          en: 'Search, PMax & Shopping Campaign Architecture',
          de: 'Search-, PMax- & Shopping-Kampagnenaufbau'
        },
        desc: {
          tr: 'Marka aramalarını (Brand) ve yeni müşteri aramalarını (Non-Brand) birbirinden ayırıyor; yüksek tıklama oranlı (CTR) duyarlı reklam metinleri ve tüm uzantıları devreye alıyoruz.',
          en: 'We separate Brand and Non-Brand traffic, write high-CTR Responsive Search Ads, and configure segmented Performance Max / Shopping feeds.',
          de: 'Wir trennen Brand- und Non-Brand-Traffic, erstellen klickstarke Anzeigen und segmentieren PMax- & Shopping-Feeds.'
        },
        deliverables: {
          tr: ['Tam Eşleme & Sıralı Eşleme Arama Kampanyaları', 'Marka Hariç Tutmalı (Brand-Excluded) PMax Kurgusu', 'Site Bağlantısı, Fiyat, Görsel ve Çağrı Uzantıları'],
          en: ['Exact & Phrase Match Search Campaigns', 'Brand-Excluded Performance Max Structure', 'Sitelink, Price, Image & Callout Assets'],
          de: ['Exact- & Phrase-Match Suchkampagnen', 'Brand-bereinigte PMax-Struktur', 'Sitelinks, Bilder & Anruferweiterungen']
        }
      },
      {
        num: '03',
        time: { tr: 'Her Gün', en: 'Daily Execution', de: 'Täglich' },
        title: {
          tr: 'Arama Terimleri Temizliği & Kalite Skoru (10/10)',
          en: 'Search Terms Scrubbing & Quality Score (10/10)',
          de: 'Suchbegriff-Bereinigung & Qualitätsfaktor (10/10)'
        },
        desc: {
          tr: 'Her gün "Arama Terimleri" raporunu tarayarak alakasız tıklamaları negatifliyor, Kalite Skorunu yükselterek rakiplerinizden daha düşük tıklama maliyetiyle (CPC) üst sırada yer almanızı sağlıyoruz.',
          en: 'We scrub the Search Terms report daily to block irrelevant queries and boost Quality Score so you rank higher while paying lower CPCs than competitors.',
          de: 'Wir bereinigen täglich die Suchbegriffe und steigern den Qualitätsfaktor für niedrigere CPCs bei besseren Platzierungen.'
        },
        deliverables: {
          tr: ['Günlük Negatif Anahtar Kelime Temizliği', 'tCPA / tROAS Akıllı Teklif Kalibrasyonu', 'Açılış Sayfası (Landing Page) Dönüşüm Önerileri'],
          en: ['Daily Negative Keyword Scrubbing', 'tCPA / tROAS Smart Bidding Calibration', 'Landing Page Conversion Rate Recommendations'],
          de: ['Tägliches Negativ-Keyword-Management', 'tCPA / tROAS Smart-Bidding-Steuerung', 'Landingpage-CRO-Empfehlungen']
        }
      },
      {
        num: '04',
        time: { tr: 'Haftalık & Aylık', en: 'Weekly & Monthly', de: 'Wöchentlich & Monatlich' },
        title: {
          tr: 'Şeffaf Google Paneli & Sabit Fiyat Güvencesi',
          en: 'Transparent Google Dashboard & Flat-Fee Guarantee',
          de: 'Transparentes Google-Dashboard & Fixpreis-Garantie'
        },
        desc: {
          tr: 'Reklam hesabının tüm mülkiyeti sizde kalır. Harcanan bütçe üzerinden yüzdelik komisyon ödemeden, her kelimenin kaç müşteri getirdiğini net olarak görürsünüz.',
          en: 'You retain 100% ownership of your Google Ads account. With zero percentage commission on ad spend, you see exactly how many customers each keyword brings.',
          de: 'Ihr Google Ads-Konto gehört zu 100% Ihnen. Ohne Umsatzprovision sehen Sie exakt, welches Keyword wie viele Kunden bringt.'
        },
        deliverables: {
          tr: ['Kelime Bazlı Maliyet & Dönüşüm Raporu', 'Rakip Açık Artırma Analizi (Auction Insights)', '%0 Komisyon, Sabit Aylık Hizmet Bedeli'],
          en: ['Keyword-Level Cost & Conversion Breakdown', 'Competitor Auction Insights Report', '0% Ad Spend Commission, Flat Monthly Fee'],
          de: ['Keyword-genaues Conversion-Reporting', 'Wettbewerber-Auktionsdaten', '0% Provision, fairer monatlicher Fixpreis']
        }
      }
    ],
    goals: {
      tr: ['Google Arama’da İlk Sıra & Telefon/Form', 'E-Ticaret Shopping & PMax Satış Artırma', 'B2B Kurumsal Müşteri (Lead) Kazanımı', 'Mevcut Hesaptaki Boşa Harcamayı Durdurma'],
      en: ['Rank #1 on Google Search for Leads/Calls', 'Scale E-Commerce Shopping & PMax ROAS', 'B2B Enterprise Lead Generation', 'Stop Wasted Spend in Existing Account'],
      de: ['Platz 1 bei Google für Anrufe & Leads', 'E-Commerce Shopping & PMax skalieren', 'B2B Neukundengewinnung', 'Streuverluste im Konto stoppen']
    }
  },
  'tiktok-ads': {
    id: 'tiktok-ads',
    label: { tr: 'TikTok Ads', en: 'TikTok Ads', de: 'TikTok Ads' },
    badge: { tr: 'Viral Video & Düşük Tıklama Maliyeti', en: 'Viral Video & Low CPC Scale', de: 'Virale Videos & Niedrige CPCs' },
    color: '#E11D48',
    gradient: 'from-[#FF0050] via-[#E11D48] to-[#7C3AED]',
    softPanelBg: 'from-rose-50/80 via-fuchsia-50/40 to-cyan-50/50',
    softBorder: 'border-rose-200/90',
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: Sparkles,
    headline: {
      tr: 'TikTok Ads Yönetiminde Adım Adım Ne Yapıyoruz?',
      en: 'Step-by-Step: What We Do in TikTok Ads Management',
      de: 'Schritt für Schritt: Was wir bei TikTok Ads tun'
    },
    summary: {
      tr: 'Reklam gibi görünmeyen, organik akışa uyumlu Spark Ads ve Smart+ kampanyalarıyla markanızı milyonlarca kullanıcıya en düşük tıklama ve dönüşüm maliyetleriyle ulaştırıyoruz.',
      en: 'Using native-looking Spark Ads and Smart+ campaigns, we put your brand in front of millions of buyers at the lowest CPC and CPA rates.',
      de: 'Mit authentischen Spark Ads und Smart+ Kampagnen erreichen wir Millionen Nutzer zu minimalen Klick- und Conversion-Kosten.'
    },
    proofMetric: {
      tr: '%40 Daha Düşük CPM • Spark Ads & UGC Kurgusu • Events API Takibi',
      en: '40% Lower CPM • Spark Ads & UGC Architecture • Events API Tracking',
      de: '40% Niedrigerer CPM • Spark Ads & UGC • Events API Tracking'
    },
    kpis: [
      { val: '-%40', label: { tr: 'Daha Düşük Gösterim Maliyeti (CPM)', en: 'Lower CPM vs. Other Channels', de: 'Niedrigerer CPM' }, color: 'from-rose-500 to-pink-600' },
      { val: '2 Sn', label: { tr: 'Kaydırma Durdurucu Hook Oranı', en: 'Scroll-Stopper Hook Focus', de: 'Scroll-Stopper Hook-Fokus' }, color: 'from-violet-600 to-purple-600' },
      { val: '4.9x', label: { tr: 'Video Alışveriş & Lead ROAS', en: 'Video Shopping & Lead ROAS', de: 'Video-Shopping ROAS' }, color: 'from-emerald-500 to-teal-600' }
    ],
    steps: [
      {
        num: '01',
        time: { tr: 'İlk 48 Saat', en: 'First 48 Hours', de: 'Erste 48 Stunden' },
        title: {
          tr: 'TikTok Pixel, Events API & Katalog Kurulumu',
          en: 'TikTok Pixel, Events API & Catalog Setup',
          de: 'TikTok Pixel, Events API & Katalog-Setup'
        },
        desc: {
          tr: 'TikTok Business Center, Events API (Sunucu Taraflı İzleme) ve ürün kataloğunuzu eksiksiz bağlıyor; hedef kitlenizin satın alma sinyallerini algoritmaya öğretiyoruz.',
          en: 'We connect TikTok Business Center, Events API (Server-Side), and your product catalog so the algorithm learns your exact buyer profile.',
          de: 'Wir verknüpfen TikTok Business Center, Events API und Ihren Produktkatalog für präzises Algorithmus-Training.'
        },
        deliverables: {
          tr: ['TikTok Pixel & Events API Kurulumu', 'Ürün Kataloğu & Video Shopping Entegrasyonu', 'Rakip Kreatif & Trend Kanca Analizi'],
          en: ['TikTok Pixel & Events API Integration', 'Product Catalog & Video Shopping Sync', 'Competitor Creative & Viral Hook Audit'],
          de: ['TikTok Pixel & Events API Setup', 'Produktkatalog & Video-Shopping-Sync', 'Wettbewerber-Hook-Analyse']
        }
      },
      {
        num: '02',
        time: { tr: '1. Hafta', en: 'Week 1', de: 'Woche 1' },
        title: {
          tr: 'Spark Ads, UGC Senaryoları & Lead Kurgusu',
          en: 'Spark Ads, UGC Scripts & Lead Generation Setup',
          de: 'Spark Ads, UGC-Skripte & Lead-Setup'
        },
        desc: {
          tr: 'Kullanıcıların kaydırmayı durdurmasını sağlayan ilk 2 saniyelik görsel/sesli kancalar (hooks), Spark Ads (organik post güçlendirme) ve anlık form kampanyalarını başlatıyoruz.',
          en: 'We launch scroll-stopping 2-second visual/audio hooks, Spark Ads (organic post boosting), and high-converting Instant Lead Forms.',
          de: 'Wir starten 2-Sekunden-Hooks, Spark Ads und hochkonvertierende TikTok Instant Lead Forms.'
        },
        deliverables: {
          tr: ['İlk 2 Saniye Kaydırma Durdurucu Kanca Kurgusu', 'Spark Ads & İçerik Üreticisi (UGC) Entegrasyonu', 'TikTok Anlık Form & E-Ticaret Satış Kampanyası'],
          en: ['2-Second Scroll-Stopper Hook Variations', 'Spark Ads & Creator Post Whitelisting', 'TikTok Instant Form & E-Commerce Campaigns'],
          de: ['2-Sekunden Scroll-Stopper Hooks', 'Spark Ads & Creator-Integration', 'TikTok Instant Forms & Shop-Kampagnen']
        }
      },
      {
        num: '03',
        time: { tr: 'Her Gün', en: 'Daily Execution', de: 'Täglich' },
        title: {
          tr: 'Kreatif Yenileme & Smart+ Ölçekleme',
          en: 'Creative Refresh & Smart+ Scaling',
          de: 'Creative-Refresh & Smart+ Skalierung'
        },
        desc: {
          tr: 'TikTok’ta videolar hızlı tüketilir. İzlenme süresi (2sn / 6sn izleme oranı) düşen videoları yeniliyor, düşük maliyetle satış getiren videoları agresif ölçekliyoruz.',
          en: 'We track 2s/6s view retention rates daily, rotating fresh hooks before ad fatigue hits and scaling winning videos profitably.',
          de: 'Wir prüfen täglich die 2s/6s-Haltequoten, rotieren frische Creatives und skalieren Gewinner-Videos.'
        },
        deliverables: {
          tr: ['2sn & 6sn Video Tutundurma (Retention) Analizi', 'Smart+ Yapay Zeka Bütçe Optimizasyonu', 'Çapraz Kanal (Meta + Google) Yeniden Pazarlama'],
          en: ['2s & 6s Video Retention Rate Optimization', 'Smart+ AI Automated Bidding Control', 'Cross-Channel (Meta + Google) Retargeting'],
          de: ['2s- & 6s-Video-Retention-Optimierung', 'Smart+ KI-Gebotssteuerung', 'Cross-Channel-Retargeting']
        }
      },
      {
        num: '04',
        time: { tr: 'Haftalık & Aylık', en: 'Weekly & Monthly', de: 'Wöchentlich & Monatlich' },
        title: {
          tr: 'Net Satış & Kreatif Performans Raporu',
          en: 'Net Revenue & Creative Performance Reporting',
          de: 'Netto-Umsatz & Creative-Performance-Bericht'
        },
        desc: {
          tr: 'Hangi videonun sadece izlendiğini, hangisinin gerçekten kasa/form doldurduğunu şeffafça raporluyor; bir sonraki ayın viral video reçetesini hazırlıyoruz.',
          en: 'We show you clearly which videos just get views vs. which ones drive real checkouts and leads, plus your next month’s creative script brief.',
          de: 'Wir zeigen transparent, welche Videos echte Käufe und Leads bringen, inklusive Skript-Briefing für den nächsten Monat.'
        },
        deliverables: {
          tr: ['Video Bazlı ROAS & Dönüşüm Tablosu', 'Yeni Ay İçin Çekim / Kanca Briefleri', '%0 Komisyon, Sabit Yönetim Bedeli'],
          en: ['Video-Level ROAS & Conversion Matrix', 'Next-Month Video Hook & Script Briefs', '0% Commission, Flat Monthly Retainer'],
          de: ['Video-genaue ROAS-Matrix', 'Neue Video-Hook-Briefings', '0% Provision, fester Monatspreis']
        }
      }
    ],
    goals: {
      tr: ['E-Ticaret Ürün Satışı (Video Shopping)', 'Hızlı Form & Müşteri (Lead) Toplama', 'Uygulama İndirme & Kayıt', 'Viral Marka Bilinirliği & Spark Ads'],
      en: ['E-Commerce Video Shopping Sales', 'Fast Instant-Form Lead Generation', 'App Installs & Signups', 'Viral Brand Reach & Spark Ads'],
      de: ['E-Commerce Video-Shopping-Umsatz', 'Schnelle Instant-Form-Leads', 'App-Installationen', 'Virale Reichweite & Spark Ads']
    }
  },
  'seo': {
    id: 'seo',
    label: { tr: 'SEO & Yapay Zeka (GEO)', en: 'SEO & AI Search (GEO)', de: 'SEO & KI-Suche (GEO)' },
    badge: { tr: 'Google #1. Sıra + ChatGPT & Perplexity Görünürlüğü', en: 'Google #1 + ChatGPT & Perplexity Citations', de: 'Google Platz 1 + ChatGPT & Perplexity' },
    color: '#059669',
    gradient: 'from-[#059669] via-[#10B981] to-[#2563EB]',
    softPanelBg: 'from-emerald-50/80 via-teal-50/40 to-blue-50/50',
    softBorder: 'border-emerald-200/90',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Search,
    headline: {
      tr: 'SEO & Yapay Zeka (GEO) Hizmetinde Adım Adım Ne Yapıyoruz?',
      en: 'Step-by-Step: What We Do in SEO & AI Search (GEO)',
      de: 'Schritt für Schritt: Was wir bei SEO & KI-Suche (GEO) tun'
    },
    summary: {
      tr: 'Sadece klasik Google sıralaması değil; müşterileriniz ChatGPT, Perplexity ve Google AI Overviews’a "en iyi firma hangisi?" diye sorduğunda sitenizin birincil kaynak olarak önerilmesini sağlıyoruz.',
      en: 'Beyond classic Google rankings, we engineer your site so ChatGPT, Perplexity, and Google AI Overviews recommend your brand as the primary trusted source.',
      de: 'Über klassisches Google-Ranking hinaus sorgen wir dafür, dass ChatGPT, Perplexity und Google AI Overviews Ihre Marke als Top-Quelle empfehlen.'
    },
    proofMetric: {
      tr: '500+ İlk Sıra Kelime • +%250 Organik Trafik • Princeton GEO Standardı',
      en: '500+ #1 Keywords • +250% Organic Traffic • Princeton GEO Standard',
      de: '500+ Top-1-Keywords • +250% Organischer Traffic • Princeton GEO Standard'
    },
    kpis: [
      { val: '500+', label: { tr: 'Google #1. Sıra Anahtar Kelime', en: 'Google #1 Ranked Keywords', de: 'Top-1-Keywords bei Google' }, color: 'from-emerald-600 to-teal-600' },
      { val: '+%250', label: { tr: 'Organik Müşteri & Trafik Artışı', en: 'Organic Traffic & Lead Growth', de: 'Organisches Traffic-Wachstum' }, color: 'from-blue-600 to-indigo-600' },
      { val: '5 AI', label: { tr: 'ChatGPT, Perplexity & Gemini Kaynağı', en: 'Cited in ChatGPT, Perplexity & Gemini', de: 'KI-Zitierbarkeit (GEO)' }, color: 'from-violet-600 to-purple-600' }
    ],
    steps: [
      {
        num: '01',
        time: { tr: '1. Hafta', en: 'Week 1', de: 'Woche 1' },
        title: {
          tr: 'Teknik SEO, Core Web Vitals & Search Console Röntgeni',
          en: 'Technical SEO, Core Web Vitals & GSC Audit',
          de: 'Technisches SEO, Core Web Vitals & GSC-Audit'
        },
        desc: {
          tr: 'Sitenizin indeksleme engellerini, kırık linklerini, yavaş açılan sayfalarını ve kelime yamyamlığı (cannibalization) sorunlarını tespit edip teknik temeli 100/100 standardına çekiyoruz.',
          en: 'We fix indexing bottlenecks, broken links, slow LCP speeds, and keyword cannibalization to bring your technical foundation to a 100/100 standard.',
          de: 'Wir beheben Indexierungsprobleme, langsame Ladezeiten und Keyword-Kannibalisierung für ein 100/100-Fundament.'
        },
        deliverables: {
          tr: ['Search Console Sürünen Ama İndekslenmeyen Sayfa Çözümü', 'Schema.org JSON-LD (Service, FAQ, LocalBusiness) Kurulumu', 'llms.txt & AI Bot Tarama İzinleri Yapılandırması'],
          en: ['GSC Crawled-Not-Indexed Resolution', 'Schema.org JSON-LD (Service, FAQ, LocalBusiness)', 'llms.txt & AI Crawler Directives Setup'],
          de: ['GSC-Indexierungs-Bereinigung', 'Schema.org JSON-LD Implementierung', 'llms.txt & KI-Crawler-Freigabe']
        }
      },
      {
        num: '02',
        time: { tr: '2. - 3. Hafta', en: 'Weeks 2 - 3', de: 'Woche 2 - 3' },
        title: {
          tr: 'Ticari Hizmet Sayfaları & Kelime Kümeleri (Topic Clusters)',
          en: 'Commercial Landing Pages & Topic Clusters',
          de: 'Kommerzielle Leistungsseiten & Topic-Cluster'
        },
        desc: {
          tr: 'Para kazandıran ticari kelimelerde (hizmet + şehir / sektör) sayfalarınızı yeniden kurguluyor; Search Console’da 5-20. sırada bekleyen kelimelerinizi ilk 3 sıraya taşıyoruz.',
          en: 'We optimize high-converting commercial service pages and push your striking-distance keywords (positions 5-20 in GSC) into the top 3 spots.',
          de: 'Wir optimieren kaufnahe Leistungsseiten und pushen Keywords von Position 5-20 in die Top 3 bei Google.'
        },
        deliverables: {
          tr: ['Ticari Hizmet & Çözüm Sayfaları Optimizasyonu', 'GSC "İlk 3 Sıra" Yakın Mesafe Kelime Atağı', 'Sıfır Spam, Karşılaştırma Tablolu Uzman İçerikler'],
          en: ['Commercial Service Page Optimization', 'GSC Striking-Distance Top-3 Keyword Sprint', 'Zero-Spam, Data-Table Rich Expert Guides'],
          de: ['Optimierung kommerzieller Leistungsseiten', 'GSC Top-3-Keyword-Sprint', 'Datenreiche Experten-Inhalte ohne KI-Slop']
        }
      },
      {
        num: '03',
        time: { tr: 'Sürekli', en: 'Ongoing', de: 'Laufend' },
        title: {
          tr: 'Princeton GEO (ChatGPT & Perplexity) Kaynak Optimizasyonu',
          en: 'Princeton GEO (ChatGPT & Perplexity) Citation Engineering',
          de: 'Princeton GEO (ChatGPT & Perplexity) Optimierung'
        },
        desc: {
          tr: 'İçeriklerinize doğrulanmış istatistikler, net cevap blokları ve karşılaştırma tabloları ekleyerek yapay zeka arama motorlarının markanızı kaynak göstermesini sağlıyoruz.',
          en: 'We embed verified statistics, direct answer blocks, and comparison tables so generative AI engines cite your brand first.',
          de: 'Wir integrieren verifizierte Statistiken und Vergleichstabellen, damit KI-Suchmaschinen Ihre Marke zitieren.'
        },
        deliverables: {
          tr: ['AI Overviews & ChatGPT Alıntılanabilirlik Kurgusu', 'İç Linkleme (Internal Linking) Otorite Dağıtımı', 'Yerel SEO (Google Haritalar) & E-E-A-T Güçlendirme'],
          en: ['AI Overviews & ChatGPT Citability Engineering', 'Internal Linking Authority Distribution', 'Local SEO (Google Maps) & E-E-A-T Signals'],
          de: ['AI-Overviews- & ChatGPT-Zitierbarkeit', 'Interne Verlinkungs-Architektur', 'Local SEO & E-E-A-T-Aufbau']
        }
      },
      {
        num: '04',
        time: { tr: 'Her Ay', en: 'Monthly', de: 'Monatlich' },
        title: {
          tr: 'Sıralama, Organik Müşteri & AI Görünürlük Raporu',
          en: 'Rankings, Organic Leads & AI Visibility Report',
          de: 'Ranking-, Organische Leads- & KI-Sichtbarkeitsbericht'
        },
        desc: {
          tr: 'Rehberlik ettiğimiz her kelimenin Google’da kaçıncı sıraya yükseldiğini, organik trafikten kaç form/telefon geldiğini şeffaf verilerle raporluyoruz.',
          en: 'We report exact Google rank movements, organic traffic growth, and leads generated from search and AI engines.',
          de: 'Wir berichten transparent über Google-Rankings, organischen Traffic-Zuwachs und gewonnene Anfragen.'
        },
        deliverables: {
          tr: ['Google Search Console Tıklama & Sıralama Raporu', 'AI Arama Motorları (GEO) Marka Görünürlük Takibi', 'Reklamsız, Kalıcı Organik Müşteri Akışı'],
          en: ['Google Search Console Click & Position Report', 'AI Search Engine (GEO) Brand Visibility Audit', 'Compounding, Ad-Free Organic Lead Flow'],
          de: ['Google Search Console Klick- & Ranking-Bericht', 'KI-Suchmaschinen-Sichtbarkeitsprüfung', 'Nachhaltiger organischer Kundenstrom']
        }
      }
    ],
    goals: {
      tr: ['Google’da Rakip Kelimelerde İlk 3 Sıra', 'ChatGPT & Google AI’da Önerilen Marka Olmak', 'Mevcut Sitenin Trafik & İndeks Sorununu Çözmek', 'Yerel / Uluslararası Çok Dilli SEO Büyümesi'],
      en: ['Rank Top 3 on Google for Buyer Keywords', 'Get Recommended by ChatGPT & Google AI', 'Fix Traffic Drop & Indexing Issues', 'Local or International Multilingual SEO'],
      de: ['Top-3-Rankings bei Google erreichen', 'In ChatGPT & Google AI empfohlen werden', 'Traffic-Verlust & Indexierungsprobleme lösen', 'Lokales oder internationales SEO']
    }
  },
  'server-side-tracking': {
    id: 'server-side-tracking',
    label: { tr: 'Server-Side CAPI & Kurulum', en: 'Server-Side CAPI & Setup', de: 'Server-Side CAPI & Setup' },
    badge: { tr: '%30 Veri Kaybına Son • EMQ 8.5+ Garanti', en: 'Stop 30% Data Loss • EMQ 8.5+ Match Score', de: '30% Datenverlust stoppen • EMQ 8.5+' },
    color: '#0D9488',
    gradient: 'from-[#0D9488] via-[#06B6D4] to-[#3B82F6]',
    softPanelBg: 'from-teal-50/80 via-cyan-50/40 to-blue-50/50',
    softBorder: 'border-teal-200/90',
    accentBg: 'bg-teal-50 text-teal-700 border-teal-200',
    icon: Layers,
    headline: {
      tr: 'Server-Side Tracking & CAPI Kurulumunda Adım Adım Ne Yapıyoruz?',
      en: 'Step-by-Step: What We Do in Server-Side Tracking & CAPI Setup',
      de: 'Schritt für Schritt: Was wir beim Server-Side Tracking & CAPI tun'
    },
    summary: {
      tr: 'iOS 17+, Safari ITP ve AdBlocker’lar yüzünden reklam panelleriniz satışların %30’unu göremiyor. Sunucu taraflı GTM, Meta CAPI ve Google Consent Mode v2 ile algoritmalara %100 doğru veri besliyoruz.',
      en: 'Due to iOS 17+, Safari ITP, and AdBlockers, ad platforms miss 30% of your sales. We deploy Server-Side GTM, Meta CAPI, and Consent Mode v2 to feed 100% accurate data to ad algorithms.',
      de: 'Durch iOS 17+ und AdBlocker fehlen Werbekonten 30% der Verkäufe. Mit Server-Side GTM, Meta CAPI und Consent Mode v2 liefern wir 100% präzise Daten.'
    },
    proofMetric: {
      tr: '+%32 Kurtarılan Dönüşüm Verisi • EMQ 8.8/10 • Consent Mode v2 Uyumlu',
      en: '+32% Recovered Conversion Data • EMQ 8.8/10 • Consent Mode v2 Ready',
      de: '+32% Gerettete Conversion-Daten • EMQ 8.8/10 • Consent Mode v2'
    },
    kpis: [
      { val: '+%32', label: { tr: 'Kurtarılan Kayıp Satış Verisi', en: 'Recovered Conversion Data', de: 'Gerettete Conversion-Daten' }, color: 'from-teal-600 to-emerald-600' },
      { val: '8.8/10', label: { tr: 'Meta EMQ Eşleşme Kalitesi', en: 'Meta Event Match Quality', de: 'Meta EMQ Match-Score' }, color: 'from-blue-600 to-indigo-600' },
      { val: '%100', label: { tr: 'Consent Mode v2 & KVKK Uyumu', en: 'Consent Mode v2 Compliant', de: 'Consent Mode v2 Konform' }, color: 'from-violet-600 to-purple-600' }
    ],
    steps: [
      {
        num: '01',
        time: { tr: '1. Gün', en: 'Day 1', de: 'Tag 1' },
        title: {
          tr: 'Veri Kaçağı Tespiti & Özel Alt Alan Adı (First-Party) Kurulumu',
          en: 'Data Leak Audit & First-Party Subdomain Cloud Setup',
          de: 'Datenleck-Audit & First-Party-Subdomain-Setup'
        },
        desc: {
          tr: 'Tarayıcı piksellerinizle gerçek kasa/CRM satışlarınız arasındaki farkı ölçüyor; kendi alan adınız altında (örn. metrics.siteniz.com) birinci taraf bulut sunucusu kuruyoruz.',
          en: 'We measure the gap between browser pixels and actual sales, then deploy a first-party cloud server under your own domain (e.g., metrics.yourdomain.com).',
          de: 'Wir messen die Lücke zwischen Browser-Pixeln und echten Verkäufen und richten einen First-Party-Cloud-Server unter Ihrer Domain ein.'
        },
        deliverables: {
          tr: ['Mevcut Pixel & GA4 Veri Kaybı Röntgeni', 'Google Tag Manager Server Container Kurulumu', 'AdBlocker Engeline Takılmayan 1st-Party Domain'],
          en: ['Current Pixel & GA4 Data Loss Diagnostic', 'Google Tag Manager Server Container Setup', 'AdBlocker-Resistant First-Party Subdomain'],
          de: ['Pixel- & GA4-Datenverlust-Diagnose', 'GTM Server-Container-Einrichtung', 'AdBlocker-sichere First-Party-Subdomain']
        }
      },
      {
        num: '02',
        time: { tr: '2. - 3. Gün', en: 'Days 2 - 3', de: 'Tag 2 - 3' },
        title: {
          tr: 'Meta CAPI, Google Enhanced Conversions & Deduplication',
          en: 'Meta CAPI, Google Enhanced Conversions & Deduplication',
          de: 'Meta CAPI, Enhanced Conversions & Deduplizierung'
        },
        desc: {
          tr: 'Hem tarayıcıdan hem sunucudan giden olayları benzersiz event_id ile tekilleştiriyor (çift sayımı önlüyor) ve SHA-256 şifreli müşteri verileriyle eşleşme kalitesini (EMQ) 8.5+ seviyesine çıkarıyoruz.',
          en: 'We deduplicate browser and server events via unique event_id keys and pass SHA-256 hashed user parameters to achieve 8.5+ Event Match Quality.',
          de: 'Wir deduplizieren Browser- und Server-Events per event_id und steigern die Event-Match-Qualität (EMQ) per SHA-256-Hashing auf 8.5+.'
        },
        deliverables: {
          tr: ['Meta Conversions API (Purchase, Lead, InitiateCheckout)', 'Google Ads Gelişmiş Dönüşümler & GA4 Server Bağlantısı', 'TikTok Events API & Çift Sayım Önleme (Deduplication)'],
          en: ['Meta Conversions API (Purchase, Lead, Checkout)', 'Google Ads Enhanced Conversions & GA4 Server Link', 'TikTok Events API & Deterministic Deduplication'],
          de: ['Meta Conversions API (Purchase, Lead, Checkout)', 'Google Ads Enhanced Conversions & GA4-Server', 'TikTok Events API & Event-Deduplizierung']
        }
      },
      {
        num: '03',
        time: { tr: '4. Gün', en: 'Day 4', de: 'Tag 4' },
        title: {
          tr: 'Google Consent Mode v2 & KVKK / GDPR Uyumluluğu',
          en: 'Google Consent Mode v2 & GDPR / KVKK Compliance',
          de: 'Google Consent Mode v2 & DSGVO-Konformität'
        },
        desc: {
          tr: 'Avrupa ve Türkiye reklam politikaları için zorunlu olan Consent Mode v2 sinyallerini (`ad_user_data`, `ad_personalization`) çerez yönetim panelinizle entegre ediyoruz.',
          en: 'We integrate mandatory Google Consent Mode v2 signals (`ad_user_data`, `ad_personalization`) with your CMP banner for full compliance and remarketing continuity.',
          de: 'Wir integrieren den Google Consent Mode v2 (`ad_user_data`, `ad_personalization`) rechtskonform mit Ihrem Cookie-Banner.'
        },
        deliverables: {
          tr: ['Google Consent Mode v2 (Advanced / Basic) Kurulumu', 'Shopify, WooCommerce, İkas veya Özel Site Entegrasyonu', 'Çevrimdışı Dönüşüm (CRM / WhatsApp Satış) Geri Beslemesi'],
          en: ['Google Consent Mode v2 (Advanced / Basic) Setup', 'Shopify, WooCommerce, or Custom Stack Integration', 'Offline Conversion (CRM / WhatsApp) Feedback Loop'],
          de: ['Google Consent Mode v2 Implementierung', 'Shopify-, WooCommerce- oder Custom-Integration', 'Offline-Conversion-Import (CRM / WhatsApp)']
        }
      },
      {
        num: '04',
        time: { tr: '5. Gün', en: 'Day 5', de: 'Tag 5' },
        title: {
          tr: 'Canlı Test, Doğrulama & Anahtar Teslim Rapor',
          en: 'Live QA Testing, Verification & Turnkey Handover',
          de: 'Live-Test, Verifizierung & Schlüsselfertige Übergabe'
        },
        desc: {
          tr: 'GTM Preview, Meta Test Events ve Google Tag Assistant üzerinden tüm dönüşümleri canlı test ediyor; yeşil onaylı kurulum raporunuzla sistemi anahtar teslim devrediyoruz.',
          en: 'We verify every event live in GTM Preview, Meta Test Events, and Tag Assistant, handing over a fully documented, green-lit tracking infrastructure.',
          de: 'Wir testen alle Events live in GTM Preview, Meta Test Events und Tag Assistant und übergeben das dokumentierte System.'
        },
        deliverables: {
          tr: ['Meta Events Manager EMQ Skor Doğrulaması', 'Google Ads "Etkin / Kayıt Alınıyor" Dönüşüm Onayı', 'Anahtar Teslim Dokümantasyon & Teknik Destek'],
          en: ['Meta Events Manager EMQ Score Verification', 'Google Ads Active Conversion Status Sign-Off', 'Turnkey Documentation & Technical Support'],
          de: ['Meta Events Manager EMQ-Verifizierung', 'Google Ads Aktiver Conversion-Status', 'Dokumentation & Technischer Support']
        }
      }
    ],
    goals: {
      tr: ['Meta CAPI & Server-Side GTM Tam Kurulumu', 'Google Ads Gelişmiş Dönüşüm & Consent Mode v2', 'E-Ticaret (Shopify / Woo / İkas) Veri Kaybını Çözme', 'Sıfırdan Reklam Hesapları & Pixel Kurulumu'],
      en: ['Full Meta CAPI & Server-Side GTM Setup', 'Google Enhanced Conversions & Consent Mode v2', 'Fix E-Commerce (Shopify / Woo) Tracking Loss', 'Complete Ad Account & Pixel Setup from Scratch'],
      de: ['Komplettes Meta CAPI & Server-Side GTM Setup', 'Google Enhanced Conversions & Consent Mode v2', 'E-Commerce Tracking-Verluste beheben', 'Komplette Werbekonto- & Pixel-Einrichtung']
    }
  },
  'web-sitesi-tasarimi': {
    id: 'web-sitesi-tasarimi',
    label: { tr: 'Anahtar Teslim Web Sitesi', en: 'Turnkey Web Design & CMS', de: 'Schlüsselfertiges Webdesign' },
    badge: { tr: 'Next.js 16 • 100/100 Google Hız & SEO', en: 'Next.js 16 • 100/100 Google Speed & SEO', de: 'Next.js 16 • 100/100 Google Speed & SEO' },
    color: '#7C3AED',
    gradient: 'from-[#7C3AED] via-[#6366F1] to-[#EC4899]',
    softPanelBg: 'from-violet-50/80 via-indigo-50/40 to-fuchsia-50/50',
    softBorder: 'border-violet-200/90',
    accentBg: 'bg-violet-50 text-violet-700 border-violet-200',
    icon: Globe,
    headline: {
      tr: 'Anahtar Teslim Web Sitesi Hizmetinde Adım Adım Ne Yapıyoruz?',
      en: 'Step-by-Step: What We Do in Turnkey Web Design & Development',
      de: 'Schritt für Schritt: Was wir beim schlüsselfertigen Webdesign tun'
    },
    summary: {
      tr: 'Yavaş açılan, müşteri kaçıran hazır şablonlar yerine; 1 saniyenin altında açılan, Google Lighthouse 100/100 puanlı, reklam dönüşümüne ve SEO’ya %100 hazır modern web siteleri inşa ediyoruz.',
      en: 'Instead of bloated templates that lose visitors, we build sub-second Next.js websites with 100/100 Lighthouse scores engineered for Google Ads conversions and SEO.',
      de: 'Statt langsamer Baukästen entwickeln wir blitzschnelle Next.js-Websites mit 100/100 Lighthouse-Score für maximale Google Ads-Conversions und SEO.'
    },
    proofMetric: {
      tr: '100/100 Google Lighthouse • < 0.8sn Açılış Hızı • Sınırsız Revize',
      en: '100/100 Google Lighthouse • < 0.8s Load Time • Unlimited Revisions',
      de: '100/100 Google Lighthouse • < 0,8s Ladezeit • Unbegrenzte Revisionen'
    },
    kpis: [
      { val: '100/100', label: { tr: 'Google Lighthouse SEO & Hız', en: 'Google Lighthouse SEO & Speed', de: 'Google Lighthouse Score' }, color: 'from-violet-600 to-indigo-600' },
      { val: '< 0.8s', label: { tr: 'Anında Sayfa Açılış Hızı (LCP)', en: 'Sub-Second Instant Load (LCP)', de: 'Blitzschnelle Ladezeit' }, color: 'from-emerald-500 to-teal-600' },
      { val: '%100', label: { tr: 'Özel Admin Paneli & Tam Mülkiyet', en: 'Custom CMS & Full Ownership', de: 'Eigenes CMS & Eigentum' }, color: 'from-pink-500 to-rose-600' }
    ],
    steps: [
      {
        num: '01',
        time: { tr: '1. - 2. Gün', en: 'Days 1 - 2', de: 'Tag 1 - 2' },
        title: {
          tr: 'Sektör Analizi, Dönüşüm Kurgusu & UX Tasarım',
          en: 'Industry Audit, Conversion Architecture & UX Design',
          de: 'Branchenanalyse, Conversion-Architektur & UX-Design'
        },
        desc: {
          tr: 'Ziyaretçinin siteye girdiği ilk 3 saniyede güven duymasını ve kolayca teklif/iletişim formuna yönelmesini sağlayan ikna odaklı sayfa mimarisini tasarlıyoruz.',
          en: 'We design a high-trust page hierarchy that captures visitor attention in the first 3 seconds and guides them effortlessly to your inquiry form.',
          de: 'Wir entwerfen eine verkaufsstarke Seitenstruktur, die in 3 Sekunden Vertrauen aufbaut und Besucher direkt zur Anfrage führt.'
        },
        deliverables: {
          tr: ['Mobil Öncelikli (Mobile-First) Premium Arayüz', 'Hizmet / Ürün Odaklı İkna Blokları & CTA Kurgusu', 'Çok Dilli (TR / EN / DE) Mimari Desteği'],
          en: ['Mobile-First Premium UI/UX Architecture', 'Service-Focused Persuasion Blocks & CTA Flow', 'Multilingual (TR / EN / DE) Architecture Support'],
          de: ['Mobile-First Premium UI/UX Design', 'Verkaufsstarke Leistungsblöcke & CTAs', 'Mehrsprachige Architektur (DE / EN / TR)']
        }
      },
      {
        num: '02',
        time: { tr: '1. Hafta', en: 'Week 1', de: 'Woche 1' },
        title: {
          tr: 'Next.js 16 Geliştirme & Özel Yönetim Paneli (CMS)',
          en: 'Next.js 16 Development & Custom Admin Panel (CMS)',
          de: 'Next.js 16 Entwicklung & Eigenes Admin-Panel (CMS)'
        },
        desc: {
          tr: 'Sitenizi modern Next.js mimarisiyle kodluyor; kimseye muhtaç olmadan yazılarınızı, görsellerinizi ve hizmetlerinizi güncelleyebileceğiniz kolay bir yönetim paneli kuruyoruz.',
          en: 'We code your site on Next.js 16 and include an intuitive Admin Panel so you can update pages, blogs, and visuals anytime without coding.',
          de: 'Wir entwickeln auf Next.js 16 inklusive intuitivem Admin-Panel zur einfachen Pflege von Texten, Bildern und Blogbeiträgen.'
        },
        deliverables: {
          tr: ['100/100 Google PageSpeed & Core Web Vitals Performansı', 'Kolay Kullanımlı Türkçe / İngilizce Admin Paneli', 'Spam Korumalı Hızlı Teklif & İletişim Formları'],
          en: ['100/100 Google PageSpeed & Core Web Vitals Score', 'Easy-to-Use Custom Admin Dashboard (CMS)', 'Spam-Protected High-Converting Lead Forms'],
          de: ['100/100 Google PageSpeed & Core Web Vitals', 'Einfaches eigenes Admin-Dashboard (CMS)', 'Spam-geschützte Lead-Formulare']
        }
      },
      {
        num: '03',
        time: { tr: '2. Hafta', en: 'Week 2', de: 'Woche 2' },
        title: {
          tr: 'Teknik SEO, Schema.org & Reklam Pixel Entegrasyonu',
          en: 'Technical SEO, Schema.org & Ad Pixel Integration',
          de: 'Technisches SEO, Schema.org & Pixel-Integration'
        },
        desc: {
          tr: 'Diğer yazılımcıların atladığı tüm SEO ve reklam altyapısını (SSR Metadata, JSON-LD Schema, Sitemap, llms.txt, GA4, Google Ads ve Meta Pixel) doğuştan entegre ediyoruz.',
          en: 'Unlike generic web agencies, we bake in SSR Metadata, JSON-LD Schema, Sitemap, llms.txt, GA4, Google Ads, and Meta Pixel from day one.',
          de: 'Anders als klassische Webagenturen integrieren wir SSR-Metadaten, JSON-LD Schema, llms.txt, GA4, Google Ads und Meta Pixel direkt ab Werk.'
        },
        deliverables: {
          tr: ['Sunucu Taraflı (SSR) SEO & JSON-LD Zengin Snippetlar', 'ChatGPT & AI Aramaları İçin llms.txt Altyapısı', 'GA4, Google Tag Manager & Dönüşüm Takibi Hazır'],
          en: ['Server-Side (SSR) SEO & JSON-LD Rich Snippets', 'llms.txt Infrastructure for ChatGPT & AI Search', 'Pre-configured GA4, GTM & Conversion Tracking'],
          de: ['Server-Side (SSR) SEO & JSON-LD Snippets', 'llms.txt für ChatGPT & KI-Suchmaschinen', 'Vorinstalliertes GA4, GTM & Conversion-Tracking']
        }
      },
      {
        num: '04',
        time: { tr: 'Teslimat', en: 'Launch', de: 'Livegang' },
        title: {
          tr: 'Sınırsız Revize, Canlıya Alma & Search Console Kaydı',
          en: 'Unlimited Revisions, Deployment & Search Console Indexing',
          de: 'Unbegrenzte Revisionen, Livegang & Search Console'
        },
        desc: {
          tr: 'Tasarım ve içerik tamamen içinize sinene kadar revize ediyor, SSL güvenliğiyle yayına alıyor ve Google Search Console indeksleme başvurularını tamamlıyoruz.',
          en: 'We refine the design until you are 100% thrilled, deploy on global edge servers with SSL, and submit your sitemaps to Google Search Console.',
          de: 'Wir verfeinern alles bis zur 100%-igen Zufriedenheit, schalten die Seite mit SSL live und reichen sie in der Google Search Console ein.'
        },
        deliverables: {
          tr: ['Memnuniyet Garantili Sınırsız Tasarım Revizesi', 'Global CDN, SSL Güvenlik Başlıkları & Otomatik Yedekleme', 'Google Search Console & Analytics Tam Kurulumu'],
          en: ['Satisfaction-Guaranteed Design Revisions', 'Global CDN, Security Headers & Automated Backups', 'Full Google Search Console & Analytics Handover'],
          de: ['Unbegrenzte Design-Revisionen bis zur Freigabe', 'Global CDN, Security-Header & Backups', 'Komplette Google Search Console Einrichtung']
        }
      }
    ],
    goals: {
      tr: ['Sıfırdan Yüksek Dönüşümlü Kurumsal Web Sitesi', 'Mevcut Yavaş Siteyi Next.js (100/100 SEO) İle Yenileme', 'Çok Dilli (İhracat / Global) Web Sitesi Kurulumu', 'Reklam (Google / Meta Ads) İçin Özel Landing Page'],
      en: ['New High-Converting Corporate Website', 'Rebuild Slow Site on Next.js (100/100 SEO)', 'Multilingual International Export Website', 'Dedicated Paid-Ads Landing Page Funnel'],
      de: ['Neue hochkonvertierende Unternehmens-Website', 'Langsame Website auf Next.js (100/100 SEO) erneuern', 'Mehrsprachige Website (DE / EN / TR)', 'Spezielle Landingpage für Google / Meta Ads']
    }
  }
}

const BUDGET_OPTIONS = {
  tr: [
    '25.000 ₺ – 50.000 ₺ / Ay',
    '50.000 ₺ – 150.000 ₺ / Ay',
    '150.000 ₺ – 400.000 ₺ / Ay',
    '400.000 ₺+ / Kurumsal Ölçek'
  ],
  en: [
    '$1,000 – $2,500 / Month',
    '$2,500 – $5,000 / Month',
    '$5,000 – $15,000 / Month',
    '$15,000+ / Enterprise Scale'
  ],
  de: [
    '1.000 € – 2.500 € / Monat',
    '2.500 € – 5.000 € / Monat',
    '5.000 € – 15.000 € / Monat',
    '15.000 €+ / Enterprise'
  ]
}

export default function StepByStepServiceFlow({
  lang = 'tr',
  initialService = 'meta-ads',
  singleServiceMode = false
}) {
  const normalizedInitial = SERVICE_BLUEPRINTS[initialService] ? initialService : 'meta-ads'
  const [activeTab, setActiveTab] = useState(normalizedInitial)
  const [selectedGoal, setSelectedGoal] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    note: '',
    b_check: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (SERVICE_BLUEPRINTS[initialService]) {
      setActiveTab(initialService)
    }
  }, [initialService])

  const current = SERVICE_BLUEPRINTS[activeTab] || SERVICE_BLUEPRINTS['meta-ads']
  const l = ['tr', 'en', 'de'].includes(lang) ? lang : 'tr'
  const goalsList = current.goals[l] || current.goals.tr
  const budgetsList = BUDGET_OPTIONS[l] || BUDGET_OPTIONS.tr

  useEffect(() => {
    setSelectedGoal(goalsList[0] || '')
    setSelectedBudget(budgetsList[0] || '')
    setSubmitted(false)
    setErrorMsg('')
  }, [activeTab, l])

  const getLocalizedServicePath = (slug) => {
    const seg = l === 'de' ? 'dienstleistungen' : l === 'en' ? 'services' : 'hizmetler'
    const finalSlug = slug === 'web-sitesi-tasarimi' && l === 'en' ? 'web-design' : slug
    return `/${l}/${seg}/${finalSlug}`
  }

  const handleQuickSubmit = async (e) => {
    e.preventDefault()
    if (formData.b_check) return
    setSubmitting(true)
    setErrorMsg('')

    const compiledMessage = [
      `[Hizmet / Kanal]: ${current.label[l]}`,
      `[Öncelikli Hedef]: ${selectedGoal}`,
      `[Aylık Bütçe Aralığı]: ${selectedBudget}`,
      `[Web Sitesi / Firma]: ${formData.website || 'Belirtilmedi'}`,
      `[Ek Not]: ${formData.note || 'Adım Adım Hizmet Planlayıcı üzerinden gönderildi.'}`
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.website,
          service: activeTab,
          message: compiledMessage,
          language: l,
          b_check: formData.b_check
        })
      })

      if (res.ok) {
        trackLead({
          formName: singleServiceMode ? `service_step_form_${activeTab}` : 'homepage_step_blueprint',
          service: activeTab,
          method: 'step_by_step_blueprint'
        })
        setSubmitted(true)
        setFormData({ name: '', email: '', website: '', note: '', b_check: '' })
      } else {
        setErrorMsg(
          l === 'en'
            ? 'Please check your information and try again.'
            : 'Lütfen bilgilerinizi kontrol edip tekrar deneyin.'
        )
      }
    } catch (err) {
      setErrorMsg(
        l === 'en'
          ? 'Connection error. You can also email info@salihmaral.com directly.'
          : 'Bağlantı hatası oluştu. Doğrudan info@salihmaral.com adresine de yazabilirsiniz.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="adim-adim-plan"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Dynamic Colorful Ambient Glow */}
      <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-50 -z-0"></div>
      <div
        className="absolute -top-10 left-1/4 w-[650px] h-[380px] rounded-full blur-[130px] pointer-events-none -z-0 opacity-25 transition-colors duration-500"
        style={{ backgroundColor: current.color }}
      ></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[340px] bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-emerald-400/20 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: current.color }}
            ></span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {l === 'de'
                ? 'SCHRITT-FÜR-SCHRITT LEISTUNGSPLAN & SOFORT-ANFRAGE'
                : l === 'en'
                ? 'STEP-BY-STEP SERVICE BLUEPRINT & INSTANT AUDIT'
                : 'ADIM ADIM HİZMET YOL HARİTASI & HIZLI BAŞVURU'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.12] mb-4">
            {singleServiceMode ? (
              current.headline[l]
            ) : l === 'de' ? (
              <>
                Wählen Sie Ihren Kanal:{' '}
                <span className={`bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>
                  Was wir Schritt für Schritt tun
                </span>
              </>
            ) : l === 'en' ? (
              <>
                Select Your Service:{' '}
                <span className={`bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>
                  See Exactly What We Do Step-by-Step
                </span>
              </>
            ) : (
              <>
                Almak İstediğiniz Hizmeti Seçin:{' '}
                <span className={`bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>
                  Adım Adım Ne Yapıyoruz Görün
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            {l === 'de'
              ? 'Keine unklaren Agentur-Versprechen: Klicken Sie auf die gewünschte Leistung, prüfen Sie unseren 4-Schritte-Prozess und fordern Sie in 30 Sekunden Ihren individuellen Wachstumsplan an.'
              : l === 'en'
              ? 'Zero vague agency promises: Click the service you need below, inspect our exact 4-step execution process, and request your custom growth plan in 30 seconds.'
              : 'Karmaşık ajans terimleri yok: İhtiyacınız olan hizmeti seçin, ilk 48 saatten itibaren hesabınızda neleri kurup nasıl büyüttüğümüzü inceleyin ve sağdaki formdan 30 saniyede başvurunuzu tamamlayın.'}
          </p>
        </div>

        {/* Interactive Channel Tabs */}
        {!singleServiceMode && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
            {Object.values(SERVICE_BLUEPRINTS).map((srv) => {
              const IconComp = srv.icon
              const isSelected = activeTab === srv.id
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveTab(srv.id)}
                  className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? `bg-gradient-to-r ${srv.gradient} text-white border-transparent shadow-xl scale-[1.04]`
                      : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100'
                    }`}
                    style={!isSelected ? { color: srv.color } : undefined}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </span>
                  <span>{srv.label[l]}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Main 12-Column Split Layout: Left 7 Cols (4 Steps), Right 5 Cols (Harmonized Colorful Action Card + Executive Guarantee Card) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT 7 COLUMNS: Colorful 4-Step Execution Roadmap */}
          <div
            className={`lg:col-span-7 bg-gradient-to-br ${current.softPanelBg} rounded-[2rem] border-2 ${current.softBorder} shadow-[0_18px_50px_rgba(15,23,42,0.06)] p-6 sm:p-8 md:p-9 relative overflow-hidden flex flex-col justify-between`}
          >
            {/* Top Gradient Spectrum Bar */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${current.gradient}`}></div>

            <div>
              {/* Selected Service Header Box */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200/70">
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border mb-2.5 shadow-2xs ${current.accentBg}`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {current.badge[l]}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-950 tracking-tight">
                    {current.headline[l]}
                  </h3>
                </div>

                {!singleServiceMode && (
                  <a
                    href={getLocalizedServicePath(current.id)}
                    style={{ borderColor: current.color, color: current.color }}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 border-2 px-4 py-2 rounded-xl transition-all shadow-2xs shrink-0"
                  >
                    <span>
                      {l === 'de'
                        ? 'Vollständige Leistungsseite'
                        : l === 'en'
                        ? 'Full Service Page'
                        : 'Hizmet Detay Sayfası'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6">
                {current.summary[l]}
              </p>

              {/* Colorful Gradient Proof Metric Banner */}
              <div
                className={`mb-6 px-5 py-3.5 rounded-2xl bg-gradient-to-r ${current.gradient} text-white flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-extrabold shadow-lg`}
              >
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-200 shrink-0" />
                  <span>{current.proofMetric[l]}</span>
                </span>
                <span className="text-[11px] text-white font-black bg-white/20 backdrop-blur-xs border border-white/30 px-3 py-0.5 rounded-full">
                  ✓ {l === 'en' ? 'Verified Process' : 'Doğrulanmış Süreç'}
                </span>
              </div>

              {/* 4 Vibrant Color-Coded Step Cards */}
              <div className="space-y-4">
                {current.steps.map((st, idx) => {
                  const pal = STEP_PALETTES[idx % STEP_PALETTES.length]
                  return (
                    <div
                      key={idx}
                      className={`group relative rounded-2xl border-2 ${pal.border} ${pal.cardBg} p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden`}
                    >
                      {/* Left Color Accent Strip */}
                      <div className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${pal.topBar}`}></div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5 pl-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center shrink-0 ${pal.numBg}`}
                          >
                            {st.num}
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-gray-950">
                            {st.title[l]}
                          </h4>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold px-3 py-1 rounded-full border w-fit shadow-2xs ${pal.timeBadge}`}
                        >
                          <Clock className="w-3 h-3" />
                          {st.time[l]}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 sm:pl-14 pl-2">
                        {st.desc[l]}
                      </p>

                      {/* Colorful Deliverables Pills */}
                      <div className="grid sm:grid-cols-3 gap-2.5 sm:pl-14 pl-2">
                        {st.deliverables[l].map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold shadow-2xs transition-colors ${pal.pillBg}`}
                          >
                            <CheckCircle
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: pal.iconColor }}
                            />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom 3 Colorful KPI Impact Cards (Balances Left Column & Reinforces ROI) */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-4">
              {current.kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm text-center relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${kpi.color}`}></div>
                  <div
                    className={`text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}
                  >
                    {kpi.val}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-600 mt-1 leading-tight">
                    {kpi.label[l]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 5 COLUMNS: Vibrant Conversion Card + Executive Value Guarantee Box (Eliminates Empty White Space!) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Primary Interactive Lead Card */}
            <div
              className={`bg-white rounded-[2rem] border-2 ${current.softBorder} shadow-[0_20px_60px_rgba(15,23,42,0.1)] overflow-hidden relative`}
            >
              {/* Rich Colorful Gradient Header Banner inside Form Card */}
              <div className={`bg-gradient-to-r ${current.gradient} p-6 sm:p-7 text-white relative overflow-hidden`}>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>
                    {l === 'de'
                      ? 'ANTWORT IN 24 STUNDEN • 0% PROVISION'
                      : l === 'en'
                      ? '24-HOUR REPLY GUARANTEE • 0% COMMISSION'
                      : '24 SAATTE DÖNÜŞ GARANTİSİ • %0 KOMİSYON'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {l === 'de'
                    ? `${current.label[l]} Anfrage starten`
                    : l === 'en'
                    ? `Request ${current.label[l]} Proposal`
                    : `${current.label[l]} İçin Hemen Başvurun`}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1.5 font-medium leading-relaxed">
                  {l === 'de'
                    ? 'Wählen Sie Ihr Ziel und Budget — Salih Maral prüft Ihr Projekt persönlich.'
                    : l === 'en'
                    ? 'Select your goal and monthly budget — Salih Maral personally reviews your project.'
                    : 'Hedefinizi ve bütçenizi seçin; hesabınızı inceleyip size özel yol haritasıyla dönelim.'}
                </p>
              </div>

              <div className="p-6 sm:p-7">
                {/* Qualification Notice */}
                <div className="mb-5 px-3.5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] sm:text-xs text-amber-950 font-medium leading-relaxed">
                  {l === 'en' ? (
                    <>
                      📌 <strong>Working Criteria:</strong> We serve <strong>B2B businesses</strong> and brands with a <strong>minimum monthly ad spend of 25,000 TL</strong> (or equivalent).
                    </>
                  ) : l === 'de' ? (
                    <>
                      📌 <strong>Arbeitskriterium:</strong> Wir betreuen <strong>B2B-Unternehmen</strong> und Marken ab einem monatlichen Werbebudget von <strong>1.000 € / 25.000 TL</strong>.
                    </>
                  ) : (
                    <>
                      📌 <strong>Çalışma Kriteri:</strong> Danışmanlık hizmetimiz <strong>B2B işletmelere</strong> ve <strong>aylık minimum 25.000 TL reklam harcaması</strong> olan markalara verilmektedir.
                    </>
                  )}
                </div>

                {submitted ? (
                  <div className="py-8 px-4 text-center bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-gray-950">
                      {l === 'de'
                        ? 'Ihre Anfrage wurde erfolgreich gesendet!'
                        : l === 'en'
                        ? 'Your Request Has Been Received!'
                        : 'Başvurunuz Başarıyla Alındı!'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      {l === 'de'
                        ? `Wir haben Ihre ${current.label[l]}-Anfrage erhalten und melden uns innerhalb von 24 Stunden per E-Mail bei Ihnen.`
                        : l === 'en'
                        ? `We received your ${current.label[l]} brief and will reply to your email within 24 hours with your custom strategy.`
                        : `${current.label[l]} başvurunuz doğrudan Salih Maral'a iletildi. En geç 24 saat içinde e-posta adresinize detaylı geri dönüş yapılacaktır.`}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-extrabold text-[#4285F4] hover:underline cursor-pointer"
                    >
                      {l === 'en' ? 'Send another request' : 'Yeni bir başvuru gönder'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-4">
                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                      <input
                        type="text"
                        name="b_check"
                        value={formData.b_check}
                        onChange={(e) => setFormData({ ...formData, b_check: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Step 1: Select Goal (Harmonized with Service Theme Color) */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2">
                        1. {l === 'de' ? 'Was ist Ihr Hauptziel?' : l === 'en' ? 'What Is Your Primary Goal?' : 'Öncelikli Hedefiniz Nedir?'}
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {goalsList.map((g, i) => {
                          const active = selectedGoal === g
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSelectedGoal(g)}
                              style={
                                active
                                  ? { backgroundColor: current.color, borderColor: current.color }
                                  : undefined
                              }
                              className={`text-left px-4 py-2.5 rounded-xl border-2 text-xs font-extrabold transition-all cursor-pointer flex items-center justify-between ${
                                active
                                  ? 'text-white shadow-md scale-[1.01]'
                                  : 'bg-slate-50/90 text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              <span>{g}</span>
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                                  active ? 'bg-white text-slate-950 font-black' : 'border border-slate-300 bg-white'
                                }`}
                              >
                                {active ? '✓' : ''}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Step 2: Select Monthly Ad Budget (Harmonized with Service Theme Color) */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2">
                        2. {l === 'de' ? 'Monatliches Werbebudget' : l === 'en' ? 'Monthly Ad Spend / Budget' : 'Aylık Reklam / Proje Bütçeniz'}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetsList.map((b, i) => {
                          const active = selectedBudget === b
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSelectedBudget(b)}
                              style={
                                active
                                  ? {
                                      borderColor: current.color,
                                      backgroundColor: `${current.color}14`,
                                      color: current.color
                                    }
                                  : undefined
                              }
                              className={`px-3 py-2.5 rounded-xl border-2 text-[11px] sm:text-xs font-extrabold transition-all cursor-pointer text-center ${
                                active
                                  ? 'shadow-xs scale-[1.02]'
                                  : 'bg-slate-50/90 text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              {b}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Step 3: Contact Details */}
                    <div className="pt-1 space-y-2.5">
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        3. {l === 'de' ? 'Ihre Kontaktdaten' : l === 'en' ? 'Your Contact Info' : 'İletişim & Web Sitesi Bilgileriniz'}
                      </label>

                      <div className="grid sm:grid-cols-2 gap-2.5">
                        <input
                          type="text"
                          required
                          placeholder={l === 'de' ? 'Ihr Name *' : l === 'en' ? 'Your Name *' : 'Adınız Soyadınız *'}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-900 outline-none text-xs sm:text-sm font-semibold text-gray-900"
                        />
                        <input
                          type="email"
                          required
                          placeholder={l === 'de' ? 'E-Mail-Adresse *' : l === 'en' ? 'Work Email *' : 'E-Posta Adresiniz *'}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-900 outline-none text-xs sm:text-sm font-semibold text-gray-900"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder={
                          l === 'de'
                            ? 'Website-URL oder Instagram-Profil (Optional)'
                            : l === 'en'
                            ? 'Website URL or Instagram Handle (Optional)'
                            : 'Web Siteniz veya Instagram Adresiniz (Opsiyonel)'
                        }
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-900 outline-none text-xs sm:text-sm font-semibold text-gray-900"
                      />

                      <textarea
                        rows={2}
                        placeholder={
                          l === 'de'
                            ? 'Kurze Notiz zu Ihrem Projekt (Optional)...'
                            : l === 'en'
                            ? 'Short note about your current ads or goal (Optional)...'
                            : 'Varsa mevcut reklam durumunuz veya eklemek istediğiniz not...'
                        }
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border-2 border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-900 outline-none text-xs sm:text-sm font-semibold text-gray-900 resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full bg-gradient-to-r ${current.gradient} text-white font-black text-xs sm:text-sm py-4 px-6 rounded-2xl shadow-xl hover:opacity-95 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>
                        {submitting
                          ? l === 'en'
                            ? 'Sending...'
                            : 'Gönderiliyor...'
                          : l === 'de'
                          ? `${current.label[l]} Plan & Angebot anfordern`
                          : l === 'en'
                          ? `Get My ${current.label[l]} Action Plan`
                          : `${current.label[l]} İçin Ücretsiz Analiz & Teklif Al`}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-center text-slate-500 font-semibold">
                      🔒 {l === 'en' ? '100% confidential • Direct reply from Salih Maral within 24h' : 'Bilgileriniz %100 gizli tutulur • 24 saat içinde doğrudan Salih Maral dönüş yapar'}
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Secondary Colorful Card: "Başvurudan Sonra Sizi Ne Bekliyor?" (Fills Right Column Balance Perfectly) */}
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-[#0F172A] to-indigo-950 text-white p-6 sm:p-7 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${current.gradient}`}></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/15">
                  <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                  {l === 'de'
                    ? 'WAS PASSIERT NACH IHRER ANFRAGE?'
                    : l === 'en'
                    ? 'WHAT HAPPENS AFTER YOU APPLY?'
                    : 'FORMU GÖNDERDİKTEN SONRA NE YAPIYORUZ?'}
                </span>
                <span className="text-xs font-extrabold text-amber-300">★ 5.0 (300+ Marka)</span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 bg-white/[0.06] border border-white/10 rounded-2xl p-3.5">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/25 border border-blue-400/40 text-blue-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <div className="font-extrabold text-white">
                      {l === 'en' ? 'Free Pre-Audit of Your Website & Ads' : 'Web Siteniz & Mevcut Reklamlarınızın Ön Röntgeni'}
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {l === 'en'
                        ? 'Salih Maral personally inspects your site, pixel health, and competitor landscape before replying.'
                        : 'Salih Maral yanıt vermeden önce sitenizi, pixel/veri yapınızı ve sektörünüzdeki rakipleri bizzat inceler.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.06] border border-white/10 rounded-2xl p-3.5">
                  <span className="w-6 h-6 rounded-lg bg-purple-500/25 border border-purple-400/40 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <div className="font-extrabold text-white">
                      {l === 'en' ? 'Clear Flat-Fee Proposal & Growth Roadmap' : 'Net Sabit Fiyat Teklifi & Büyüme Planı (24 Saat)'}
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {l === 'en'
                        ? 'You receive a transparent monthly flat-fee offer (0% commission) and concrete 30-day action plan.'
                        : 'Sürpriz komisyon olmadan, şeffaf sabit yönetim ücreti teklifimizi ve 30 günlük net aksiyon planımızı alırsınız.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.06] border border-white/10 rounded-2xl p-3.5">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <div className="font-extrabold text-white">
                      {l === 'en' ? '100% Account Ownership & Direct Senior Access' : '%100 Hesap Mülkiyeti & Doğrudan Uzman İletişimi'}
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {l === 'en'
                        ? 'All ad accounts stay in your name; you work directly with a 17+ year Google Partner.'
                        : 'Stajyerlerle değil, doğrudan 17+ yıllık Resmi Google Partneri ile çalışırsınız; tüm hesaplar sizin mülkiyetinizde kalır.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
