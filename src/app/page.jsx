"use client"; // Must be client component
import CourseCard from "@/components/CourseCards";
import CTA from "@/components/CTA";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";

import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

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
  }, [setLoading]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans flex-col w-full overflow-hidden">
      <div className="w-full">
        <CTA />
      </div>

      <div className="w-full">
        <Partners />
      </div>

      <div className="w-full">
        <Features />
      </div>

      <div className="my-15">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          Featured Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 my-20 w-11/12">
        {courses.map((user, index) => (
          <CourseCard key={index} user={user} />
        ))}
      </div>

      <div className="mb-20">
        <Link href={"/products"} className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-lg hover:shadow-purple-500/50">
          Explore All Courses
        </Link>
      </div>

      <div className="w-full">
        <Stats />
      </div>

      <div className="w-full">
        <Testimonials />
      </div>

      <div className="w-full">
        <FAQ />
      </div>
    </div>
  );
}

