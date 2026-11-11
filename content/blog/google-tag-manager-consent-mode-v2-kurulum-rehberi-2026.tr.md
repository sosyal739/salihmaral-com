---
slug: "google-tag-manager-consent-mode-v2-kurulum-rehberi-2026"
lang: "tr"
title: "GTM ile Google Consent Mode v2 Kurulum Rehberi (2026)"
excerpt: "Google Tag Manager (GTM) üzerinden Google Consent Mode v2 (Gelişmiş Mod) adım adım kurulumu: ad_user_data, ad_personalization ve veri kaybı önleme."
category: "Veri & Analitik"
date: "2026-11-11"
readTime: "11"
coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80"
---

<div class="lead">
<p><strong>Doğrudan Cevap (Princeton GEO Özeti):</strong> <strong>Google Consent Mode v2 (İzin Modu v2)</strong>, web sitenizdeki çerez banner'ı (CMP) kararlarını Google Tag Manager (GTM) üzerinden Google Ads ve GA4 etiketlerine gerçek zamanlı ileten zorunlu protokoldür. Klasik `ad_storage` ve `analytics_storage` sinyallerine ek olarak <strong>`ad_user_data`</strong> ve <strong>`ad_personalization`</strong> parametrelerini zorunlu kılar. Kurulumda <strong>Basic Mode (Temel Mod)</strong> yerine <strong>Advanced Mode (Gelişmiş Mod)</strong> tercih edildiğinde, çerezi reddeden kullanıcılardan kişisel tanımlayıcı içermeyen (cookieless) anonim ping sinyalleri alınır ve Google'ın yapay zeka dönüşüm modellemesiyle <strong>%65'e varan dönüşüm verisi kaybı geri kazanılır</strong>.</p>
</div>

<h2>📊 Consent Mode v2 Parametreleri ve GTM Tetikleme Tablosu (2026)</h2>

<p>Kavramsal çerçevesini <a href="/blog/google-consent-mode-v2-cookieless-ai-tracking-2026">Google Consent Mode v2 ve Çerezsiz AI Takip</a> yazımızda anlattığımız sistemin, Google Tag Manager (GTM) konteynerinizde çalışması gereken 4 zorunlu sinyal yapısı şunlardır:</p>

<table>
  <thead>
    <tr>
      <th>Consent Mode v2 Parametresi</th>
      <th>Varsayılan Durum (Consent Initialization)</th>
      <th>Kabul Sonrası (`consent_update`)</th>
      <th>Etkilediği Platform &amp; Özellik</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><code>ad_storage</code></strong></td>
      <td><code>denied</code> (Reddedildi)</td>
      <td><code>granted</code> (İzin Verildi)</td>
      <td>Google Ads dönüşüm çerezleri (`_gcl_au`)</td>
    </tr>
    <tr>
      <td><strong><code>ad_user_data</code> (v2 Yeni)</strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>Gelişmiş Dönüşümler (Enhanced Conversions) &amp; kullanıcı verisi aktarımı</td>
    </tr>
    <tr>
      <td><strong><code>ad_personalization</code> (v2 Yeni)</strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>Google Ads Yeniden Pazarlama (Remarketing) &amp; PMax kitle listeleri</td>
    </tr>
    <tr>
      <td><strong><code>analytics_storage</code></strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>Google Analytics 4 (`_ga`) oturum ve davranış çerezleri</td>
    </tr>
  </tbody>
</table>

<h2>🛠️ Google Tag Manager (GTM) Üzerinde 4 Adımda Kurulum</h2>

<h3>Adım 1: Konteynerda "Consent Overview" (İzin Genel Bakışı) Özelliğini Açın</h3>
<p>Google Tag Manager panelinizde <em>Yönetici (Admin) → Konteyner Ayarları (Container Settings)</em> menüsüne gidin ve <strong>"Enable consent overview" (İzin genel bakışını etkinleştir)</strong> kutucuğunu işaretleyip kaydedin. Bu özellik, hangi etiketlerin yerleşik izin kontrolüne (Built-in Consent Checks) sahip olduğunu tek ekranda görmenizi sağlar.</p>

