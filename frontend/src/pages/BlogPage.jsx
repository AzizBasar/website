import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // TODO: Bu bölümü gerçek blog yazılarınızla güncelleyin
  const blogPosts = [
    {
      id: '1',
      title: 'ŞİMŞEK İHA Geliştirme Süreci - Bölüm 1: Tasarım Aşaması',
      excerpt: 'SUAS 2024 yarışması için Şimşek İHA\'nın tasarım sürecini anlatıyoruz. Aerodynamik analizlerden malzeme seçimine kadar tüm detaylar.',
      date: '15 Ocak 2024',
      author: 'Mehmet Kaya',
      category: 'Araç Geliştirme',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      readTime: '8 dk'
    },
    {
      id: '2',
      title: 'Otonom Uçuş Kontrol Sistemi: PID\'den Model Predictive Control\'e',
      excerpt: 'Uçuş kontrol sistemimizin evrimini anlatıyoruz. Klasik PID kontrolden gelişmiş MPC algoritmalarına geçiş sürecimiz.',
      date: '3 Şubat 2024',
      author: 'Can Özdemir',
      category: 'Otonom Sistemler',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      readTime: '12 dk'
    },
    {
      id: '3',
      title: 'YOLOv8 ile Gerçek Zamanlı Hedef Tespit Sistemi',
      excerpt: 'Yarışma görevleri için geliştirdiğimiz hedef tespit sisteminin teknik detayları. Dataset hazırlıktan model optimizasyonuna.',
      date: '18 Şubat 2024',
      author: 'Ayşe Yıldız',
      category: 'Yapay Zeka',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
      readTime: '10 dk'
    },
    {
      id: '4',
      title: 'SUAS 2023 Şampiyonluk Yolculuğumuz',
      excerpt: 'Amerika\'da düzenlenen SUAS 2023 yarışmasında şampiyonluğa uzanan sürecimizi anımsayarak paylaşıyoruz.',
      date: '25 Haziran 2023',
      author: 'Ahmet Yılmaz',
      category: 'Yarışmalar',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      readTime: '15 dk'
    },
    {
      id: '5',
      title: 'Karbon Fiber Kompozit İmalat Sürecimiz',
      excerpt: 'İHA gövdesi için kullandığımız karbon fiber kompozit malzemelerin imalat sürecini atölyemizden paylaşıyoruz.',
      date: '10 Mart 2024',
      author: 'Mehmet Kaya',
      category: 'İmalat',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      readTime: '7 dk'
    },
    {
      id: '6',
      title: 'Teknofest 2024 Deneyimlerimiz',
      excerpt: 'Teknofest 2024 yarışmasında yaşadığımız deneyimler, karşılaştığımız zorluklar ve elde ettiğimiz başarılar.',
      date: '5 Eylül 2024',
      author: 'Ahmet Yılmaz',
      category: 'Yarışmalar',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
      readTime: '11 dk'
    },
    {
      id: '7',
      title: 'GPS ve Görsel Odometri Hibrit Navigasyon',
      excerpt: 'GPS sinyalinin zayıf olduğu ortamlarda kullandığımız hibrit navigasyon sistemimizin çalışma prensipleri.',
      date: '22 Mart 2024',
      author: 'Can Özdemir',
      category: 'Navigasyon',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      readTime: '9 dk'
    },
    {
      id: '8',
      title: 'Atölye Günlükleri: Bir İHA Nasıl Doğar?',
      excerpt: 'Takım üyelerimizin atölyede geçirdiği günleri ve bir İHA\'nın sıfırdan nasıl inşa edildiğini anlatıyoruz.',
      date: '5 Nisan 2024',
      author: 'Elif Demir',
      category: 'Atölye',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      readTime: '6 dk'
    },
    {
      id: '9',
      title: 'Elektronik Sistemler ve Güç Yönetimi',
      excerpt: 'İHA\'mızda kullandığımız elektronik sistemler ve enerji verimliliğini artırmak için geliştirdiğimiz güç yönetim çözümleri.',
      date: '15 Mayıs 2024',
      author: 'Zeynep Arslan',
      category: 'Elektronik',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      readTime: '10 dk'
    }
  ];

  const categories = ['Tümü', 'Araç Geliştirme', 'Otonom Sistemler', 'Yapay Zeka', 'Yarışmalar', 'İmalat', 'Atölye', 'Elektronik', 'Navigasyon'];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            BLOG
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Projelerimiz, teknik geliştirmelerimiz ve yarışma deneyimlerimiz hakkında 
            detaylı yazılar ve güncellemeler.
          </p>
          <p className="text-red-500 mt-4">
            NOT: Bu bölümü gerçek blog yazılarınızla güncelleyin
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-white text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.readTime} okuma</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-red-500 hover:text-red-400 transition-colors font-semibold"
                    >
                      <span>Devamını Oku</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Güncellemelerden Haberdar Olun
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Yeni blog yazılarımız, proje güncellemelerimiz ve yarışma duyurularımız hakkında bilgi almak için bizi takip edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:iha@itu.edu.tr"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
