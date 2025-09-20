"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Mail, Code, Coffee, Lightbulb } from "lucide-react";

const founders = [
  {
    name: "Subhrajit Mukherjee",
    role: "Co-Founder & Full Stack Developer",
    image: "/Images/Subh.png",
    bio: "Passionate about creating scalable web applications and AI-powered solutions. Specializes in MERN stack development and has a keen eye for modern UI/UX design.",
    expertise: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "AI Integration",
    ],
    social: {
      linkedin: "https://linkedin.com/in/subhrajit-mukherjee",
      github: "https://github.com/subhrajit-mukherjee",
      email: "subhrajit@codecraft-solutions.com",
    },
    personality: [
      { icon: Code, trait: "Clean Code Advocate" },
      { icon: Coffee, trait: "Coffee Enthusiast" },
      { icon: Lightbulb, trait: "Innovation Driver" },
    ],
  },
  {
    name: "Saurav Roy",
    role: "Co-Founder & Full Stack Developer",
    image: "/Images/roy.jpg",
    bio: "Expert in mobile app development and automation workflows. Loves building efficient systems and has extensive experience in React Native and workflow automation.",
    expertise: [
      "React Native",
      "Kotlin & Android",
      "n8n Automation",
      "System Architecture",
    ],
    social: {
      linkedin: "https://linkedin.com/in/saurav-roy",
      github: "https://github.com/saurav-roy",
      email: "saurav@codecraft-solutions.com",
    },
    personality: [
      { icon: Code, trait: "Mobile Expert" },
      { icon: Coffee, trait: "Problem Solver" },
      { icon: Lightbulb, trait: "Automation Guru" },
    ],
  },
];

export function FoundersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two passionate developers with a shared vision of creating
            exceptional digital experiences and helping businesses thrive in the
            digital world.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-teal-600 font-medium">{founder.role}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {founder.bio}
                </p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Personality Traits */}
                <div className="mb-6">
                  <div className="flex justify-center space-x-6">
                    {founder.personality.map((trait, traitIndex) => (
                      <div key={traitIndex} className="text-center">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 p-2">
                          <trait.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {trait.trait}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="p-3 rounded-xl bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
