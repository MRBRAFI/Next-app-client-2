"use client";
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSpotify } from "react-icons/fa";

const partners = [
  { name: "Google", icon: <FaGoogle /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Amazon", icon: <FaAmazon /> },
  { name: "Apple", icon: <FaApple /> },
  { name: "Spotify", icon: <FaSpotify /> },
];

export default function Partners() {
  return (
    <section className="py-20 bg-black/50 border-y border-gray-900">
      <div className="w-11/12 mx-auto">
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-12 font-bold">
          Empowering learners at top global companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p, index) => (
            <div 
              key={index} 
              className="text-gray-400 text-4xl hover:text-white transition-colors cursor-pointer"
              title={p.name}
            >
              {p.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
