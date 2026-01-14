"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div className="relative">
        {/* Outer Ring */}
        <div className="h-20 w-20 rounded-full border-t-4 border-b-4 border-purple-500 animate-spin"></div>
        
        {/* Inner Ring */}
        <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-l-4 border-r-4 border-cyan-400 animate-spin-reverse"></div>
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

