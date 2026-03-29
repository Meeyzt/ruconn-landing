import './styles.css'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const app = document.querySelector('#app')

gsap.registerPlugin(ScrollTrigger)

document.documentElement.classList.add('js-enhanced')

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand-wrap" href="#hero" aria-label="Ruconn ana sayfa">
        <span class="brand-mark"></span>
        <span class="brand-name">Ruconn</span>
      </a>

      <nav class="topnav" aria-label="Ana navigasyon">
        <a href="#neden">Ürün</a>
        <a href="#journey">Akış</a>
        <a href="#kulupler">Kulüpler</a>
        <a href="#cta">Demo</a>
      </nav>

      <a class="button button-ghost" href="#cta">Demo al</a>
    </header>

    <main>
      <section id="hero" class="hero section route-step" data-route-step="0" data-route-label="Başlangıç" data-route-title="Şehir açılıyor" data-route-copy="Kullanıcı ilk ekranda doğru koşuyu hissediyor; rota daha başlamadan netleşiyor.">
        <div class="hero-copy reveal-up">
          <p class="eyebrow">Koşu topluluğu işletim sistemi</p>
          <h1>Koşuyu bul. Katıl. Bağlı kal.</h1>
          <p class="hero-text">
            Ruconn, koşucu için keşfi ve katılımı; kulüp için görünürlüğü ve topluluk ritmini tek akışta toplar.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo planla</a>
            <a class="button button-secondary" href="#journey">Rotayı gör</a>
          </div>

          <div class="hero-proof">
            <div>
              <strong>14 koşu</strong>
              <span>Bu hafta canlı rotada</span>
            </div>
            <div>
              <strong>8 kulüp</strong>
              <span>Tek ritimde görünür</span>
            </div>
            <div>
              <strong>1 akış</strong>
              <span>Keşfet → katıl → geri dön</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal-scale" aria-hidden="true">
          <div class="hero-glow hero-glow-primary"></div>
          <div class="hero-glow hero-glow-secondary"></div>
          <div class="hero-scene-shell route-stage-shell">
            <canvas id="route-canvas"></canvas>
            <div class="hero-hud hud-top route-summary-bar">
              <span>CANLI ROTA</span>
              <span>İstanbul / ritim modu</span>
            </div>
            <div class="route-overlay" aria-hidden="true">
              <div class="route-overlay-copy">
                <small id="route-overlay-label">Başlangıç</small>
                <strong id="route-overlay-title">Şehir açılıyor</strong>
                <p id="route-overlay-copy">Kullanıcı ilk ekranda doğru koşuyu hissediyor; rota daha başlamadan netleşiyor.</p>
              </div>
              <div class="route-overlay-progress">
                <div class="route-progress-meta">
                  <span>Rota ilerleyişi</span>
                  <strong id="route-progress-value">00%</strong>
                </div>
                <div class="route-progress-track"><span id="route-progress-bar"></span></div>
              </div>
              <div class="route-overlay-checkpoints" id="route-overlay-checkpoints">
                <span class="is-active">Başlangıç</span>
                <span>Keşif</span>
                <span>Katılım</span>
                <span>Bağlılık</span>
                <span>Demo</span>
              </div>
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
              <small>KEŞFET</small>
              <strong>Yakındaki koşuyu hızla seç</strong>
            </div>
            <div class="hero-float-card hero-float-b">
              <small>TOPLULUK</small>
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

      <section id="journey" class="section route-journey" aria-label="Ruconn rota akışı">
        <div class="section-heading section-heading-wide reveal-up">
          <p class="eyebrow">Kaydırma boyunca rota</p>
          <h2>Açılıştan demo çağrısına tek bir koşu rotası.</h2>
          <p>Kullanıcı aşağı indikçe rota ilerler; her bölüm yeni bir kontrol noktası gibi davranır. Görsel sahne hareket eder ama arayüz temiz ve üst seviye kalır.</p>
        </div>

        <div class="journey-layout">
          <div class="journey-intro reveal-up">
            <span class="journey-kicker">Kontrol noktası mantığı</span>
            <p>Her blok yeni bir eşik. Canlı rota sahnesi sabit kalır, ilerleme hissi kaydırmayla derinleşir.</p>
          </div>

          <div class="journey-checkpoints">
            <article id="neden" class="route-checkpoint route-step reveal-up" data-route-step="1" data-route-label="Keşif" data-route-title="Doğru koşu öne çıkıyor" data-route-copy="Rota, tempo ve topluluk tonu tek bakışta anlaşılır; keşif sürtünmesizleşir.">
              <span class="checkpoint-index">01</span>
              <div>
                <p class="eyebrow">Keşif</p>
                <h3>Etkinlik ekranından daha fazlası.</h3>
                <p>Ruconn, koşunun etrafındaki sosyal akışı daha net, daha düzenli ve daha rafine bir deneyime çevirir.</p>
              </div>
            </article>

            <article id="deneyim" class="route-checkpoint route-step reveal-up" data-route-step="2" data-route-label="Katılım" data-route-title="Hazırlık sosyal olarak netleşiyor" data-route-copy="Kim geliyor, his nasıl, giriş ne kadar kolay; tüm katılım sinyalleri görünür oluyor.">
              <span class="checkpoint-index">02</span>
              <div>
                <p class="eyebrow">Katılım</p>
                <h3>Mesaj karmaşası yerine net hazırlık.</h3>
                <p>Koşu öncesi katılım sinyalleri tek yüzeyde toplanır; insanlar gelmeden önce birbirini hisseder.</p>
              </div>
            </article>

            <article id="kulupler" class="route-checkpoint route-step reveal-up" data-route-step="3" data-route-label="Bağlılık" data-route-title="Tek koşu topluluk ritmine dönüşüyor" data-route-copy="Kulüp için görünürlük güçleniyor; kullanıcı için bir sonraki koşuya geri dönmek doğal hale geliyor.">
              <span class="checkpoint-index">03</span>
              <div>
                <p class="eyebrow">Bağlılık</p>
                <h3>Kulüp ritmi daha sürdürülebilir hale gelir.</h3>
                <p>İlk katılım bir ilişki başlangıcına döner; seri koşular ve kulüp akışı daha kontrollü ilerler.</p>
              </div>
            </article>

            <article id="cta" class="route-checkpoint route-step reveal-up route-checkpoint-cta" data-route-step="4" data-route-label="Demo" data-route-title="Rota demo noktasında tamamlanıyor" data-route-copy="Hero’da başlayan çizgi burada kapanır: keşif, katılım ve devamlılık artık tek üründe toplanır.">
              <span class="checkpoint-index">04</span>
              <div>
                <p class="eyebrow">Demo</p>
                <h3>Bu akışı kulübüne taşı.</h3>
                <p>Ruconn’u sahada birlikte keskinleştirmek için tanıtım görüşmesi planlayalım.</p>
                <div class="cta-actions checkpoint-actions">
                  <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo planla</a>
                  <a class="button button-secondary" href="mailto:hello@ruconn.com?subject=Ruconn%20Erken%20Erişim">Erken erişim iste</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section why-section">
        <div class="why-grid">
          <article class="why-card why-card-large reveal-up feature-card">
            <span>01 · Koşucu</span>
            <h3>Bul ve hemen katıl.</h3>
            <p>Şehirdeki doğru koşuyu seç, hissini anla, topluluğa düşük sürtünmeyle gir.</p>
          </article>
          <article class="why-card reveal-up feature-card">
            <span>02 · Topluluk katmanı</span>
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

      <section class="section experience-section">
        <div class="section-heading reveal-up narrow">
          <p class="eyebrow">Deneyim akışı</p>
          <h2>Üç net adım. Tek üst seviye akış.</h2>
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
              <span>Keşif → katılım → geri dönüş</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Görünürlük → katılım → devamlılık</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Tek mesaj: koşu etrafındaki ritmi toparla</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setupRouteScene = () => {
  const canvas = document.querySelector('#route-canvas')
  const shell = document.querySelector('.route-stage-shell')
  const progressBar = document.querySelector('#route-progress-bar')
  const progressValue = document.querySelector('#route-progress-value')
  const overlayLabel = document.querySelector('#route-overlay-label')
  const overlayTitle = document.querySelector('#route-overlay-title')
  const overlayCopy = document.querySelector('#route-overlay-copy')
  const checkpointBadges = [...document.querySelectorAll('#route-overlay-checkpoints span')]

  if (!canvas || !shell) return null

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100)
  camera.position.set(0, 1.2, 9.5)

  const sizes = { width: 0, height: 0 }
  const state = {
    progress: 0,
    visualProgress: 0,
    checkpoint: 0
  }

  const routePoints = [
    new THREE.Vector3(-5.1, -1.6, -2.4),
    new THREE.Vector3(-3.8, -0.7, -1.7),
    new THREE.Vector3(-2.6, 0.8, -0.8),
    new THREE.Vector3(-1.1, 1.55, 0.2),
    new THREE.Vector3(0.7, 0.35, 1.25),
    new THREE.Vector3(2.0, -1.25, 0.65),
    new THREE.Vector3(3.55, -0.35, -0.55),
    new THREE.Vector3(5.15, 1.15, -1.75)
  ]

  const curve = new THREE.CatmullRomCurve3(routePoints, false, 'catmullrom', 0.45)
  const curvePoints = curve.getPoints(320)

  const routeGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
  routeGeometry.setDrawRange(0, 2)

  const routeLine = new THREE.Line(
    routeGeometry,
    new THREE.LineBasicMaterial({ color: 0x7fff3a, transparent: true, opacity: 0.92 })
  )
  scene.add(routeLine)

  const ghostLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(curve.getPoints(180)),
    new THREE.LineBasicMaterial({ color: 0x8cabd1, transparent: true, opacity: 0.14 })
  )
  scene.add(ghostLine)

  const checkpointGroup = new THREE.Group()
  scene.add(checkpointGroup)

  const checkpoints = routePoints.map((point, index) => {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.13, 0.19, 42),
      new THREE.MeshBasicMaterial({ color: index === 4 ? 0xffffff : 0x7fff3a, transparent: true, opacity: 0.38, side: THREE.DoubleSide })
    )
    ring.position.copy(point)
    ring.lookAt(camera.position)

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(index === 4 ? 0.12 : 0.09, 20, 20),
      new THREE.MeshBasicMaterial({ color: index === 4 ? 0xffffff : 0x7fff3a, transparent: true, opacity: index === 0 ? 1 : 0.4 })
    )
    core.position.copy(point)

    checkpointGroup.add(ring, core)
    return { ring, core }
  })

  const runner = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 26, 26),
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x7fff3a,
      emissiveIntensity: 1.6,
      roughness: 0.16,
      metalness: 0.04,
      transparent: true,
      opacity: 0.96
    })
  )
  scene.add(runner)

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.44, 0.018, 18, 120),
    new THREE.MeshBasicMaterial({ color: 0x7fff3a, transparent: true, opacity: 0.24 })
  )
  halo.rotation.x = Math.PI / 2
  scene.add(halo)

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.18)
  const keyLight = new THREE.PointLight(0x7fff3a, 18, 40, 2)
  keyLight.position.set(1.8, 3.2, 4.4)
  const fillLight = new THREE.PointLight(0x1e3a5f, 14, 36, 2)
  fillLight.position.set(-4.5, -1.8, 2.8)
  scene.add(ambientLight, keyLight, fillLight)

  const resize = () => {
    sizes.width = shell.clientWidth
    sizes.height = shell.clientHeight
    renderer.setSize(sizes.width, sizes.height, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
  }

  const setOverlay = ({ label, title, copy, index }) => {
    overlayLabel.textContent = label
    overlayTitle.textContent = title
    overlayCopy.textContent = copy
    checkpointBadges.forEach((badge, badgeIndex) => {
      badge.classList.toggle('is-active', badgeIndex === index)
      badge.classList.toggle('is-passed', badgeIndex < index)
    })
  }

  const setProgress = (progress) => {
    state.progress = gsap.utils.clamp(0, 1, progress)
    progressBar.style.transform = `scaleX(${Math.max(0.02, state.progress)})`
    progressValue.textContent = `${String(Math.round(state.progress * 100)).padStart(2, '0')}%`
  }

  resize()
  window.addEventListener('resize', resize)

  const render = () => {
    state.visualProgress += (state.progress - state.visualProgress) * (reducedMotion ? 1 : 0.08)

    const currentPoint = curve.getPointAt(state.visualProgress)
    const nextPoint = curve.getPointAt(Math.min(0.999, state.visualProgress + 0.01))

    runner.position.copy(currentPoint)
    runner.lookAt(nextPoint)
    halo.position.copy(currentPoint)

    const count = Math.max(2, Math.floor(state.visualProgress * curvePoints.length))
    routeGeometry.setDrawRange(0, count)

    checkpoints.forEach(({ ring, core }, index) => {
      const checkpointProgress = index / (checkpoints.length - 1)
      const active = state.visualProgress >= checkpointProgress - 0.02
      core.material.opacity = active ? 1 : 0.32
      ring.material.opacity = active ? 0.84 : 0.2
      ring.scale.setScalar(active ? 1.12 : 1)
      ring.lookAt(camera.position)
    })

    routeLine.rotation.z = THREE.MathUtils.lerp(routeLine.rotation.z, (state.visualProgress - 0.5) * 0.18, 0.06)
    ghostLine.rotation.z = THREE.MathUtils.lerp(ghostLine.rotation.z, (0.5 - state.visualProgress) * 0.12, 0.06)
    checkpointGroup.rotation.z = THREE.MathUtils.lerp(checkpointGroup.rotation.z, (state.visualProgress - 0.5) * 0.1, 0.05)
    keyLight.intensity = 15 + state.visualProgress * 6
    halo.rotation.z += reducedMotion ? 0 : 0.006

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, (state.visualProgress - 0.5) * 1.2, 0.04)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1 + state.visualProgress * 0.5, 0.04)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 9.5 - state.visualProgress * 1.4, 0.04)
    camera.lookAt(0.1, 0.1, 0)

    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(render)

  setProgress(0)
  setOverlay({
    label: 'Başlangıç',
    title: 'Şehir açılıyor',
    copy: 'Kullanıcı ilk ekranda doğru koşuyu hissediyor; rota daha başlamadan netleşiyor.',
    index: 0
  })

  return { setProgress, setOverlay }
}

