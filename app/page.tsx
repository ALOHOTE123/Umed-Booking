"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

{/* HERO */}

<section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* Navbar */}
  <nav className="absolute top-0 left-0 right-0 z-30">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-6">

      <div>
        <h1 className="text-3xl font-bold tracking-wide text-white">
          HOTEL UMED
        </h1>

        <p className="text-green-300 uppercase tracking-[6px] text-xs mt-1">
          Family Restaurant & Resto Bar
        </p>
      </div>

    {/* Desktop Menu */}
{/* Top Right Menu */}
<div className="flex items-center gap-5 md:gap-10 text-white font-medium text-sm md:text-base">

  <a 
    href="#about" 
    className="hover:text-green-300 transition"
  >
    About
  </a>

  <a 
    href="#gallery" 
    className="hover:text-green-300 transition"
  >
    Gallery
  </a>

  <a 
    href="#instagram" 
    className="hover:text-green-300 transition"
  >
    Instagram
  </a>
</div>


{/* Mobile Menu Button */}

    </div>
  </nav>

  {/* Hero Content */}

  <div className="relative z-20 flex items-center justify-center h-full">

    <div className="text-center max-w-4xl px-6">

      <p className="uppercase tracking-[8px] text-green-300 font-semibold">
        EXPERIENCE NATURE
      </p>

      <h1 className="mt-6 text-5xl md:text-8xl font-black text-white leading-none">
        Hotel Umed
      </h1>

      <h2 className="mt-4 text-xl md:text-4xl text-white font-light leading-relaxed">
        Family Restaurant • Resto Bar • Nature Dining
      </h2>

      <p className="mt-6 text-base md:text-xl text-gray-200 leading-7 md:leading-9 max-w-3xl mx-auto">
        Enjoy delicious food, refreshing beverages and peaceful outdoor
        dining.
      </p>

    <div className="flex flex-wrap justify-center gap-4 mt-10">

  <a
    href="tel:9284542620"
    className="bg-green-700 hover:bg-green-800 px-8 py-4 rounded-full text-white font-semibold transition duration-300 shadow-xl"
  >
    📞 Call Now
  </a>


  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Umed+Resto+Bar+Rumbhodi+Maharashtra"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-white font-semibold transition duration-300"
  >
    📍 Get Directions
  </a>


  <a
    href="/rooms"
    className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-full shadow-xl transition duration-300 hover:scale-105"
  >
    🏨 Book Stay
  </a>


</div>

    </div>

  </div>

  {/* Scroll Down */}

 

</section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-24 bg-[#f6fbf6]"
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <Image
  src="/hero.jpg"
  alt="Hotel Umed"
  width={700}
  height={500}
  className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500 object-cover"
 />

          <div>

            <span className="uppercase tracking-[6px] text-green-700 font-semibold">
              About Hotel
            </span>

            <h2 className="text-5xl font-bold mt-5 text-green-900">
              Escape Into Nature
            </h2>

            <p className="mt-8 text-gray-700 leading-9 text-lg">

              Nestled amidst lush greenery in Rumbhodi,
              Hotel Umed Resto Bar offers a unique outdoor
              dining experience with delicious food,
              refreshing beverages and peaceful surroundings.

              Whether you are visiting with friends or family,
              every visit becomes a memorable experience.

            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🌿 Nature
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🍽 Delicious Food
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🍺 Premium Drinks
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🌄 Outdoor Seating
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="py-20 bg-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl text-center font-bold text-green-800">
            Why Choose Hotel Umed?
          </h2>

          <p className="text-center text-gray-600 mt-5">
            Peaceful surroundings, delicious food and unforgettable memories.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl">🌿</div>

              <h3 className="text-2xl font-bold mt-5">
                Green Environment
              </h3>

              <p className="mt-4 text-gray-600">
                Relax in a peaceful natural atmosphere.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl">🍽</div>

              <h3 className="text-2xl font-bold mt-5">
                Tasty Food
              </h3>

              <p className="mt-4 text-gray-600">
                Freshly prepared meals and beverages.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl">🌄</div>

              <h3 className="text-2xl font-bold mt-5">
                Outdoor Seating
              </h3>

              <p className="mt-4 text-gray-600">
                Enjoy evenings under the open sky.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PART 2 STARTS HERE */}
            {/* GALLERY SECTION */}

      {/* GALLERY SECTION */}

<section
  id="gallery"
  className="py-28 bg-[#fafafa]"
>

<div className="max-w-7xl mx-auto px-6">


<div className="text-center">

<p className="uppercase tracking-[6px] text-green-700 font-semibold">
Our Gallery
</p>

<h2 className="text-5xl md:text-6xl font-bold text-green-900 mt-4">
Moments At Hotel Umed
</h2>

<p className="mt-6 text-gray-600 text-lg">
A beautiful place for food, nature and unforgettable evenings.
</p>

</div>


<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">


{/* Big Image */}

<div className="md:col-span-2 md:row-span-2">

