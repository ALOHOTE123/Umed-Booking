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
  const [confirmed, setConfirmed] = useState(false);

  const pricePerDay = 2000;

  function calculateDays() {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff =
      (end.getTime() - start.getTime()) /
      (1000 * 3600 * 24);

    return diff > 0 ? diff : 0;
  }

  const totalDays = calculateDays();
  const totalAmount = totalDays * pricePerDay;
  const advance = totalAmount / 2;


 function handleBooking(e: React.FormEvent) {
  e.preventDefault();

  setConfirmed(true);
}

if (confirmed) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow text-center">

        <h1 className="text-3xl font-bold text-green-600">
          Booking Confirmed 🎉
        </h1>

        <p className="mt-4">
          Thank you for booking, {name}!
        </p>

        <p>
          Room: {room}
        </p>

        <p>
          Advance Payment: ₹{advance}
        </p>

        <p className="mt-3">
          We will contact you shortly.
        </p>

      </div>
    </div>
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
          onChange={(e)=>setName(e.target.value)}
          required
        />


        <input
          className="border p-3 w-full mb-3 rounded"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          required
        />


        <input
          className="border p-3 w-full mb-3 rounded"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e)=>setGuests(e.target.value)}
          required
        />


        <label>Check In</label>
        <input
          type="date"
          className="border p-3 w-full mb-3 rounded"
          value={checkIn}
          onChange={(e)=>setCheckIn(e.target.value)}
          required
        />


        <label>Check Out</label>
        <input
          type="date"
          className="border p-3 w-full mb-3 rounded"
          value={checkOut}
          onChange={(e)=>setCheckOut(e.target.value)}
          required
        />


        <div className="mb-4">
          <p>Total Days: {totalDays}</p>
          <p>Total Amount: ₹{totalAmount}</p>
          <p className="font-bold">
            Advance (50%): ₹{advance}
          </p>
        </div>


        <button
          className="bg-black text-white w-full py-3 rounded-lg"
        >
          Confirm Booking
        </button>


      </form>

    </div>
  );
}