
import React from 'react';
import { Heart, Code2, Users, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Trophy },
    { label: 'Projects Completed', value: '15+', icon: Code2 },
    { label: 'Happy Clients', value: '10+', icon: Users },
    { label: 'Cups of Coffee', value: '500+', icon: Heart },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Flutter developer with a love for creating beautiful, functional mobile applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Journey as a Developer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Passionate Flutter Developer with 2+ years of experience building smooth, high-quality mobile 
              apps for both Android and iOS. I'm comfortable working across the full app lifecycle—from 
              designing UI to integrating APIs and shipping to the app store.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently working as a Software Developer at myCamous Ltd, where I've led development of 
              Online Admission and Job Recruitment modules using PHP, enabling thousands of users to apply, 
              track, and manage applications online. I've optimized backend logic and database queries to 
              reduce processing time by 30%.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I enjoy solving real-world problems through thoughtful, scalable mobile solutions and am 
              skilled in Flutter, Dart, Firebase, and RESTful APIs, with a strong eye for clean code and 
              app performance. Looking to join a team where I can grow and build apps that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-200"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