<Image
src="/gallery4.jpg"
alt="Hotel Umed"
width={900}
height={900}
className="w-full h-[550px] object-cover rounded-[35px] shadow-2xl hover:scale-[1.02] transition duration-500"
/>

</div>







<div>

<Image
src="/gallery2.jpg"
alt="Food"
width={600}
height={400}
className="w-full h-72 object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
/>

</div>



<div>

<Image
src="/gallery3.jpg"
alt="Outdoor"
width={600}
height={400}
className="w-full h-72 object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
/>

</div>



<div>

<Image
src="/gallery5.jpg"
alt="Resto Bar"
width={600}
height={400}
className="w-full h-72 object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
/>

</div>
<div>
  <Image
    src="/gallery6.jpg"
    alt="Hotel Umed"
    width={600}
    height={400}
    className="w-full h-72 object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
  />
</div>

</div>

</div>

</section>
{/* MENU SECTION */}

<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Our Menu
    </h2>

    <p className="text-center text-gray-600 mt-5 text-lg">
      Authentic food and beverages prepared for a memorable dining experience.
    </p>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">


      <div className="bg-green-50 rounded-3xl shadow-xl p-10">

        <h3 className="text-3xl font-bold text-green-900">
          🍽 Food
        </h3>

        <ul className="mt-6 space-y-4 text-gray-700 text-lg">

          <li>• Maharashtrian Specialities</li>
          <li>• Starters</li>
          <li>• Main Course</li>
          <li>• Family Combos</li>

        </ul>

      </div>



      <div className="bg-green-50 rounded-3xl shadow-xl p-10">

        <h3 className="text-3xl font-bold text-green-900">
          🍺 Beverages
        </h3>

        <ul className="mt-6 space-y-4 text-gray-700 text-lg">

          <li>• Beer</li>
          <li>• Whisky</li>
          <li>• Wine</li>
          <li>• Premium Drinks</li>
          <li>• Special Beverages</li>

        </ul>

      </div>


    </div>


   


  </div>

</section>

{/* REVIEWS SECTION */}

<section className="py-24 bg-green-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Customer Reviews
    </h2>

    <p className="text-center text-gray-600 mt-5 text-lg">
      What our guests say about Hotel Umed Resto Bar.
    </p>


    <div className="grid md:grid-cols-3 gap-8 mt-14">


      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-yellow-500 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-5 text-gray-700">
          Beautiful location surrounded by nature.
          Great food and peaceful atmosphere.
        </p>

        <h3 className="mt-5 font-bold text-green-900">
          - Happy Customer
        </h3>

      </div>



      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-yellow-500 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-5 text-gray-700">
          Excellent place for family and friends.
          Food quality is really good.
        </p>

        <h3 className="mt-5 font-bold text-green-900">
          - Happy Customer
        </h3>

      </div>



      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-yellow-500 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-5 text-gray-700">
          Nice ambience, outdoor seating and
          enjoyable evening experience.
        </p>

        <h3 className="mt-5 font-bold text-green-900">
          - Happy Customer
        </h3>

      </div>


    </div>

  </div>

