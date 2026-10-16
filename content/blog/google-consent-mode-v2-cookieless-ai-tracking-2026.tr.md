---
slug: "google-consent-mode-v2-cookieless-ai-tracking-2026"
lang: "tr"
title: "Google Consent Mode v2 Nedir & Nasıl Kurulur? (2026)"
excerpt: "Consent Mode nedir, Google Consent Mode v2 nasıl kurulur? GTM kurulum adımları, Basic vs Advanced farkı ve %40 kayıp dönüşüm verisini kurtarma rehberi."
category: "Server-Side Tracking & Veri"
date: "2026-10-16"
readTime: "12"
coverImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=630&fit=crop&q=80"
---

<div class="lead">
  <p><strong>Google Consent Mode v2 (İzin Modu v2)</strong>; KVKK, GDPR ve Avrupa Birliği Dijital Pazarlar Yasası (DMA) kapsamında kullanıcıların çerez onay tercihlerini (<code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code>, <code>ad_personalization</code>) Google Ads ve Google Analytics 4'e (GA4) gerçek zamanlı ileten zorunlu ölçümleme protokolüdür. Resmi Google Partner ve Server-Side Tracking uzmanı <strong>Salih Maral</strong> (17+ yıl deneyim), Gelişmiş (Advanced) Consent Mode v2 ve Server-Side GTM kurulumu sayesinde çerez reddeden ziyaretçilerden dahi kişisel veri depolamadan anonim sinyaller (cookieless pings) toplanarak <strong>kaybolan %35 ila %40'lık satış ve form dönüşüm verisinin Google yapay zekası ile modellenip geri kazanıldığını</strong> vurguluyor.</p>
</div>

<h2>🔍 Consent Mode Nedir? Neden 2026'da Zorunludur?</h2>
<p>Web sitenizdeki çerez bandında (Cookie Banner) ziyaretçilerin ortalama %30 ila %50'si "Reddet" butonuna basar veya banner'ı görmezden gelir. Eğer sitenizde doğru yapılandırılmış bir <strong>Google Consent Mode v2</strong> altyapısı yoksa şu 4 kritik kayıp yaşanır:</p>

<ul>
  <li><strong>Remarketing (Yeniden Pazarlama) Kitleleri Durur:</strong> Google Ads ve YouTube yeniden pazarlama listeleriniz yeni kullanıcı toplamayı durdurur; sepeti terk eden veya B2B teklif sayfanızı inceleyen karar vericilere tekrar reklam gösteremezsiniz.</li>
  <li><strong>%40'a Varan Dönüşüm Körlüğü:</strong> Çerez izni vermeyen ama sitenizden satın alma yapan veya iletişim formu dolduran müşteriler Google Ads paneline yansımaz; gerçekte karlı olan kampanyalarınız zarar ediyormuş gibi görünür.</li>
  <li><strong>Smart Bidding (tROAS / tCPA) Algoritması Bozulur:</strong> Eksik veriyle beslenen Maksimum Performans (PMax) ve Arama Ağı akıllı teklif stratejileri yanlış açık artırmalara teklif verir ve tıklama başı maliyetleriniz (CPC) yükselir.</li>
  <li><strong>KVKK ve GDPR Uyumsuzluk Riski:</strong> Kullanıcı onay vermeden çalışan reklam etiketleri ciddi hukuki yaptırım riski doğurur.</li>
</ul>

<h2>🔑 Consent Mode v2 İle Gelen 4 Temel İzin Parametresi</h2>
<p>Eski Consent Mode (v1) yalnızca iki parametreyi kontrol ederken, <strong>Consent Mode v2</strong> reklam hedeflemesi ve kullanıcı verisi paylaşımı için iki yeni zorunlu parametre eklemiştir:</p>

<ol>
  <li><code>ad_storage</code>: Reklam amaçlı çerezlerin (örneğin <code>_gcl_au</code>) tarayıcıda saklanmasına izin verilip verilmediğini belirler.</li>
  <li><code>analytics_storage</code>: Google Analytics 4 (GA4) istatistik çerezlerinin (<code>_ga</code>) saklanma iznini kontrol eder.</li>
  <li><code>ad_user_data</code> <strong>(v2 ile Yeni):</strong> Kullanıcı verilerinin (Gelişmiş Dönüşümler / e-posta hash verisi dahil) reklam ölçümü amacıyla Google'a gönderilmesine onay verilip verilmediğini bildirir.</li>
  <li><code>ad_personalization</code> <strong>(v2 ile Yeni):</strong> Kullanıcının yeniden pazarlama (Remarketing) ve kişiselleştirilmiş reklam kitlelerine dahil edilip edilemeyeceğini belirler.</li>
