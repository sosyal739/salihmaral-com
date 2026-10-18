---
slug: "ga4-custom-events-funnels"
lang: "tr"
title: "Google Tag Manager (GTM) & GA4 Funnel Kurulumu 2026"
excerpt: "Google Tag Manager (GTM) ve GA4 ile özel dönüşüm hunisi (funnel) nasıl kurulur? DataLayer, custom event ve drop-off analiziyle dönüşüm oranlarınızı artırın."
category: "Tracking"
date: "2026-10-17"
readTime: "12"
coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80"
---

          <div class="lead">
            <p><strong>Google Tag Manager (GTM) funnel kurulumu</strong>, web sitenizdeki çok adımlı form geçişlerini, sepet adımlarını ve mikro etkileşimleri <code>dataLayer.push</code> tetikleyicileriyle yakalayıp Google Analytics 4 (GA4) Keşifler (Funnel Exploration) raporuna aktarma sürecidir. Resmi Google Partner ve performans pazarlama uzmanı <strong>Salih Maral</strong> (17+ yıl deneyim), standart sayfa görüntüleme ölçümlemesinin göremediği kullanıcı kayıp noktalarını (drop-off) tespit etmek için GTM özel etkinliklerinin (custom events) ve GA4 özel boyutlarının (custom dimensions) nasıl adım adım yapılandırılacağını bu kapsamlı rehberde paylaşıyor.</p>
          </div>

          <h2>🔍 GA4'te Etkinlik Yapısı: Standart ve Özel Etkinliklerin Gücü</h2>
          <p>Google Analytics 4 (GA4), Universal Analytics'in aksine tamamen <strong>etkinlik tabanlı (event-based)</strong> bir veri modeline dayanır. Bu modelde kullanıcının gerçekleştirdiği her etkileşim (bir sayfa ziyareti, bir butona tıklama, bir form doldurma veya bir satın alma) bir etkinlik olarak kaydedilir. GA4 varsayılan olarak dört farklı etkinlik kategorisine sahiptir:</p>
          
          <ul>
            <li><strong>Otomatik Olarak Toplanan Etkinlikler:</strong> Sitenize GA4 kodunu eklediğiniz anda hiçbir ek ayar yapmadan toplanan verilerdir (örn: <code>first_visit</code>, <code>session_start</code>, <code>user_engagement</code>).</li>
            <li><strong>Geliştirilmiş Ölçüm (Enhanced Measurement) Etkinlikleri:</strong> GA4 yönetim panelinden tek bir tıklamayla aktif edilebilen, sayfa kaydırma (scroll), site içi arama (view_search_results), giden bağlantı tıklamaları (click), dosya indirmeleri (file_download) ve video etkileşimleridir.</li>
            <li><strong>Önerilen Etkinlikler (Recommended Events):</strong> Google'ın belirli sektörler (özellikle e-ticaret ve seyahat) için standart isimler altında tanımladığı ve algoritmaların anlamlandırabilmesi için bu isimlerle kurulmasını önerdiği etkinliklerdir (örn: <code>view_item</code>, <code>add_to_cart</code>, <code>begin_checkout</code>, <code>purchase</code>).</li>
            <li><strong>Özel Etkinlikler (Custom Events):</strong> İlk üç kategoriye girmeyen, işletmenize veya web sitenizin özel kurgusuna özgü kullanıcı hareketlerini izlemek için sizin tanımladığınız etkinliklerdir.</li>
          </ul>

          <p>Geliştirilmiş ölçüm özellikleri ilk aşamada faydalı görünse de, büyük ölçekli ve yüksek dönüşüm hedefleyen web siteleri için yetersiz kalır. Örneğin, standart sayfa kaydırma (scroll) etkinliği sadece kullanıcı sayfanın %90'ına ulaştığında tetiklenir. Ancak siz bir landing page üzerinde kullanıcıların %25, %50 ve %75 kaydırma derinliklerindeki davranışlarını veya form alanında hangi adımda takıldıklarını öğrenmek istiyorsanız, özel etkinlikler (custom events) kurgulamak zorundasınız.</p>

          <h3>📊 Tablo 1: GA4 Standart Ölçümleme vs. Özel Etkinlik Ölçümlemesi</h3>
          <table>
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Standart ve Geliştirilmiş Ölçümleme</th>
                <th>Özel Etkinlik (Custom Event) + GTM</th>
                <th>Performansa Doğrudan Etkisi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Kurulum Kolaylığı</strong></td>
                <td>Ek kod veya ayar gerektirmez, panelden tek tuşla açılır.</td>
                <td>GTM veya dataLayer entegrasyonu gerektirir. Teknik bilgi şarttır.</td>
                <td>Özel kurgular için çaba gerektirse de doğru kararlar için şarttır.</td>
              </tr>
              <tr>
                <td><strong>Veri Derinliği</strong></td>
                <td>Sadece genel sayfa izleme ve %90 kaydırma gibi sığ veriler verir.</td>
                <td>İstediğiniz her tıklamayı, formu ve dinamik adımı takip edebilirsiniz.</td>
                <td>Hassas kullanıcı kitleleri oluşturarak hedefleme maliyetlerinizi düşürür.</td>
              </tr>
              <tr>
                <td><strong>Parametre Esnekliği</strong></td>
                <td>Google'ın belirlediği sınırlı parametreleri toplar.</td>
                <td>Kendi özel boyutlarınızı (custom parameters) tanımlayabilirsiniz.</td>
                <td>Müşteri segmentasyonunu ve reklam optimizasyonunu detaylandırır.</td>
              </tr>
              <tr>
                <td><strong>Hunilerdeki Rolü</strong></td>
                <td>Yalnızca standart sayfa geçişlerini huniye ekleyebilirsiniz.</td>
                <td>Huniye mikro etkileşimleri (örn: form adımları) ekleyebilirsiniz.</td>
                <td>Kullanıcı kayıp noktalarını (drop-off) mikroskobik düzeyde gösterir.</td>
              </tr>
            </tbody>
          </table>

          <h2>🛠️ Adım Adım GTM ile GA4 Özel Etkinlik (Custom Event) Kurulumu</h2>
          <p>GA4'te özel etkinlik kurmanın en profesyonel ve esnek yolu <strong>Google Tag Manager (GTM)</strong> kullanmaktır. Kod karmaşasını önlemek ve etiketleri tek bir merkezden yönetmek için GTM altyapısını kurmanız gerekir. Aşağıdaki adımları sırasıyla uygulayarak sitenize özel bir etkinlik kurabilirsiniz:</p>

          <h3>Adım 1: Sitenizin Kod Yapısına dataLayer Eklenmesi</h3>
          <p>Kullanıcının gerçekleştirdiği özel bir eylemi (örneğin dinamik bir teklif formunun 2. adımına geçişi) izlemek için web geliştiricinizin sitenin kaynak koduna veya ilgili butonun tıklama olayına bir <code>dataLayer.push</code> kodu yerleştirmesini sağlamalısınız. Örnek kod yapısı şu şekilde olmalıdır:</p>

