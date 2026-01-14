import Link from "next/link";

export default async function ProductsDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`https://next-app-server.vercel.app/users/${id}`, {
    cache: "no-store",
  });

  const course = await res.json();

  return (
    <div className="min-h-screen bg-black text-white py-14">
      {/* Back Button */}
      <div className="w-11/12 mx-auto mb-6">
        <Link
          href="/products"
          className="text-orange-400 hover:text-orange-300 text-lg"
        >
          ← Back to All Courses
        </Link>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 gap-10">
        {/* Left: Image */}
        <div>
          <img
            src={course.image}
            alt={course.skillName}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            {course.skillName}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Meta Info */}
          <div className="space-y-2 mb-6">
            <p>
              <span className="text-gray-400">Category:</span>{" "}
              <span className="text-purple-400">{course.category}</span>
            </p>
            <p>
              <span className="text-gray-400">Provider:</span>{" "}
              <span className="text-green-400">{course.providerName}</span>
            </p>
            <p>
              <span className="text-gray-400">Email:</span>{" "}
              <span className="text-blue-400">{course.providerEmail}</span>
            </p>
            <p>
              <span className="text-gray-400">Rating:</span>{" "}
              <span className="text-yellow-400">⭐ {course.rating}</span>
            </p>
            <p>
              <span className="text-gray-400">Slots Available:</span>{" "}
              {course.slotsAvailable}
            </p>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-green-400 mb-6">
            ${course.price}
          </p>

          {/* CTA Button */}
          <button className="bg-orange-600 hover:bg-orange-700 duration-200 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
