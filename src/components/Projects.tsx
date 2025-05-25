
import React from 'react';
import { ExternalLink, Github, ShoppingCart, BookOpen, Users, GraduationCap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-stack e-commerce mobile app built with Flutter and Java Spring Boot. Features secure RESTful APIs, BLoC state management, and offline caching with Drift (SQLite). Improved load speed by 40% in poor network conditions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'BLoC', 'Drift (SQLite)', 'Spring Boot', 'JWT', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Library Management App',
      description: 'Modern Flutter-based library management app with Google/GitHub/Email authentication. Built with GetX for state management, Supabase as BaaS, and Hive for offline storage. Features real-time database and role-based access control.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'GetX', 'Hive', 'Supabase', 'Google Auth', 'GitHub Auth'],
      githubUrl: '#',
      liveUrl: '#',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Association Management App',
      description: 'Comprehensive association management application developed from scratch using Flutter and GetX. Built RESTful APIs using PHP for backend services. Contract project for nstechbd with full lifecycle development.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'GetX', 'PHP', 'REST API', 'MySQL', 'Custom Backend'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Online Admission & Job Recruitment System',
      description: 'Led development of comprehensive admission and recruitment modules at myCamous Ltd. Optimized backend logic and database queries, reducing processing time by 30% and enabling thousands of users to apply and track applications.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX', 'REST API'],
      githubUrl: '#',
      liveUrl: '#',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications showcasing my expertise in mobile and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
