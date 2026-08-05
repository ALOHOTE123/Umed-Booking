"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function PaymentContent() {
  const router = useRouter();
  const params = useSearchParams();

  const room = params.get("room");
  const name = params.get("name");
  const amount = params.get("amount");

  const [processing, setProcessing] = useState(false);

  function pay(method: string) {
    setProcessing(true);

    setTimeout(() => {
      router.push(
        `/confirmation?room=${room}&name=${name}&amount=${amount}`
      );
    }, 2000);
  }

  if (processing) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-green-700">
            Processing Payment...
          </h1>

          <p className="mt-4">
            Please wait...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Choose Payment Method
        </h1>

        <button
          onClick={() => pay("Google Pay")}
          className="w-full bg-blue-600 text-white py-3 rounded-xl mb-4"
        >
          Google Pay
        </button>

        <button
          onClick={() => pay("PhonePe")}
          className="w-full bg-purple-700 text-white py-3 rounded-xl mb-4"
        >
          PhonePe
        </button>

        <button
          onClick={() => pay("Paytm")}
          className="w-full bg-sky-500 text-white py-3 rounded-xl mb-4"
        >
          Paytm
        </button>

        <button
          onClick={() => pay("BHIM")}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          BHIM UPI
        </button>

      </div>

    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}