import React from 'react';
import { useTranslation } from 'react-i18next';

const SponsorsPage = () => {
  const { t } = useTranslation();
  // TODO: Bu bölümü gerçek sponsorlarınızın bilgileriyle güncelleyin
  const mainSponsors = [
    {
      name: 'Turkish Technic',
      logo: '/photos/sponsors/1.png',
      tier: 'Platinum Sponsor',
      description: 'Technical support and material provider main sponsor'
    },
    {
      name: 'MKE',
      logo: '/photos/sponsors/mke.png',
      tier: 'Platinum Sponsor',
      description: 'Electronics systems and technology sponsor'
    },
    {
      name: 'TÜBİTAK',
      logo: '/photos/sponsors/tubitak.png',
      tier: 'Platinum Sponsor',
      description: 'R&D and scientific research support'
    }
  ];

  const goldSponsors = [
    { name: 'Halkbank', logo: '/photos/sponsors/halkbank.png' },
    { name: 'ASELSAN', logo: '/photos/sponsors/aselsann.png' },
    { name: 'Arz Portföy', logo: '/photos/sponsors/arz.png' }
  ];

  const silverSponsors = [
    { name: 'Ege Bant', logo: '/photos/sponsors/ege_bant.png' },
    { name: 'Koyuncu', logo: '/photos/sponsors/2.png' },
    { name: 'İTÜ', logo: '/photos/sponsors/itu.png' }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('sponsors.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('sponsors.description')}
          </p>
          <p className="text-red-500 mt-4">
            {t('sponsors.note')}
          </p>
        </div>
      </section>

      {/* Main Sponsors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('sponsors.main')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {mainSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center h-32 mb-6">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1 bg-red-600 text-white text-sm font-semibold rounded-full mb-3">
                    {sponsor.tier}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                  <p className="text-gray-600 text-sm">{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('sponsors.gold')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-white/95 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center h-24">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('sponsors.silver')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-white/90 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center h-20">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('sponsors.become.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('sponsors.become.description')}
          </p>
          <a
            href="mailto:itunomuavteam@itu.edu.tr?subject=Sponsorluk Talebi"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
          >
            <span>{t('sponsors.become.button')}</span>
          </a>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('sponsors.benefits.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-red-500 text-4xl font-bold mb-3">01</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('sponsors.benefits.visibility.title')}</h3>
              <p className="text-gray-300">
                {t('sponsors.benefits.visibility.text')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-red-500 text-4xl font-bold mb-3">02</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('sponsors.benefits.talent.title')}</h3>
              <p className="text-gray-300">
                {t('sponsors.benefits.talent.text')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-red-500 text-4xl font-bold mb-3">03</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('sponsors.benefits.investment.title')}</h3>
              <p className="text-gray-300">
                {t('sponsors.benefits.investment.text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;
