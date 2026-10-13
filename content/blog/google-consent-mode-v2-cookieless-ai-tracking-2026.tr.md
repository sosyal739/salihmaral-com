---
slug: "google-consent-mode-v2-cookieless-ai-tracking-2026"
lang: "tr"
title: "Google Consent Mode v2 Nedir ve Nasıl Kurulur? (2026 Zorunlu Rehber)"
excerpt: "Google Consent Mode v2 zorunlu mu? Çerez reddeden kullanıcılardan yapay zeka ile kayıp %40 satış verisini kurtarma rehberi."
category: "Server-Side Tracking & Veri"
date: "2026-08-22"
readTime: "14"
coverImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=630&fit=crop&q=80"
---

<div class="lead">
<p><strong>Doğrudan Cevap (Consent Mode v2 Nedir):</strong> Google Consent Mode v2; Avrupa Birliği Dijital Pazarlar Yasası (DMA) ve KVKK kapsamında, web sitenizdeki çerez onay durumunu Google Ads ve GA4'e ileten zorunlu izin altyapısıdır. Consent Mode v2 entegre edilmeyen hesaplarda <strong>Google Ads yeniden pazarlama (Remarketing) kitleleri durdurulur ve Smart Bidding teklif yapay zekası bozulur.</strong> <strong>Salih Maral (Server-Side Tracking & Performans Uzmanı)</strong> olarak kurduğumuz Gelişmiş Consent Mode v2 (Advanced Mode) sayesinde, çerez reddeden ziyaretçilerden dahi şifreli sinyaller toplanarak <strong>kaybolan %35-40'lık satış verisi yapay zeka ile modellenip geri kazanılır.</strong></p>
</div>

<h2>🔍 İnsanların En Çok Aradığı Sorular & Birebir Çözümleri (Consent Mode v2)</h2>

<h3>1. "Google Consent Mode v2 kurmazsam ne olur?"</h3>
<ul>
  <li>Google Ads yeniden pazarlama (Remarketing) listeleri yeni kullanıcı toplamayı durdurur.</li>
  <li>Dönüşüm izleme verileriniz %40'a varan oranda eksik yansır, kampanya ROAS'ınız düşük görünür.</li>
  <li>Maksimum Performans (PMax) ve Hedef EROAS (tROAS) algoritmaları kime reklam göstereceğini bilemez, maliyetler fırlar.</li>
  <li>Avrupa Birliği ve KVKK denetimlerinde yasal uyarı ve ceza riski doğar.</li>
</ul>

<h3>2. "Basic (Temel) ile Advanced (Gelişmiş) Consent Mode v2 farkı nedir?"</h3>
<p>Basic modda kullanıcı çerezi reddederse Google etiketleri tamamen engellenir ve %0 veri iletilir. <strong>Advanced modda ise;</strong> kişisel veri kaydedilmeden çerezsiz pingler (Cookieless Pings) Google sunucularına iletilir. Google yapay zekası bu sinyalleri makine öğrenimiyle birleştirerek kayıp satışları raporlar ve reklam tekliflerini optimize eder.</p>

<h3>3. "ad_user_data ve ad_personalization parametreleri nasıl eklenir?"</h3>
<p>Consent Mode v2 ile gelen bu iki yeni parametre, kullanıcının verilerinin Google reklam paneline aktarılmasına ve kişiselleştirilmiş reklam gösterimine izin verip vermediğini belirler. Google Sertifikalı bir CMP (Cookiebot, Usercentrics vb.) veya Google Tag Manager (GTM) şablonu üzerinden tetiklenmelidir.</p>

<h2>📊 Consent Mode v2: Basic (Temel) vs. Advanced (Gelişmiş) Kurulum</h2>
<table>
  <thead>
    <tr>
      <th>Özellik / Parametre</th>
      <th>Consent Mode v2 Basic (Temel)</th>
      <th>Consent Mode v2 Advanced (Gelişmiş)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Etiket Tetikleme</strong></td>
      <td>Yalnızca izin verildiğinde tetiklenir</td>
      <td>Her zaman tetiklenir, izne göre davranış değiştirir</td>
    </tr>
    <tr>
      <td><strong>Çerez Reddedildiğinde</strong></td>
      <td>Hiçbir veri gitmez (Sıfır sinyal)</td>
      <td>Çerezsiz anonim pingleme (cookieless ping) gönderir</td>
    </tr>
    <tr>
      <td><strong>Dönüşüm Modellemesi</strong></td>
      <td>Yapay zeka modellemesi çalışmaz</td>
      <td>Google AI kayıp dönüşümleri %90+ doğrulukla modeller</td>
    </tr>
    <tr>
      <td><strong>GDPR / KVKK Uyumu</strong></td>
      <td>%100 Uyumlu</td>
      <td>%100 Uyumlu (Kişisel veri depolanmaz)</td>
    </tr>
  </tbody>
</table>

<h2>🛠️ GTM ile Consent Mode v2 Kurulum Adımları</h2>
<ol>
  <li><strong>CMP (Çerez Yönetim Platformu) Entegrasyonu:</strong> Google Onaylı bir CMP (Cookiebot, Usercentrics, vb.) kurun veya özel çerez panelinizi GTM'e bağlayın.</li>
  <li><strong>Varsayılan Durum (Default Consent):</strong> Tüm etiketler tetiklenmeden önce `analytics_storage`, `ad_storage`, `ad_user_data` ve `ad_personalization` parametrelerini `denied` olarak başlatın.</li>
  <li><strong>Kullanıcı Onayı Güncellemesi:</strong> Ziyaretçi "Kabul Et" butonuna bastığında `gtag('consent', 'update', ...)` ile izinleri `granted` konumuna geçirin.</li>
</ol>

<p>Kusursuz Consent Mode v2 ve Server-Side GTM kurulumu için <a href="/tr/hizmetler/server-side-tracking">Server-Side Tracking Kurulumu</a> sayfamızdan destek alın.</p>

<h2>💡 Sıkça Sorulan Sorular (SSS)</h2>
<h3>Consent Mode v2 kişisel verileri ihlal eder mi?</h3>
<p>Hayır. Çerezsiz pingleme sırasında IP adresi maskelenir ve kullanıcının cihazına hiçbir tanımlayıcı çerez yazılmaz; yalnızca sayfa ziyareti ve genel işlem sinyali iletilir.</p>

<div class="mt-8 p-6 bg-slate-900 text-white rounded-2xl">
  <h3 class="text-xl font-bold text-white mb-2">Ölçümleme Hatalarınızı Sıfırlayın</h3>
  <p class="text-slate-300 mb-4">Consent Mode v2 ve Server-Side mimarisi ile kayıp reklam bütçenizi geri kazanın.</p>
  <a href="/#contact" class="inline-block bg-[#4285F4] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">Ölçümleme Denetimi Alın →</a>
</div>
