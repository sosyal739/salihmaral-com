import ServiceDetailClient from './ServiceDetailClient'

import { notFound } from 'next/navigation'



const serviceMeta = {

  'google-ads': {

    de: {

      title: 'Google Ads Betreuung zum Fixpreis | Salih Maral',

      description: 'Zertifizierte Google Ads Betreuung zum fairen Fixpreis: 17+ Jahre Senior-Expertise, Performance Max & Search für maximalen ROAS ohne Streuverlust.',

    },

    en: {

      title: 'Google Ads Agency & B2B PPC Consulting | Salih Maral',

      description: 'Scale revenue with Official Google Partner Salih Maral (17+ yrs). Flat-fee Google Ads consulting for B2B & e-commerce (min. 25,000 TL budget). 24h response.',

    },

    tr: {

      title: 'Google Ads Danışmanlığı & Reklam Ajansı | Salih Maral',

      description: 'Resmi Google Partneri Salih Maral ile kurumsal Google Ads danışmanlığı: B2B ve 25.000 TL+ bütçeli markalar için sabit ücretli PMax ve Arama yönetimi.',

    },

  },

  'meta-ads': {

    de: {

      title: 'Meta Ads Agentur (Facebook & Instagram) | Salih Maral',

      description: 'Zertifizierte Meta Ads Betreuung zum Fixpreis: Advantage+ Shopping, Creative AI & CAPI für messbare E-Commerce Skalierung und minimale CPAs.',

    },

    en: {

      title: 'Meta Ads Agency (Facebook & Instagram) | Salih Maral',

      description: 'Certified Meta Ads management: Advantage+ Shopping, Creative AI, and Server-Side CAPI to scale e-commerce and lower CPAs.',

    },

    tr: {

      title: 'Meta Ads Ajansı (Facebook & Instagram) | Salih Maral',

      description: 'Profesyonel Meta Ads yönetimi: Advantage+ Alışveriş, CAPI ve yapay zeka kreatifleri ile satışlarınızı ve ROAS\'ınızı katlayın.',

    },

  },

  'youtube-ads': {

    de: {

      title: 'YouTube Ads Betreuung & Video-Wachstum | Salih Maral',

      description: 'Erreichen Sie echte Zuschauer und loyale Abonnenten mit zielgerichteten In-Feed & Shorts Video Ads auf YouTube.',

    },

    en: {

      title: 'YouTube Ads & Video Growth Services | Salih Maral',

      description: 'Reach real viewers and loyal subscribers with targeted In-Feed & Shorts video ads to drive organic YouTube channel growth.',

    },

    tr: {

      title: 'YouTube Reklam İzlenme Satın Al (Ads) | Salih Maral',

      description: 'Resmi Google Partner ile YouTube reklam (Ads) izlenmesi satın alın. Bot paneller olmadan, YouTube Studio onaylı gerçek video reklam izlenme paketleri.',

    },

  },

  'server-side-tracking': {

    de: {

      title: 'Tracking Setup & CAPI (Google Ads, GA4) | Salih Maral',

      description: 'Lückenloses Werbe- und Tracking-Setup: Google Ads, GA4 E-Commerce, Search Console, Merchant Center, Meta Pixel, Conversions API (CAPI) & Server-Side GTM.',

    },

    en: {

      title: 'Ad & Tracking Setup (Google Ads, GA4, CAPI) | Salih Maral',

      description: 'Full-funnel ad and tracking setup: Google Ads, GA4 E-Commerce, Search Console, Merchant Center, Meta Pixel, Conversions API (CAPI), and Server-Side GTM.',

    },

    tr: {

      title: 'Tracking & Reklam Kurulumu (GA4, CAPI) | Salih Maral',

      description: 'Anahtar teslim reklam ve ölçüm altyapı kurulumu: Google Ads, GA4 E-Ticaret, Search Console, Merchant Center, Meta Pixel, CAPI ve Server-Side GTM.',

    },

  },

  'tiktok-ads': {

    de: {

      title: 'TikTok Ads Betreuung & E-Commerce | Salih Maral',

      description: 'Virale Performance-Kampagnen und Spark Ads für dynamisches E-Commerce-Wachstum und hohe Conversion-Raten auf TikTok.',

    },

    en: {

      title: 'TikTok Ads Management Services | Salih Maral',

      description: 'Viral direct-response campaigns and Spark Ads for rapid e-commerce growth and high conversion rates on TikTok.',

    },

    tr: {

      title: 'TikTok Ads Reklam Yönetimi | Salih Maral',

      description: 'Viral kreatif kurguları ve Spark Ads ile genç kitleyi müşteriye dönüştüren doğrudan satış odaklı TikTok reklamları.',

    },

  },

  'x-ads': {

    de: {

      title: 'X (Twitter) Ads Betreuung & B2B Lead Gen | Salih Maral',

      description: 'Positionieren Sie Ihre Marke bei Trendthemen und Entscheidern. B2B Lead-Generierung und Reichweite auf X.',

    },

    en: {

      title: 'X (Twitter) Ads Management & B2B Leads | Salih Maral',

      description: 'Position your brand in front of decision-makers. B2B lead generation, app installs, and viral reach on X (Twitter).',

    },

    tr: {

      title: 'X (Twitter) Ads Reklam Yönetimi ve B2B Büyüme | Salih Maral',

      description: 'Karar vericilere ve trend konulara doğrudan ulaşın. B2B müşteri kazanımı ve yüksek etkileşimli X reklamları.',

    },

  },

  'seo': {

    de: {

      title: 'SEO Agentur & Princeton GEO Optimierung | Salih Maral',

      description: 'Top-Rankings bei Google und KI-Suchmaschinen (Perplexity, ChatGPT, Claude). Technisches SEO, Content-Hubs und Local SEO.',

    },

    en: {

      title: 'SEO, Local SEO & GEO AI Search Services | Salih Maral',

      description: 'Dominate Google, Local Maps 3-Pack, and AI search engines (ChatGPT, Perplexity, AI Overviews). Technical SEO & GEO consulting with 24h response SLA.',

    },

    tr: {

      title: 'GEO Hizmeti, GEO Danışmanlığı & Kurumsal SEO | Salih Maral',

      description: 'Kurumsal SEO, Google Haritalar ve yapay zeka arama motorları için GEO hizmeti ve GEO optimizasyonu. Perplexity, ChatGPT ve Google AI Overviews danışmanlığı.',

    },

  },

  'islamic-charity-ngo-marketing': {

    de: {

      title: 'Spendenmarketing & Google Ad Grants für NGOs | Salih Maral',

      description: 'Digitale Spendenkampagnen für Brunnen, Waisen und Nothilfe. Bis zu $10.000/Monat kostenlose Google Werbebudgets (Ad Grants).',

    },

    en: {

      title: 'Donation Marketing & Google Ad Grants for NGOs | Salih Maral',

      description: 'Scale donations for water wells, orphan sponsorships, and Ramadan appeals. Up to $10,000/month in free Google Ad Grants.',

    },

    tr: {

      title: 'STK & Dernekler İçin Dijital Pazarlama | Salih Maral',

      description: 'Su kuyusu, yetim ve Ramazan/Kurban bağış hunileri. $10.000/aylık ücretsiz Google Ad Grants hibe reklam yönetimi.',

    },

  },

  'web-sitesi-tasarimi': {

    de: {

      title: 'Schlüsselfertiges Webdesign & Next.js SEO | Salih Maral',

      description: 'Hochmoderne, SEO-optimierte Unternehmenswebsites mit Next.js, Admin-Panel und unbegrenzten Revisionen.',

    },

    en: {

      title: 'Turnkey Web Design & SEO Website Development | Salih Maral',

      description: 'State-of-the-art Next.js 16 corporate websites: 100/100 SEO & GEO ready, easy-to-use admin panel, and unlimited revisions included.',

    },

    tr: {

      title: 'Anahtar Teslim Web Sitesi & Kurumsal Tasarım | Salih Maral',

      description: 'Son model Next.js 16 donanımlı, 100/100 SEO & GEO uyumlu, gelişmiş admin panelli ve sınırsız revize garantili anahtar teslim web sitesi.',

    },

  },

}