const routeScene = setupRouteScene()

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
    gsap.fromTo(item,
      { y: 26, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.82,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          once: true
        }
      }
    )
  })

  gsap.utils.toArray('.experience-card').forEach((card, index) => {
    gsap.fromTo(card,
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.78,
        delay: index * 0.04,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true
        }
      }
    )
  })

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.6,
    onUpdate: (self) => {
      routeScene?.setProgress(self.progress)
    }
  })

  gsap.utils.toArray('.route-step').forEach((step) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        routeScene?.setOverlay({
          label: step.dataset.routeLabel,
          title: step.dataset.routeTitle,
          copy: step.dataset.routeCopy,
          index: Number(step.dataset.routeStep)
        })
      },
      onEnterBack: () => {
        routeScene?.setOverlay({
          label: step.dataset.routeLabel,
          title: step.dataset.routeTitle,
          copy: step.dataset.routeCopy,
          index: Number(step.dataset.routeStep)
        })
      }
    })
  })

  ScrollTrigger.create({
    trigger: '.experience-section',
    start: 'top 72%',
    end: 'bottom 68%',
    onUpdate: (self) => {
      gsap.to('.experience-card-a', { y: self.progress * -6, duration: 0.3, overwrite: 'auto' })
      gsap.to('.experience-card-b', { y: self.progress * -12, duration: 0.3, overwrite: 'auto' })
      gsap.to('.experience-card-c', { y: self.progress * -18, duration: 0.3, overwrite: 'auto' })
    }
  })
} else {
  document.querySelectorAll('.reveal-up, .experience-card').forEach((item) => {
    item.style.opacity = '1'
    item.style.visibility = 'visible'
    item.style.transform = 'none'
  })
  routeScene?.setProgress(0.22)
}

window.addEventListener('load', () => ScrollTrigger.refresh())