</ol>

<h2>📊 Tablo 1: Consent Mode v2 Basic (Temel) vs. Advanced (Gelişmiş) Karşılaştırması</h2>
<p>Google Consent Mode v2 iki farklı modda uygulanabilir. Performans pazarlamasında veri kaybını önlemek için <strong>Advanced (Gelişmiş) Mod</strong> standart olarak tercih edilmelidir:</p>

<table>
  <thead>
    <tr>
      <th>Özellik / Kriter</th>
      <th>Basic (Temel) Consent Mode v2</th>
      <th>Advanced (Gelişmiş) Consent Mode v2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Etiketlerin Çalışma Zamanı</strong></td>
      <td>Etiketler kullanıcı "Kabul Et" diyene kadar tamamen engellenir</td>
      <td>Etiketler sayfa açılışında yüklenir, çerez iznine göre davranış değiştirir</td>
    </tr>
    <tr>
      <td><strong>Çerez Reddedildiğinde (Denied)</strong></td>
      <td>Google'a hiçbir sinyal gitmez (%100 veri kaybı)</td>
      <td>Çerez yazmadan anonim pingleme (Cookieless Ping) gönderilir</td>
    </tr>
    <tr>
      <td><strong>Yapay Zeka Dönüşüm Modellemesi</strong></td>
      <td>Kısıtlı / Genel tahminleme</td>
      <td>Sitenize özel davranışsal ve dönüşüm modellemesi (%90+ doğruluk)</td>
    </tr>
    <tr>
      <td><strong>Smart Bidding (tROAS/tCPA) Etkisi</strong></td>
      <td>Veri hacmi düştüğü için algoritma yavaş öğrenir</td>
      <td>Modellenen dönüşümlerle algoritma tam kapasite optimize olur</td>
    </tr>
    <tr>
      <td><strong>KVKK &amp; GDPR Uyumu</strong></td>
      <td>%100 Uyumlu</td>
      <td>%100 Uyumlu (Cihaza çerez yazılmaz, IP anonimleştirilir)</td>
    </tr>
  </tbody>
</table>

<h2>🛠️ Adım Adım Google Tag Manager (GTM) ile Consent Mode v2 Kurulumu</h2>

<h3>Adım 1: Varsayılan İzin Durumunu (Consent Default) Tanımlayın</h3>
<p>Sitenizde herhangi bir Google etiketi tetiklenmeden önce (<code>Consent Initialization - All Pages</code> aşamasında) tüm izinlerin varsayılan olarak <code>denied</code> (reddedildi) durumunda başlatılması ve kullanıcıdan karar gelene kadar 500 milisaniye beklenmesi gerekir:</p>

<pre><code class="language-javascript">window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);</code></pre>

<p>Buradaki <code>url_passthrough: true</code> parametresi çok kritiktir: Kullanıcı çerezleri reddetse bile reklam tıklamasındaki <code>GCLID</code> parametresinin sayfa URL'leri arasında taşınmasını sağlayarak dönüşüm doğruluğunu korur.</p>

<h3>Adım 2: Kullanıcı Onay Verdiğinde Güncelleme (Consent Update)</h3>
<p>Ziyaretçi çerez banner'ında "Tümünü Kabul Et" butonuna tıkladığında CMP (Cookiebot, Usercentrics veya özel çerez modülünüz) aşağıdaki güncelleme komutunu tetikler:</p>

<pre><code class="language-javascript">gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
});</code></pre>

<h3>Adım 3: GTM Consent Overview (İzin Genel Bakışı) Kontrolü</h3>
<p>Google Tag Manager panelinde <strong>Admin &rarr; Container Settings &rarr; Enable consent overview</strong> seçeneğini aktif edin. Tüm Google Ads, GA4, Meta Pixel ve LinkedIn Insight Tag etiketlerinizin izin gereksinimlerini (Built-In Consent Checks) doğrulayın ve Tag Assistant (Preview) modunda hem <code>denied</code> hem de <code>granted</code> durumlarında<code>gcs</code> / <code>gcd</code> parametrelerinin doğru iletildiğini test edin.</p>

