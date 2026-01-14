"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddProduct() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    skillName: "",
    category: "",
    description: "",
    price: "",
    image: "",
    providerName: "",
    providerEmail: "",
    rating: "",
    slotsAvailable: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user?.email) {
      setFormData((prev) => ({ ...prev, providerEmail: user.email }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://next-app-server.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          rating: parseFloat(formData.rating),
          slotsAvailable: parseInt(formData.slotsAvailable),
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      const data = await res.json();
      setFormData({
        skillName: "",
        category: "",
        description: "",
        price: "",
        image: "",
        providerName: "",
        providerEmail: user.email,
        rating: "",
        slotsAvailable: "",
      });
    } catch (err) {
      setMessage("Error adding product: " + err.message);
    } finally {
      toast.success("Course creation successfull");
      setLoading(false);
    }
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-black text-white flex justify-center items-start py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg space-y-5"
        >
          <h1 className="text-3xl font-bold text-purple-500 text-center mb-6">
            Add New Course
          </h1>

          {/* Input fields */}
          {[
            { name: "skillName", label: "Course Name" },
            { name: "category", label: "Category" },
            { name: "description", label: "Description", type: "textarea" },
            { name: "price", label: "Price", type: "number" },
            { name: "image", label: "Image URL" },
            { name: "providerName", label: "Provider Name" },
            { name: "providerEmail", label: "Provider Email", readOnly: true },
            { name: "rating", label: "Rating", type: "number" },
            {
              name: "slotsAvailable",
              label: "Slots Available",
              type: "number",
            },
          ].map((field) =>
            field.type === "textarea" ? (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-500"
                rows={4}
                required
              />
            ) : (
              <input
                key={field.name}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-500"
                required
                readOnly={field.readOnly || false}
              />
            )
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg shadow-md"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Course"}
          </button>

          {/* Message */}
          {message && <p className="text-center mt-3">{message}</p>}
        </form>
      </div>
    </PrivateRoute>
  );
}
