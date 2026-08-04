"use client";

import { useSearchParams } from "next/navigation";

export default function Confirmation(){

const params = useSearchParams();

const room = params.get("room");
const name = params.get("name");
const amount = Number(params.get("amount"));

return (

<main className="min-h-screen bg-green-50 flex items-center justify-center py-10">

<div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full text-center">


<h1 className="text-4xl font-bold text-green-900">
Booking Confirmed 🎉
</h1>


<p className="mt-6 text-lg">
Thank you, <b>{name}</b>
</p>


<div className="mt-8 bg-green-50 rounded-2xl p-6 text-left">


<p className="text-lg">
🏨 Room Number:
<b> {room}</b>
</p>


<p className="mt-4">
💰 Total Amount:
<b> ₹{amount * 2}</b>
</p>


<p className="mt-4">
✅ Advance Paid:
<b> ₹{amount}</b>
</p>


<p className="mt-4">
Remaining Amount:
<b> ₹{amount}</b>
</p>


</div>


<div className="mt-8">

<p className="text-gray-600">
Please show this confirmation at Hotel Umed reception.
</p>


<p className="mt-4 text-green-900 font-bold text-xl">
Thank you for choosing Hotel Umed 🌿
</p>

</div>


</div>

</main>

)

}