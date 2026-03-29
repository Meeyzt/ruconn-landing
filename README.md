# Ruconn Landing

Ruconn için Vite tabanlı, premium hissiyatlı, Türkçe bir landing page.

Bu sürümde sayfa; discovery + community + club operations anlatısını netleştiren, daha karanlık ve atletik bir tasarım diliyle yeniden kurgulandı. Amaç "özellik kataloğu" çıkarmak değil, ürün vaadini ilk dakikada satmak.

## Öne çıkanlar
- Türkçe, sade ama güçlü ürün metinleri
- Dark / premium / athletic görsel dil
- GSAP + ScrollTrigger ile kontrollü reveal ve ambient motion
- Discovery → Bağlan → Yönet akışına dayalı bilgi mimarisi
- Kulüpler için operasyon, görünürlük ve retention vurgusu
- Responsive yapı ve build alınabilir Vite setup

## Teknoloji
- Vite
- Vanilla JavaScript
- GSAP / ScrollTrigger

## Neden Three.js yok?
Bu iterasyonda Three.js özellikle eklenmedi.
Hero’daki ambient hareket ve premium yüzey hissi, daha hafif ve daha kontrollü şekilde CSS + GSAP ile çözüldü. Görsel olarak gerçek fark yaratacak özgün 3D obje / sahne ihtiyacı doğduğunda sonraki sürümde eklenebilir.

## Bilgi mimarisi
1. Hero
2. Signal band
3. Ürün vaadi
4. Platform akışı
5. Kulüp operasyon bölümü
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
- Partner kulüpler için ayrı conversion route tasarlamak
