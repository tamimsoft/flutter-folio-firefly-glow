
import React from 'react';
import { ExternalLink, Github, Smartphone, GraduationCap, ShoppingCart, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LMS Mobile App',
      description: 'A comprehensive Learning Management System built with Flutter, featuring course management, video streaming, quizzes, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Video Player'],
      githubUrl: '#',
      liveUrl: '#',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'E-Commerce App',
      description: 'A modern e-commerce mobile application with cart management, payment integration, and real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Stripe API', 'Bloc', 'Sqflite', 'Push Notifications'],
      githubUrl: '#',
      liveUrl: '#',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Task Manager',
      description: 'A productivity app for task management with calendar integration, reminders, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'GetX', 'Local Storage', 'Calendar API', 'Notifications'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Calendar,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Social Media App',
      description: 'A social networking platform with real-time messaging, photo sharing, and user profiles built with Flutter.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Image Picker', 'Chat'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Smartphone,
      color: 'from-pink-500 to-pink-600'
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
            Showcasing my best work in mobile app development
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
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
