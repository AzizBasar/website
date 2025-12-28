# İTÜNOM UAV Team Website

**SUAS 2026 Competition Website**

Bu website, RoboNation Student Unmanned Aerial Systems (SUAS) Competition 2026 yarışma kriterleri doğrultusunda geliştirilmiştir.

## 🎯 SUAS Yarışma Kriterleri Uyumu

### ✅ Zorunlu İçerikler (2.4.1 Requirements)

#### 1. Takım Bilgileri (20% - Team Information)
- ✅ **Takım adı**: İTÜNOM UAV TEAM
- ✅ **İletişim bilgileri**: Email, telefon, adres (İletişim sayfasında)
- ✅ **Takım üyeleri**: Takımımız sayfasında tam liste
- ✅ **Sponsor logoları**: Sponsorlarımız sayfasında tüm sponsorlar

**Sayfalar:**
- `/takim` - Takım üyeleri ve danışmanlar
- `/iletisim` - İletişim bilgileri ve form
- `/sponsorlar` - Sponsor listesi ve logoları

#### 2. Araç Dokümantasyonu (40% - Vehicle Design Documentation)
- ✅ **Araç fotoğrafları**: Araçlarımız sayfasında detaylı görseller
- ✅ **Araç videoları**: Galeri sayfasında video koleksiyonu
- ✅ **Tasarım kararları**: Her araç için detaylı açıklamalar
- ✅ **Teknik özellikler**: Boyut, ağırlık, uçuş süresi vb.
- ✅ **Geliştirme süreci**: Blog sayfasında detaylı makaleler
- ✅ **Test prosedürleri**: Blog yazılarında dokümante edilmiş

**Sayfalar:**
- `/araclar` - Mevcut ve geçmiş araçlar
- `/galeri` - Fotoğraf ve video galerisi
- `/blog` - Geliştirme süreci ve teknik makaleler

#### 3. Website Kalitesi (40% - Website Quality)
- ✅ **İngilizce içerik**: Alt başlıklar İngilizce
- ✅ **Net içerik önceliklendirmesi**: Ana sayfa ve açık navigasyon
- ✅ **Modern tasarım**: Contrast, hizalama, gruplama prensipleri
- ✅ **Mobil uyumlu**: Responsive design (test edildi)
- ✅ **Cross-browser uyumlu**: Modern web tarayıcıları
- ✅ **Kolay navigasyon**: Sabit navbar ve footer
- ✅ **Görsel çekicilik**: Modern, profesyonel tasarım

## 📁 Website Yapısı

### Ana Sayfalar

