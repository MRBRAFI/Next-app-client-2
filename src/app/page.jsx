"use client"; // Must be client component
import CourseCard from "@/components/CourseCards";
import CTA from "@/components/CTA";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { loading, setLoading } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://next-app-server.vercel.app/users?limit=6"
        );
        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans flex-col">
      <div className="my-20">
        <CTA />
      </div>
      <div className="my-15">
        <h1 className="text-center text-5xl font-bold text-purple-600">
          Our Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 my-20">
        {courses.map((user, index) => (
          <CourseCard key={index} user={user} />
        ))}
      </div>
      <div>
        <Link href={"/products"} className="btn bg-purple-500">
          View All
        </Link>
      </div>
    </div>
  );
}