const serviceFaqs = {

  'youtube-ads': {
    tr: [
      {
        q: 'YouTube reklam izlenme satın alma (Ads) nedir ve bot panellerden farkı nedir?',
        a: 'YouTube reklam izlenme satın alma; SMM veya bot panellerinin sahte izlenmelerinin aksine, resmi Google Ads platformu (In-Feed, Atlanabilir In-Stream ve Shorts) üzerinden videonuzun gerçek kullanıcılara reklam olarak gösterilmesidir. Bot paneller kanalınızı spam filtresine sokar, para kazanmayı durdurur ve silinir. Google Ads üzerinden satın alınan reklam izlenmeleri ise %100 güvenlidir, YouTube Studio panelinde doğrudan "YouTube Reklamları" olarak listelenir, organik izlenme süresini artırır ve kanalınıza gerçek abone kazandırır.'
      },
      {
        q: 'YouTube reklam izlenme fiyatları nasıl belirlenir ve nereden sipariş verilir?',
        a: 'YouTube reklamlarında bütçeniz izleme başına maliyet (CPV - Cost Per View) modeliyle çalışır; videonuz atlandığında ücret ödemezsiniz. Türkiye hedefli video reklamlarında ortalama CPV 0,15 TL – 0,45 TL, Avrupa ve global kampanyalarda 0,01 € – 0,03 € aralığındadır. 1.000 izlenmeden 1.000.000+ izlenmeye kadar tüm resmi YouTube Ads paketlerimizi özel platformumuz medyapr.com üzerinden canlı hesaplayabilir ve kanal şifresi paylaşmadan hemen sipariş oluşturabilirsiniz.'
      },
      {
        q: 'Satın alınan reklam izlenmeleri YouTube Analytics (Studio) ve sayaçta anında görünür mü?',
        a: 'Evet. Tüm video izlenmeleri doğrudan Google Ads altyapısı ile sağlandığından YouTube Studio analizlerinizde trafik kaynağı "YouTube Reklamları (YouTube Advertising)" olarak %100 doğrulanmış şekilde anlık yansır. 24 Ağustos YouTube güncellemesiyle Shorts ve uzun videolarda oynatma başladığı ilk saniyeden itibaren sayaçlara resmi olarak işlenir.'
      },
      {
        q: 'YouTube reklamları ile organik abone ve video beğenisi de kazanılır mı?',
        a: 'Evet. Kampanyalarımız müzik türü, yaş, demografi ve benzer sanatçı/kanal kitlelerine göre hedefleme yaptığı için videonuzu izleyenler kanalınıza organik olarak abone olur, yorum yazar ve diğer içeriklerinizi keşfeder. Bu yüksek etkileşim sinyali, YouTube algoritmasının videonuzu "Önerilen Videolar" arasına taşımasını hızlandırır.'
      },
      {
        q: 'YouTube AdWords izlenme satın al ile YouTube gerçek reklam izlenme aynı şey mi?',
        a: 'Evet. Google AdWords sisteminin güncel adı Google Ads olup, YouTube AdWords izlenme satın alma işlemi doğrudan resmi YouTube reklamlarıyla gerçek izlenme kazanmaktır. Bot veya sahte panellerin aksine, izlenmeler %100 gerçek kullanıcılardan gelir ve medyapr.com üzerinden şifresiz sipariş edilebilir.'
      }
    ],
    de: [
      {
        q: 'Was ist der Unterschied zwischen echten YouTube Ads und gekauften Bot-Aufrufen?',
        a: 'Gekaufte Bot-Aufrufe von SMM-Panels schaden Ihrem Kanal nachhaltig, gefährden die Monetarisierung (YPP) und werden von YouTube regelmäßig gelöscht. Bei Salih Maral nutzen wir ausschließlich die offizielle Google Ads Werbeplattform (In-Feed, überspringbare In-Stream & Shorts Ads). Alle Videoaufrufe stammen von 100% echten Menschen, erscheinen verifiziert in YouTube Studio unter "YouTube Werbung" und generieren organische Abonnenten.'
      },
      {
        q: 'Wie hoch sind die Kosten pro Videoaufruf (CPV) bei YouTube Werbung?',
        a: 'Bei YouTube Video Ads zahlen Sie nach dem Cost-per-View (CPV) Modell — Sie zahlen nur, wenn Nutzer Ihr Video mindestens 30 Sekunden ansehen oder interagieren. In Deutschland und Europa liegt der optimale CPV zwischen 0,01 € und 0,03 €, in der Türkei zwischen 0,15 TL und 0,45 TL. Wir arbeiten mit einer transparenten monatlichen Betreuungspauschale (Fixpreis) ohne prozentuale Budgetprovision.'
      },
      {
        q: 'Werden die Aufrufe in YouTube Studio und den öffentlichen Zählern gewertet?',
        a: 'Ja, zu 100%. Da die Ausspielung direkt über Google Ads erfolgt, weist YouTube Analytics alle Aufrufe offiziell als Werbetraffic aus. Durch die YouTube-Aktualisierung werden Views bei Shorts und VODs ab der ersten Sekunde verlässlich und manipulationssicher im öffentlichen Zähler erfasst.'
      },
      {
        q: 'Gewinnt mein Kanal durch Video Ads auch echte Abonnenten und Likes?',
        a: 'Ja. Da wir Anzeigen gezielt vor musik- und themenrelevanten Zielgruppen ausspielen, konvertieren interessierte Zuschauer häufig in dauerhafte Abonnenten, hinterlassen Kommentare und liken Ihre Inhalte. Dies sendet starke Relevanzsignale an den YouTube-Empfehlungsalgorithmus.'
      }
    ],
    en: [
      {
        q: 'What is the difference between real YouTube Ads views and cheap bot panels?',
        a: 'Third-party SMM panels use fake bots that flag your channel for spam, strip monetization, and get deleted during YouTube audits. In contrast, our service runs strictly through official Google Ads (In-Feed, Skippable In-Stream, and Shorts). Every view is from a 100% verified human, shows up transparently in YouTube Studio under "YouTube Advertising", and generates genuine subscribers and watch time.'
      },
      {
        q: 'What are the average Cost-Per-View (CPV) and pricing models for YouTube video ads?',
        a: 'YouTube Ads operates on a Cost-per-View (CPV) model: you only pay when a user watches at least 30 seconds or engages with your ad. In Europe and Germany, optimal CPVs range from €0.01 to €0.03, and in Turkey from 0.15 TL to 0.45 TL. We charge a transparent flat monthly management fee (Fixpreis) rather than taking a percentage of your ad budget.'
      },
      {
        q: 'Do YouTube Ads views count in YouTube Studio analytics and public view counts?',
        a: 'Yes, 100%. Because campaigns run through Google Ads, YouTube Studio immediately reports every view under "YouTube Advertising" traffic. Following YouTube\'s updated view-counting architecture, valid plays across Shorts and long-form videos are officially added to public counts from second zero.'
      },
      {
        q: 'Can YouTube video advertising bring organic subscribers and engagement?',
        a: 'Yes. By targeting users based on specific musical genres, demographics, and affinity channels, viewers naturally interact with your content, leave comments, and subscribe. This engagement flywheel signals high retention to YouTube\'s recommendation algorithm.'
      }
    ]
  },

  'web-sitesi-tasarimi': {

    en: [

      {

        q: 'What is included in the Turnkey Website package (Admin Panel, SEO & Revisions)?',

        a: 'Every website is built from scratch with Next.js 16 architecture, equipped with a user-friendly Admin Panel (CMS), 100/100 Google Lighthouse SEO & GEO optimization, GA4/CAPI tracking, and unlimited design revisions until you are 100% satisfied.'

      },

      {

        q: 'Why do you use Next.js instead of traditional WordPress templates?',

        a: 'Ready-made WordPress themes suffer from slow loading speeds, plugin vulnerabilities, and wasted ad clicks. Our Next.js server-side rendered (SSR) websites load in under 0.8 seconds, boost Google Ads Quality Score to 10/10, and rank effortlessly on Google.'

      }

    ],

    tr: [

      {

        q: 'Anahtar teslim web sitesi paketinde neler var (Admin Paneli, SEO ve Sınırsız Revize)?',

        a: 'Siteniz son model Next.js 16 mimarisiyle sıfırdan kurulur; kod bilmeden her yeri yönetebileceğiniz gelişmiş Türkçe/İngilizce Admin Paneli, 100/100 Google SEO & GEO uyumu, GA4/CAPI reklam takip kurulumu ve memnun kalana kadar sınırsız revize garantisi dahildir.'

      },

      {

        q: 'Neden klasik WordPress şablonları yerine son model özel yazılım kullanıyorsunuz?',

        a: 'Hazır WordPress temaları yavaş açılır, güvenlik açığı barındırır ve reklam tıklamalarınızı boşa harcar. Kurduğumuz Next.js tabanlı siteler 0.8 saniyenin altında açılır, Google Ads Kalite Puanınızı 10/10 yapar ve SEO sıralamalarında doğrudan üstünlük sağlar.'

      }

    ]

  },

  'meta-ads': {

    de: [

      {

        q: 'Was kostet die professionelle Meta Ads Betreuung (Fixpreis vs. prozentuale Provision)?',

        a: 'Bei Salih Maral betreuen wir Ihre Facebook und Instagram Ads zu transparenten monatlichen Fixpreisen ab 590 €/Monat – ohne prozentuale Umsatzbeteiligung an Ihrem Werbebudget. So stellen wir sicher, dass das primäre Ziel die Senkung Ihres CPA und die Steigerung Ihres Netto-ROAS ist, statt Ihr Werbebudget künstlich in die Höhe zu treiben.'

      },

      {

        q: 'Wie bekämpft man Creative Fatigue (Anzeigenmüdigkeit) auf Instagram & Facebook?',

        a: 'Creative Fatigue tritt ein, wenn dieselbe Zielgruppe ein Werbemittel zu oft sieht, wodurch Frequenz steigt und Klickraten (CTR) einbrechen. Wir lösen dies durch eine wöchentliche Creative-Pipeline mit systematischer Diversifikation: UGC-Videos, statische Problem-Lösungs-Grafiken und dynamische Advantage+ Karussell-Anzeigen.'

      },

      {

        q: 'Was ist der Vorteil von Meta Advantage+ Shopping Campaigns (ASC)?',

        a: 'Advantage+ Shopping Campaigns nutzen maschinelles Lernen, um bis zu 150 Kreativ-Assets automatisch mit kaufbereiten Nutzern zu matchen. Wir begrenzen den Bestandskunden-Anteil (Customer Budget Cap) strategisch auf 5-15%, um echtes Neukundenwachstum zu sichern.'

      },

      {

        q: 'Warum ist die Meta Conversions API (CAPI) mit Server-Side GTM in Deutschland Pflicht?',

        a: 'Durch strenge DSGVO/TTDSG-Cookie-Banner und Safari ITP gehen über 30% der Browser-Pixel-Events verloren. Über Server-Side CAPI stellen wir sicher, dass Kauf- und Lead-Signale datenschutzkonform und verlustfrei an Meta übertragen werden, was den Algorithmus stabilisiert und den CPA nachweislich senkt.'

      }

    ],

    en: [

      {

        q: 'What are the fees for professional Meta Ads management (Flat fee vs % of spend)?',

        a: 'We operate on a transparent monthly flat fee (Fixpreis) starting from €590/month rather than taking percentage cuts from your ad budget. This ensures our priority is strictly to reduce your CPA and scale profitable net ROAS without artificial budget inflation.'

      },

      {

        q: 'How do you prevent Creative Fatigue on Facebook & Instagram Ads?',

        a: 'Creative Fatigue occurs when audience frequency spikes and CTR drops due to overexposed ads. We eliminate this with a weekly creative pipeline: UGC video hooks, static problem-solution infographics, and dynamic Advantage+ catalog carousels.'

      },

      {

        q: 'What are the advantages of Meta Advantage+ Shopping Campaigns (ASC)?',

        a: 'Advantage+ Shopping Campaigns leverage machine learning to dynamically match up to 150 assets with high-intent buyers. By implementing a strict 5-15% Customer Budget Cap, we prevent algorithm waste on repeat buyers and secure true incremental acquisition.'

      },

      {

        q: 'Why is Meta Conversions API (CAPI) with Server-Side GTM mandatory for modern tracking?',

        a: 'Strict privacy regulations, ad-blockers and browser cookie restrictions block over 30% of browser pixel events. Server-Side CAPI restores loss-free, compliant event signals to Meta, lowering CPA and improving algorithm precision.'

      }

    ],

    tr: [

      {

        q: "Profesyonel Meta Ads yönetimi ücreti nedir (Sabit fiyat mı, bütçe komisyonu mu)?",

        a: "Reklam harcamanızdan %10-15 komisyon kesmek yerine şeffaf ve sabit hizmet bedeli (Fixpreis) ile çalışıyoruz. Bu sayede ajansın bütçenizi gereksiz yükseltmesini engelliyor, doğrudan dönüşüm başı maliyetinizi (CPA) düşürüp karlılığınızı (ROAS) katlamaya odaklanıyoruz."

      },

      {

        q: "Facebook ve Instagram reklamlarında Creative Fatigue (Reklam Yorgunluğu) nasıl çözülür?",

        a: "Hedef kitlenin aynı reklamı defalarca görmesi sonucu sıklık artar ve tıklama oranları (CTR) düşer. Haftalık yeni kreatif testleri, kullanıcı deneyimi (UGC) videoları, problem-çözüm grafikleri ve Advantage+ dinamik katalog formatları ile reklam yorgunluğunu tamamen ortadan kaldırıyoruz."

      },

      {

        q: "Meta Advantage+ Alışveriş Kampanyaları (ASC) nedir ve ne gibi avantajlar sağlar?",

        a: "Meta Advantage+ Shopping, makine öğrenimi ile 150 adede kadar kreatif varyasyonunu satın alma olasılığı en yüksek kullanıcılarla otomatik eşleştirir. Mevcut müşteri bütçe sınırını (Customer Budget Cap) %10-15 seviyesinde tutarak bütçenin eski alıcılarda tükenmesini engelliyor, karlı yeni müşteri akışı sağlıyoruz."

      },

      {

        q: "Meta Conversions API (CAPI) ve sunucu taraflı takip neden zorunludur?",

        a: "Tarayıcı çerez kısıtlamaları ve reklam engelleyicileri piksel verilerinin %30'undan fazlasını siler. Server-Side CAPI ile satın alma ve lead sinyalleri sunucu üzerinden kayıpsız iletilir; yapay zekanın veri körlüğü önlenir ve maliyetler düşer."

      }

    ]

  },

  'google-ads': {

    de: [

      {

        q: 'Google Ads Agentur Preise & Kosten: Wie rechnen Sie ab (Fixpreis oder Prozent vom Ad Spend)?',

        a: 'Wir setzen bewusst auf eine transparente monatliche Betreuungspauschale (Fixpreis) statt prozentualer Umsatzprovisionen. Unser Ziel ist es nicht, Ihr Werbebudget künstlich in die Höhe zu treiben, sondern Ihre Kosten pro Conversion (CPA) zu senken und Ihren ROAS zu maximieren.'

      },

      {

        q: 'Wie schnell stellen sich erste messbare Ergebnisse mit Google Ads ein?',

        a: 'Google Search Kampagnen generieren ab dem ersten Schaltungstag qualifizierte Suchanfragen und Leads. Durch kontinuierliche Suchbegriffsanalyse, negative Keywords und Conversion-Tracking stabilisiert sich der optimale CPA innerhalb von 14 bis 30 Tagen.'

      },

      {

        q: 'Bieten Sie auch mehrsprachige Betreuung (Deutsch, Türkisch & Englisch) an?',

        a: 'Ja. Als offizieller Google Partner mit über 17 Jahren Praxiserfahrung beraten wir internationale Unternehmen fließend auf Deutsch, Türkisch und Englisch.'

      }

    ],

    en: [

      {

        q: 'Google Ads Agency Costs & Pricing: How do you charge (Flat fee or % of ad spend)?',

        a: 'We deliberately operate on a transparent monthly flat-fee model rather than taking a percentage of your ad spend. This aligns our goals strictly with lowering your CPA and boosting your ROAS.'

      },

      {

        q: 'How fast can we see measurable results with Google Ads?',

        a: 'Search campaigns generate qualified intent clicks from day one. With negative keyword pruning and server-side tracking, optimal acquisition cost is typically achieved within 14 to 30 days.'

      }

    ],

    tr: [

      {

        q: 'Google Ads danışmanlığı ücretleri nasıl belirlenir (Sabit fiyat mı, bütçe komisyonu mu)?',

        a: 'Yönetilen reklam bütçesinden %10 - %15 komisyon kesmek yerine şeffaf ve sabit aylık danışmanlık ücreti ile çalışıyoruz. Hizmetimiz B2B işletmeler ve aylık minimum 25.000 TL reklam bütçesine sahip markalar için kurgulanmıştır; tüm form ve e-posta taleplerine 24 saat içinde garantili dönüş sağlıyoruz.'

      },

      {

        q: 'Kurumsal Google Ads yönetimi ne kadar sürede sonuç verir?',

        a: 'Arama ağı ve Performance Max (PMax) kampanyaları yayına alındığı ilk günden itibaren nitelikli form ve sipariş talebi üretmeye başlar. Negatif anahtar kelime koruması ve Server-Side Tracking (sGTM) ile 14-30 gün içinde en yüksek ROAS ve karlılık seviyesine ulaşılır.'

      }

    ]

  },

  'seo': {

    en: [

      {

        q: 'What is included in your SEO, Local SEO, and Generative Engine Optimization (GEO) service?',

        a: 'We deliver full-stack Technical SEO (100/100 Core Web Vitals, SSR metadata, Schema.org JSON-LD), Google Maps Local 3-Pack optimization, and Princeton GEO optimization (llms.txt, entity citations) so your brand ranks #1 on both Google and AI search engines like ChatGPT and Perplexity.'

      },

      {

        q: 'Who is eligible for your SEO & GEO consulting services and how fast do you respond?',

        a: 'We partner exclusively with B2B enterprises, exporting manufacturers, and growing brands with a minimum monthly marketing budget of 25,000 TL. Every inquiry submitted via our online form or info@salihmaral.com receives a comprehensive response within 24 hours.'

      }

    ],

    tr: [

      {

        q: 'GEO (Generative Engine Optimization) hizmeti nedir ve yapay zeka aramalarında nasıl kaynak gösteriliriz?',

        a: 'GEO, markanızın Perplexity, ChatGPT Search, Claude ve Google AI Overviews gibi yapay zeka motorlarında birincil tavsiye ve kaynak olarak gösterilmesini sağlayan yeni nesil optimizasyondur. Princeton GEO araştırması standartlarında /llms.txt kurulumu, varlık (entity) otoritesi, yapılandırılmış veri tabloları ve alıntı şemaları ile yapay zekanın ilk önerdiği marka olmanızı sağlıyoruz.'

      },

      {

        q: 'Kurumsal SEO, Yerel SEO ve Yapay Zeka SEO (GEO) hizmetiniz neleri kapsar?',

        a: '100/100 Google Lighthouse teknik SEO mimarisi, Schema.org JSON-LD yapılandırması, Google Haritalar (Yerel SEO İlk 3) optimizasyonu ve ChatGPT, Perplexity ile Google AI Overviews sonuçlarında birincil kaynak olarak önerilmenizi sağlayan Princeton GEO (llms.txt ve varlık otoritesi) çalışmalarını uçtan uca kapsar.'

      },

      {

        q: 'SEO ve GEO danışmanlığı için çalışma kriterleriniz ve geri dönüş süreniz nedir?',

        a: 'Danışmanlık hizmetimiz B2B firmalar, ihracatçılar ve aylık minimum 25.000 TL reklam/pazarlama bütçesine sahip işletmeler için sunulmaktadır. Online form veya info@salihmaral.com üzerinden ilettiğiniz tüm taleplere 24 saat içinde garantili analiz ve geri dönüş sağlıyoruz.'

      }

    ]

  }

}



