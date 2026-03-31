import './styles.css'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector('#app')

app.innerHTML = `
<canvas id="scene" aria-hidden="true"></canvas>

<div class="event-tooltip" id="event-tooltip">
  <strong></strong>
  <span></span>
</div>

<div class="content">
  <header class="nav">
    <a class="nav-logo" href="#" aria-label="Ruconn ana sayfa">
      <span class="nav-logo-dot"></span>
      Ruconn
    </a>
    <nav class="nav-links" aria-label="Ana navigasyon">
      <a href="#features">Platform</a>
      <a href="#journey">Nasıl Çalışır</a>
      <a href="#community">Topluluk</a>
    </nav>
    <a class="btn btn-sm" href="#cta">Erken Erişim</a>
  </header>

  <section class="hero" id="hero">
    <div class="hero-inner">
      <p class="tag">Koşu topluluk platformu</p>
      <h1><span class="word">Koş.</span> <span class="word">Tanış.</span> <span class="word">Tekrarla.</span></h1>
      <p class="hero-desc">Ruconn, seni koşu etkinlikleriyle buluşturan ve her koşuyu sosyal bir deneyime dönüştüren topluluk platformu.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#cta">Erken erişim iste</a>
        <a class="btn btn-outline" href="#features">Keşfet</a>
      </div>
    </div>
    <div class="scroll-hint" aria-hidden="true">
      <span>Kaydır</span>
      <div class="scroll-hint-line"></div>
    </div>
  </section>

  <section class="manifesto" id="manifesto">
    <div class="manifesto-inner">
      <h2>Koşmak bireysel bir aktivite.<br>Ama en iyi anılar birlikte koşarken oluşur.</h2>
      <p>Ruconn, koşu kulüplerini, etkinlikleri ve koşucuları tek bir platformda buluşturur. Performans takibi değil, topluluk deneyimi.</p>
    </div>
  </section>

  <section class="features" id="features">
    <div class="features-head">
      <p class="tag">Platform</p>
      <h2>Her koşunun arkasında bir topluluk var.</h2>
    </div>
    <div class="features-grid">
      <article class="feat reveal">
        <span class="feat-num">01</span>
        <h3>Etkinlik Keşfi</h3>
        <p>Sana uygun koşu etkinliklerini mesafe, tempo ve seviyeye göre keşfet. Rota, format ve topluluk tonu tek bakışta netleşir.</p>
      </article>
      <article class="feat reveal">
        <span class="feat-num">02</span>
        <h3>Tek Dokunuşla Katılım</h3>
        <p>Etkinliğe katıl, kimler geliyor gör, organizatörle iletişim kur. Her şey tek akışta.</p>
      </article>
      <article class="feat reveal">
        <span class="feat-num">03</span>
        <h3>Sosyal Bağ</h3>
        <p>Koşu sırasında ve sonrasında sohbet et, fotoğraf paylaş, yeni insanlarla tanış.</p>
      </article>
      <article class="feat reveal">
        <span class="feat-num">04</span>
        <h3>Kulüp Ekosistemi</h3>
        <p>Kulübünü oluştur, etkinliklerini yönet, topluluğunu büyüt. Ruconn, kulüp yöneticileri için güçlü bir operasyon aracı.</p>
      </article>
    </div>
  </section>

  <section class="journey" id="journey">
    <div class="journey-head">
      <p class="tag">Yolculuk</p>
      <h2>Bir etkinliğin hikayesi.</h2>
    </div>
    <div class="journey-grid">
      <div class="jstep reveal">
        <span class="jstep-num">01</span>
        <h3>Keşfet</h3>
        <p>Çevreni veya ilgi alanına göre koşu etkinliklerini keşfet ve sana uygun olanı bul.</p>
      </div>
      <div class="jstep reveal">
        <span class="jstep-num">02</span>
        <h3>Katıl</h3>
        <p>Tek dokunuşla katıl. Kim geliyor, rota ne, tempo ne — her şey net ve açık.</p>
      </div>
      <div class="jstep reveal">
        <span class="jstep-num">03</span>
        <h3>Yaşa</h3>
        <p>Birlikte koş, yeni insanlarla tanış, anı paylaş. Etkinlik günü daha akıcı başlar.</p>
      </div>
      <div class="jstep reveal">
        <span class="jstep-num">04</span>
        <h3>Büyüt</h3>
        <p>Etkinlik biter ama bağ bitmez. Topluluk hafızası güçlenir, sonraki buluşma kolaylaşır.</p>
      </div>
    </div>
  </section>

  <section class="audiences" id="community">
    <div class="aud-card reveal">
      <p class="tag">Koşucular için</p>
      <h3>Spor yaparken sosyalleş.</h3>
      <p>Yeni insanlarla tanış, motivasyonunu artır, her hafta farklı bir deneyim yaşa.</p>
      <ul>
        <li>Etkinlikleri kolayca keşfet</li>
        <li>Yeni koşu arkadaşları bul</li>
        <li>Topluluk deneyimi yaşa</li>
      </ul>
    </div>
    <div class="aud-card aud-card-accent reveal">
      <p class="tag">Kulüpler için</p>
      <h3>Topluluğunu yönet ve büyüt.</h3>
      <p>Etkinlik oluştur, katılımcıları yönet, topluluğunla iletişim kur.</p>
      <ul>
        <li>Etkinlik oluştur ve yayınla</li>
        <li>Katılımcı ve üye yönetimi</li>
        <li>Duyuru ve iletişim araçları</li>
      </ul>
    </div>
  </section>

  <section class="cta-section" id="cta">
    <div class="cta-inner reveal">
      <h2>Topluluğun seni bekliyor.</h2>
      <p>Ruconn yakında. İlk kullananlardan ol.</p>
      <a class="btn btn-primary btn-lg" href="mailto:hello@ruconn.com?subject=Ruconn%20Erken%20Erişim">Erken erişim iste</a>
    </div>
  </section>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="nav-logo"><span class="nav-logo-dot"></span>Ruconn</span>
        <p>Birlikte koşmanın yeni yolu.</p>
      </div>
      <a href="mailto:hello@ruconn.com">hello@ruconn.com</a>
    </div>
  </footer>
</div>
`