<h3>Adım 2: CMP Şablonunu `Consent Initialization - All Pages` Tetikleyicisine Bağlayın</h3>
<p>Cookiebot, Usercentrics, Complianz veya özel CMP şablonunuzu <code>Page View</code> (Sayfa Görüntüleme) yerine mutlaka <strong><code>Consent Initialization - All Pages</code></strong> tetikleyicisiyle çalıştırın. Böylece Google Ads ve GA4 etiketleri ateşlenmeden milisaniyeler önce varsayılan (<code>default: denied</code>) durumu tanımlanır.</p>

<h3>Adım 3: Gelişmiş Mod (Advanced Mode) ve URL Passthrough Ayarı</h3>
<p>Çerez reddedildiğinde reklam tıklama kimliğinin (`gclid`) sayfa geçişlerinde kaybolmaması için CMP şablonunuzda <strong><code>url_passthrough: true</code></strong> ve <strong><code>ads_data_redaction: true</code></strong> seçeneklerini aktif edin. Bu sayede çerez yazılmasa bile URL parametresi üzerinden anonim dönüşüm modellemesi devam eder.</p>

<h3>Adım 4: Google Tag Assistant ve GTM Preview ile Doğrulama</h3>
<p>GTM Önizleme (Preview) modunu açtığınızda sol menüdeki <strong>Consent</strong> sekmesini kontrol edin:</p>
<ul>
  <li>Sayfa ilk açıldığında (Banner'a tıklanmadan önce): 4 parametrenin tamamı <code>Denied</code> olmalı, ancak GA4 ve Google Ads etiketleri anonim sinyal (`gcs=G100`) göndermelidir.</li>
  <li>Banner'da "Tümünü Kabul Et" tıklandığında: <code>Consent Update</code> olayı tetiklenmeli ve parametreler <code>Granted</code> (`gcs=G111`) durumuna geçmelidir.</li>
</ul>

<h2>🚀 Sunucu Taraflı (Server-Side GTM) ile Birleştirerek %100 Veri Doğruluğuna Ulaşın</h2>

<p>Consent Mode v2'yi yalnızca tarayıcı (Client-Side) tarafında bırakmak, reklam engelleyiciler (AdBlocker) ve Safari ITP kısıtlamaları nedeniyle hala %15–20 veri kaybına yol açabilir. En yüksek ROAS ve dönüşüm doğruluğu için <a href="/blog/server-side-gtm-meta-capi-setup-2026">Server-Side GTM ve Meta CAPI Kurulumu</a> ile <a href="/tr/hizmetler/google-ads">Kurumsal Google Ads Yönetimi</a> süreçlerimizi entegre çalıştırıyoruz.</p>

<h2>❓ Sıkça Sorulan Sorular (SSS)</h2>

<h3>Google Consent Mode v2 kurulmazsa Google Ads hesabında ne olur?</h3>
<p>Avrupa Ekonomik Alanı (AEA), İngiltere ve Türkiye'den Avrupa'ya satış yapan e-ticaret/sağlık turizmi reklamverenlerinde <code>ad_user_data</code> ve <code>ad_personalization</code> sinyalleri gelmediğinde Google Ads yeniden pazarlama (Remarketing) listeleri durur ve Akıllı Teklif (tROAS / tCPA) algoritmaları dönüşüm verisi alamadığı için tıklama maliyetleri hızla yükselir.</p>

<h3>Basic Mode ile Advanced Mode arasındaki fark nedir?</h3>
<p><strong>Basic Mode</strong>, kullanıcı çerezi kabul edene kadar Google etiketlerini tamamen engeller (0 sinyal gider). <strong>Advanced Mode</strong> ise çerez reddedilse bile tarayıcıya çerez yazmadan anonim ping göndererek Google AI'ın kayıp dönüşümleri istatistiksel olarak modellemesini sağlar.</p>
