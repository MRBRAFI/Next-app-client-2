"use client";

const stats = [
  { label: "Active Learners", value: "15,000+" },
  { label: "Expert Instructors", value: "200+" },
  { label: "Course Categories", value: "50+" },
  { label: "Five-Star Reviews", value: "12,000+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
