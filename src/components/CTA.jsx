import { SiPushbullet } from "react-icons/si";

export default function CTA() {
  return (
    <section className="bg-linear-to-b from-[#080808] via-[#0c0c0c] to-[#111827] text-white">
      <div className="w-11/12 mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT — TEXT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Learn. Grow. Succeed — with{" "}
              <span className="text-orange-500">CourseVerse</span>.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl">
              Master real-world skills from expert instructors. CourseVerse
              gives you high-quality courses, hands-on projects, and a guided
              learning experience designed to turn beginners into creators.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-black font-semibold transition"
                aria-label="Get started with CourseVerse"
              >
                Start Learning
              </a>

              <a
                href="/courses"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
                aria-label="Browse all courses"
              >
                Browse Courses
              </a>
            </div>

            <div className="mt-3 text-sm text-gray-400 space-y-1">
              <p className="flex items-center gap-2">
                <SiPushbullet className="text-orange-500"></SiPushbullet>
                Beginner-friendly courses with real projects.
              </p>
              <p className="flex items-center gap-2">
                <SiPushbullet className="text-orange-500"></SiPushbullet>
                Expert-crafted lessons updated regularly.
              </p>
              <p className="flex items-center gap-2">
                <SiPushbullet className="text-orange-500"></SiPushbullet>
                Build skills that actually matter in the industry.
              </p>
            </div>
          </div>

          {/* RIGHT — ILLUSTRATION */}
          <div className="hidden md:flex justify-center">
            <div
              className="w-full max-w-md rounded-xl overflow-hidden shadow-lg"
              role="img"
              aria-label="CourseVerse preview banner"
            >
              <div className="aspect-16/10 bg-linear-to-tr from-orange-500 via-purple-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-5xl">
                  CourseVerse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
