"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Rooms() {
    const router = useRouter();

  const rooms = [
  {
    id:1,
    name:"Deluxe Room",
    price:2000,
    guests:"2 Guests",
    facility:"AC • TV • Attached Bathroom"
  },
  {
    id:2,
    name:"Family Room",
    price:2500,
    guests:"4 Guests",
    facility:"AC • TV • Extra Bed"
  },
  {
    id:3,
    name:"Cottage Room",
    price:3000,
    guests:"4 Guests",
    facility:"Garden View • AC • Bathroom"
  },
  ...Array.from({length:12},(_,i)=>({
    id:i+4,
    name:"Deluxe Room",
    price:2000,
    guests:"2 Guests",
    facility:"AC • TV • Attached Bathroom"
  }))
];

  const [selectedRoom,setSelectedRoom] = useState<number | null>(null);


  return (

    <main className="min-h-screen bg-green-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-900">
          Book Your Stay
        </h1>

        <p className="text-center mt-4 text-gray-600 text-lg">
          Select your room at Hotel Umed
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-12">

        {
          rooms.map((room)=>(

            <div
              key={room.id}
              onClick={()=>setSelectedRoom(room.id)}
              className={`bg-white rounded-3xl shadow-xl p-8 cursor-pointer text-center
              ${
                selectedRoom===room.id
                ?
                "border-4 border-green-600"
                :
                ""
              }`}
            >

              <div className="text-5xl">
                🏨
              </div>


              <h2 className="text-3xl font-bold mt-5 text-green-900">
                {room.name}
              </h2>


              <p className="mt-4 text-gray-600">
                ₹{room.price} / Night
              </p>
<p className="mt-2 text-gray-600">
{room.guests}
</p>

<p className="mt-2 text-sm text-gray-500">
{room.facility}
</p>

              <button className="mt-6 bg-green-700 text-white px-8 py-3 rounded-full">
                Select
              </button>


            </div>

          ))
        }

        </div>


        {
          selectedRoom &&

          <div className="text-center mt-12">

            <h2 className="text-2xl font-bold">
              Room {selectedRoom} Selected
            </h2>


            <button
  onClick={() => router.push(`/booking?room=${selectedRoom}`)}
  className="mt-6 bg-amber-500 px-10 py-4 rounded-full font-bold"
>
  Continue Booking
</button>

          </div>
        }


      </div>

    </main>

  );
}