// ─── State ───
const isMobile = window.innerWidth < 768
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let scrollTarget = 0
let scrollSmooth = 0
let mouseX = 0
let mouseY = 0
let hoveredNode = null

// ─── Three.js Scene ───
const canvas = document.querySelector('#scene')
const tooltip = document.querySelector('#event-tooltip')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: false })
renderer.setClearColor(0x0E0C0A)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)

const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0x0E0C0A, 0.028)

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 1.5, 14)

const networkGroup = new THREE.Group()
scene.add(networkGroup)

// ─── Event Nodes ───
const eventData = [
  { name: 'Caddebostan Tempo', participants: 24, pos: [3.2, 2.0, -1.0] },
  { name: 'Bebek Sahil Koşusu', participants: 18, pos: [-3.8, 0.6, 1.8] },
  { name: 'Belgrad Ormanı Trail', participants: 31, pos: [0.2, -2.8, 1.2] },
  { name: 'Fenerbahçe Parkuru', participants: 15, pos: [4.0, -1.2, -2.2] },
  { name: 'Maçka Parkı Morning Run', participants: 22, pos: [-2.4, 3.0, -0.8] }
]

const eventPositions = eventData.map(d => new THREE.Vector3(...d.pos))

const eventNodes = eventData.map((data, i) => {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 28, 28),
    new THREE.MeshPhysicalMaterial({
      color: 0x7FFF3A,
      emissive: 0x7FFF3A,
      emissiveIntensity: 0.9,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.92
    })
  )
  mesh.position.set(...data.pos)
  mesh.userData = data
  mesh.scale.setScalar(0)

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.32, 0.44, 48),
    new THREE.MeshBasicMaterial({
      color: 0x7FFF3A,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    })
  )
  ring.position.copy(mesh.position)
  ring.scale.setScalar(0)

  const hitArea = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 8, 8),
    new THREE.MeshBasicMaterial({ visible: false })
  )
  hitArea.position.copy(mesh.position)
  hitArea.userData = data

  networkGroup.add(mesh, ring, hitArea)
  return { mesh, ring, hitArea, data }
})

const hitMeshes = eventNodes.map(n => n.hitArea)

