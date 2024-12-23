import React from "react";
import { Film, Heart, Users, Code, Send } from "lucide-react";


// Define the tech stack with names and icon sources
const techStack = [
  {
    name: "React",
    iconSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "JavaScript",
    iconSrc:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Tailwind CSS",
    iconSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Node.js",
    iconSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "MongoDB",
    iconSrc: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "Cloudinary",
    iconSrc: "https://res.cloudinary.com/demo/image/upload/cloudinary_logo.png",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section: Introductory section with title and description */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the best entertainment
            experience right at your fingertips. Our goal is to provide you with
            a platform that offers a vast collection of movies, TV shows, and
            documentaries.
          </p>
        </div>

        {/* Features Grid: Highlights platform features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<Film className="w-10 h-10 text-purple-400" />}
            title="Vast Library"
            description="Access to millions of movies and TV shows, complete with detailed information and ratings"
          />
          <FeatureCard
            icon={<Heart className="w-10 h-10 text-pink-400" />}
            title="Personalized"
            description="Stream and enjoy movies from your favorite platforms, tailored to your preferences and viewing habits"
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-blue-400" />}
            title="Community"
            description="Join discussions, share reviews, and connect with other movie enthusiasts"
          />
        </div>

        {/* Footer: Social links and copyright */}
        <footer className="text-center text-gray-400">
          <div className="flex justify-center gap-6 mb-8">
            {/* GitHub and Twitter links */}
            <a href="https://t.me/filmygramhd" className="hover:text-purple-400 transition-colors" target="_blank">
              <Send className="w-8 h-8" />
            </a>
          </div>
          <p>© All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

// FeatureCard: Component for displaying individual feature
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// TeamMember: Component for displaying team member details
function TeamMember({ image, name, role }) {
  return (
    <div className="text-center transform hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-purple-600 shadow-lg"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}

// TechItem: Component for displaying tech stack items
function TechItem({ iconSrc, name }) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:border hover:border-purple-400 transition-all duration-300">
      <img src={iconSrc} alt={name} className="w-8 h-8" />
      <span className="text-white">{name}</span>
    </div>
  );
}

export default About;
