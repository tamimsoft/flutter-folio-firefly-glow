
import React from 'react';
import { Code, Smartphone, Database, Palette, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['Flutter', 'Dart (BLoC, GetX)', 'SQLite/Drift', 'Hive', 'Firebase'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['PHP', 'Java Spring Boot', 'MySQL', 'MongoDB', 'JWT'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'State Management',
      icon: Zap,
      skills: ['BLoC Pattern', 'GetX', 'Provider', 'Clean Architecture', 'Repository Pattern'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Tools & DevOps',
      icon: Code,
      skills: ['Git', 'Postman', 'FVM', 'SonarQube', 'Jira'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud & Backend Services',
      icon: Globe,
      skills: ['Supabase', 'Firebase', 'REST API Integration', 'Railway', 'MongoDB Atlas'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Development Practices',
      icon: Palette,
      skills: ['Clean Architecture', 'Offline-First Design', 'Agile Methodology', 'Test-Driven Development', 'Code Review'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'Flutter', level: 92 },
              { skill: 'Dart', level: 90 },
              { skill: 'PHP', level: 85 },
              { skill: 'State Management (BLoC/GetX)', level: 88 },
              { skill: 'API Integration', level: 85 },
              { skill: 'Spring Boot', level: 75 }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-gray-500">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
