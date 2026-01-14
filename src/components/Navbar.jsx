"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logoutUser, setLoading } = useAuth();

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        toast("You have successully logged out");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-950 border-l-2 border-r-2 border-t-2">
      <div className="w-11/12 mx-auto border-b-2 flex justify-between shadow-sm py-5 px-2">
        <div>
          <Link
            href={"/"}
            className="text-2xl font-black bg-white px-5 py-3 rounded text-purple-600"
          >
            CourseVerse
          </Link>
        </div>

        {/* My Links */}
        <div className="hidden md:flex gap-10">
          <Link
            href={"/"}
            className="hover:cursor-pointer font-mono text-xl bg-purple-600 px-2 py-1 rounded text-orange-white"
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className="hover:cursor-pointer font-mono text-xl bg-purple-600 px-2 py-1 rounded text-orange-white"
          >
            All Courses
          </Link>
        </div>

        {user?.email ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="Profile image"></img>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <div className="border-2 rounded">
                  <li className="p-2 text-left mt-2">{user.displayName}</li>
                  <li className="p-2 text-left mt-2">{user.email}</li>
                </div>
                <li className="border-2 rounded p-2 text-left mt-2">
                  <Link
                    href={"/products/add_products"}
                    className="hover:cursor-pointer font-mono text-xl bg-orange-600 px-2 py-1 rounded text-orange-white"
                  >
                    Add Coureses
                  </Link>
                </li>
                <li className="border-2 rounded p-2 text-left mt-2">
                  <Link
                    href={"/products/my_products"}
                    className="hover:cursor-pointer font-mono text-xl bg-orange-600 px-2 py-1 rounded text-orange-white"
                  >
                    My Coureses
                  </Link>
                </li>

                <div className="block md:hidden">
                  <li className="border-2 rounded p-2 text-left mt-2">
                    <Link
                      href={"/"}
                      className="hover:cursor-pointer font-mono text-xl bg-orange-600 px-2 py-1 rounded text-orange-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="border-2 rounded p-2 text-left mt-2">
                    <Link
                      href={"/products"}
                      className="hover:cursor-pointer font-mono text-xl bg-orange-600 px-2 py-1 rounded text-orange-white"
                    >
                      All Courses
                    </Link>
                  </li>
                </div>
                <li className="border-2 rounded p-2 text-left mt-2">
                  <button
                    className="hover:cursor-pointer font-mono text-xl bg-purple-600 px-2 py-1 rounded text-orange-white"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="hover:cursor-pointer text-xl  bg-purple-600 px-2 py-1 rounded text-orange-white"
          >
            Please log in
          </Link>
        )}
      </div>
    </div>
  );
}