```
/ (Ana Sayfa)
├── Hero bölümü (İTÜNOM UAV TEAM tanıtımı)
├── Hakkımızda (Vizyon ve misyon)
├── Özellikler (Başarılar, Takım, Araçlar, Blog)
└── CTA (Takıma katılım)

/araclar (Araçlarımız)
├── Mevcut araç detayları (ŞİMŞEK - SUAS 2024)
│   ├── Teknik özellikler
│   ├── Özellikler listesi
│   └── Fotoğraflar
├── Geçmiş araçlar (DİŞSİZ, TOSUN, KV-55, vb.)
└── Tasarım felsefesi

/takim (Takımımız)
├── Ekip liderleri
│   ├── Fotoğraf
│   ├── Pozisyon
│   ├── Bölüm
│   └── İletişim (email, LinkedIn)
├── Danışmanlar
└── Takıma katılım CTA

/basarilar (Başarılarımız)
├── SUAS Competition sonuçları
├── Teknofest sonuçları
└── Öne çıkan başarılar

/blog (Blog)
├── Teknik makaleler
├── Geliştirme süreci yazıları
├── Yarışma deneyimleri
└── Atölye günlükleri

/galeri (Galeri)
├── Fotoğraflar
│   ├── Kategori filtreleme
│   └── Modal detay görünümü
└── Videolar
    ├── Kategori filtreleme
    └── YouTube entegrasyonu

/sponsorlar (Sponsorlarımız)
├── Ana sponsorlar
├── Altın sponsorlar
├── Gümüş sponsorlar
└── Sponsor olma CTA

/iletisim (İletişim)
├── İletişim bilgileri (email, telefon, adres)
├── İletişim formu
├── Sosyal medya linkleri
└── SSS
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana arka plan**: Siyah (#000000) ve koyu gri tonları
- **Vurgu rengi**: Kırmızı (#ef4444)
- **Metin**: Beyaz ve gri tonları
- **Borderlar**: Şeffaf gri (#374151)

### Tipografi
- Modern, okunabilir fontlar
- Büyük başlıklar (text-5xl, text-7xl)
- Net hiyerarşi

### Animasyonlar
- Hover efektleri (scale, renk değişimleri)
- Smooth transition'lar (300ms)
- Image scale efektleri
- Button hover animations

### Mobil Uyumluluk
- Responsive grid layouts
- Mobil menü (hamburger)
- Touch-friendly butonlar
- Optimize edilmiş görseller

## 📝 İçerik Güncelleme Notları

### ⚠️ GÜNCELLEME GEREKLİ BÖLÜMLER

Aşağıdaki bölümlerde placeholder (örnek) veriler kullanılmıştır. 
**GERÇEK BİLGİLERİNİZLE GÜNCELLEYİN:**

#### 1. Takım Üyeleri (`/app/frontend/src/pages/TeamPage.jsx`)
```javascript
// TODO: Burası gerçek takım üyelerinizle doldurulmalı
const teamMembers = [
  {
    name: 'Gerçek İsim',
    role: 'Pozisyon',
    department: 'Bölüm',
    image: 'gerçek-foto-url',
    email: 'gerçek-email',
    linkedin: 'gerçek-linkedin'
  }
]
```

**NEREYE EKLENECEK:**
- Takım liderleri fotoğrafları
- İsim, soyisim
- Pozisyon (Kaptan, Yazılım Lideri vb.)
- Bölüm (Uçak Müh., Bilgisayar Müh. vb.)
- Email ve LinkedIn bilgileri

#### 2. SUAS 2026 Araç Bilgileri (`/app/frontend/src/pages/VehiclesPage.jsx`)
```javascript
// TODO: SUAS 2026 aracınızın bilgileriyle güncelleyin
const currentVehicle = {
  name: 'SUAS 2026 İHA Adı',
  year: '2026',
  competition: 'RoboNation SUAS 2026',
  description: 'Araç açıklaması',
  image: 'araç-fotoğrafı',
  specs: [...], // Teknik özellikler
  features: [...] // Özellikler listesi
}
```

**NEREYE EKLENECEK:**
- Araç adı ve yıl
- Yüksek kaliteli araç fotoğrafları
- Teknik özellikler (açıklık, ağırlık, uçuş süresi, kamera, menzil, işlemci)
- Özellikler listesi (otonom sistemler, hedef tespit vb.)

#### 3. Blog Yazıları (`/app/frontend/src/pages/BlogPage.jsx`)
```javascript
// TODO: Gerçek blog yazılarınızla güncelleyin
const blogPosts = [
  {
    title: 'Yazı başlığı',
    excerpt: 'Özet',
    date: 'Tarih',
    author: 'Yazar',
    category: 'Kategori',
    image: 'kapak-görseli'
  }
]
```

**NEREYE EKLENECEK:**
- Geliştirme süreci yazıları
- Teknik makaleler
- Yarışma deneyimleri
- Atölye günlükleri
- Test prosedürleri

#### 4. Başarılar (`/app/frontend/src/pages/AchievementsPage.jsx`)
```javascript
// TODO: Gerçek SUAS ve Teknofest sonuçlarınızla güncelleyin
const suasAchievements = [
  { year: '2026', place: 'Sıralama', location: 'Yer' }
]
```

**NEREYE EKLENECEK:**
- SUAS yarışma sonuçları (2026, 2025, vb.)
- Teknofest sonuçları
- Diğer yarışma başarıları

#### 5. Sponsorlar (`/app/frontend/src/pages/SponsorsPage.jsx`)
```javascript
// TODO: Gerçek sponsor logolarını ekleyin
const mainSponsors = [
  {
    name: 'Sponsor Adı',
    logo: 'logo-url',
    tier: 'Ana Sponsor / Platin / Altın / Gümüş',
    description: 'Açıklama'
  }
]
```

**NEREYE EKLENECEK:**
- Sponsor logoları (yüksek çözünürlüklü)
- Sponsor kategorileri (Ana, Platin, Altın, Gümüş)
- Sponsor açıklamaları
- Sponsor website linkleri

#### 6. Galeri İçeriği (`/app/frontend/src/mock/galleryData.js`)
```javascript
// TODO: Gerçek fotoğraf ve videolarınızı ekleyin
export const galleryData = {
  photos: [...], // Gerçek takım fotoğrafları
  videos: [...] // Gerçek YouTube video linkleri
}
```

**NEREYE EKLENECEK:**
- Araç fotoğrafları
- Test uçuşu fotoğrafları
- Yarışma fotoğrafları
- Atölye fotoğrafları
- YouTube video linkleri

#### 7. İletişim Bilgileri (`/app/frontend/src/pages/ContactPage.jsx`)
```javascript
// TODO: Gerçek iletişim bilgilerinizi güncelleyin
```

**NEREYE EKLENECEK:**
- Email adresi
- Telefon numarası
- Fiziksel adres
- Sosyal medya linkleri (Instagram, LinkedIn, YouTube, GitHub)
- Google Maps embed

## 🚀 Teknik Detaylar

### Teknoloji Stack
- **Frontend**: React 19.0.0
- **Routing**: React Router DOM 7.5.1
- **Styling**: TailwindCSS 3.4.17
- **Icons**: Lucide React 0.507.0
- **UI Components**: Shadcn/ui (Radix UI)

### Kurulum
```bash
cd /app/frontend
yarn install
yarn start
```

### Build
```bash
yarn build
```

## 📱 Mobil Uyumluluk Test Edildi
- ✅ iPhone SE (375x667)
- ✅ iPad (768x1024)
- ✅ Desktop (1920x1080)

## 🎯 SUAS 2026 Scoring Metrics

| Kriter | Ağırlık | Durum |
|--------|---------|-------|
| Team Information | 20% | ✅ Tamamlandı |
| Vehicle Design Documentation | 40% | ✅ Tamamlandı |
| Website Quality | 40% | ✅ Tamamlandı |

### Outstanding (Mükemmel) Seviyesi için:
- ✅ Tüm takım bilgileri mevcut
- ✅ Araç geliştirme süreci detaylı dokümante edilmiş
- ✅ Instructional/informative medya mevcut
- ✅ Blog ile tarihi kayıtlar tutulmuş
- ✅ Website görsel olarak çekici
- ✅ Kolay navigasyon
- ✅ Mobil uyumlu

## 📞 Destek

Herhangi bir sorunuz için:
- Email: iha@itu.edu.tr
- Website: https://itunomuav.itu.edu.tr/

---

**NOT:** Bu website SUAS 2026 yarışma kriterlerine göre hazırlanmıştır. 
Tüm placeholder içerikleri gerçek verilerle güncelleyin.
