"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import PrivateRoute from "@/components/PrivateRoute";

export default function MyCourses() {
  const { user, loading } = useAuth();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!loading && user) {
      const fetchCourses = async () => {
        try {
          const res = await fetch("https://next-app-server.vercel.app/users", {
            cache: "no-store",
          });
          const data = await res.json();

          const myCourses = data.filter(
            (course) => course.providerEmail === user.email
          );
          setFilteredCourses(myCourses);
        } catch (err) {
          console.error("Failed to fetch courses:", err);
        }
      };

      fetchCourses();
    }
  }, [user, loading]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setDeletingId(id);
        try {
          const res = await fetch(
            `https://next-app-server.vercel.app/users/${id}`,
            {
              method: "DELETE",
            }
          );

          if (!res.ok) throw new Error("Failed to delete course");

          setFilteredCourses(
            filteredCourses.filter((course) => course._id !== id)
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your course has been deleted.",
            icon: "success",
          });
        } catch (err) {
          console.error("Error deleting course:", err);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the course.",
            icon: "error",
          });
        } finally {
          setDeletingId(null);
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-white">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-black text-white py-16">
        <h1 className="text-purple-500 text-5xl font-bold text-center mb-16">
          My Courses
        </h1>

        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-400">
            You have not added any courses yet.
          </p>
        ) : (
          <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => (
              <div
                key={course._id}
                className="bg-gray-900 rounded-xl shadow-lg p-5 hover:scale-105 hover:shadow-purple-500/40 duration-200 relative"
              >
                <Link href={`/products/${course._id}`}>
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

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(course._id)}
                  disabled={deletingId === course._id}
                  className="hover:cursor-pointer bg-purple-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold text-sm"
                >
                  {deletingId === course._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}
