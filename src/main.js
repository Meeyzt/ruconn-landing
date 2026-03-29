import './styles.css'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const app = document.querySelector('#app')

gsap.registerPlugin(ScrollTrigger)

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand-wrap" href="#hero" aria-label="Ruconn ana sayfa">
        <span class="brand-mark"></span>
        <span class="brand-name">Ruconn</span>
      </a>

      <nav class="topnav" aria-label="Ana navigasyon">
        <a href="#neden">Neden Ruconn</a>
        <a href="#deneyim">Deneyim</a>
        <a href="#kulupler">Kulüpler için</a>
        <a href="#cta">Demo</a>
      </nav>

      <a class="button button-ghost" href="#cta">Demo talep et</a>
    </header>

    <main>
      <section id="hero" class="hero section">
        <div class="hero-copy reveal-up">
          <p class="eyebrow">Running community operating system</p>
          <h1>Koşuyu bulmayı, katılmayı ve bağ kurmayı tek premium akışta birleştirin.</h1>
          <p class="hero-text">
            Ruconn; kullanıcıların etkinlikleri keşfettiği, anında katıldığı ve etkinlik etrafında
            yaşayan topluluklara dahil olduğu bir community layer. Kulüpler içinse görünürlük,
            katılım, iletişim ve operasyonu aynı yerde toparlayan daha akıllı bir yüzey.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo planla</a>
            <a class="button button-secondary" href="#neden">Neden şimdi?</a>
          </div>

          <div class="hero-proof">
            <div>
              <strong>Etkinliği bul</strong>
              <span>Şehirde ne var, ne zaman var, hangi toplulukta var net gör.</span>
            </div>
            <div>
              <strong>Topluluğa katıl</strong>
              <span>Sadece RSVP değil; sohbet, devamlılık ve geri dönüş üret.</span>
            </div>
            <div>
              <strong>Kulübü büyüt</strong>
              <span>Kaosu azalt, katılımı görünür kıl, topluluğu diri tut.</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal-scale" aria-hidden="true">
          <div class="hero-glow hero-glow-gold"></div>
          <div class="hero-glow hero-glow-red"></div>
          <div class="hero-scene-shell">
            <canvas id="route-canvas"></canvas>
            <div class="hero-hud hud-top">
              <span>LIVE ROUTE</span>
              <span>İstanbul / Cadence Mode</span>
            </div>
            <div class="hero-hud hud-bottom">
              <div>
                <small>Bu hafta</small>
                <strong>14 koşu · 8 kulüp · 1 sürekli topluluk katmanı</strong>
              </div>
              <div>
                <small>Ruconn mantığı</small>
                <strong>Etkinlik öncesi tanış, etkinlikte buluş, etkinlik sonrası bağlı kal.</strong>
              </div>
            </div>
            <div class="hero-float-card hero-float-a">
              <small>Discovery</small>
              <strong>Yakındaki koşuları ritim, kulüp ve formatına göre gör.</strong>
            </div>
            <div class="hero-float-card hero-float-b">
              <small>Community Layer</small>
              <strong>WhatsApp grubu gibi yaşayan ama çok daha düzenli bir sosyal katman.</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="momentum-strip reveal-up" aria-label="Öne çıkan değerler">
        <article>
          <span class="signal-kicker">Keşif</span>
          <strong>Koşucu doğru etkinliği rastgele değil, güvenle bulur.</strong>
          <p>Yer, saat, tempo, kulüp tonu ve katılım hissi tek bakışta anlaşılır.</p>
        </article>
        <article>
          <span class="signal-kicker">Bağ</span>
          <strong>Etkinlik tek gecelik kalmaz; ilişki sonraya taşınır.</strong>
          <p>Etkinlik öncesi iletişim, etkinlik sonrası devam eden sosyal bağ ve kulüp hafızası oluşur.</p>
        </article>
        <article>
          <span class="signal-kicker">Operasyon</span>
          <strong>Kulüpler topluluk, etkinlik ve duyuruyu dağınık araçlara bölmez.</strong>
          <p>Tek yüzeyde daha az sürtünme, daha net görünürlük ve daha yüksek tekrar oranı.</p>
        </article>
      </section>

      <section id="neden" class="section why-section">
        <div class="section-heading section-heading-wide reveal-up">
          <p class="eyebrow">Neden Ruconn</p>
          <h2>Ruconn bir etkinlik listesi değil; etkinliğin etrafında yaşayan daha iyi yapılandırılmış bir community layer.</h2>
          <p>
            Bugün koşu toplulukları çoğu zaman dağınık akıyor: etkinliği bir yerde görüyorsun,
            detayları başka yerde buluyorsun, katılımı mesajlaşmada takip ediyorsun, etkinlik sonrası
            oluşan bağı ise kaybediyorsun. Ruconn bu parçayı tek akışta çözüyor.
          </p>
        </div>

        <div class="why-grid">
          <article class="why-card why-card-large reveal-up">
            <span>01 · Kullanıcı için</span>
            <h3>Etkinlikleri kolayca bul, güvenle katıl, insanlarla bağlı kal.</h3>
            <p>
              Kullanıcılar şehirdeki etkinlikleri keşfedebilmeli, kendilerine uygun kulüp ve koşuyu
              seçebilmeli, hızlıca katılabilmeli. Ama değer bununla bitmiyor: etkinlik öncesi kimlerin
              geleceğini görmek, etkinlik sırasında aidiyet hissetmek ve etkinlik sonrasında o sosyal
              bağı sürdürebilmek gerekiyor.
            </p>
          </article>
          <article class="why-card reveal-up">
            <span>02 · Community layer</span>
            <h3>WhatsApp grubu gibi canlı, ama daha net, daha bulunur, daha yönetilebilir.</h3>
            <p>
              Ruconn, etkinlik etrafında yaşayan sosyal akışı korur; fakat bunu kaotik mesaj dizilerine
              bırakmaz. Duyurular, katılım, seri etkinlikler, yeni gelenlerin dahil olması ve topluluk
              hafızası çok daha düzenli bir yüzeyde akar.
            </p>
          </article>
          <article class="why-card reveal-up">
            <span>03 · Kulüpler için</span>
            <h3>Topluluğu büyütürken operasyon yükünü hafifletir.</h3>
            <p>
              Kulüpler tek tek açıklama yazmak, yoklama toplamak, insanları farklı kanallarda taşımak
              ve yeni gelenleri kaybetmek zorunda kalmaz. Ruconn; topluluk yönetimi, etkinlik akışı ve
              operasyon kolaylığını aynı çatı altında toplar.
            </p>
          </article>
        </div>

        <div class="why-rail">
          <div class="why-rail-item reveal-up">
            <strong>Etkinlik öncesi</strong>
            <p>Kim geliyor, format ne, topluluğun tonu nasıl — belirsizlik düşer.</p>
          </div>
          <div class="why-rail-item reveal-up">
            <strong>Etkinlik anı</strong>
            <p>Katılım deneyimi daha sıcak, daha sosyal, daha organize hissettirir.</p>
          </div>
          <div class="why-rail-item reveal-up">
            <strong>Etkinlik sonrası</strong>
            <p>Bağ kopmaz; sonraki koşuya dönüş ihtimali ve topluluk sürekliliği artar.</p>
          </div>
        </div>
      </section>

      <section id="deneyim" class="section experience-section">
        <div class="section-heading reveal-up narrow">
          <p class="eyebrow">Deneyim akışı</p>
          <h2>Kullanıcı tarafında keşiften aidiyete, kulüp tarafında kaostan kontrole.</h2>
        </div>

        <div class="experience-stack">
          <article class="experience-card experience-card-a reveal-up">
            <div class="experience-index">Aşama 01</div>
            <h3>Bul</h3>
            <p>Kullanıcı, çevresindeki koşuları ve kulüpleri uygulamayı çözer gibi değil, hissederek keşfeder.</p>
            <ul>
              <li>Şehre yayılmış etkinliklerin temiz görünümü</li>
              <li>Pace, rota, format ve topluluk sinyalleri</li>
              <li>Yeni gelenler için düşük bariyerli giriş</li>
            </ul>
          </article>

          <article class="experience-card experience-card-b reveal-up">
            <div class="experience-index">Aşama 02</div>
            <h3>Katıl</h3>
            <p>Etkinliğe giden yol gereksiz mesaj trafiğiyle değil, net bir katılım hissiyle akar.</p>
            <ul>
              <li>Kimlerin geleceğini ve etkinliğin hissini anlama</li>
              <li>Etkinlik öncesi sosyal ısınma alanı</li>
              <li>Katılımı aksiyona çeviren sade deneyim</li>
            </ul>
          </article>

          <article class="experience-card experience-card-c reveal-up">
            <div class="experience-index">Aşama 03</div>
            <h3>Sürdür</h3>
            <p>Asıl fark burada başlar: tek etkinlik, devam eden topluluğa ve geri dönüşe dönüşür.</p>
            <ul>
              <li>Etkinlik sonrası bağın kaybolmaması</li>
              <li>Seri koşular için kalıcı topluluk ritmi</li>
              <li>Kulüpler için retention odaklı sosyal katman</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="kulupler" class="section clubs-section">
        <div class="clubs-layout">
          <div class="clubs-copy reveal-up">
            <p class="eyebrow">Kulüpler için net fayda</p>
            <h2>Daha görünür kulüp. Daha yüksek katılım. Daha az operasyonel sürtünme.</h2>
            <p>
              Ruconn, kulüpler için sadece etkinlik yayınlanan bir vitrin değildir. Yeni üyeyi içeri alan,
              mevcut üyeyi sıcak tutan ve organizasyonu sürdürülebilir hale getiren bir growth + ops yüzeyidir.
            </p>
          </div>

          <div class="clubs-grid">
            <article class="clubs-card reveal-up">
              <small>Community</small>
              <h3>Yeni geleni topluluğa daha hızlı entegre et</h3>
              <p>İlk kez katılan biri kaybolmaz; doğru sinyallerle tekrar gelmeye daha yatkın hale gelir.</p>
            </article>
            <article class="clubs-card reveal-up">
              <small>Events</small>
              <h3>Etkinlik akışını daha net ve tekrar edilebilir kur</h3>
              <p>Seri koşular, özel buluşmalar ve duyurular tek bir ritimde ilerler.</p>
            </article>
            <article class="clubs-card reveal-up">
              <small>Operations</small>
              <h3>Mesajlaşma kaosunu azalt, operasyonu sadeleştir</h3>
              <p>Katılım görünürlüğü, duyuru düzeni ve topluluk devamlılığı daha yönetilebilir olur.</p>
            </article>
            <article class="clubs-card quote-card reveal-up">
              <p>“Ruconn, etkinlik etrafındaki enerjiyi kaybetmeyen ama operasyon tarafında yetişkin davranan bir yapı kurar.”</p>
              <span>Ürün prensibi</span>
            </article>
          </div>
        </div>
      </section>

      <section class="section metrics-section">
        <div class="metrics-panel reveal-up">
          <div class="metrics-copy">
            <p class="eyebrow">Conversion odaklı çerçeve</p>
            <h2>Neyi satıyoruz? Bir landing değil; daha yüksek katılım ve daha güçlü topluluk çıktısı.</h2>
            <p>
              Ruconn’un mesajı açık olmalı: kullanıcı daha kolay keşfeder, daha rahat katılır ve daha uzun süre bağlı kalır.
              Kulüp ise daha iyi görünür, daha iyi organize olur ve topluluğunu büyütür.
            </p>
          </div>
          <div class="metrics-list">
            <div>
              <strong>01</strong>
              <span>Kullanıcı tarafında discovery → join → retention zinciri</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Kulüp tarafında visibility → attendance → community continuity</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Tek cümlelik değer: Etkinlik etrafında yaşayan topluluğu düzenli hale getir</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="cta section reveal-up">
        <div>
          <p class="eyebrow">Erken erişim / Demo</p>
          <h2>Ruconn’u birlikte kurmak isteyen kulüpler, partnerler ve topluluk liderleri için kapı açık.</h2>
          <p>
            Eğer koşu topluluğunuzu daha premium, daha bağlı ve daha yönetilebilir bir yapıya taşımak istiyorsanız,
            demo planlayalım. Ruconn’u sahada birlikte keskinleştirelim.
          </p>
        </div>

        <div class="cta-actions">
          <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo planla</a>
          <a class="button button-secondary" href="mailto:hello@ruconn.com?subject=Ruconn%20Erken%20Erişim">Erken erişim iste</a>
        </div>
      </section>
    </main>
  </div>
