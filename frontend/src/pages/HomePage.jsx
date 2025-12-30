import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Cog, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Award size={32} />,
      title: t('home.features.achievements.title'),
      description: t('home.features.achievements.description'),
      link: '/basarilar'
    },
    {
      icon: <Users size={32} />,
      title: t('home.features.team.title'),
      description: t('home.features.team.description'),
      link: '/takim'
    },
    {
      icon: <Cog size={32} />,
      title: t('home.features.vehicles.title'),
      description: t('home.features.vehicles.description'),
      link: '/araclar'
    },
    {
      icon: <BookOpen size={32} />,
      title: t('home.features.blog.title'),
      description: t('home.features.blog.description'),
      link: '/blog'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/photos/hakkimizda.jpg"
            alt="Drone Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-12">
            {t('home.hero.university')}
          </p>
          <Link
            to="/araclar"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105"
          >
            <span>{t('home.hero.cta')}</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            {t('home.about.title')}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
            {t('home.about.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-colors">
              <img
                src="/photos/vision.jpg"
                alt="About Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4"> {t('home.about.vision.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
              {t('home.about.vision.text')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-colors">
              <img
                src="/photos/mekanik.png"
                alt="Workshop"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">{t('home.about.workspace.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('home.about.workspace.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-gray-800/30 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
              >
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('home.cta.description')}
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <span>{t('home.cta.button')}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
