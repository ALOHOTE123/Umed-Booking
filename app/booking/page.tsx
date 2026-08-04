"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Booking(){

  const searchParams = useSearchParams();
  const router = useRouter();

  const room = searchParams.get("room");

  const [name,setName] = useState("");
  const [mobile,setMobile] = useState("");
  const [guests,setGuests] = useState("");
  const [checkIn,setCheckIn] = useState("");
  const [checkOut,setCheckOut] = useState("");


  const calculateAmount = () => {

    if(!checkIn || !checkOut)
      return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff = end.getTime() - start.getTime();

    const nights = Math.ceil(
      diff / (1000 * 60 * 60 * 24)
    );

    return nights > 0 ? nights * 2000 : 0;

  };


  const totalAmount = calculateAmount();
  const advance = totalAmount / 2;



  function confirmBooking(){

    if(!name || !mobile || !checkIn || !checkOut){
      alert("Please fill all details");
      return;
    }


    router.push(
      `/confirmation?room=${room}&name=${name}&amount=${advance}`
    );

  }



  return (

    <main className="min-h-screen bg-green-50 py-20">

      <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl">


        <h1 className="text-4xl font-bold text-center text-green-900">
          Booking Details
        </h1>


        <p className="text-center mt-4 text-lg">
          Room Selected : <b>{room}</b>
        </p>



        <input
        className="w-full border p-3 rounded mt-8"
        placeholder="Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />


        <input
        className="w-full border p-3 rounded mt-4"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        />


        <input
        className="w-full border p-3 rounded mt-4"
        placeholder="Number of Guests"
        value={guests}
        onChange={(e)=>setGuests(e.target.value)}
        />


        <label className="block mt-5">
          Check In
        </label>

        <input
        type="date"
        className="w-full border p-3 rounded"
        value={checkIn}
        onChange={(e)=>setCheckIn(e.target.value)}
        />


        <label className="block mt-5">
          Check Out
        </label>

        <input
        type="date"
        className="w-full border p-3 rounded"
        value={checkOut}
        onChange={(e)=>setCheckOut(e.target.value)}
        />



        {
          totalAmount > 0 &&

          <div className="mt-6 bg-green-50 p-5 rounded-xl">

            <p>
              Total Amount:
              <b> ₹{totalAmount}</b>
            </p>


            <p className="mt-2">
              Advance Payment (50%):
              <b> ₹{advance}</b>
            </p>

          </div>

        }



        <a
href={`upi://pay?pa=YOURUPIID@upi&pn=Hotel Umed&am=${advance}&cu=INR`}
className="mt-8 block text-center w-full bg-green-700 text-white py-4 rounded-full font-bold"
>
Pay ₹{advance} Advance
</a>


      </div>

    </main>

  )
}