<blockquote>
  <p>"Consent Mode v2'yi Server-Side GTM (sGTM) ve Gelişmiş Dönüşümler (Enhanced Conversions) ile birleştirdiğinizde, hem %100 KVKK/GDPR uyumu sağlarsınız hem de rakiplerinizin çerez engellerine kaybettiği %40'lık dönüşüm verisini Google Ads algoritmanıza geri kazandırırsınız." — <strong>Salih Maral, Resmi Google Partner</strong></p>
</blockquote>

<h2>❓ Sıkça Sorulan Sorular (Consent Mode Nedir &amp; Consent Mode v2)</h2>

<p><strong>Consent Mode nedir ve ne işe yarar?</strong><br>
Google Consent Mode (İzin Modu), web sitesi ziyaretçilerinin çerez onay tercihlerini Google etiketlerine bildiren bir API standartıdır. Kullanıcı çerezi kabul ettiğinde standart ölçümleme yapar; reddettiğinde ise tarayıcıya çerez bırakmadan anonim sinyaller göndererek Google yapay zekasının kayıp dönüşümleri modellemesini sağlar.</p>

<p><strong>Google Consent Mode v2 zorunlu mu?</strong><br>
Evet. Google Ads ve GA4 kullanan, özellikle Avrupa Ekonomik Alanı (EEA), İngiltere veya KVKK kapsamında trafik alan tüm web siteleri için yeniden pazarlama (Remarketing) listelerinin ve akıllı teklif algoritmalarının çalışmaya devam etmesi adına Consent Mode v2 zorunludur.</p>

<p><strong>Advanced Consent Mode v2 kişisel verileri ihlal eder mi?</strong><br>
Hayır. Çerez reddedildiğinde gönderilen "cookieless ping" sinyallerinde kullanıcının cihazına hiçbir tanımlayıcı çerez kaydedilmez ve IP adresi saklanmaz; yalnızca zaman damgası, yönlendiren sayfa ve tarayıcı türü gibi anonim üst veriler iletilir.</p>

<p><strong>Consent Mode v2 kurulumunun doğru çalıştığını nasıl anlarım?</strong><br>
Google Tag Manager Preview (Tag Assistant) modunda sitenizi açıp "Consent" sekmesine tıkladığınızda, sayfa ilk açıldığında 4 parametrenin (<code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code>, <code>ad_personalization</code>) <code>Denied</code>, çerez onayından sonra ise <code>Granted</code> olarak güncellendiğini görebilirsiniz. Ayrıca Google Ads &rarr; Dönüşümler &rarr; Teşhis (Diagnostics) sekmesinde "İzin Modu Etkin" onayını kontrol edebilirsiniz.</p>

<h2>🚀 Sonuç: Veri Kaybını Durdurun, ROAS'ınızı Koruyun</h2>
<p>Eksik veya hatalı kurulmuş bir çerez altyapısı, her ay reklam bütçenizin önemli bir kısmının körlemesine harcanmasına yol açar. İşletmeniz için anahtar teslim <strong>Google Consent Mode v2, Server-Side GTM ve Meta CAPI</strong> kurulumu talep etmek isterseniz <a href="/#contact">online iletişim formumuzdan</a> veya <a href="mailto:info@salihmaral.com">info@salihmaral.com</a> adresinden bize ulaşabilirsiniz — <strong>24 saat içinde garantili geri dönüş</strong> sağlıyoruz.</p>

<div class="highlight-box">
  <h4>📚 Devamını Okuyun &amp; İlgili Rehberler</h4>
  <ul>
    <li><a href="/blog/server-side-gtm-meta-capi-setup-2026">Server-Side GTM ve Meta Conversions API (CAPI) Kurulum Rehberi 2026</a></li>
    <li><a href="/blog/ga4-custom-events-funnels">Google Tag Manager (GTM) &amp; GA4 Funnel Kurulumu 2026</a></li>
    <li><a href="/blog/google-ads-roi-tracking">Google Reklam ROI &amp; ROAS Hesaplama ve Takip Rehberi</a></li>
    <li><a href="/tr/hizmetler/server-side-tracking">Salih Maral — Server-Side Tracking &amp; Consent Mode v2 Hizmeti</a></li>
  </ul>
</div>
