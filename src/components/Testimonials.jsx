"use client";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Full-Stack Developer",
    content: "CourseVerse completely changed my career path. The React Masterclass was practical, deep, and actually fun!",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    content: "The design principles taught here are world-class. I landed my dream job at a top tech firm thanks to this platform.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Thorne",
    role: "Data Scientist",
    content: "The Python for AI series is unmatched. Clear explanations and complex projects made simple.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Loved by <span className="text-cyan-400">Thousands</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 relative group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-purple-500/50"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-purple-400">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="absolute top-4 right-4 text-purple-500/20 text-6xl font-serif">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
