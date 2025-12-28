import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Takımımız', path: '/takim' },
    { name: 'Araçlarımız', path: '/araclar' },
    { name: 'Başarılarımız', path: '/basarilar' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Sponsorlar', path: '/sponsorlar' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              İTÜNOM UAV TEAM
            </Link>
            <p className="text-gray-400 mb-4">
              Istanbul Technical University Unmanned Aerial Vehicles Team
            </p>
            <p className="text-gray-400 text-sm">
              2014 yılından beri insansız hava araçları teknolojileri üzerine 
              çalışan öğrenci topluluğu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <a 
                href="mailto:iha@itu.edu.tr" 
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                iha@itu.edu.tr
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Telefon</h4>
              <a 
                href="tel:+902122931300" 
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                +90 (212) 293 13 00
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Adres</h4>
              <p className="text-gray-400">
                İTÜ Ayazağa Kampüsü<br />
                34469 Maslak, İstanbul
              </p>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} İTÜNOM UAV Team. Tüm hakları saklıdır.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
              title="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
