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
        <a href="#platform">Platform</a>
        <a href="#journey">Journey</a>
        <a href="#community">Topluluklar</a>
        <a href="#cta">İletişim</a>
      </nav>

      <a class="button button-ghost" href="#cta">Demo isteyin</a>
    </header>

    <main>
      <section id="hero" class="hero section route-step" data-route-step="0" data-route-label="Ruconn" data-route-title="Topluluk operasyonu tek yüzeyde" data-route-copy="Etkinliği yayınlamak, katılımı görmek, duyuruları yönetmek ve üyeyi geri getirmek aynı ürün akışında birleşir.">
        <div class="hero-copy reveal-up">
          <p class="eyebrow">Koşu kulüpleri ve yürüyüş toplulukları için community operations platformu</p>
          <h1>Etkinliği daha net yayınlayın, koordinasyonu sakinleştirin.</h1>
          <p class="hero-text">
            Ruconn; discovery, organizasyon iletişimi ve tekrar katılımı tek akışta birleştirir.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Kulübünüz için demo isteyin</a>
            <a class="button button-secondary" href="#proof">Nasıl çalıştığını görün</a>
          </div>

          <div class="hero-proof">
            <div>
              <strong>Daha net yayın</strong>
              <span>Rota, pace, format ve seviye tek bakışta anlaşılır.</span>
            </div>
            <div>
              <strong>Daha sakin koordinasyon</strong>
              <span>Hatırlatmalar, katılım sinyalleri ve güncellemeler aynı yerde kalır.</span>
            </div>
            <div>
              <strong>Daha güçlü geri dönüş</strong>
              <span>Etkinlik sonrası bağ korunur, bir sonraki buluşma hızlanır.</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal-scale" aria-hidden="true">
          <div class="hero-glow hero-glow-primary"></div>
          <div class="hero-glow hero-glow-secondary"></div>
          <div class="hero-scene-shell route-stage-shell">
            <canvas id="route-canvas"></canvas>

            <div class="hero-panel hero-panel-top route-summary-bar">
              <span>LIVE COMMUNITY FLOW</span>
              <span>İstanbul · club mode</span>
            </div>

            <div class="hero-heroic-copy hero-heroic-copy-compact">
              <span>Discovery → coordination → retention</span>
              <strong>Her etkinlik bir sonraki katılımı da hazırlar.</strong>
            </div>

            <div class="hero-mini-path" aria-hidden="true">
              <div class="hero-mini-path-head">
                <span>CLUB FLOW</span>
                <span>weekly rhythm</span>
              </div>
              <div class="hero-mini-path-line">
                <span class="hero-mini-dot is-active"></span>
                <span class="hero-mini-dot"></span>
                <span class="hero-mini-dot"></span>
              </div>
              <div class="hero-mini-path-steps">
                <span>Yayınla</span>
                <span>Koordine et</span>
                <span>Geri getir</span>
              </div>
            </div>

            <div class="route-overlay route-overlay-compact" aria-hidden="true">
              <div class="route-overlay-copy">
                <small id="route-overlay-label">Ruconn</small>
                <strong id="route-overlay-title">Topluluk operasyonu tek yüzeyde</strong>
                <p id="route-overlay-copy">Etkinliği yayınlamak, katılımı görmek ve üyeyi geri getirmek aynı akışta birleşir.</p>
              </div>
              <div class="route-overlay-progress">
                <div class="route-progress-meta">
                  <span>Journey progress</span>
                  <strong id="route-progress-value">00%</strong>
                </div>
                <div class="route-progress-track"><span id="route-progress-bar"></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" class="signal-grid reveal-up" aria-label="Platform değerleri">
        <article>
          <span class="signal-kicker">01 · Discovery</span>
          <strong>Doğru etkinliği doğru üyeye daha hızlı ulaştırır.</strong>
          <p>Koşu, yürüyüş, pace, rota zorluğu ve topluluk tonu daha net görünür olur.</p>
        </article>
        <article>
          <span class="signal-kicker">02 · Coordination</span>
          <strong>Etkinlik öncesi operasyonu tek akışta toplar.</strong>
          <p>Duyurular, katılım görünürlüğü, son dakika güncellemeleri ve yönlendirmeler dağılmaz.</p>
        </article>
        <article>
          <span class="signal-kicker">03 · Retention</span>
          <strong>Katılan üyeyi bir sonraki etkinliğe daha kolay taşır.</strong>
          <p>Etkinlik sonrası bağ korunur; topluluk hafızası ve tekrar katılım kuvvetlenir.</p>
        </article>
      </section>

      <section id="proof" class="section proof-section">
        <div class="section-heading reveal-up section-heading-wide">
          <p class="eyebrow">Ürün nasıl değer üretir?</p>
          <h2>Chat karmaşasını azaltan, etkinliği daha anlaşılır yapan ve tekrar katılımı güçlendiren tek akış.</h2>
          <p>Ruconn, kulüp yöneticisinin sürekli açıklama yaptığı dağınık akış yerine; etkinlik bilgisi, katılım sinyali, operasyon notları ve topluluk devamlılığını tek ürün mantığında toplar.</p>
        </div>

        <div class="proof-grid">
          <article class="proof-card proof-card-wide reveal-up">
            <div class="proof-card-head">
              <span>Etkinlik görünümü</span>
              <strong>Üye daha gelmeden neyle karşılaşacağını anlar.</strong>
            </div>
            <div class="proof-event-shell" aria-label="Örnek etkinlik kartı">
              <div class="proof-event-top">
                <span>Salı akşam koşusu</span>
                <span>12 kişi geliyor</span>
              </div>
              <h3>Caddebostan tempo koşusu</h3>
              <p>Orta tempo · 6 km · başlangıç noktası net · yeni katılımcıya açık</p>
              <div class="proof-tags">
                <span>6K</span>
                <span>Orta tempo</span>
                <span>Yeni katılımcıya uygun</span>
              </div>
            </div>
          </article>

          <article class="proof-card reveal-up">
            <div class="proof-card-head">
              <span>Organizatör değeri</span>
              <strong>Aynı açıklamayı tekrar tekrar yapma yükü azalır.</strong>
            </div>
            <ul class="proof-list">
              <li>Rota, pace ve buluşma detayı tek yerde kalır.</li>
              <li>Katılım görünürlüğü daha öngörülebilir hale gelir.</li>
              <li>Son dakika duyuruları dağılmaz.</li>
            </ul>
          </article>

          <article class="proof-card reveal-up">
            <div class="proof-card-head">
              <span>Topluluk değeri</span>
              <strong>İyi etkinlik tek seferlik kalmaz, ritme dönüşür.</strong>
            </div>
            <ul class="proof-list">
              <li>Etkinlik sonrası bağ korunur.</li>
              <li>Yeni gelenler topluluğa daha kolay karışır.</li>
              <li>Bir sonraki buluşmaya dönüş eşiği düşer.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section editorial-band">
        <div class="section-heading reveal-up section-heading-wide">
          <p class="eyebrow">Ürün vaadi</p>
          <h2>Ruconn, topluluk organizasyonunu güzel göstermek için değil; gerçekten daha iyi işletmek için var.</h2>
          <p>Koşu kulüpleri ve yürüyüş toplulukları için en kritik problem sadece etkinlik açmak değil; doğru katılımcıyı çekmek, etkinlik gününü sakin yönetmek ve o enerjiyi sonraki buluşmaya taşımaktır.</p>
        </div>

        <div class="editorial-cards">
          <article class="editorial-card reveal-up">
            <span>Yöneticiler için</span>
            <h3>Daha görünür program, daha kontrollü akış.</h3>
            <p>Her etkinlik ayrı ayrı açıklanmak zorunda kalmaz; önemli bilgiler netleşir, tekrar eden operasyon yükü azalır.</p>
          </article>
          <article class="editorial-card reveal-up accent-card">
            <span>Üyeler için</span>
            <h3>Karar vermesi kolay, katılması güven veren deneyim.</h3>
            <p>Yeni gelenler neyle karşılaşacağını anlar; çekirdek üyeler ise takvimi daha düzenli takip eder.</p>
          </article>
          <article class="editorial-card reveal-up">
            <span>Topluluk için</span>
            <h3>Tek etkinlik değil, sürdürülebilir kulüp ritmi.</h3>
            <p>İyi organize edilen her buluşma, bir sonraki buluşmanın zeminini hazırlar ve topluluğun büyümesini hızlandırır.</p>
          </article>
        </div>
      </section>

      <section id="journey" class="section route-journey" aria-label="Ruconn journey akışı">
        <div class="section-heading reveal-up section-heading-wide">
          <p class="eyebrow">Editorial journey</p>
          <h2>Bir etkinliğin uçtan uca topluluk yolculuğu.</h2>
          <p>Aşağı indikçe akış discovery’den retention’a ilerler. Her durak, kulüplerin ve event ekiplerinin gerçek iş yükünü azaltan net bir ürün faydasını temsil eder.</p>
        </div>

        <div class="journey-board">
          <div class="journey-rail" aria-hidden="true">
            <span></span>
          </div>

          <article id="discover" class="journey-stop journey-stop-left route-step reveal-up" data-route-step="1" data-route-label="Discovery" data-route-title="Etkinlik daha doğru kitleye görünür" data-route-copy="Rota tipi, pace, topluluk tonu ve buluşma formatı netleştiğinde doğru üye daha hızlı karar verir.">
            <div class="journey-badge">01</div>
            <div class="journey-card">
              <p class="eyebrow">Discovery</p>
              <h3>Etkinlik ne, kimin için, hangi tempoda; ilk bakışta anlaşılır.</h3>
              <p>Haftalık kulüp koşusu, beginner walk ya da partnerli özel etkinlik fark etmeksizin; format, rota ve seviye tek bakışta netleşir.</p>
              <ul>
                <li>Rota, pace ve seviye bilgisi tek yerde görünür.</li>
                <li>Yeni katılımcı kararını daha hızlı verir.</li>
                <li>Etkinlik yanlış beklenti üretmeden anlatılır.</li>
              </ul>
            </div>
          </article>

          <article id="coordinate" class="journey-stop journey-stop-right route-step reveal-up" data-route-step="2" data-route-label="Coordination" data-route-title="Hazırlık ve duyurular tek akışta kalır" data-route-copy="Kim geliyor, ne değişti, hangi bilgi kritik; tüm sinyaller etkinlik öncesi tek yerde toplanır.">
            <div class="journey-badge">02</div>
            <div class="journey-card">
              <p class="eyebrow">Coordination</p>
              <h3>Hazırlık süreci ayrı mesajlara bölünmeden akar.</h3>
              <p>Katılım sinyalleri, hatırlatmalar, toplanma noktası ve son dakika güncellemeleri tek akışta kaldığında ekip daha sakin çalışır.</p>
              <ul>
                <li>Kim geliyor sorusu daha net cevaplanır.</li>
                <li>Kritik güncellemeler chat içinde kaybolmaz.</li>
                <li>Tekrarlayan açıklama yükü azalır.</li>
              </ul>
            </div>
          </article>

          <article id="eventday" class="journey-stop journey-stop-left route-step reveal-up" data-route-step="3" data-route-label="Event day" data-route-title="Buluşma anı daha akıcı yaşanır" data-route-copy="Üye neyle karşılaşacağını bilir; ekip ise etkinlik gününde daha az sürtünmeyle ilerler.">
            <div class="journey-badge">03</div>
            <div class="journey-card">
              <p class="eyebrow">Event day</p>
              <h3>Etkinlik günü daha az sürtünmeyle başlar.</h3>
              <p>Koşu ekibi, walking group ya da markalı community event fark etmeksizin; katılımcı neyle karşılaşacağını bilir, ekip daha kontrollü ilerler.</p>
              <ul>
                <li>Buluşma bilgisi daha net hissedilir.</li>
                <li>Yeni gelen için ilk deneyim daha güven verir.</li>
                <li>Ekip saha gününde daha az açıklama yapar.</li>
              </ul>
            </div>
          </article>

          <article id="community" class="journey-stop journey-stop-right route-step reveal-up" data-route-step="4" data-route-label="Retention" data-route-title="Etkinlik sonrası enerji kaybolmaz" data-route-copy="İletişim devam ettiği için topluluk hafızası güçlenir; geri dönüş ve tekrar katılım kolaylaşır.">
            <div class="journey-badge">04</div>
            <div class="journey-card journey-card-accent">
              <p class="eyebrow">Retention</p>
              <h3>İyi deneyim bir sonraki katılımı da hazırlar.</h3>
              <p>Etkinlik bittikten sonra bağ tamamen dağılmaz. Topluluk hafızası güçlenir ve bir sonraki buluşmaya dönmek daha doğal hale gelir.</p>
              <ul>
                <li>Bir sonraki etkinliğe dönüş eşiği düşer.</li>
                <li>Topluluk hafızası daha görünür kalır.</li>
                <li>Kulüp ritmi daha sürdürülebilir olur.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="section stack-section">
        <div class="section-heading reveal-up narrow">
          <p class="eyebrow">Nerede değer üretir?</p>
          <h2>Kulüpler, yürüyüş toplulukları ve event ekipleri için doğrudan operasyonel fayda.</h2>
        </div>

        <div class="stack-grid">
          <article class="stack-card reveal-up">
            <span>Koşu kulüpleri</span>
            <h3>Haftalık akışı daha görünür ve daha tutarlı yönetir.</h3>
            <p>Farklı pace grupları, farklı formatlar ve düzenli yayın akışı tek sistem mantığında toplanır.</p>
          </article>
          <article class="stack-card reveal-up">
            <span>Yürüyüş toplulukları</span>
            <h3>Yeni katılımcı için daha davetkar bir giriş kurar.</h3>
            <p>Seviye, tempo ve topluluk atmosferi daha anlaşılır olduğunda katılma eşiği düşer.</p>
          </article>
          <article class="stack-card reveal-up">
            <span>Etkinlik organizasyonu</span>
            <h3>Partnerli ve özel etkinlikleri daha sakin koordine eder.</h3>
            <p>Kampanya görünürlüğü, bilgilendirme ve saha günü iletişimi daha kontrollü ilerler.</p>
          </article>
        </div>
      </section>

      <section class="section metrics-section">
        <div class="metrics-panel reveal-up">
          <div class="metrics-copy">
            <p class="eyebrow">Ruconn neyi iyileştirir?</p>
            <h2>Daha yüksek katılım kalitesi. Daha düşük operasyon sürtünmesi. Daha güçlü topluluk devamlılığı.</h2>
            <p>Ürün dili basit: discovery’yi güçlendir, koordinasyonu toparla, event sonrası enerjiyi boşa bırakma.</p>
          </div>
          <div class="metrics-list">
            <div>
              <strong>01</strong>
              <span>Etkinliklerin anlaşılmasını hızlandırır</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Yöneticilerin tekrarlı mesaj yükünü azaltır</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Topluluğu yalnızca etkinlik günü aktif olmaktan çıkarır</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="section final-cta route-step reveal-up" data-route-step="4" data-route-label="Contact" data-route-title="Ruconn kulübünüze göre kurgulanabilir" data-route-copy="Koşu kulübü, walking community ya da marka destekli event serisi için doğru akışı birlikte tasarlayabiliriz.">
        <div class="final-cta-panel">
          <p class="eyebrow">İletişim</p>
          <h2>Ruconn’u topluluğunuza göre birlikte şekillendirelim.</h2>
          <p>Bir koşu kulübü, yürüyüş topluluğu veya etkinlik serisi yönetiyorsanız; mevcut akışınızı sadeleştirip tekrar katılımı güçlendirecek modeli birlikte konuşalım.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="mailto:hello@ruconn.com?subject=Ruconn%20Demo%20Talebi">Demo isteyin</a>
            <a class="button button-secondary" href="mailto:hello@ruconn.com?subject=Ruconn%20Topluluk%20Bilgisi">Topluluğunuzu anlatın</a>
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
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
  camera.position.set(0, 0.5, 10.6)

  const sizes = { width: 0, height: 0 }
  const state = {
    progress: 0,
    visualProgress: 0
  }

  const routePoints = [
    new THREE.Vector3(-5.4, 2.6, -2.4),
    new THREE.Vector3(-3.1, 1.2, -1.3),
    new THREE.Vector3(-1.8, -0.4, -0.4),
    new THREE.Vector3(0.8, -1.9, 0.8),
    new THREE.Vector3(3.1, -0.2, 1.4),
    new THREE.Vector3(4.2, 1.7, 0.8),
    new THREE.Vector3(2.2, 3.1, -0.3),
    new THREE.Vector3(-0.6, 1.3, -1.2),
    new THREE.Vector3(-2.8, -1.5, -0.2),
    new THREE.Vector3(-0.4, -3.4, 0.9),
    new THREE.Vector3(2.8, -2.4, 1.6),
    new THREE.Vector3(5.1, 0.4, 0.2)
  ]

  const curve = new THREE.CatmullRomCurve3(routePoints, false, 'catmullrom', 0.42)
  const curvePoints = curve.getPoints(420)

  const routeGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
  routeGeometry.setDrawRange(0, 2)

  const ghostGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(260))
  const ghostLine = new THREE.Line(
    ghostGeometry,
    new THREE.LineBasicMaterial({ color: 0x95a9c8, transparent: true, opacity: 0.12 })
  )
  scene.add(ghostLine)

  const routeLine = new THREE.Line(
    routeGeometry,
    new THREE.LineBasicMaterial({ color: 0x8cff58, transparent: true, opacity: 0.95 })
  )
  scene.add(routeLine)

  const checkpointGroup = new THREE.Group()
  scene.add(checkpointGroup)

  const stopIndexes = [0, 3, 6, 9, 11]
  const checkpoints = stopIndexes.map((pointIndex, index) => {
    const point = routePoints[pointIndex]

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.18, 0.26, 48),
      new THREE.MeshBasicMaterial({ color: index === 4 ? 0xffffff : 0x8cff58, transparent: true, opacity: 0.34, side: THREE.DoubleSide })
    )
    ring.position.copy(point)
    ring.lookAt(camera.position)

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(index === 4 ? 0.14 : 0.11, 24, 24),
      new THREE.MeshBasicMaterial({ color: index === 4 ? 0xffffff : 0x8cff58, transparent: true, opacity: index === 0 ? 1 : 0.38 })
    )
    core.position.copy(point)

    checkpointGroup.add(ring, core)
    return { ring, core, progress: pointIndex / (routePoints.length - 1) }
  })

  const runner = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 28, 28),
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x8cff58,
      emissiveIntensity: 1.8,
      roughness: 0.14,
      metalness: 0.08,
      transparent: true,
      opacity: 0.96
    })
  )
  scene.add(runner)

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.52, 0.018, 18, 120),
    new THREE.MeshBasicMaterial({ color: 0x8cff58, transparent: true, opacity: 0.22 })
  )
  halo.rotation.x = Math.PI / 2
  scene.add(halo)

  const starGeometry = new THREE.BufferGeometry()
  const starCount = 240
  const starPositions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i += 1) {
    starPositions[i * 3] = (Math.random() - 0.5) * 14
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 10
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 8
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  const stars = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.026, transparent: true, opacity: 0.45 })
  )
  scene.add(stars)

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.25)
  const keyLight = new THREE.PointLight(0x8cff58, 22, 42, 2)
  keyLight.position.set(2.8, 3.4, 4.2)
  const fillLight = new THREE.PointLight(0x335d96, 18, 36, 2)
  fillLight.position.set(-4.2, -2.4, 3.4)
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
    state.visualProgress += (state.progress - state.visualProgress) * (reducedMotion ? 1 : 0.065)

    const currentPoint = curve.getPointAt(state.visualProgress)
    const nextPoint = curve.getPointAt(Math.min(0.999, state.visualProgress + 0.008))

    runner.position.copy(currentPoint)
    runner.lookAt(nextPoint)
    halo.position.copy(currentPoint)

    const count = Math.max(2, Math.floor(state.visualProgress * curvePoints.length))
    routeGeometry.setDrawRange(0, count)

    checkpoints.forEach(({ ring, core, progress }) => {
      const active = state.visualProgress >= progress - 0.03
      core.material.opacity = active ? 1 : 0.26
      ring.material.opacity = active ? 0.86 : 0.18
      ring.scale.setScalar(active ? 1.14 : 1)
      ring.lookAt(camera.position)
    })

    routeLine.rotation.z = THREE.MathUtils.lerp(routeLine.rotation.z, (state.visualProgress - 0.5) * 0.16, 0.03)
    ghostLine.rotation.z = THREE.MathUtils.lerp(ghostLine.rotation.z, (0.5 - state.visualProgress) * 0.08, 0.03)
    checkpointGroup.rotation.z = THREE.MathUtils.lerp(checkpointGroup.rotation.z, (state.visualProgress - 0.5) * 0.1, 0.03)
    stars.rotation.z += reducedMotion ? 0 : 0.0009
    halo.rotation.z += reducedMotion ? 0 : 0.005

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, (state.visualProgress - 0.5) * 1.8, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.5 - state.visualProgress * 0.25, 0.03)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10.8 - state.visualProgress * 1.5, 0.03)
    camera.lookAt(0.2, -0.2, 0)

    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(render)

  setProgress(0)
  setOverlay({
    label: 'Ruconn',
    title: 'Topluluk operasyonu tek yüzeyde',
    copy: 'Etkinliği yayınlamak, katılımı görmek, duyuruları yönetmek ve üyeyi geri getirmek aynı ürün akışında birleşir.',
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
    y: 30,
    opacity: 0,
    duration: 0.88,
    stagger: 0.08,
    delay: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.hero-scene-shell', {
    y: 36,
    opacity: 0,
    scale: 0.97,
    duration: 1.15,
    ease: 'power3.out'
  })

  gsap.to('.hero-glow-primary', {
    x: 30,
    y: -28,
    duration: 5.6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-glow-secondary', {
    x: -20,
    y: 22,
    duration: 6.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-float-a', {
    y: -10,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.hero-float-b', {
    y: 12,
    duration: 2.9,
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

  gsap.utils.toArray('.journey-stop').forEach((stop, index) => {
    gsap.fromTo(stop,
      { y: 46, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.92,
        delay: index * 0.05,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: stop,
          start: 'top 86%',
          once: true
        }
      }
    )
  })

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.55,
    onUpdate: (self) => routeScene?.setProgress(self.progress)
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

  gsap.utils.toArray('.journey-card').forEach((card, index) => {
    gsap.to(card, {
      y: index % 2 === 0 ? -12 : -18,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8
      }
    })
  })
} else {
  document.querySelectorAll('.reveal-up, .journey-stop').forEach((item) => {
    item.style.opacity = '1'
    item.style.visibility = 'visible'
    item.style.transform = 'none'
  })
  routeScene?.setProgress(0.24)
}

window.addEventListener('load', () => ScrollTrigger.refresh())
