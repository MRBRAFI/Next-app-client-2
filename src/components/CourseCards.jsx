"use client";
import Link from "next/link";

export default function CourseCard({ user }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
        bg-[#111] 
        border border-[#222]
        rounded-2xl 
        shadow-xl 
        overflow-hidden 
        hover:scale-[1.03] 
        transition 
        duration-300 
        w-full
        flex 
        flex-col
      "
      >
        {/* Image */}
        <div className="w-full h-44 overflow-hidden">
          <img
            src={user.image}
            alt={user.skillName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-1">
          {/* Title */}
          <h2 className="text-xl font-semibold text-white mb-2">
            {user.skillName}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400 mb-3">
            <span className="text-lg">★</span>
            <span className="text-gray-300">{user.rating}</span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-green-400 mb-4">${user.price}</p>

          {/* Button */}
          <Link
            href={`/products/${user._id}`}
            className="
              mt-auto
              block
              text-center
              bg-purple-600 
              hover:bg-purple-500 
              text-white 
              font-medium 
              py-2 
              rounded-lg
              transition
            "
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}
