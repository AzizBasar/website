import React from 'react';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';

const AchievementsPage = () => {
  // TODO: Bu bölümü gerçek başarılarınızla güncelleyin
  const suasAchievements = [
    { year: '2025', place: '11th Place', location: 'Maryland, USA' },
    { year: '2024', place: '2nd Place', location: 'Maryland, USA', medal: 'silver' },
    { year: '2023', place: 'Champion', location: 'Maryland, USA', medal: 'gold' },
    { year: '2022', place: '3rd Place', location: 'Maryland, USA', medal: 'bronze' },
    { year: '2019', place: '8th Place', location: 'Maryland, USA' },
    { year: '2018', place: '7th Place', location: 'Maryland, USA' },
    { year: '2017', place: '4th Place', location: 'Maryland, USA' },
    { year: '2016', place: '12th Place', location: 'Maryland, USA' }
  ];

  const teknofestAchievements = [
    { year: '2025', place: '3rd Place', location: 'Türkiye', medal: 'bronze' },
    { year: '2024', place: '3rd Place', location: 'Türkiye', medal: 'bronze' },
    { year: '2023', place: '2nd Place', location: 'Türkiye', medal: 'silver' },
    { year: '2021', place: '3rd Place', location: 'Türkiye', medal: 'bronze' },
    { year: '2019', place: 'Champion', location: 'Türkiye', medal: 'gold' }
  ];

  const getMedalColor = (medal) => {
    switch (medal) {
      case 'gold': return 'from-yellow-400 to-yellow-600';
      case 'silver': return 'from-gray-300 to-gray-500';
      case 'bronze': return 'from-orange-400 to-orange-600';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-4 bg-red-600/20 rounded-full mb-6">
            <Trophy size={64} className="text-red-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            BAŞARILARIMIZ
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ulusal ve uluslararası yarışmalarda elde ettiğimiz başarılar, 
            takımımızın özveri ve çalışkanlığının bir yansımasıdır.
          </p>
        </div>
      </section>

      {/* SUAS Competition Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            SUAS Competitions
          </h2>
          <p className="text-center text-gray-400 mb-4">
            RoboNation Student Unmanned Aerial Systems Competition
          </p>
          <p className="text-center text-red-500 mb-12">
            NOT: Bu bölümü gerçek SUAS başarılarınızla güncelleyin
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suasAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                {achievement.medal && (
                  <div className="absolute top-0 right-0 p-2">
                    <Award size={32} className="text-white/80" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-white/90 mb-2">
                    <Calendar size={18} />
                    <span className="font-semibold">{achievement.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {achievement.place}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-white/80">
                    <MapPin size={16} />
                    <span className="text-sm">{achievement.location}</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknofest Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Teknofest Competitions
          </h2>
          <p className="text-center text-gray-400 mb-4">
            İnsansız Hava Araçları Yarışması
          </p>
          <p className="text-center text-red-500 mb-12">
            NOT: Bu bölümü gerçek Teknofest başarılarınızla güncelleyin
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {teknofestAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                {achievement.medal && (
                  <div className="absolute top-0 right-0 p-2">
                    <Award size={28} className="text-white/80" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-white/90 mb-2">
                    <Calendar size={16} />
                    <span className="font-semibold text-sm">{achievement.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.place}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-white/80">
                    <MapPin size={14} />
                    <span className="text-xs">{achievement.location}</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Öne Çıkan Başarılar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 p-8 rounded-lg border-2 border-yellow-600/50 hover:border-yellow-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-yellow-600 rounded-full">
                  <Trophy size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SUAS 2023</h3>
                  <p className="text-yellow-400 font-semibold">Şampiyonluk</p>
                </div>
              </div>
              <p className="text-gray-300">
                Amerika'da düzenlenen SUAS 2023 yarışmasında elde ettiğimiz şampiyonluk, 
                takımımızın uluslararası arenadaki gücünü göstermiştir.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 p-8 rounded-lg border-2 border-red-600/50 hover:border-red-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-600 rounded-full">
                  <Trophy size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Teknofest 2019</h3>
                  <p className="text-red-400 font-semibold">Birincilik</p>
                </div>
              </div>
              <p className="text-gray-300">
                Türkiye'nin en büyük teknoloji festivali Teknofest'te elde ettiğimiz birincilik, 
                ulusal planda öncü olduğumuzu kanıtlamıştır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
