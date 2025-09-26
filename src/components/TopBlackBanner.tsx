"use client";
export default function TopBlackBanner() {
  return (
    <div 
      className="w-full h-9 bg-green-600 text-black font-bold text-sm tracking-tight px-4 flex items-center justify-center sticky top-0 z-50 animate-flicker shadow-lg"
      style={{ textShadow: "0 0 5px rgba(0,0,0,0.3)" }}
      role="status"
      aria-live="polite"
    >
      FREE SHIPPING ON PREPAID ORDERS
    </div>
  );
}