export async function generateMetadata({ params }) {

  const resolvedParams = params && typeof params.then === 'function' ? await params : params

  const { lang, service } = resolvedParams || {}

  const currentLang = lang || 'tr'

  

  let key = service || ''

  if (service === 'bewertungsmanagement' || service === 'review-management' || service === 'yorum-yonetimi' || service === 'web-design') {

    key = 'web-sitesi-tasarimi'

  }



  const metaData = serviceMeta[key]?.[currentLang] || {

    title: `${service || 'Hizmetler'} | Salih Maral`,

    description: 'Salih Maral profesyonel dijital pazarlama ve büyüme hizmetleri.',

  }



  const pathPrefix = currentLang === 'en' ? 'en/services' : 'tr/hizmetler'

  const serviceSlug = key === 'web-sitesi-tasarimi' 

    ? (currentLang === 'en' ? 'web-design' : 'web-sitesi-tasarimi')

    : key

  const canonicalUrl = `https://www.salihmaral.com/${pathPrefix}/${serviceSlug}`



  return {

    title: {

      absolute: metaData.title,

    },

    description: metaData.description,

    alternates: {

      canonical: canonicalUrl,

      languages: {

        en: `https://www.salihmaral.com/en/services/${key === 'web-sitesi-tasarimi' ? 'web-design' : key}`,

        tr: `https://www.salihmaral.com/tr/hizmetler/${key === 'web-sitesi-tasarimi' ? 'web-sitesi-tasarimi' : key}`,

        'x-default': `https://www.salihmaral.com/tr/hizmetler/${key === 'web-sitesi-tasarimi' ? 'web-sitesi-tasarimi' : key}`,

      }

    },

    openGraph: {

      title: metaData.title,

      description: metaData.description,

      url: canonicalUrl,

      images: [

        {

          url: 'https://www.salihmaral.com/logo-og.png',

          width: 1200,

          height: 630,

          alt: metaData.title,

        },

      ],

    },

    twitter: {

      card: 'summary_large_image',

      title: metaData.title,

      description: metaData.description,

      images: ['https://www.salihmaral.com/logo.png'],

      creator: '@salihmaral',

    },

  }

}



