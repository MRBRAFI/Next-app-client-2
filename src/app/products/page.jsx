"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("https://next-app-server.vercel.app/users", {
        cache: "no-store",
      });
      const data = await res.json();
      setCourses(data);
      setFilteredCourses(data);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.skillName.toLowerCase().includes(search.toLowerCase()) ||
        course.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [search, courses]);

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h1 className="text-purple-500 text-5xl font-bold text-center mb-6">
        All of our Courses
      </h1>

      {/* Search input */}
      <div className="w-11/12 mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by course name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-500 text-white"
        />
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCourses.map((course) => (
          <Link
            key={course._id}
            href={`/products/${course._id}`}
            className="bg-gray-900 rounded-xl shadow-lg p-5 hover:scale-105 hover:shadow-purple-500/40 duration-200"
          >
            <img
              src={course.image}
              alt={course.skillName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-bold text-orange-400">
              {course.skillName}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Category: {course.category}
            </p>

            <p className="text-gray-300 mt-3 line-clamp-2">
              {course.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-green-400 font-semibold">
                ${course.price}
              </span>
              <span className="text-yellow-400 font-bold">
                ⭐ {course.rating}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Slots left: {course.slotsAvailable}
            </p>
          </Link>
        ))}

        {filteredCourses.length === 0 && (
          <p className="text-center col-span-full text-gray-400">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