<pre><code class="language-javascript">
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'lead_form_adimlari',
  'form_adi': 'hizmet_teklif_formu',
  'form_adimi': 'adim_2_iletisim_bilgileri',
  'kullanici_tipi': 'yeni_ziyaretci'
});
</code></pre>

          <p>Bu kod sitenizde tetiklendiğinde, GTM bu verileri algılar ve işlem yapmak üzere kendi hafızasına alır. Burada kullandığınız <code>event</code> ismi (lead_form_adimlari), GTM tetikleyicisini oluştururken kullanacağımız anahtar kelimedir.</p>

          <h3>Adım 2: GTM'de Özel Tetikleyici (Custom Event Trigger) Oluşturma</h3>
          <ol>
            <li>GTM panelinize giriş yapın ve sol menüden <strong>Triggers (Tetikleyiciler)</strong> sekmesine tıklayarak <strong>New (Yeni)</strong> butonuna basın.</li>
            <li>Tetikleyici türü olarak <strong>Custom Event (Özel Etkinlik)</strong> seçeneğini seçin.</li>
            <li><strong>Event Name (Etkinlik Adı)</strong> alanına, sitenizdeki dataLayer kodunda tanımladığınız tam ismi yazın: <code>lead_form_adimlari</code>.</li>
            <li>Bu tetikleyiciye <code>Trigger - Lead Form Adımları</code> gibi anlaşılır bir isim vererek kaydedin.</li>
          </ol>

          <h3>Adım 3: dataLayer Parametrelerini GTM Değişkeni (Variable) Olarak Tanımlama</h3>
          <p>dataLayer ile gönderdiğimiz <code>form_adi</code> ve <code>form_adimi</code> gibi ekstra parametreleri GA4'e aktarabilmek için bunları GTM'de birer değişkene dönüştürmeliyiz:</p>
          <ol>
            <li>GTM'de <strong>Variables (Değişkenler)</strong> sekmesine gidin.</li>
            <li>User-Defined Variables alanından <strong>New</strong> butonuna tıklayın.</li>
            <li>Değişken türü olarak <strong>Data Layer Variable (Veri Katmanı Değişkeni)</strong> seçeneğini işaretleyin.</li>
            <li><strong>Data Layer Variable Name</strong> kutusuna kodda yazdığınız parametrenin adını birebir yazın: <code>form_adi</code>.</li>
            <li>Bu değişkene <code>dlv - form_adi</code> ismini verin ve kaydedin. Aynı işlemi <code>form_adimi</code> için de tekrarlayın.</li>
          </ol>

          <h3>Adım 4: GA4 Event Etiketi Oluşturma</h3>
          <ol>
            <li>GTM'de <strong>Tags (Etiketler)</strong> sekmesine gidin ve <strong>New</strong> butonuna tıklayın.</li>
            <li>Etiket türü olarak <strong>Google Analytics > Google Analytics: GA4 Event</strong> seçeneğini seçin.</li>
            <li><strong>Measurement ID (Ölçüm Kimliği)</strong> alanına GA4 panelinizden aldığınız <code>G-XXXXXXXXXX</code> kodunu girin (veya daha önceden tanımlanmış GA4 yapılandırma değişkeninizi seçin).</li>
            <li><strong>Event Name</strong> alanına GA4 raporlarında görmek istediğiniz ismi yazın (küçük harflerle ve snake_case formatında olmasına dikkat edin): <code>lead_form_interaction</code>.</li>
            <li><strong>Event Parameters (Etkinlik Parametreleri)</strong> bölümünü açın. "Add Row" diyerek Parameter Name alanına GA4'te görmek istediğiniz parametre adını (örn: <code>form_name</code>), Value kısmına ise az önce oluşturduğunuz GTM değişkenini (örn: <code>{{dlv - form_adi}}</code>) ekleyin.</li>
            <li><strong>Triggering (Tetiklenme)</strong> kısmına gidin ve Adım 2'de oluşturduğumuz <code>Trigger - Lead Form Adımları</code> tetikleyicisini seçin.</li>
            <li>Etiketi kaydedin ve GTM panelinin sağ üst köşesindeki <strong>Submit</strong> butonuyla yayına alın.</li>
          </ol>

          <h3>Adım 5: GA4 Yönetici Panelinde Özel Boyutları (Custom Dimensions) Tanımlama</h3>
          <p>GTM ile gönderdiğiniz özel parametrelerin GA4 raporlarında görünebilmesi ve dönüşüm hunilerinde adım olarak kullanılabilmesi için GA4 panelinde tanımlanması şarttır:</p>
          <ol>
            <li>GA4 panelinde sol alt köşedeki <strong>Admin (Yönetici)</strong> dişli simgesine tıklayın.</li>
            <li>Property settings altında yer alan <strong>Custom Definitions (Özel Tanımlamalar)</strong> sekmesine gidin.</li>
            <li><strong>Custom Dimensions (Özel Boyutlar)</strong> sekmesinde <strong>Create Custom Dimension</strong> butonuna tıklayın.</li>
            <li><strong>Dimension Name</strong> alanına raporda görmek istediğiniz anlaşılır ismi girin (Örn: <code>Form Adı</code>).</li>
            <li>Scope alanını <strong>Event</strong> olarak bırakın.</li>
            <li><strong>Event Parameter</strong> alanına ise GTM'de yazdığınız parametre ismini birebir seçin veya yazın: <code>form_name</code>.</li>
            <li>Kaydet butonuna basın. GA4'ün bu parametreyi işlemeye başlaması ve raporlarda göstermesi 24 saati bulabilir.</li>
          </ol>

          <h2>📈 Dönüşüm Hunisi (Funnel Exploration) Nedir ve Neden Hayatidir?</h2>
          <p>Dönüşüm hunisi (funnel), kullanıcıların web sitenizde gerçekleştirmesini istediğiniz nihai hedefe (satın alma, form gönderme vb.) giden yoldaki sıralı adımları ifade eder. Bir kullanıcının ana sayfaya gelmesinden satın almayı tamamlamasına kadar geçen süreçte yaşadığı kayıpları izlemek, pazarlama bütçenizi en verimli şekilde yönetmenizi sağlar. Geleneksel analiz araçlarında sadece "kaç kişi girdi, kaç kişi satın aldı" gibi genel dönüşüm oranlarını görürken, GA4 Gelişmiş Dönüşüm Hunileri sayesinde her bir adım arasındaki kayıp oranlarını (drop-off rate) mikroskobik olarak inceleyebilirsiniz.</p>

          <blockquote>
            <p>"Dijital pazarlamada sadece nihai dönüşüme odaklanmak, futbol maçında sadece skora bakıp oyunun kalitesini değerlendirmemek gibidir. Kullanıcının ödeme adımına gelip kart bilgilerini girmeden çıkma oranı ile sepet sayfasında takılıp kalma oranı, bize sitenin hangi teknik veya tasarımsal eksiklikleri olduğunu söyler. GA4 gelişmiş dönüşüm hunileri, veriyi sadece izlemenizi değil, bütçenizin nereye aktığını ve kullanıcıların neden satın almadığını anlamanızı sağlar. Bu veriyi doğru yorumladığınızda, reklam bütçenizi boşa harcamaktan kurtulursunuz." — Salih Maral, Performans Pazarlama Uzmanı</p>
          </blockquote>

          <p>Huni analizi yapmak, özellikle reklam bütçenizi yönetirken hayati bir önem taşır. Örneğin, Google Ads veya Meta Ads kampanyalarınızdan gelen trafiğin dönüşüm oranı düşükse, sorun reklam hedeflemesinde mi yoksa web sitenizin ödeme sayfasında mı olduğunu sadece huni analizleri ile ayırt edebilirsiniz. Sepete ekleyen ama ödeme adımına geçmeyen kullanıcıların oranını bilmek, reklam campaigns'lerinizde sepete ekleyenlere özel bir yeniden hedefleme (retargeting) stratejisi geliştirmenizi sağlar. Bu da reklam getirinizi (ROI) doğrudan yükseltir.</p>

          <h2>🛠️ GA4 Keşifler (Explorations) Panelinde Gelişmiş Dönüşüm Hunisi Oluşturma Rehberi</h2>
          <p>GA4'te standart raporlar kısıtlıdır. Gerçek dönüşüm hunisi analizleri yapmak için GA4 sol menüsündeki <strong>Explore (Keşfet)</strong> sekmesini kullanmalıyız. Adım adım bir huni analizini nasıl yapılandıracağınızı aşağıda bulabilirsiniz:</p>

          <h3>Adım 1: Boş Bir Keşif Başlatın</h3>
          <p>Explore sekmesine tıkladıktan sonra karşınıza çıkan şablon galerisinden <strong>Funnel Exploration (Huni Keşfi)</strong> şablonunu seçin veya <strong>Blank (Boş)</strong> bir çalışma alanı oluşturup teknik ayarlar bölümünden teknik türü olarak "Funnel Exploration" seçeneğini işaretleyin.</p>

          <h3>Adım 2: Huni Adımlarını Tanımlayın</h3>
          <p>Sekme Ayarları (Tab Settings) panelinde yer alan <strong>Steps (Adımlar)</strong> bölümündeki kalem simgesine tıklayın. Burası, dönüşüm yolculuğunu inşa edeceğimiz yerdir. Her bir adım için sitenizde tetiklenen etkinlikleri seçmelisiniz. Örneğin bir e-ticaret sitesi için standart bir huni kurgulayalım:</p>
          <ol>
            <li><strong>Adım 1 (Giriş):</strong> Etkinlik adı olarak <code>session_start</code> veya landing page ziyaretini ölçmek için <code>page_view</code> seçin.</li>
            <li><strong>Adım 2 (Ürün İnceleme):</strong> Etkinlik adı olarak <code>view_item</code> seçin (Kullanıcı ürün detay sayfasını gördü).</li>
            <li><strong>Adım 3 (Sepete Ekleme):</strong> Etkinlik adı olarak <code>add_to_cart</code> seçin.</li>
            <li><strong>Adım 4 (Ödeme Başlangıcı):</strong> Etkinlik adı olarak <code>begin_checkout</code> seçin.</li>
            <li><strong>Adım 5 (Satın Alma):</strong> Etkinlik adı olarak <code>purchase</code> seçin.</li>
          </ol>
          <p>B2B siteler veya hizmet sunan web siteleri için bu adımlar <code>page_view</code> (teklif sayfası) -> <code>lead_form_interaction</code> (formun ilk alanına veri girilmesi) -> <code>form_submit</code> (başarılı başvuru) şeklinde kurgulanabilir.</p>

          <h3>Adım 3: Açık Huni (Open Funnel) vs. Kapalı Huni (Closed Funnel) Seçimi</h3>
          <p>Steps ayarlarının hemen üstünde yer alan <strong>"Make Open Funnel" (Açık Huni Yap)</strong> seçeneği çok kritik bir karardır:</p>
          <ul>
            <li><strong>Kapalı Huni (Closed Funnel):</strong> Kullanıcıların huniye sadece 1. adımdan girmesine izin verir. Örneğin, kullanıcı doğrudan ürün sayfasına gelmişse (Step 2) ancak 1. adımı (ana sayfayı) görmemişse bu huniye dahil edilmez. Bu, doğrusal kullanıcı yolculuklarını ölçmek için mükemmeldir.</li>
            <li><strong>Açık Huni (Open Funnel):</strong> Kullanıcılar huniye herhangi bir adımdan dahil olabilir. Ürün sayfasından başlayan veya doğrudan sepetten devam eden kullanıcıları da kapsayarak genel dönüşüm yolculuğunun daha esnek bir haritasını çıkarır.</li>
          </ul>

          <h3>Adım 4: Kırılımlar (Breakdowns) ile Veriyi Derinleştirin</h3>
          <p>Huni analizinde tek bir genel grafik görmek yetersizdir. Trafik kaynaklarına veya cihaz türlerine göre analiz yapmalısınız. Sekme Ayarları panelindeki <strong>Breakdown (Kırılım)</strong> alanına <code>Device Category</code> (Cihaz Kategorisi) veya <code>Session Source/Medium</code> (Oturum Kaynağı/Aracı) boyutunu sürükleyip bırakın. Böylece mobil kullanıcıların ödeme adımındaki terk etme oranı ile masaüstü kullanıcıların oranını karşılaştırabilirsiniz. Genellikle mobil cihazlardaki yüksek terk etme oranları, sitenin mobil uyumluluk sorunlarına veya ödeme formunun mobil cihazlarda zor doldurulduğuna işaret eder.</p>

          <h3>📊 Tablo 2: Sektörel Ortalama Dönüşüm Hunisi ve Terk Etme (Drop-off) İstatistikleri</h3>
          <p>Kendi dönüşüm hunisi verilerinizi analiz ederken, sitenizin performansının iyi mi yoksa kötü mü olduğunu anlamak için sektörel kıyaslama verilerine (benchmark) ihtiyaç duyarsınız. Aşağıdaki tablo, e-ticaret ve B2B/hizmet sektörlerindeki ortalama huni verilerini ve hedeflemeniz gereken ideal oranları göstermektedir:</p>

          <table>
            <thead>
              <tr>
                <th>Huni Geçiş Adımı</th>
                <th>E-Ticaret Ortalama</th>
                <th>B2B / Lead Ortalama</th>
                <th>Hedeflenen İdeal Oran (Maral Standartları)</th>
                <th>Muhtemel Kayıp Nedeni</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Giriş -> Sayfa Ziyareti / İnceleme</strong></td>
                <td>%40 - %50</td>
                <td>%30 - %45</td>
                <td>&gt; %60</td>
                <td>Yavaş yüklenen sayfalar, ilgisiz reklam trafiği</td>
              </tr>
              <tr>
                <td><strong>Sayfa İnceleme -> Sepete Ekle / Form Başlangıç</strong></td>
                <td>%8 - %12</td>
                <td>%12 - %18</td>
                <td>&gt; %15</td>
                <td>Yetersiz ürün açıklaması, eksik güven unsurları, karmaşık formlar</td>
              </tr>
              <tr>
                <td><strong>Sepete Ekle -> Ödeme Başlangıç / Form Doldurma</strong></td>
                <td>%45 - %55</td>
                <td>%60 - %70</td>
                <td>&gt; %65</td>
                <td>Sürpriz kargo ücretleri, üyelik zorunluluğu, yavaş sepet sayfası</td>
              </tr>
              <tr>
                <td><strong>Ödeme Başlangıç -> Satın Alma / Form Gönderim</strong></td>
                <td>%35 - %45</td>
                <td>%75 - %85</td>
                <td>&gt; %50</td>
                <td>Eksik ödeme yöntemleri, güvenlik endişesi (SSL/3D Secure), teknik hatalar</td>
              </tr>
            </tbody>
          </table>

          <p>Yukarıdaki veriler ışığında, eğer sitenizdeki "Ödeme Başlangıcı -> Satın Alma" geçiş oranı %35'in altındaysa, reklam bütçenizi artırmak yerine ödeme sayfanızdaki kullanıcı deneyimini (UX) ve ödeme seçeneklerini iyileştirmeniz gerekir. Aksi takdirde, sitenize getirdiğiniz her yeni ziyaretçi için daha fazla bütçe harcayacak ancak sızdıran bir kovaya su doldurmaya çalışıyor olacaksınız.</p>

          <h2>💰 Hunideki Kayıpları (Drop-off) Kazanca Dönüştürme Stratejileri</h2>
          <p>GA4'te dönüşüm huninizi kurup zayıf halkaları tespit ettikten sonra, bu verileri kullanarak pazarlama performansınızı artıracak aksiyonlar almalısınız. İşte hunideki kayıpları kazanca dönüştürmek için uygulayabileceğiniz stratejiler:</p>

          <h3>1. Google Ads ve Meta Ads Yeniden Hedefleme (Retargeting) Kitlelerini Özelleştirin</h3>
          <p>Huni analizinde en çok kayıp yaşadığınız adımları belirleyin. Örneğin, kullanıcıların büyük bir kısmı <code>begin_checkout</code> adımına gelmiş ancak <code>purchase</code> yapmamışsa, GA4 üzerinde "Ödeme Başlatanlar ama Satın Almayanlar" isimli özel bir kitle (Audience) oluşturun. Bu kitleyi Google Ads ve Meta Ads hesaplarınızla paylaşarak onlara özel indirimler, ücretsiz kargo teklifleri veya müşteri yorumları içeren dinamik yeniden hedefleme reklamları gösterin. Bu yöntem, soğuk hedef kitlelere reklam göstermeye kıyasla 5 kata kadar daha yüksek dönüşüm oranı sunar.</p>

          <h3>2. Sunucu Tarafı İzleme (Server-Side Tracking) ile Veri Kayıplarını Azaltın</h3>
          <p>Tarayıcı kısıtlamaları (iOS ITP, reklam engelleyiciler vb.) nedeniyle GA4 dönüşüm huninizdeki bazı kullanıcı hareketleri eksik kaydedilebilir. Özellikle e-ticaret sitelerinde tarayıcı tabanlı ölçümleme, gerçek dönüşümlerin %30'a yakınını kaçırmaktadır. Bu durum, hunideki drop-off oranlarının yanlış görünmesine neden olur. Dönüşüm huninizin doğruluğunu artırmak ve reklam algoritmalarını en doğru verilerle beslemek için <a href="/blog/server-side-tracking-capi-guide">Sunucu Tarafı İzleme (Server-Side Tracking) ve Conversions API (CAPI) Rehberi</a> yazımızda detaylandırdığımız sunucu tarafı altyapıyı kurmanız kritik öneme sahiptir.</p>

          <h3>3. Google Ads Akıllı Teklif Stratejilerini (Smart Bidding) Besleyin</h3>
          <p>Google Ads campaigns'lerinizde dönüşümleri optimize ederken algoritmanın doğru kararlar vermesi için bol miktarda veriye ihtiyacı vardır. Eğer sadece nihai satın alma dönüşümünü takip ediyorsanız ve haftalık dönüşüm sayınız 30'un altındaysa, algoritmalar yavaş öğrenir. Bunun yerine, dönüşüm hunisinde sepete ekleme veya ödeme başlangıcı gibi mikro dönüşümleri de GA4'ten Google Ads'e aktararak (ve bunları ikincil/yardımcı dönüşüm olarak tanımlayarak) algoritmanın kullanıcı kalitesini daha iyi anlamasını sağlayabilirsiniz. Bu konuda profesyonel destek almak için <a href="/tr/hizmetler/google-ads">Salih Maral Google Ads Yönetimi</a> hizmetimizden yararlanabilirsiniz.</p>

          <h3>4. Form Optimizasyonu (CRO) Gerçekleştirin</h3>
          <p>B2B ve lead odaklı sitelerde en büyük kayıp genellikle form sayfalarında yaşanır. GA4 özel etkinlikleri ile formdaki hangi input alanının doldurulurken kullanıcının formu terk ettiğini takip edebilirsiniz. Eğer kullanıcılar "Telefon Numarası" veya "Şirket Unvanı" alanına geldikten sonra formu bırakıyorsa, bu alanları zorunlu olmaktan çıkarın veya formunuzu daha az alan içeren basit bir yapıya kavuşturun. Form alanlarının azaltılması, dönüşüm oranlarında ortalama %20 ila %35 oranında artış sağlamaktadır.</p>

          <h2>⚠️ GA4 Özel Etkinlikler ve Hunilerde En Sık Yapılan 5 Kritik Hata</h2>
          <p>Ölçümleme altyapısı kurarken yapılan küçük teknik hatalar, tüm pazarlama raporlarınızın yanlış sonuçlar vermesine ve yanlış kararlar almanıza yol açar. GA4 kurulumlarında en sık karşılaştığımız hatalar ve çözüm yolları şunlardır:</p>

          <ol>
            <li><strong>Özel Boyutları (Custom Dimensions) Tanımlamayı Unutmak:</strong> GTM'den GA4'e parametre göndermek yeterli değildir. Eğer bu parametreleri GA4 Admin panelindeki Custom Definitions alanında tanımlamazsanız, veriler arka planda toplanır ancak huni raporlarında veya keşiflerde kullanılamaz.</li>
            <li><strong>Büyük-Küçük Harf Duyarlılığına (Case Sensitivity) Dikkat Etmemek:</strong> GA4 etkinlik adları büyük-küçük harfe duyarlıdır. Örneğin, GTM'den bir etiket için <code>Add_to_Cart</code>, diğeri için <code>add_to_cart</code> gönderirseniz, GA4 bunları iki ayrı etkinlik olarak kaydeder ve dönüşüm huniniz bölünür. Tüm etkinlik adlarını standart olarak küçük harflerle ve snake_case formatında yazmalısınız.</li>
            <li><strong>Özel Boyut Sınırlarını Aşmak:</strong> GA4 standart mülklerinde mülk başına en fazla 50 adet "Event-scoped Custom Dimension" (Etkinlik düzeyinde özel boyut) tanımlayabilirsiniz. İhtiyacınız olmayan her parametre için yeni bir boyut oluşturmak yerine, parametre isimlerini ortaklaştırmaya çalışın (örneğin farklı formlar için her seferinde yeni parametre adı açmak yerine tek bir <code>form_id</code> parametresi kullanın).</li>
            <li><strong>Tetikleyicilerin Mükerrer Sayımlara Yol Açması:</strong> GTM'de kurulan tetikleyiciler sayfa her yenilendiğinde veya kullanıcı butona arka arkaya tıkladığında tekrar tetiklenebilir. Bu durum, dönüşüm hunisinde şişirilmiş ve gerçek dışı veriler görmenize neden olur. Tetikleyicileri kurarken "Once per event" (Olay başına bir kez) veya "Once per page" (Sayfa başına bir kez) kısıtlamalarını doğru yapılandırın.</li>
            <li><strong>Kullanıcı Çerez İzinlerini (Consent Mode V2) İhmal Etmek:</strong> Avrupa Birliği ülkelerinden veya KVKK kapsamındaki kullanıcılardan veri toplarken çerez izinlerini dikkate almalısınız. Kullanıcı çerez izni vermediyse, GA4'ün veri modelleme (modeled data) özelliklerini kullanarak hunileri tahmini verilerle tamamlamasını sağlamak için Consent Mode V2 entegrasyonunu eksiksiz yapmalısınız.</li>
          </ol>

          <h2>❓ Sıkça Sorulan Sorular (Google Tag Manager Funnel & GA4)</h2>
          <p>Google Tag Manager (GTM) ve GA4 üzerinde dönüşüm hunisi (funnel) kurulumu hakkında en sık sorulan teknik soruları ve yanıtlarını aşağıda bulabilirsiniz:</p>

          <p><strong>Google Tag Manager (GTM) ile funnel (dönüşüm hunisi) nasıl takip edilir?</strong><br>
          GTM üzerinden her huni adımı için (örneğin form 1. adım, 2. adım, sepet, ödeme) ayrı bir Custom Event tetikleyicisi veya History Change / Element Visibility tetikleyicisi oluşturulur. Bu tetikleyiciler GA4 Event etiketiyle Google Analytics 4'e gönderilir ve GA4 Keşifler (Explore > Funnel Exploration) modülünde sıralı adımlar olarak tanımlanır.</p>

          <p><strong>GTM'den gönderilen event parametreleri GA4 funnel raporunda neden görünmüyor?</strong><br>
          GTM ile gönderdiğiniz özel parametrelerin (örneğin <code>form_step</code> veya <code>step_name</code>) GA4 huni raporlarında kullanılabilmesi için GA4 Admin > Custom Definitions (Özel Tanımlamalar) bölümünde Event-scoped Custom Dimension (Özel Boyut) olarak kaydedilmesi zorunludur. Tanımlama yapıldıktan sonra veriler 24 saat içinde raporlara yansır.</p>

          <p><strong>Açık huni (Open Funnel) ile kapalı huni (Closed Funnel) arasındaki fark nedir?</strong><br>
          Kapalı hunide kullanıcıların huniye yalnızca 1. adımdan girmesi şarttır; ara adımdan girenler rapora dahil edilmez. Açık hunide ise kullanıcılar huninin herhangi bir adımından giriş yapabilir ve o adımdan sonraki dönüşüm oranları ölçülür.</p>

          <p><strong>Tarayıcı engelleri (AdBlocker / ITP) huni verilerini bozar mı?</strong><br>
          Evet, yalnızca tarayıcı tabanlı (client-side) çalışan GTM kurulumlarında kullanıcıların %20 ila %30'u çerez kısıtlamaları nedeniyle hunide kayıp (sahte drop-off) olarak görünebilir. Bunu önlemek için Server-Side GTM (sGTM) ve birinci taraf (first-party) veri altyapısı kullanılmalıdır.</p>

          <h2>🚀 Sonuç: Veriyi Kazanca Dönüştürün</h2>
          <p>Google Tag Manager ve Google Analytics 4, doğru yapılandırılmış özel etkinlikler ve profesyonel dönüşüm hunileri ile pazarlama bütçenizi yöneten bir karar merkezine dönüşür. Sitenizin neresinde müşteri kaybettiğinizi bilmek, size nokta atışı iyileştirmeler yapma ve reklam ROI'nizi katlama gücü verir. Ölçümleme altyapınızı sıfırdan kurmak veya mevcut GTM/GA4 kurulumunuzu optimize etmek için <a href="/#contact">online iletişim formumuzdan</a> veya <a href="mailto:info@salihmaral.com">info@salihmaral.com</a> adresinden bize ulaşabilirsiniz — <strong>24 saat içinde garantili geri dönüş</strong> sağlıyoruz.</p>

          <div class="highlight-box">
            <h4>📚 Devamını Okuyun</h4>
            <ul>
              <li><a href="/blog/server-side-gtm-meta-capi-setup-2026">Server-Side GTM ve Meta Conversions API (CAPI) Kurulum Rehberi 2026</a></li>
              <li><a href="/blog/b2b-google-ads-kurumsal-lead-ve-musteri-kazanma-rehberi-2026">B2B Google Ads Stratejisi: Kurumsal Lead ve Müşteri Kazanma Rehberi</a></li>
              <li><a href="/blog/e-ticaret-roas-artirma-ve-reklam-butcesi-olcekleme-2026">E-Ticarette ROAS Artırma ve Reklam Bütçesi Ölçekleme Rehberi</a></li>
              <li><a href="/blog/google-ads-roi-tracking">Google Reklam ROI & ROAS Hesaplama ve Dönüşüm Takibi</a></li>
              <li><a href="/tr/hizmetler/server-side-tracking">Salih Maral Server-Side Tracking & GTM Danışmanlığı</a></li>
              <li><a href="/tr/hizmetler/google-ads">Salih Maral Google Ads Yönetimi Hizmetleri</a></li>
            </ul>
          </div>