`

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setupRouteScene = () => {
  const canvas = document.querySelector('#route-canvas')
  if (!canvas) return null

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
  camera.position.set(0, 0.8, 8.5)

  const sizes = { width: 0, height: 0 }
  const container = canvas.parentElement

  const routePoints = [
    new THREE.Vector3(-4.8, -1.5, -2.2),
    new THREE.Vector3(-3.2, -0.2, -1.1),
    new THREE.Vector3(-1.6, 1.4, 0.2),
    new THREE.Vector3(0.2, 0.4, 1.2),
    new THREE.Vector3(1.7, -1.0, 0.6),
    new THREE.Vector3(3.4, 1.3, -0.4),
    new THREE.Vector3(4.8, 0.2, -1.6)
  ]

  const curve = new THREE.CatmullRomCurve3(routePoints)
  const curvePoints = curve.getPoints(240)
  const routeGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
  const routeMaterial = new THREE.LineBasicMaterial({ color: 0xd9b17f, transparent: true, opacity: 0.95 })
  const routeLine = new THREE.Line(routeGeometry, routeMaterial)
  scene.add(routeLine)

  const ghostGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(120))
  const ghostMaterial = new THREE.PointsMaterial({ color: 0x7a2d37, size: 0.08, transparent: true, opacity: 0.7 })
  const ghostTrail = new THREE.Points(ghostGeometry, ghostMaterial)
  scene.add(ghostTrail)

  const ringGeometry = new THREE.TorusGeometry(0.72, 0.02, 16, 120)
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 })
  const ring = new THREE.Mesh(ringGeometry, ringMaterial)
  ring.rotation.x = 1.2
  ring.position.set(-0.8, 0.2, -0.8)
  scene.add(ring)

  const pulseGeometry = new THREE.SphereGeometry(0.16, 24, 24)
  const pulseMaterial = new THREE.MeshBasicMaterial({ color: 0xf3d3a7 })
  const runner = new THREE.Mesh(pulseGeometry, pulseMaterial)
  scene.add(runner)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xc79b62, 14, 30, 2)
  pointLight.position.set(1.4, 2.4, 3.2)
  scene.add(pointLight)

  const redLight = new THREE.PointLight(0x8d2335, 12, 24, 2)
  redLight.position.set(-3.2, -1.8, 2.6)
  scene.add(redLight)

  const resize = () => {
    sizes.width = container.clientWidth
    sizes.height = container.clientHeight
    renderer.setSize(sizes.width, sizes.height, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
  }

  resize()
  window.addEventListener('resize', resize)

  const clock = new THREE.Clock()
  const state = { progress: 0 }

  if (!reducedMotion) {
    gsap.to(state, {
      progress: 1,
      duration: 4.6,
      repeat: -1,
      ease: 'none'
    })

    gsap.to(camera.position, {
      z: 7.8,
      y: 1.05,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to(ring.rotation, {
      z: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: 'none'
    })
  } else {
    state.progress = 0.22
  }

  renderer.setAnimationLoop(() => {
    const elapsed = clock.getElapsedTime()
    const p = curve.getPointAt(state.progress % 1)
    runner.position.copy(p)

    const next = curve.getPointAt((state.progress + 0.015) % 1)
    runner.lookAt(next)

    routeLine.rotation.z = Math.sin(elapsed * 0.18) * 0.08
    ghostTrail.rotation.z = -Math.sin(elapsed * 0.22) * 0.12
    ghostTrail.rotation.x = Math.cos(elapsed * 0.16) * 0.08
    ring.position.y = 0.2 + Math.sin(elapsed * 1.4) * 0.16
    pointLight.intensity = 12 + Math.sin(elapsed * 2.1) * 2
    redLight.intensity = 9 + Math.cos(elapsed * 1.6) * 2

    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
  })

  return { renderer, scene }
}

setupRouteScene()

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
    duration: 0.85,
    stagger: 0.08,
    delay: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.hero-scene-shell', {
    y: 34,
    opacity: 0,
    scale: 0.965,
    duration: 1.15,
    ease: 'power3.out'
  })

  gsap.to('.hero-glow-gold', {
    x: 26,
    y: -30,
    duration: 5.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-glow-red', {
    x: -18,
    y: 18,
    duration: 6.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-float-a', {
    y: -12,
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-float-b', {
    y: 10,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.utils.toArray('.reveal-up').forEach((item) => {
    gsap.from(item, {
      y: 34,
      opacity: 0,
      duration: 0.88,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 84%'
      }
    })
  })

  gsap.utils.toArray('.experience-card').forEach((card, index) => {
    gsap.from(card, {
      y: 54,
      opacity: 0,
      duration: 0.9,
      delay: index * 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%'
      }
    })
  })

  ScrollTrigger.create({
    trigger: '.experience-stack',
    start: 'top 75%',
    end: 'bottom 75%',
    onUpdate: (self) => {
      gsap.to('.experience-card-a', { y: self.progress * -12, duration: 0.35, overwrite: 'auto' })
      gsap.to('.experience-card-b', { y: self.progress * -22, duration: 0.35, overwrite: 'auto' })
      gsap.to('.experience-card-c', { y: self.progress * -32, duration: 0.35, overwrite: 'auto' })
    }
  })
}
