import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TeamPage = () => {
  const { t } = useTranslation();
  // TODO: Fill this section with your real team members
  const teamMembers = [
    {
      name: 'Burak  Emir Cengiz',
      role: 'Team Captain',
      image: '/photos/team/burak.jpg',
      email: 'burak24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Aziz Başar',
      role: 'Software Team Leader',
      image: '/photos/team/jr.png',
      email: 'basara23@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Eren Dölen',
      role: 'Mechanical Team Leader',
      image: '/photos/team/input.jpg',
      email: 'eren@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Recep Sedat Tokay',
      role: 'Aviyonic Team Leader',
      image: '/photos/team/reco.jpg',
      email: 'recep@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Asu İrem Güllüoğlu',
      role: 'Promotion & Sponsorship Team Leader',
      image: '/photos/team/asu.jpg',
      email: 'can@itu.edu.tr',
      linkedin: '#'
    }
  ];

  const advisors = [
    {
      name: 'Prof. Dr. Emre Koyuncu',
      role: 'Academic Advisor',
      department: 'Faculty of Aeronautics and Astronautics',
      image: '/photos/team/koyuncu.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('team.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {t('team.leaders')}
          </h2>
         <div></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-red-500 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.department}</p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-700 hover:bg-red-600 text-white rounded-lg transition-colors"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-red-600 text-white rounded-lg transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 px-40 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {t('team.advisors')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300"
              >
                <div className="flex items-center p-6 space-x-6">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                    <p className="text-red-500 font-semibold mb-1">{advisor.role}</p>
                    <p className="text-gray-400 text-sm">{advisor.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('team.join.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('team.join.description')}
          </p>
          <a
            href="mailto:itunomuavteam@itu.edu.tr"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
          >
            <Mail size={20} />
            <span>{t('team.join.button')}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;