"use client";
import { FaRocket, FaGlobe, FaCertificate, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Fast-Track Learning",
    description: "Designed for efficiency, our curriculum gets you job-ready in weeks, not years.",
    icon: <FaRocket className="text-3xl text-purple-500" />,
  },
  {
    title: "Global Community",
    description: "Connect with learners and mentors from over 120 countries around the world.",
    icon: <FaGlobe className="text-3xl text-cyan-400" />,
  },
  {
    title: "Verified Certificates",
    description: "Earn industry-recognized certificates that boost your LinkedIn profile visibility.",
    icon: <FaCertificate className="text-3xl text-orange-500" />,
  },
  {
    title: "Premium Security",
    description: "Your data and progress are protected with enterprise-grade security protocols.",
    icon: <FaShieldAlt className="text-3xl text-emerald-400" />,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="w-11/12 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-purple-500">CourseVerse</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of education with features built for the modern digital professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