</section>
      {/* FACILITIES SECTION */}

      <section className="py-24 bg-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-green-900">
            Our Facilities
          </h2>

          <p className="text-center text-gray-600 mt-5 text-lg">
            Everything you need for a comfortable dining experience.
          </p>


          <div className="grid md:grid-cols-4 gap-8 mt-14">


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">🚗</div>
              <h3 className="text-xl font-bold mt-5">
                Parking
              </h3>
              <p className="text-gray-600 mt-3">
                Spacious parking area for guests.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mt-5">
                Family Seating
              </h3>
              <p className="text-gray-600 mt-3">
                Comfortable seating for families and groups.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">🍺</div>
              <h3 className="text-xl font-bold mt-5">
                Resto Bar
              </h3>
              <p className="text-gray-600 mt-3">
                Enjoy food and beverages with friends.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">🌙</div>
              <h3 className="text-xl font-bold mt-5">
                Evening Ambience
              </h3>
              <p className="text-gray-600 mt-3">
                Relaxing atmosphere surrounded by nature.
              </p>
            </div>


          </div>

        </div>

      </section>

      {/* LOCATION SECTION */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Visit Us
    </h2>

    <p className="text-center mt-6 text-xl text-gray-700">
      Hotel Umed Resto Bar
      <br />
      Rumbhodi, Maharashtra
    </p>


    <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">


      <div className="rounded-3xl overflow-hidden shadow-xl">

        <iframe
          src="https://www.google.com/maps?q=Hotel+Umed+Resto+Bar+Rumbhodi+Maharashtra&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          className="border-0"
        ></iframe>

      </div>


      <div className="text-center md:text-left">

        <h3 className="text-3xl font-bold text-green-900">
          Find Our Location
        </h3>

        <p className="mt-5 text-gray-600 text-lg">
          Visit Hotel Umed Resto Bar and enjoy delicious food,
          refreshing beverages and a peaceful natural atmosphere.
        </p>


       <a
  href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Umed+Resto+Bar+Rumbhodi+Maharashtra"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 bg-green-700 text-white px-10 py-4 rounded-full font-semibold"
>
  Get Directions
</a>

      </div>


    </div>

  </div>

</section>


      {/* CONTACT SECTION */}

      


<section id="instagram" className="py-24 bg-green-50 text-center">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-green-900">
      Follow Hotel Umed
    </h2>

    <p className="mt-6 text-xl text-gray-600">
      Explore our food, ambience and memorable moments.
    </p>

    <a
      href="https://www.instagram.com/umed_resto_bar/"
      target="_blank"
      rel="noopener noreferrer"className="inline-block mt-10 bg-black text-white px-12 py-4 rounded-full font-bold shadow-xl hover:bg-green-700 hover:scale-105 transition duration-300"
      
    >
      📸 Follow Instagram
    </a>

  </div>

</section>
{/* NEARBY PLACES SECTION */}

{/* NEARBY PLACES SECTION */}

<section className="py-24 bg-green-50">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Explore Nearby Places
    </h2>

    <p className="text-center mt-5 text-gray-600 text-lg">
      Enjoy your visit to Hotel Umed while exploring beautiful destinations nearby.
    </p>


    <div className="grid md:grid-cols-2 gap-10 mt-14">

<div className="bg-white rounded-3xl shadow-xl p-10 text-center">

  <div className="text-6xl">
    🌊
  </div>

  <h3 className="text-3xl font-bold mt-5 text-green-900">
    Vithe Waterfall
  </h3>

  <p className="text-green-700 font-semibold mt-3">
    Approx. 4.2 km from Hotel Umed
  </p>

  <p className="mt-4 text-gray-600">
    A beautiful nearby waterfall, perfect for a quick nature stop during your visit.
  </p>

</div>
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

        <div className="text-6xl">
          🌊
        </div>

        <h3 className="text-3xl font-bold mt-5 text-green-900">
          Randha Falls
        </h3>

        <p className="text-green-700 font-semibold mt-3">
          Approx. 21 km from Hotel Umed
        </p>

        <p className="mt-4 text-gray-600">
          A beautiful waterfall destination surrounded by nature.
        </p>

      </div>



      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

        <div className="text-6xl">
          🌄
        </div>

        <h3 className="text-3xl font-bold mt-5 text-green-900">
          Bhandardara
        </h3>

        <p className="text-green-700 font-semibold mt-3">
          Approx. 27 km from Hotel Umed
        </p>

        <p className="mt-4 text-gray-600">
          Scenic lakes, mountains and peaceful natural surroundings.
        </p>

      </div>
<div className="bg-white rounded-3xl shadow-xl p-10 text-center">

  <div className="text-6xl">
    🌊
  </div>

  <h3 className="text-3xl font-bold mt-5 text-green-900">
    Umbrella Falls
  </h3>

  <p className="text-green-700 font-semibold mt-3">
    Approx. 30 km from Hotel Umed
  </p>

  <p className="mt-4 text-gray-600">
    A seasonal waterfall near Wilson Dam, famous for its umbrella-shaped cascade during the monsoon.
  </p>

</div>
<div className="bg-white rounded-3xl shadow-xl p-10 text-center">

  <div className="text-6xl">
    🏰
  </div>

  <h3 className="text-3xl font-bold mt-5 text-green-900">
    Ratangad Fort
  </h3>

  <p className="text-green-700 font-semibold mt-3">
    Approx. 39 km from Hotel Umed
  </p>

  <p className="mt-4 text-gray-600">
    An ancient hill fort offering breathtaking trekking trails and panoramic Sahyadri mountain views.
  </p>

</div>
<div className="bg-white rounded-3xl shadow-xl p-10 text-center">

  <div className="text-6xl">
    🏞
  </div>

  <h3 className="text-3xl font-bold mt-5 text-green-900">
    Sandhan Valley
  </h3>

  <p className="text-green-700 font-semibold mt-3">
    Approx. 50 km from Hotel Umed
  </p>

  <p className="mt-4 text-gray-600">
    Popular for canyon trekking, camping and its spectacular rocky landscape in the Sahyadris.
  </p>

</div>
<div className="bg-white rounded-3xl shadow-xl p-10 text-center">

  <div className="text-6xl">
    🏰
  </div>

  <h3 className="text-3xl font-bold mt-5 text-green-900">
    Harishchandragad Fort
  </h3>

  <p className="text-green-700 font-semibold mt-3">
    Approx. 55 km from Hotel Umed
  </p>

  <p className="mt-4 text-gray-600">
    One of Maharashtra's most famous trekking destinations, known for the stunning Konkan Kada viewpoint.
  </p>

</div>

    </div>

  </div>

</section>
      {/* FOOTER */}

      <footer className="bg-black text-white py-8 text-center">

        <h3 className="text-2xl font-bold">
          Hotel Umed Resto Bar
        </h3>

        <p className="mt-3 text-gray-400">
          © 2026 Hotel Umed. All Rights Reserved.
        </p>

      </footer>
      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919284542620"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full justify-center shadow-2xl font-bold flex items-center gap-2"
      >
        💬
      </a>


    </main>
  );
}