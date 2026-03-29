import './styles.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand-wrap" href="#hero" aria-label="Ruconn ana sayfa">
        <span class="brand-mark"></span>
        <span class="brand-name">Ruconn</span>
      </a>

      <nav class="topnav" aria-label="Ana navigasyon">
        <a href="#neden">Neden Ruconn</a>
        <a href="#akis">Akış</a>
        <a href="#operasyon">Kulüp Operasyonu</a>
        <a href="#cta">İletişim</a>
      </nav>

      <a class="button button-ghost" href="#cta">Demo talep et</a>
    </header>

    <main>
      <section id="hero" class="hero section">
        <div class="hero-copy reveal-up">
          <p class="eyebrow">Running community platform</p>
          <h1>Koşuyu sadece planlayan değil, topluluğu büyüten platform.</h1>
          <p class="hero-text">
            Ruconn; koşucuların yeni rotaları, doğru toplulukları ve güçlü kulüpleri tek deneyimde
            bulduğu bir running community platformu. Discovery, community ve club operations aynı
            akışta birleşir.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#cta">Erken erişim başlat</a>
            <a class="button button-secondary" href="#akis">Platformu keşfet</a>
          </div>

          <div class="hero-proof">
            <div>
              <strong>Discovery</strong>
              <span>Şehirdeki koşu akışını görünür kılar.</span>
            </div>
            <div>
              <strong>Community</strong>
              <span>İnsanı sadece etkinliğe değil, aidiyete bağlar.</span>
            </div>
            <div>
              <strong>Club Ops</strong>
              <span>Kulüp operasyonunu tek panelde sakinleştirir.</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal-scale" aria-hidden="true">
          <div class="orb orb-gold"></div>
          <div class="orb orb-red"></div>
          <div class="hero-panel">
            <div class="panel-head">
              <span>RUCONN / LIVE SYSTEM</span>
              <span>TR · İstanbul</span>
            </div>

            <div class="hero-rings">
              <div class="ring ring-outer"></div>
              <div class="ring ring-middle"></div>
              <div class="ring ring-inner"></div>
              <div class="pulse-core"></div>
            </div>

            <div class="hero-surface hero-surface-primary">
              <p>Bu akşam</p>
              <strong>3 koşu, 2 açık kulüp buluşması, 1 tempo seansı</strong>
              <span>Koşucu için keşif net. Kulüp için katılım akışı canlı.</span>
            </div>

            <div class="hero-mini-grid">
              <article class="hero-mini-card">
                <small>Club Flow</small>
                <strong>Katılım + bekleme listesi + duyuru</strong>
              </article>
              <article class="hero-mini-card">
                <small>Member Layer</small>
                <strong>Yeni geleni topluluğa taşıyan hafif onboarding</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="signal-band reveal-up" aria-label="Temel metrikler">
        <article>
          <span class="signal-kicker">Şehir keşfi</span>
          <strong>Dağınık koşu bilgisini tek ritimde toplar</strong>
          <p>Koşucu ne zaman, nerede, kimlerle koşabileceğini saniyeler içinde görür.</p>
        </article>
        <article>
          <span class="signal-kicker">Topluluk bağı</span>
          <strong>Etkinliği ilişkiye dönüştürür</strong>
          <p>Bir koşuya katılan kişi, sonraki adımda kendine ait bir çevre bulur.</p>
        </article>
        <article>
          <span class="signal-kicker">Operasyon sakinliği</span>
          <strong>Kulüp tarafında tekrar eden yükü azaltır</strong>
          <p>Duyuru, katılım, seri etkinlik ve topluluk akışı tek düzlemde ilerler.</p>
        </article>
      </section>

      <section id="neden" class="section story-block">
        <div class="section-heading reveal-up section-heading-wide">
          <p class="eyebrow">Ürün vaadi</p>
          <h2>Ruconn, running kültürünü daha görünür, daha bağlı ve daha yönetilebilir hale getirir.</h2>
          <p>
            Sorun sadece bir etkinlik takvimi eksikliği değil. İnsanlar doğru topluluğu bulmakta,
            kulüpler düzenli iletişim kurmakta ve şehirdeki koşu enerjisi ortak bir yüzeyde
            toplanmakta zorlanıyor. Ruconn bu kırılmayı kapatır.
          </p>
        </div>

        <div class="value-grid">
          <article class="value-card reveal-up">
            <span>01</span>
            <h3>Discovery katmanı</h3>
            <p>Şehirde hangi koşuların olduğunu, ritmini ve topluluğunu berrak biçimde gösterir.</p>
          </article>
          <article class="value-card reveal-up">
            <span>02</span>
            <h3>Community katmanı</h3>
            <p>Tek seferlik katılımı aidiyete dönüştüren sıcak ama disiplinli bir sosyal yapı kurar.</p>
          </article>
          <article class="value-card reveal-up">
            <span>03</span>
            <h3>Club operations katmanı</h3>
            <p>Kulüpler için tekrar eden iletişim ve organizasyon yükünü sadeleştirir.</p>
          </article>
        </div>
      </section>

      <section id="akis" class="section experience-section">
        <div class="section-heading reveal-up narrow">
          <p class="eyebrow">Platform akışı</p>
          <h2>İyi bir running platformu, ilk dokunuştan kulüp ritmine kadar tek parça hissetmeli.</h2>
        </div>

        <div class="experience-stack">
          <article class="experience-card experience-card-a reveal-up">
            <div class="experience-index">Aşama 01</div>
            <h3>Keşfet</h3>
            <p>
              Kullanıcı bulunduğu şehirdeki koşuları, kulüpleri ve düzenli akışları filtrelemeden
              önce bile sezgisel olarak görür.
            </p>
            <ul>
              <li>Yakındaki koşular ve tekrar eden buluşmalar</li>
              <li>Pace, format ve topluluk tonu</li>
              <li>Yeni başlayan için düşük bariyerli giriş</li>
            </ul>
          </article>

          <article class="experience-card experience-card-b reveal-up">
            <div class="experience-index">Aşama 02</div>
            <h3>Bağlan</h3>
            <p>
              İnsanlar sadece etkinliğe katılmaz; aynı ritimde koşabilecekleri çevreyi bulur,
              kulübün dilini anlar ve geri gelmek ister.
            </p>
            <ul>
              <li>Üye hissi veren kulüp profilleri</li>
              <li>Duyurular, seri koşular, tekrar eden ilişki</li>
              <li>Katılım sonrası doğal topluluk devamlılığı</li>
            </ul>
          </article>

          <article class="experience-card experience-card-c reveal-up">
            <div class="experience-index">Aşama 03</div>
            <h3>Yönet</h3>
            <p>
              Kulüpler operasyonu mesajlaşma uygulamalarında dağınık taşımak yerine daha kontrollü
              bir katmanda yürütür.
            </p>
            <ul>
              <li>Etkinlik akışları ve katılım görünürlüğü</li>
              <li>Düzenli seri koşular için net operasyon kurgusu</li>
              <li>Topluluk büyürken sakin kalan yönetim yüzeyi</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="operasyon" class="section ops-section">
        <div class="ops-layout">
          <div class="ops-copy reveal-up">
            <p class="eyebrow">Kulüp tarafı</p>
            <h2>Kulüpler için daha az kaos, daha net görünürlük, daha iyi tekrar oranı.</h2>
            <p>
              Ruconn, kulüplerin sadece etkinlik yayınladığı bir vitrin değil; topluluğu diri tutan,
              katılımı görünür kılan ve düzenli akışları yönetilebilir hale getiren operasyon katmanı.
            </p>
          </div>

          <div class="ops-grid">
            <article class="ops-card reveal-up">
              <small>Operations</small>
              <h3>Seri koşular için tutarlı akış</h3>
              <p>Aynı formatı her hafta yeniden anlatmak yerine, kulübün ritmi kendi dilinde akar.</p>
            </article>
            <article class="ops-card reveal-up">
              <small>Retention</small>
              <h3>İlk katılımı geri dönüşe çeviren yüzey</h3>
              <p>Yeni gelenin kaybolmadığı, topluluğun sıcaklığını hissettiği bir ikinci temas oluşur.</p>
            </article>
            <article class="ops-card reveal-up">
              <small>Visibility</small>
              <h3>Şehir içindeki görünürlüğü artıran yapı</h3>
              <p>Kulüp sadece mevcut çekirdeğe değil, henüz tanışmamış doğru koşucuya da ulaşır.</p>
            </article>
            <article class="ops-card quote-card reveal-up">
              <p>
                “Running culture grows when discovery, belonging and operations stop living in
                separate places.”
              </p>
              <span>Ruconn product principle</span>
            </article>
          </div>
        </div>
      </section>

      <section class="section manifesto-section">
        <div class="manifesto-panel reveal-up">
          <div class="manifesto-copy">
            <p class="eyebrow">Tasarım yaklaşımı</p>
            <h2>Daha karanlık. Daha atletik. Daha rafine.</h2>
            <p>
              Bu landing, katalog gibi konuşmaz. Ürünün neden önemli olduğunu ilk 90 saniyede
              hissettirir. Büyük tipografi, kontrollü boşluk, zengin yüzeyler ve sakin hareketler;
              Ruconn’un premium ama erişilebilir karakterini taşır.
            </p>
          </div>
          <div class="manifesto-metrics">
            <div>
              <strong>01</strong>
              <span>Mesaj önce değer satar, özellik değil.</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Discovery + community + ops tek anlatıda bağlanır.</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Animasyon dikkat çekmek için değil, premium his için çalışır.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="cta section reveal-up">
        <div>
          <p class="eyebrow">Erken erişim</p>
          <h2>Ruconn’u birlikte şekillendirmek isteyen kulüpler ve partnerler için kapı açık.</h2>
          <p>
            Demo talebi bırakın; şehir keşfi, topluluk akışı ve kulüp operasyonunu aynı yüzeyde nasıl
            kurguladığımızı birlikte gösterelim.
          </p>
        </div>

        <div class="cta-actions">
          <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo planla</a>
          <a class="button button-secondary" href="mailto:hello@ruconn.com?subject=Ruconn%20Early%20Access">Erken erişim iste</a>
        </div>
      </section>
    </main>
  </div>