// ─── Community Particles ───
const particleCount = isMobile ? 180 : 350
const positions = new Float32Array(particleCount * 3)
const startPositions = new Float32Array(particleCount * 3)
const targetPositions = new Float32Array(particleCount * 3)
const sizes = new Float32Array(particleCount)
const colors = new Float32Array(particleCount * 3)

const coral = new THREE.Color(0x7FFF3A)
const gold = new THREE.Color(0x7FFF3A)
const cream = new THREE.Color(0xF7F8FA)

for (let i = 0; i < particleCount; i++) {
  let tx, ty, tz
  if (Math.random() < 0.55) {
    const center = eventPositions[Math.floor(Math.random() * eventPositions.length)]
    const spread = 1.4 + Math.random() * 2.2
    tx = center.x + (Math.random() - 0.5) * spread
    ty = center.y + (Math.random() - 0.5) * spread
    tz = center.z + (Math.random() - 0.5) * spread
  } else {
    tx = (Math.random() - 0.5) * 14
    ty = (Math.random() - 0.5) * 10
    tz = (Math.random() - 0.5) * 8
  }

  targetPositions[i * 3] = tx
  targetPositions[i * 3 + 1] = ty
  targetPositions[i * 3 + 2] = tz

  startPositions[i * 3] = (Math.random() - 0.5) * 30
  startPositions[i * 3 + 1] = (Math.random() - 0.5) * 24
  startPositions[i * 3 + 2] = (Math.random() - 0.5) * 20

  positions[i * 3] = startPositions[i * 3]
  positions[i * 3 + 1] = startPositions[i * 3 + 1]
  positions[i * 3 + 2] = startPositions[i * 3 + 2]

  sizes[i] = 0.025 + Math.random() * 0.05

  const r = Math.random()
  const c = r < 0.4 ? coral : r < 0.65 ? gold : cream
  colors[i * 3] = c.r
  colors[i * 3 + 1] = c.g
  colors[i * 3 + 2] = c.b
}

const particleGeo = new THREE.BufferGeometry()
particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

const particles = new THREE.Points(
  particleGeo,
  new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
    depthWrite: false
  })
)
networkGroup.add(particles)

// ─── Network Connections ───
const connectionVerts = []
const maxConnections = isMobile ? 120 : 260
let connCount = 0

for (let i = 0; i < particleCount && connCount < maxConnections; i++) {
  for (let j = i + 1; j < particleCount && connCount < maxConnections; j++) {
    const dx = targetPositions[i * 3] - targetPositions[j * 3]
    const dy = targetPositions[i * 3 + 1] - targetPositions[j * 3 + 1]
    const dz = targetPositions[i * 3 + 2] - targetPositions[j * 3 + 2]
    const distSq = dx * dx + dy * dy + dz * dz

    if (distSq < 4.5 && Math.random() < 0.35) {
      connectionVerts.push(
        targetPositions[i * 3], targetPositions[i * 3 + 1], targetPositions[i * 3 + 2],
        targetPositions[j * 3], targetPositions[j * 3 + 1], targetPositions[j * 3 + 2]
      )
      connCount++
    }
  }
}

const connGeo = new THREE.BufferGeometry()
connGeo.setAttribute('position', new THREE.Float32BufferAttribute(connectionVerts, 3))

const connections = new THREE.LineSegments(
  connGeo,
  new THREE.LineBasicMaterial({ color: 0xF7F8FA, transparent: true, opacity: 0 })
)
networkGroup.add(connections)

// ─── Runner Paths ───
const pathDefs = [
  [0, 4], [4, 1], [1, 2], [2, 3]
]

const runnerPaths = pathDefs.map(([a, b]) => {
  const pa = eventPositions[a]
  const pb = eventPositions[b]
  const mid = new THREE.Vector3(
    (pa.x + pb.x) / 2 + (Math.random() - 0.5) * 2,
    (pa.y + pb.y) / 2 + (Math.random() - 0.5) * 2,
    (pa.z + pb.z) / 2 + (Math.random() - 0.5) * 1.5
  )
  return new THREE.CatmullRomCurve3([pa, mid, pb])
})

const tubes = runnerPaths.map(curve => {
  const geo = new THREE.TubeGeometry(curve, 36, 0.012, 6, false)
  const mat = new THREE.MeshBasicMaterial({ color: 0x7FFF3A, transparent: true, opacity: 0 })
  const mesh = new THREE.Mesh(geo, mat)
  networkGroup.add(mesh)
  return mesh
})

