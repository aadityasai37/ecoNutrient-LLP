import { useState } from "react";

export default function TrackPage() {
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate courier API to track order
    setMessage(`Tracking for order ID: ${orderId} is not yet implemented.`);
  };

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold mb-6">Track Order</h1>
      <form onSubmit={handleTrack} className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Enter your order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-brand text-white hover:opacity-90 transition"
        >
          Track
        </button>
      </form>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </main>
  );
}