`

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reducedMotion) {
  gsap.from('.topbar', {
    y: -28,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  })

  gsap.from('.hero-copy > *', {
    y: 28,
    opacity: 0,
    duration: 0.9,
    stagger: 0.08,
    delay: 0.15,
    ease: 'power3.out'
  })

  gsap.from('.hero-panel', {
    y: 34,
    opacity: 0,
    scale: 0.96,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.utils.toArray('.reveal-up').forEach((item) => {
    gsap.from(item, {
      y: 36,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 82%'
      }
    })
  })

  gsap.to('.orb-gold', {
    x: 20,
    y: -24,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.orb-red', {
    x: -18,
    y: 16,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-rings', {
    rotate: 8,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.pulse-core', {
    scale: 1.08,
    opacity: 0.92,
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.utils.toArray('.experience-card').forEach((card, index) => {
    gsap.from(card, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 78%'
      },
      delay: index * 0.05
    })
  })

  ScrollTrigger.create({
    trigger: '.experience-stack',
    start: 'top 70%',
    end: 'bottom 80%',
    onUpdate: (self) => {
      gsap.to('.experience-card-a', { y: self.progress * -10, overwrite: 'auto', duration: 0.4 })
      gsap.to('.experience-card-b', { y: self.progress * -20, overwrite: 'auto', duration: 0.4 })
      gsap.to('.experience-card-c', { y: self.progress * -30, overwrite: 'auto', duration: 0.4 })
    }
  })
}
