import React from 'react';
import { ArrowRight, Cpu, Radio, Camera, Battery, Ruler, Weight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehiclesPage = () => {
  // TODO: Bu bölümü gerçek araçlarınızın bilgileriyle güncelleyin
  const currentVehicle = {
    name: 'ŞİMŞEK',
    year: '2024',
    competition: 'RoboNation SUAS 2024',
    description: 'SUAS 2024 yarışması için geliştirilmiş tam otonom İHA sistemi. Gelişmiş görüntü işleme ve yapay zeka algoritması ile hedef tespit ve tanıma yeteneklerine sahiptir.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80',
    specs: [
      { icon: <Ruler size={20} />, label: 'Açıklık', value: '2.8 m' },
      { icon: <Weight size={20} />, label: 'Ağırlık', value: '12 kg' },
      { icon: <Battery size={20} />, label: 'Uçuş Süresi', value: '45 dk' },
      { icon: <Camera size={20} />, label: 'Kamera', value: '4K Gimbal' },
      { icon: <Radio size={20} />, label: 'Menzil', value: '5 km' },
      { icon: <Cpu size={20} />, label: 'İşlemci', value: 'Jetson Xavier NX' }
    ],
    features: [
      'Tam otonom uçuş kontrol sistemi',
      'Gelişmiş hedef tespit ve tanıma (YOLOv8)',
      'GPS ve görsel odometri hibrit navigasyon',
      'Gerçek zamanlı telemetri sistemi',
      'Otomatik iniş ve kalkış',
      'Çoklu failsafe sistemleri'
    ]
  };

  const pastVehicles = [
    {
      name: 'DİŞSİZ',
      year: '2024',
      competition: 'Teknofest Savaş İHA',
      image: 'https://images.unsplash.com/photo-1569144157596-33f2b5ab0a87?w=800&q=80',
      description: 'Teknofest 2024 Savaş İHA kategorisi için geliştirilen yüksek manevra kabiliyetine sahip platform.'
    },
    {
      name: 'TOSUN',
      year: '2022',
      competition: 'AUVSI SUAS 2022',
      image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80',
      description: 'SUAS 2022 yarışmasında 3. sırayı elde eden yüksek performanslı İHA sistemi.'
    },
    {
      name: 'KV-55',
      year: '2021',
      competition: 'Teknofest 2021',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
      description: 'Teknofest 2021 yarışmasında 3. sıra elde eden kompakt ve çevik tasarım.'
    },
    {
      name: 'BLACKSPARROW',
      year: '2020',
      competition: 'SUAS 2020',
      image: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?w=800&q=80',
      description: 'Yenilikçi karbon fiber gövde yapısı ve gelişmiş aviyoniklerle donatılmış platform.'
    },
    {
      name: 'GOLDENHORN',
      year: '2018',
      competition: 'AUVSI SUAS 2018',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
      description: 'Yüksek verimli kanat profili ve modular tasarımıyla öne çıkan sistem.'
    },
    {
      name: 'LODOS',
      year: '2017',
      competition: 'AUVSI SUAS 2017',
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&q=80',
      description: 'SUAS 2017 yarışmasında 4. sıra elde eden istikrarlı ve güvenilir platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            ARAÇLARIMIZ
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Yıllar içinde geliştirdiğimiz İHA sistemleri, mühendislik mükemmelliği ve 
            yenilikçi çözümlerin bir yansımasıdır.
          </p>
        </div>
      </section>

      {/* Current Vehicle Detailed Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Mevcut Araç: {currentVehicle.name}
            </h2>
            <p className="text-red-500 text-lg">{currentVehicle.competition}</p>
            <p className="text-gray-400 mt-2">
              NOT: Bu bölümü SUAS 2026 araç bilgilerinizle güncelleyin
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={currentVehicle.image}
                alt={currentVehicle.name}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentVehicle.description}
              </p>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Teknik Özellikler</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentVehicle.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2 text-red-500 mb-2">
                        {spec.icon}
                        <span className="text-sm text-gray-400">{spec.label}</span>
                      </div>
                      <p className="text-white font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Özellikler</h3>
                <ul className="space-y-2">
                  {currentVehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
            >
              <span>Geliştirme Sürecini İnceleyin</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Past Vehicles Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Geçmiş Araçlarımız
          </h2>
          <p className="text-center text-gray-400 mb-12">
            NOT: Bu bölümü gerçek geçmiş araçlarınızın bilgileriyle güncelleyin
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{vehicle.name}</h3>
                    <p className="text-red-500 font-semibold text-sm">{vehicle.year}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-3">{vehicle.competition}</p>
                  <p className="text-gray-300 text-sm">{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Tasarım Felsefemiz
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                <Cpu size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Otonom Sistemler</h3>
              <p className="text-gray-300">
                Yapay zeka ve makine öğrenimi algoritması kullanarak tam otonom uçuş ve görev yetenekleri.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                <Camera size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Görüntü İşleme</h3>
              <p className="text-gray-300">
                Gelişmiş görüntü işleme teknikleriyle hedef tespit, takip ve tanıma sistemleri.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                <Radio size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Güvenilirlik</h3>
              <p className="text-gray-300">
                Çoklu failsafe sistemleri ve sıkı test süreçleriyle yüksek güvenilirlik sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehiclesPage;
