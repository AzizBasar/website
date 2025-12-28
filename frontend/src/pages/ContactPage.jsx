import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Backend entegrasyonu yapıldığında form gönderimi eklenecek
    const mailtoLink = `mailto:iha@itu.edu.tr?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`İsim: ${formData.name}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            İLETİŞİM
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bizimle iletişime geçmek, takımımıza katılmak veya sponsor olmak için
            aşağıdaki iletişim bilgilerini kullanabilirsiniz.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                İletişim Bilgileri
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                NOT: Bu bölümü gerçek iletişim bilgilerinizle güncelleyin
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:iha@itu.edu.tr" 
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      iha@itu.edu.tr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefon</h3>
                    <a 
                      href="tel:+902122931300" 
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      +90 (212) 293 13 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adres</h3>
                    <p className="text-gray-300">
                      İstanbul Teknik Üniversitesi<br />
                      Ayazağa Kampüsü<br />
                      34469 Maslak, İstanbul
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Sosyal Medya
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Mesaj Gönderin
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    İsim Soyisim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
                >
                  <span>Gönder</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Konumumuz
          </h2>
          
          <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            {/* TODO: Google Maps iframe veya harita component'i eklenebilir */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} className="text-red-500 mx-auto mb-4" />
                <p className="text-white text-xl font-semibold">İstanbul Teknik Üniversitesi</p>
                <p className="text-gray-400">Ayazağa Kampüsü, Maslak, İstanbul</p>
                <p className="text-gray-500 text-sm mt-4">
                  NOT: Buraya Google Maps iframe ekleyebilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Takıma nasıl katılabilirim?
              </h3>
              <p className="text-gray-300">
                İTÜ öğrencisiyseniz, her dönem başında yapılan üye alımlarına başvurabilirsiniz. 
                Detaylı bilgi için iha@itu.edu.tr adresine email gönderin.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Hangi bölümlerden öğrenciler katılabiliyor?
              </h3>
              <p className="text-gray-300">
                Uçak Mühendisliği, Bilgisayar Mühendisliği, Elektrik-Elektronik Mühendisliği, 
                Makina Mühendisliği ve tüm mühendislik bölümlerinden öğrenciler katılabilir.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Sponsor olmak için ne yapmalıyım?
              </h3>
              <p className="text-gray-300">
                Sponsorluk fırsatları için iha@itu.edu.tr adresine "Sponsorluk Talebi" 
                konulu bir email gönderebilirsiniz. Size sponsorluk paketlerimizi ileteceğiz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
