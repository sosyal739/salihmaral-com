---
slug: "google-ads-roi-tracking"
lang: "tr"
title: "Google Reklam ROI & ROAS Hesaplama ve Takip Rehberi"
excerpt: "Google reklam ROI ve ROAS nasıl hesaplanır? Başabaş ROAS formülü, gelişmiş dönüşüm takibi (GTM & sGTM) ve karlılığı katlayan 2026 optimizasyon rehberi."
category: "Google Ads"
date: "2026-10-17"
readTime: "10"
coverImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop&q=80"
---

          <div class="lead">
            <p><strong>Google reklam ROI (Yatırım Getirisi)</strong>, reklam kampanyalarınızdan elde ettiğiniz <em>net karın</em> toplam reklam ve operasyon maliyetinize oranını ölçerken; <strong>ROAS (Reklam Harcaması Getirisi)</strong> harcanan her 1 TL reklam bütçesine karşılık üretilen brüt ciroyu gösterir. Resmi Google Partner ve performans pazarlama uzmanı <strong>Salih Maral</strong> (17+ yıl deneyim), Google Ads bütçenizi boşa harcamadan gerçek net karlılığı ölçebilmeniz için ROI ve Başabaş ROAS (Break-Even ROAS) hesaplama formüllerini, Google Tag Manager (GTM) ile Gelişmiş Dönüşümler (Enhanced Conversions) kurulumunu ve değer odaklı teklif (tROAS) stratejilerini adım adım paylaşıyor.</p>
          </div>

          <h2>🧮 Google Reklam ROI ve ROAS Arasındaki Fark Nedir? (Formüller)</h2>
          <p>Birçok işletme ve e-ticaret markası Google Ads panelinde gördüğü yüksek ROAS rakamına bakarak kar ettiğini düşünür; ancak ürün maliyeti, kargo, ödeme komisyonu ve iade oranları düşüldüğünde gerçek <strong>Google reklam ROI</strong> değeri negatif olabilir. Sağlıklı bir büyüme için her iki metriğin formülünü ve farkını net olarak bilmelisiniz:</p>

          <ul>
            <li><strong>ROAS (Return on Ad Spend) Formülü:</strong> <code>ROAS = Reklamdan Gelen Toplam Ciro / Toplam Reklam Harcaması</code><br>Örneğin: 50.000 TL reklam harcayıp 250.000 TL ciro elde ettiyseniz ROAS değeriniz <strong>5.0x (%500)</strong> olur.</li>
            <li><strong>ROI (Return on Investment - Net Yatırım Getirisi) Formülü:</strong> <code>ROI = [(Reklamdan Gelen Net Kar - Toplam Reklam Maliyeti) / Toplam Reklam Maliyeti] x 100</code><br>Örneğin: 250.000 TL cironun brüt kar marjı %40 (100.000 TL) ve reklam maliyetiniz 50.000 TL ise, net karınız 50.000 TL ve gerçek <strong>Google reklam ROI oranınız %100</strong> olur.</li>
            <li><strong>Başabaş ROAS (Break-Even ROAS) Formülü:</strong> <code>Başabaş ROAS = 1 / Brüt Kar Marjı (%)</code><br>Örneğin brüt kar marjınız %25 (0.25) ise başabaş noktanız <code>1 / 0.25 = 4.0x ROAS</code> değeridir. 4.0x altındaki her kampanya ciro üretse bile işletmenize para kaybettirir.</li>
          </ul>

          <blockquote>
            <p>"Dönüşüm takibi ve katkı payı (contribution margin) hesabı yapmadan Google Ads reklamı vermek, karanlıkta farları yakmadan otoyolda hız yapmaya benzer. Panelde ciro görürsünüz ama ay sonunda kasada neden net kar kalmadığını anlayamazsınız." — Salih Maral, Resmi Google Partner (17+ Yıl Deneyim)</p>
          </blockquote>

          <h2>📊 Tablo 1: Google Reklam ROI, ROAS ve Kar Marjı Kıyaslama Matrisi (2026)</h2>
          <p>Farklı kar marjlarına sahip işletmelerin Google Ads'te zarar etmemesi için ulaşması gereken minimum Başabaş ROAS ve karlı ölçekleme (scaling) hedefleri aşağıdadır:</p>

          <table>
            <thead>
              <tr>
                <th>İş Modeli / Sektör</th>
                <th>Ortalama Brüt Kar Marjı</th>
                <th>Başabaş ROAS (Break-Even)</th>
                <th>Hedeflenen Karlı ROAS</th>
                <th>Önerilen Google Ads Teklif Stratejisi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Elektronik &amp; Düşük Marjlı E-Ticaret</strong></td>
                <td>%15 – %20</td>
                <td>5.0x – 6.6x</td>
                <td>8.0x+</td>
                <td>Hedef ROAS (tROAS) + Negatif Marj Filtresi</td>
              </tr>
              <tr>
                <td><strong>Moda, Kozmetik &amp; D2C Markalar</strong></td>
                <td>%45 – %60</td>
                <td>1.7x – 2.2x</td>
                <td>4.0x – 5.5x</td>
                <td>Dönüşüm Değerini Artırma (tROAS) + PMax</td>
              </tr>
              <tr>
                <td><strong>B2B Üretim, Yazılım &amp; Danışmanlık</strong></td>
                <td>%60 – %80</td>
                <td>1.25x – 1.65x</td>
                <td>5.0x – 10.0x+ (LTV Bazlı)</td>
                <td>Çevrimdışı Dönüşüm (OCT) + Hedef EBM (tCPA)</td>
              </tr>
            </tbody>
          </table>

          <h2>📊 Tablo 2: Dönüşüm Takibinin Google Reklam ROI Üzerindeki Etkisi</h2>
          <p>Standart (eksik) kurulum ile sunucu taraflı ve değer odaklı optimize edilmiş Google Ads hesaplarının 2026 performans karşılaştırması:</p>

          <table>
            <thead>
              <tr>
                <th>Performans Metriği</th>
                <th>Dönüşüm Takibi Olmayan / Standart Hesap</th>
                <th>Gelişmiş Dönüşüm + sGTM Optimize Hesap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tıklama Başı Maliyet (CPC)</strong></td>
                <td>Yüksek (Algoritma kör teklif verir)</td>
                <td>%20 – %35 Daha Düşük</td>
              </tr>
              <tr>
                <td><strong>Ölçümlenen Veri Doğruluğu</strong></td>
                <td>%65 – %75 (iOS/AdBlocker kaybı yüksek)</td>
                <td>%95 – %99 (Enhanced Conversions &amp; sGTM)</td>
              </tr>
              <tr>
                <td><strong>Elde Edilen ROAS</strong></td>
                <td>Belirsiz / Düşük (1.5x – 2.2x)</td>
                <td>Yüksek ve Ölçeklenebilir (4.5x – 7.0x+)</td>
              </tr>
              <tr>
                <td><strong>Bütçe Dağılımı</strong></td>
                <td>Bilgi amaçlı ve dönüşümsüz aramalara dağılır</td>
                <td>Yalnızca net kar ve nitelikli form getiren aramalara odaklanır</td>
              </tr>
            </tbody>
          </table>

          <h2>🛠️ Adım Adım Google Reklam ROI Optimizasyonu Nasıl Yapılır?</h2>
          <ol>
            <li><strong>Google Tag Manager (GTM) ile Dinamik Değer Aktarımı:</strong> E-ticaret sitelerinde her siparişin gerçek sepet tutarını (<code>value</code> ve <code>currency</code>), B2B sitelerde ise her form adımının potansiyel müşteri değerini dataLayer üzerinden GTM ile Google Ads'e dinamik olarak iletin.</li>
            <li><strong>Gelişmiş Dönüşümler (Enhanced Conversions) Aktivasyonu:</strong> Form dolduran veya satın alma yapan kullanıcıların e-posta verilerini SHA-256 ile güvenli şekilde hash'leyerek Google'a gönderin. Bu adım, çerez kısıtlamaları nedeniyle kaybolan dönüşümlerin %15 ila %25'ini geri kazandırır.</li>
            <li><strong>B2B İçin Çevrimdışı Dönüşüm İzleme (Offline Conversion Tracking - OCT):</strong> B2B işletmelerde her form gerçek satış değildir. İletişim formundan gelen taleplerin hangilerinin CRM'de teklife ve faturaya dönüştüğünü <code>GCLID</code> ile Google Ads'e geri yükleyin.</li>
            <li><strong>Değer Odaklı Teklif Verme (Value-Based Bidding - tROAS):</strong> Kampanyalarınızı yalnızca "tıklama" veya "dönüşüm sayısı" için değil, doğrudan "dönüşüm değeri (ciro ve kar marjı)" odaklı optimize edin.</li>
            <li><strong>Haftalık Negatif Anahtar Kelime ve Arama Terimi Temizliği:</strong> Bütçe tüketen ancak satış veya nitelikli B2B form getirmeyen aramaları her hafta negatif listelerinize ekleyerek bütçe sızıntısını sıfırlayın.</li>
          </ol>

          <div class="highlight-box success">
            <h4>💡 Uzman Tavsiyesi (Salih Maral)</h4>
            <p>E-ticaret sitelerinde sadece "Satın Alma" (Purchase) dönüşümünü değil, huninin ara adımları olan "Sepete Ekle" ve "Ödeme Başlangıcı" adımlarını da <em>İkincil (Secondary) Dönüşüm</em> olarak takip edin. B2B sitelerde ise düşük kaliteli trafiği elemek için çalışma kriterlerinize uymayan bütçe altı talepleri birincil dönüşüm hunisinden hariç tutun.</p>
          </div>

          <h2>❓ Sıkça Sorulan Sorular (Google Reklam ROI &amp; ROAS)</h2>

          <p><strong>Google reklam ROI nasıl hesaplanır?</strong><br>
          Google reklam ROI hesaplaması için reklamdan elde edilen net kardan (ürün maliyeti, kargo ve vergiler düşüldükten sonra kalan tutar) toplam reklam maliyeti çıkarılır, çıkan sonuç tekrar toplam reklam maliyetine bölünüp 100 ile çarpılır: <code>ROI = [(Net Kar - Reklam Maliyeti) / Reklam Maliyeti] x 100</code>.</p>

          <p><strong>Google Ads'te iyi bir ROAS ve ROI oranı kaç olmalıdır?</strong><br>
          İdeal ROAS işletmenizin brüt kar marjına göre değişir. Genel e-ticaret ortalamasında 4.0x (%400) ve üzeri ROAS başarılı kabul edilirken, düşük marjlı sektörlerde 6.0x+, yüksek marjlı B2B ve yazılım sektörlerinde ise LTV bazında %300+ net ROI hedeflenir.</p>

          <p><strong>Google Ads dönüşümleri neden GA4 veya CRM verileriyle birebir tutmuyor?</strong><br>
          Google Ads dönüşümleri tıklama tarihine (click-time attribution) ve 30/90 günlük ilişkilendirme penceresine göre raporlarken, GA4 ve CRM sistemleri dönüşümün gerçekleştiği güne göre raporlama yapar. Ayrıca tarayıcı çerez engelleri nedeniyle oluşabilecek farkları kapatmak için Gelişmiş Dönüşümler (Enhanced Conversions) ve Server-Side GTM kullanılmalıdır.</p>

          <h2>🚀 Sonuç: Bütçenizi Değil, Net Karlılığınızı Büyütün</h2>
          <p>Yüksek Google reklam ROI elde etmek bütçeyi rastgele artırmakla değil, mevcut bütçeyi doğru dönüşüm verisiyle yönetmekle başlar. Aylık minimum 25.000 TL reklam bütçesine sahip B2B veya e-ticaret işletmeniz için ücretsiz hesap analizi talep etmek isterseniz <a href="/#contact">online iletişim formumuzdan</a> veya <a href="mailto:info@salihmaral.com">info@salihmaral.com</a> üzerinden bize ulaşabilirsiniz — <strong>24 saat içinde garantili yazılı analizle geri dönüş</strong> sağlıyoruz.</p>

          <div class="highlight-box">
            <h4>📚 Devamını Okuyun</h4>
            <ul>
              <li><a href="/blog/e-ticaret-roas-artirma-ve-reklam-butcesi-olcekleme-2026">E-Ticarette ROAS Artırma ve Reklam Bütçesi Ölçekleme Rehberi 2026</a></li>
              <li><a href="/blog/b2b-google-ads-kurumsal-lead-ve-musteri-kazanma-rehberi-2026">B2B Google Ads Stratejisi: Kurumsal Lead ve Müşteri Kazanma Rehberi 2026</a></li>
              <li><a href="/blog/ga4-custom-events-funnels">Google Tag Manager (GTM) &amp; GA4 Funnel Kurulumu 2026</a></li>
              <li><a href="/blog/server-side-gtm-meta-capi-setup-2026">Server-Side GTM ve Meta CAPI Kurulum Rehberi 2026</a></li>
              <li><a href="/tr/hizmetler/google-ads">Salih Maral Google Ads Yönetimi Hizmetleri</a></li>
            </ul>
          </div>