export async function generateStaticParams() {

  const baseServices = ['google-ads', 'meta-ads', 'youtube-ads', 'server-side-tracking', 'tiktok-ads', 'x-ads', 'seo', 'islamic-charity-ngo-marketing', 'web-sitesi-tasarimi']

  const params = []



  // English

  baseServices.forEach(service => {

    params.push({ lang: 'en', service })

  })

  params.push({ lang: 'en', service: 'web-design' })



  // Turkish

  baseServices.forEach(service => {

    params.push({ lang: 'tr', service })

  })



  return params

}



export default async function ServicePage({ params }) {

  const resolvedParams = params && typeof params.then === 'function' ? await params : params

  const { lang, service } = resolvedParams || {}

  

  if (!service) {

    notFound()

  }



  const currentLang = lang || 'tr'

  let key = service || ''

  if (service === 'bewertungsmanagement' || service === 'review-management' || service === 'yorum-yonetimi' || service === 'web-design') {

    key = 'web-sitesi-tasarimi'

  }



  const metaData = serviceMeta[key]?.[currentLang] || {

    title: `${service || 'Hizmetler'} | Salih Maral`,

    description: 'Salih Maral profesyonel dijital pazarlama ve büyüme hizmetleri.',

  }



  const pathPrefix = currentLang === 'en' ? 'en/services' : 'tr/hizmetler'

  const serviceSlug = key === 'web-sitesi-tasarimi' 

    ? (currentLang === 'en' ? 'web-design' : 'web-sitesi-tasarimi')

    : key

  const canonicalUrl = `https://www.salihmaral.com/${pathPrefix}/${serviceSlug}`



  const serviceSchema = {

    '@context': 'https://schema.org',

    '@graph': [

      {

        '@type': 'Service',

        '@id': `${canonicalUrl}#service`,

        name: metaData.title,

        description: metaData.description,

        provider: {

          '@type': 'ProfessionalService',

          '@id': 'https://www.salihmaral.com/#organization',

          name: 'Salih Maral',

          url: 'https://www.salihmaral.com',

          email: 'info@salihmaral.com',

          priceRange: '₺₺ / ₺₺₺',

          image: 'https://www.salihmaral.com/logo.png',

          address: {

            '@type': 'PostalAddress',

            addressLocality: 'İstanbul',

            addressCountry: 'TR',

          },

          contactPoint: {

            '@type': 'ContactPoint',

            email: 'info@salihmaral.com',

            url: 'https://www.salihmaral.com/#contact',

            contactType: 'customer support',

            availableLanguage: ['Turkish', 'English'],

          },

        },

        areaServed: [

          { '@type': 'Country', name: 'Turkey' },

          { '@type': 'Country', name: 'United Kingdom' },

          { '@type': 'Country', name: 'United States' },

        ],

        url: canonicalUrl,

      },

      {

        '@type': 'BreadcrumbList',

        '@id': `${canonicalUrl}#breadcrumb`,

        itemListElement: [

          {

            '@type': 'ListItem',

            position: 1,

            name: currentLang === 'en' ? 'Home' : 'Ana Sayfa',

            item: currentLang === 'en' ? 'https://www.salihmaral.com/en' : 'https://www.salihmaral.com/tr',

          },

          {

            '@type': 'ListItem',

            position: 2,

            name: currentLang === 'en' ? 'Services' : 'Hizmetler',

            item: `https://www.salihmaral.com/${currentLang === 'en' ? 'en/#services' : 'tr/#services'}`,

          },

          {

            '@type': 'ListItem',

            position: 3,

            name: metaData.title,

            item: canonicalUrl,

          },

        ],

      },

    ],

  }



  const currentFaqs = serviceFaqs[key]?.[currentLang] || []

  if (currentFaqs.length > 0) {

    serviceSchema['@graph'].push({

      '@type': 'FAQPage',

      '@id': `${canonicalUrl}#faq`,

      mainEntity: currentFaqs.map(item => ({

        '@type': 'Question',

        name: item.q,

        acceptedAnswer: {

          '@type': 'Answer',

          text: item.a,

        },

      })),

    })

  }



  return (

    <>

      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}

      />

      <ServiceDetailClient initialService={key} initialLang={currentLang} />

    </>

  )

}

