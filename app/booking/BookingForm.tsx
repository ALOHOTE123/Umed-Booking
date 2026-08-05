"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const room = searchParams.get("room");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guests, setGuests] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const pricePerDay = 2000;

  function calculateDays() {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff =
      (end.getTime() - start.getTime()) /
      (1000 * 60 * 60 * 24);

    return diff > 0 ? diff : 0;
  }

  const totalDays = calculateDays();
  const totalAmount = totalDays * pricePerDay;
  const advance = totalAmount / 2;

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/payment?room=${room}&name=${encodeURIComponent(
        name
      )}&amount=${advance}`
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <form
        onSubmit={handleBooking}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-5 text-center">
          Book Your Stay
        </h1>

        <p className="mb-4 font-semibold">
          Room: {room || "Not Selected"}
        </p>

        <input
          className="border p-3 w-full mb-3 rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="border p-3 w-full mb-3 rounded"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <input
          type="number"
          className="border p-3 w-full mb-3 rounded"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label className="font-medium">Check In</label>

        <input
          type="date"
          className="border p-3 w-full mb-3 rounded"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />

        <label className="font-medium">Check Out</label>

        <input
          type="date"
          className="border p-3 w-full mb-4 rounded"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />

        <div className="bg-gray-100 rounded-lg p-4 mb-5">
          <p>Total Days: <b>{totalDays}</b></p>
          <p>Total Amount: <b>₹{totalAmount}</b></p>
          <p className="text-green-700 font-bold">
            Advance (50%): ₹{advance}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}