import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const TeamPage = () => {
  // TODO: Burayı gerçek takım üyelerinizle doldurun
  const teamMembers = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Takım Kaptanı',
      department: 'Uçak Mühendisliği',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      email: 'ahmet@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Elif Demir',
      role: 'Yazılım Ekip Lideri',
      department: 'Bilgisayar Mühendisliği',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      email: 'elif@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Mehmet Kaya',
      role: 'Mekanik Tasarım Lideri',
      department: 'Makina Mühendisliği',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      email: 'mehmet@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Zeynep Arslan',
      role: 'Elektronik Ekip Lideri',
      department: 'Elektrik-Elektronik Mühendisliği',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      email: 'zeynep@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Can Özdemir',
      role: 'Otonom Sistemler',
      department: 'Kontrol Mühendisliği',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      email: 'can@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Ayşe Yıldız',
      role: 'Görüntü İşleme',
      department: 'Bilgisayar Mühendisliği',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
      email: 'ayse@itu.edu.tr',
      linkedin: '#'
    }
  ];

  const advisors = [
    {
      name: 'Prof. Dr. Ali Veli',
      role: 'Akademik Danışman',
      department: 'Uçak ve Uzay Mühendisliği Fakültesi',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
    },
    {
      name: 'Doç. Dr. Fatma Nur',
      role: 'Teknik Danışman',
      department: 'Elektrik-Elektronik Mühendisliği Fakültesi',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            TAKIMIMIZ
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            İTÜNOM, farklı mühendislik disiplinlerinden gelen yetenekli öğrencilerin bir araya gelerek 
            dünya standartlarında İHA sistemleri geliştirdiği bir ekiptir.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Ekip Liderleri
          </h2>
          <p className="text-center text-gray-400 mb-12">
            NOT: Bu bölümü gerçek takım üyelerinizin bilgileriyle güncelleyin
          </p>
          
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Danışmanlarımız
          </h2>
          <p className="text-center text-gray-400 mb-12">
            NOT: Bu bölümü gerçek danışmanlarınızın bilgileriyle güncelleyin
          </p>
          
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
            Takımımıza Katılmak İster misiniz?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            İTÜ öğrencisiyseniz ve havacılık teknolojileriyle ilgileniyorsanız, 
            aramıza katılabilirsiniz. Her dönem yeni üye alımları yapıyoruz.
          </p>
          <a
            href="mailto:iha@itu.edu.tr"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
          >
            <Mail size={20} />
            <span>Başvuru İçin İletişime Geçin</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
