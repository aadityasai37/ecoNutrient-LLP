"use client";
export default function TopBlackBanner() {
  return (
    <div 
      className="w-full h-9 bg-green-600 text-white font-bold text-sm tracking-tight px-4 flex items-center justify-center sticky top-0 z-50 animate-flicker"
      role="status"
      aria-live="polite"
    >
      FREE SHIPPING ON PREPAID ORDERS
    </div>
  );
}