const runnerDots = runnerPaths.map((path, i) => {
  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 })
  )
  networkGroup.add(dot)
  return { dot, path, t: i * 0.25, speed: 0.0015 + Math.random() * 0.001 }
})

// ─── Background Stars ───
const starCount = isMobile ? 100 : 200
const starPos = new Float32Array(starCount * 3)
for (let i = 0; i < starCount; i++) {
  starPos[i * 3] = (Math.random() - 0.5) * 50
  starPos[i * 3 + 1] = (Math.random() - 0.5) * 50
  starPos[i * 3 + 2] = (Math.random() - 0.5) * 50
}
const starGeo = new THREE.BufferGeometry()
starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3))
const stars = new THREE.Points(
  starGeo,
  new THREE.PointsMaterial({ color: 0xF7F8FA, size: 0.04, transparent: true, opacity: 0.22 })
)
scene.add(stars)

// ─── Lights ───
scene.add(new THREE.AmbientLight(0xF7F8FA, 0.8))
const keyLight = new THREE.PointLight(0x7FFF3A, 18, 30, 2)
keyLight.position.set(3, 4, 5)
scene.add(keyLight)
const fillLight = new THREE.PointLight(0xF59E0B, 12, 25, 2)
fillLight.position.set(-4, -2, 4)
scene.add(fillLight)

// ─── Raycaster ───
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2(-10, -10)

// ─── Animation Loop ───
const timer = new THREE.Timer()

function animate() {
  timer.update()
  const elapsed = timer.getElapsed()

  scrollSmooth += (scrollTarget - scrollSmooth) * (reducedMotion ? 1 : 0.04)

  networkGroup.rotation.y = elapsed * 0.04

  eventNodes.forEach((node, i) => {
    const pulse = 1 + Math.sin(elapsed * 1.8 + i * 1.3) * 0.06
    node.mesh.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.1)
    node.ring.lookAt(camera.position)
    node.ring.material.opacity = 0.14 + Math.sin(elapsed * 2.2 + i * 0.9) * 0.06
  })

  runnerDots.forEach(r => {
    r.t = (r.t + r.speed) % 1
    const pos = r.path.getPointAt(r.t)
    r.dot.position.copy(pos)
  })

  stars.rotation.y = elapsed * 0.008

  const orbitAngle = scrollSmooth * Math.PI * 0.5
  const orbitRadius = 14 - scrollSmooth * 4
  const targetX = Math.sin(orbitAngle) * orbitRadius + mouseX * 0.6
  const targetY = 1.5 - scrollSmooth * 2 + mouseY * 0.4
  const targetZ = Math.cos(orbitAngle) * orbitRadius

  camera.position.x += (targetX - camera.position.x) * 0.035
  camera.position.y += (targetY - camera.position.y) * 0.035
  camera.position.z += (targetZ - camera.position.z) * 0.035

  const lookAtX = -2.8 * Math.max(0, 1 - scrollSmooth * 3)
  camera.lookAt(lookAtX, 0, 0)

  if (hoveredNode) {
    const wp = new THREE.Vector3()
    hoveredNode.getWorldPosition(wp)
    wp.project(camera)
    const sx = (wp.x + 1) / 2 * window.innerWidth
    const sy = (-wp.y + 1) / 2 * window.innerHeight
    tooltip.style.left = `${sx + 18}px`
    tooltip.style.top = `${sy - 12}px`
    tooltip.querySelector('strong').textContent = hoveredNode.userData.name
    tooltip.querySelector('span').textContent = `${hoveredNode.userData.participants} koşucu katılıyor`
    tooltip.classList.add('visible')
  } else {
    tooltip.classList.remove('visible')
  }

  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

