import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();
  // TODO: Update this section with your real blog posts
  const blogPosts = [
    {
      id: '1',
      title: 'ŞİMŞEK Development Process - Part 1: Design Phase',
      excerpt: 'We describe the design process of the Şimşek UAV for the SUAS 2024 competition. All details from aerodynamic analysis to material selection.',
      date: '15 January 2024',
      author: 'Mehmet Kaya',
      category: 'Vehicle Development',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
     
    },
    {
      id: '2',
      title: 'Autonomous Flight Control System: From PID to Model Predictive Control',
      excerpt: 'We discuss the evolution of our flight control system. The transition from classic PID control to advanced MPC algorithms.',
      date: '3 February 2024',
      author: 'Can Özdemir',
      category: 'Autonomous Systems',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
     
    },
    {
      id: '3',
      title: 'Real-Time Object Detection System with YOLOv8',
      excerpt: 'Technical details of the object detection system we developed for competition tasks. From dataset preparation to model optimization.',
      date: '18 February 2024',
      author: 'Ayşe Yıldız',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
      
    },
    {
      id: '4',
      title: 'Our Journey to Championship in SUAS 2023',
      excerpt: 'We share our memories of the journey to championship in the SUAS 2023 competition held in America.',
      date: '25 June 2023',
      author: 'Ahmet Yılmaz',
      category: 'Competitions',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
     
    },
    {
      id: '5',
      title: 'Our Carbon Fiber Composite Manufacturing Process',
      excerpt: 'We share the manufacturing process of carbon fiber composite materials used for the UAV body from our workshop.',
      date: '10 March 2024',
      author: 'Mehmet Kaya',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      
    },
    {
      id: '6',
      title: 'Our Experiences at Teknofest 2024',
      excerpt: 'The experiences we had at Teknofest 2024, the challenges we faced, and the successes we achieved.',
      date: '5 September 2024',
      author: 'Ahmet Yılmaz',
      category: 'Competitions',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
      
    },
    {
      id: '7',
      title: 'GPS and Visual Odometry Hybrid Navigation',
      excerpt: 'The working principles of our hybrid navigation system used in environments where GPS signal is weak.',
      date: '22 March 2024',
      author: 'Can Özdemir',
      category: 'Navigation',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
   
    },
    {
      id: '8',
      title: 'Workshop Diaries: How a UAV is Born',
      excerpt: 'We tell about the days our team members spend in the workshop and how a UAV is built from scratch.',
      date: '5 April 2024',
      author: 'Elif Demir',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',

    },
    {
      id: '9',
      title: 'Electronic Systems and Power Management',
      excerpt: 'The electronic systems we use in our UAV and the power management solutions we developed to increase energy efficiency.',
      date: '15 May 2024',
      author: 'Zeynep Arslan',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',

    }
  ];

  const categories = [
    t('blog.categories.all'),
    t('blog.categories.vehicleDevelopment'),
    t('blog.categories.autonomousSystems'),
    t('blog.categories.artificialIntelligence'),
    t('blog.categories.competitions'),
    t('blog.categories.manufacturing'),
    t('blog.categories.workshop'),
    t('blog.categories.electronics'),
    t('blog.categories.navigation')
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('blog.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blog.description')}
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
                    <span className="text-gray-400 text-xs">{post.readTime} {t('blog.readTime')}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-red-500 hover:text-red-400 transition-colors font-semibold"
                    >
                      <span>{t('blog.readMore')}</span>
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
            {t('blog.newsletter.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('blog.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:itunomuavteam@itu.edu.tr"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('blog.newsletter.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;