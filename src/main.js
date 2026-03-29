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
        <a href="#neden">Ürün</a>
        <a href="#deneyim">Akış</a>
        <a href="#kulupler">Kulüpler</a>
        <a href="#cta">Demo</a>
      </nav>

      <a class="button button-ghost" href="#cta">Demo al</a>
    </header>

    <main>
      <section id="hero" class="hero section">
        <div class="hero-copy reveal-up">
          <p class="eyebrow">Running community OS</p>
          <h1>Koşuyu bul. Katıl. Bağlı kal.</h1>
          <p class="hero-text">
            Ruconn, koşucu için keşfi ve katılımı; kulüp için görünürlüğü ve topluluk ritmini tek akışta toplar.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo planla</a>
            <a class="button button-secondary" href="#neden">Nasıl çalışır?</a>
          </div>

          <div class="hero-proof">
            <div>
              <strong>14 koşu</strong>
              <span>Bu hafta canlı akışta</span>
            </div>
            <div>
              <strong>8 kulüp</strong>
              <span>Tek ritimde görünür</span>
            </div>
            <div>
              <strong>1 akış</strong>
              <span>Discovery → join → return</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal-scale" aria-hidden="true">
          <div class="hero-glow hero-glow-primary"></div>
          <div class="hero-glow hero-glow-secondary"></div>
          <div class="hero-scene-shell">
            <canvas id="route-canvas"></canvas>
            <div class="hero-hud hud-top">
              <span>LIVE ROUTE</span>
              <span>İstanbul / cadence mode</span>
            </div>
            <div class="hero-hud hud-bottom">
              <div>
                <small>Aktif yüzey</small>
                <strong>Koşu, kulüp, topluluk aynı ekran</strong>
              </div>
              <div>
                <small>Ruconn mantığı</small>
                <strong>Öncesi, anı ve sonrası kopmaz</strong>
              </div>
            </div>
            <div class="hero-float-card hero-float-a">
              <small>DISCOVER</small>
              <strong>Yakındaki koşuyu hızla seç</strong>
            </div>
            <div class="hero-float-card hero-float-b">
              <small>COMMUNITY</small>
              <strong>Bir etkinlikten kalıcı ritme geç</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="momentum-strip reveal-up" aria-label="Öne çıkan değerler">
        <article>
          <span class="signal-kicker">Keşif</span>
          <strong>Doğru koşu, tek bakışta.</strong>
          <p>Tempo, rota, kulüp ve enerji net görünür.</p>
        </article>
        <article>
          <span class="signal-kicker">Katılım</span>
          <strong>RSVP değil, gerçek hazırlık.</strong>
          <p>Kim geliyor ve ortam nasıl, önceden hissedilir.</p>
        </article>
        <article>
          <span class="signal-kicker">Süreklilik</span>
          <strong>Koşu biter, bağ bitmez.</strong>
          <p>Tek seferlik etkinlik yerine tekrar eden topluluk ritmi kurulur.</p>
        </article>
      </section>

      <section id="neden" class="section why-section">
        <div class="section-heading section-heading-wide reveal-up">
          <p class="eyebrow">Neden Ruconn</p>
          <h2>Etkinlik ekranından daha fazlası.</h2>
          <p>Ruconn, koşunun etrafındaki sosyal akışı daha net, daha düzenli ve daha premium bir deneyime çevirir.</p>
        </div>

        <div class="why-grid">
          <article class="why-card why-card-large reveal-up feature-card">
            <span>01 · Koşucu</span>
            <h3>Bul ve hemen katıl.</h3>
            <p>Şehirdeki doğru koşuyu seç, hissini anla, topluluğa düşük sürtünmeyle gir.</p>
          </article>
          <article class="why-card reveal-up feature-card">
            <span>02 · Community layer</span>
            <h3>Dağınık mesaj yerine net akış.</h3>
            <p>Duyuru, katılım ve devamlılık tek yerde akar.</p>
          </article>
          <article class="why-card reveal-up feature-card accent-card">
            <span>03 · Kulüp</span>
            <h3>Daha görünür, daha kontrollü.</h3>
            <p>Operasyon yükü azalır; topluluk ritmi güçlenir.</p>
          </article>
        </div>

        <div class="why-rail">
          <div class="why-rail-item reveal-up">
            <strong>Öncesi</strong>
            <p>Belirsizlik azalır.</p>
          </div>
          <div class="why-rail-item reveal-up">
            <strong>Anı</strong>
            <p>Daha sıcak katılım hissi.</p>
          </div>
          <div class="why-rail-item reveal-up">
            <strong>Sonrası</strong>
            <p>Bir sonraki koşuya dönüş artar.</p>
          </div>
        </div>
      </section>

      <section id="deneyim" class="section experience-section">
        <div class="section-heading reveal-up narrow">
          <p class="eyebrow">Deneyim akışı</p>
          <h2>Üç net adım. Tek premium akış.</h2>
        </div>

        <div class="experience-stack">
          <article class="experience-card experience-card-a reveal-up">
            <div class="experience-index">01</div>
            <h3>Bul</h3>
            <p>Koşuları filtrelemeden bile doğru hissi yakala.</p>
            <ul>
              <li>Rota ve tempo görünürlüğü</li>
              <li>Kulüp tonu ve format sinyali</li>
              <li>Yeni gelen için kolay giriş</li>
            </ul>
          </article>

          <article class="experience-card experience-card-b reveal-up">
            <div class="experience-index">02</div>
            <h3>Katıl</h3>
            <p>Mesaj karmaşası olmadan hazırlan.</p>
            <ul>
              <li>Kim geliyor, önceden gör</li>
              <li>Etkinlik öncesi sosyal ısınma</li>
              <li>Sade katılım akışı</li>
            </ul>
          </article>

          <article class="experience-card experience-card-c reveal-up">
            <div class="experience-index">03</div>
            <h3>Sürdür</h3>
            <p>Tek koşudan düzenli topluluğa geç.</p>
            <ul>
              <li>Etkinlik sonrası bağın korunması</li>
              <li>Seri koşular için ritim</li>
              <li>Daha güçlü geri dönüş oranı</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="kulupler" class="section clubs-section">
        <div class="clubs-layout">
          <div class="clubs-copy reveal-up">
            <p class="eyebrow">Kulüpler için</p>
            <h2>Daha net görünürlük. Daha az sürtünme.</h2>
            <p>Ruconn, kulüplerin etkinlik yayını, topluluk devamlılığı ve operasyon akışını tek yüzeyde toplar.</p>
          </div>

          <div class="clubs-grid">
            <article class="clubs-card reveal-up">
              <small>Community</small>
              <h3>Yeni geleni içeride tut</h3>
              <p>İlk katılımı tekrar eden ilişkiye çevir.</p>
            </article>
            <article class="clubs-card reveal-up">
              <small>Events</small>
              <h3>Akışı tekrar kurulabilir yap</h3>
              <p>Seri koşular ve özel buluşmalar tek ritimde ilerler.</p>
            </article>
            <article class="clubs-card reveal-up">
              <small>Operations</small>
              <h3>Mesaj kaosunu azalt</h3>
              <p>Duyuru ve katılım daha yönetilebilir hale gelir.</p>
            </article>
            <article class="clubs-card quote-card reveal-up">
              <p>“Sahada hızlı, operasyonda temiz.”</p>
              <span>Ruconn prensibi</span>
            </article>
          </div>
        </div>
      </section>

      <section class="section metrics-section">
        <div class="metrics-panel reveal-up">
          <div class="metrics-copy">
            <p class="eyebrow">Ne satıyoruz?</p>
            <h2>Daha çok katılım. Daha güçlü topluluk.</h2>
            <p>Kullanıcı için giriş kolaylaşır; kulüp için görünürlük ve devamlılık güçlenir.</p>
          </div>
          <div class="metrics-list">
            <div>
              <strong>01</strong>
              <span>Discovery → join → return</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Visibility → attendance → continuity</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Tek mesaj: koşu etrafındaki ritmi toparla</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="cta section reveal-up">
        <div>
          <p class="eyebrow">Erken erişim / Demo</p>
          <h2>Kulübünü daha dinamik bir akışa taşı.</h2>
          <p>Ruconn’u sahada birlikte keskinleştirmek için demo planlayalım.</p>
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
  const routeMaterial = new THREE.LineBasicMaterial({ color: 0x7fff3a, transparent: true, opacity: 0.95 })
  const routeLine = new THREE.Line(routeGeometry, routeMaterial)
  scene.add(routeLine)

  const ghostGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(120))
  const ghostMaterial = new THREE.PointsMaterial({ color: 0x1e3a5f, size: 0.08, transparent: true, opacity: 0.9 })
  const ghostTrail = new THREE.Points(ghostGeometry, ghostMaterial)
  scene.add(ghostTrail)

  const ringGeometry = new THREE.TorusGeometry(0.72, 0.02, 16, 120)
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x7fff3a, transparent: true, opacity: 0.18 })
  const ring = new THREE.Mesh(ringGeometry, ringMaterial)
  ring.rotation.x = 1.2
  ring.position.set(-0.8, 0.2, -0.8)
  scene.add(ring)

  const pulseGeometry = new THREE.SphereGeometry(0.16, 24, 24)
  const pulseMaterial = new THREE.MeshBasicMaterial({ color: 0x7fff3a })
  const runner = new THREE.Mesh(pulseGeometry, pulseMaterial)
  scene.add(runner)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0x7fff3a, 14, 30, 2)
  pointLight.position.set(1.4, 2.4, 3.2)
  scene.add(pointLight)

  const secondaryLight = new THREE.PointLight(0x1e3a5f, 12, 24, 2)
  secondaryLight.position.set(-3.2, -1.8, 2.6)
  scene.add(secondaryLight)

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
    secondaryLight.intensity = 9 + Math.cos(elapsed * 1.6) * 2

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

  gsap.to('.hero-glow-primary', {
    x: 26,
    y: -30,
    duration: 5.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-glow-secondary', {
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