// ─── Entrance Animation ───
if (!reducedMotion) {
  const morphState = { t: 0 }
  gsap.to(morphState, {
    t: 1,
    duration: 2.8,
    ease: 'expo.out',
    delay: 0.2,
    onUpdate: () => {
      const attr = particles.geometry.attributes.position
      for (let i = 0; i < particleCount * 3; i++) {
        attr.array[i] = startPositions[i] + (targetPositions[i] - startPositions[i]) * morphState.t
      }
      attr.needsUpdate = true
    }
  })

  gsap.to(connections.material, { opacity: 0.055, duration: 1.2, delay: 1.6 })

  tubes.forEach((tube, i) => {
    gsap.to(tube.material, { opacity: 0.12, duration: 0.8, delay: 2.0 + i * 0.1 })
  })

  runnerDots.forEach((r, i) => {
    gsap.to(r.dot.material, { opacity: 1, duration: 0.6, delay: 2.2 + i * 0.1 })
  })

  eventNodes.forEach((node, i) => {
    gsap.to(node.mesh.scale, {
      x: 1, y: 1, z: 1,
      duration: 0.9,
      delay: 1.8 + i * 0.12,
      ease: 'back.out(1.7)'
    })
    gsap.to(node.ring.scale, {
      x: 1, y: 1, z: 1,
      duration: 0.9,
      delay: 1.8 + i * 0.12,
      ease: 'back.out(1.7)'
    })
  })

  gsap.from('.nav', { y: -30, opacity: 0, duration: 0.9, ease: 'expo.out', delay: 0.1 })
  gsap.from('.hero .tag', { y: 20, opacity: 0, duration: 0.8, ease: 'expo.out', delay: 0.3 })
  gsap.from('.hero .word', {
    y: 50, opacity: 0, rotateX: -12,
    stagger: 0.1,
    duration: 1,
    ease: 'expo.out',
    delay: 0.45
  })
  gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'expo.out', delay: 0.85 })
  gsap.from('.hero-actions', { y: 20, opacity: 0, duration: 0.8, ease: 'expo.out', delay: 1.0 })
  gsap.from('.scroll-hint', { opacity: 0, duration: 1, delay: 1.8 })
}

// ─── Scroll Triggers ───
ScrollTrigger.create({
  trigger: document.body,
  start: 'top top',
  end: 'bottom bottom',
  scrub: 0.6,
  onUpdate: (self) => { scrollTarget = self.progress }
})

if (!reducedMotion) {
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el,
      { y: 36, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.9,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    )
  })

  gsap.utils.toArray('.manifesto-inner, .features-head, .journey-head').forEach(el => {
    gsap.fromTo(el,
      { y: 40, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 1,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    )
  })

  gsap.fromTo('.cta-inner',
    { y: 40, autoAlpha: 0 },
    {
      y: 0, autoAlpha: 1,
      duration: 1,
      ease: 'expo.out',
      clearProps: 'transform,opacity,visibility',
      scrollTrigger: { trigger: '.cta-inner', start: 'top 85%', once: true }
    }
  )
} else {
  document.querySelectorAll('.reveal, .manifesto-inner, .features-head, .journey-head, .cta-inner').forEach(el => {
    el.style.opacity = '1'
    el.style.visibility = 'visible'
    el.style.transform = 'none'
  })

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = targetPositions[i]
  }
  particles.geometry.attributes.position.needsUpdate = true
  connections.material.opacity = 0.055
  tubes.forEach(t => { t.material.opacity = 0.12 })
  runnerDots.forEach(r => { r.dot.material.opacity = 1 })
  eventNodes.forEach(n => {
    n.mesh.scale.setScalar(1)
    n.ring.scale.setScalar(1)
  })
}

// ─── Event Listeners ───
window.addEventListener('resize', () => {
  const w = window.innerWidth
  const h = window.innerHeight
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
})

window.addEventListener('pointermove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (0.5 - e.clientY / window.innerHeight) * 2

  pointer.x = (e.clientX / window.innerWidth) * 2 - 1
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1

  const topEl = document.elementFromPoint(e.clientX, e.clientY)
  const overOpaqueSections = topEl?.closest('.manifesto, .features, .journey, .audiences, .site-footer, .nav')

  if (overOpaqueSections) {
    hoveredNode = null
    document.body.style.cursor = ''
    return
  }

  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(hitMeshes)

  if (hits.length > 0) {
    hoveredNode = hits[0].object
    document.body.style.cursor = 'pointer'
  } else {
    hoveredNode = null
    document.body.style.cursor = ''
  }
})

window.addEventListener('load', () => ScrollTrigger.refresh())
