# Ruconn Landing

Ruconn için Vite tabanlı, premium hissiyatlı, Türkçe bir landing page.

Bu sürümde sayfa; discovery + community + club operations anlatısını, özellikle koşu kulüpleri, yürüyüş toplulukları ve community yöneticileri için netleştiren daha karanlık ve atletik bir tasarım diliyle kurgulandı. Amaç "özellik kataloğu" çıkarmak değil, ürün vaadini ilk dakikada satmak.

## Öne çıkanlar
- Türkçe, sade ama güçlü ürün metinleri
- Dark / premium / athletic görsel dil
- GSAP + ScrollTrigger ile kontrollü reveal ve ambient motion
- Discovery → Koordine et → Sürdür akışına dayalı bilgi mimarisi
- Kulüpler ve topluluk yöneticileri için operasyon, görünürlük, katılım ve retention vurgusu
- Responsive yapı ve build alınabilir Vite setup

## Teknoloji
- Vite
- Vanilla JavaScript
- GSAP / ScrollTrigger

## Görsel yaklaşım
Bu iterasyonda mevcut Three.js rota sahnesi ve GSAP hareket dili korunur.
Amaç, görsel yönü değiştirmek değil; ürün pozisyonlamasını kulüp ve topluluk yöneticilerine daha doğru anlatacak şekilde güncellemektir.

## Bilgi mimarisi
1. Hero
2. Signal band
3. Ürün vaadi
4. Platform / operasyon akışı
5. Kulüp ve topluluk operasyon bölümü
6. Manifesto
7. Final CTA

Detaylar için: `src/ia.md`

## Geliştirme
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Dosya yapısı
- `index.html` → giriş dosyası ve meta tanımları
- `src/main.js` → landing markup ve GSAP akışı
- `src/styles.css` → tüm görsel sistem ve responsive yapı
- `src/ia.md` → bilgi mimarisi ve içerik stratejisi

## Sonraki mantıklı adımlar
- Gerçek kulüp / koşu verileriyle sosyal kanıt eklemek
- E-posta formu veya waitlist entegrasyonu bağlamak
- Ürün ekran görüntüleri ya da gerçek UI preview’leri eklemek
- Partner kulüpler ve topluluk yöneticileri için ayrı conversion route tasarlamak
