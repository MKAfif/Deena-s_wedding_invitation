import img from "./assets/d.jpeg"
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RosePetals from "./components/RosePetals";
import music from "./assets/french.mp3";
import EnvelopeOpen from "./components/EnvelopeOpen";
import banner from "./assets/banner.jpeg"
import story from "./assets/de.jpeg";
import invitation from "./assets/invi.jpeg";
import { FaHeart } from "react-icons/fa";

function App() {


  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
  }, []);


  const weddingDate = new Date("May 10, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const audio = document.getElementById("bgMusic");

    if (audio) {
      audio.muted = false;
      audio.play().catch(() => { });
    }
  }, [open]);


  if (!open) {
    return <EnvelopeOpen onOpen={() => setOpen(true)} />;
  }

  return (
    <div className="font-serif">


      <audio autoPlay loop muted id="bgMusic">
        <source src={music} type="audio/mpeg" />
      </audio>

      <RosePetals />

      <div className="fixed top-4 right-4 w-64 bg-black/70 text-white z-50 py-3 px-4 rounded-xl shadow-lg">
        <div className="grid grid-cols-4 text-center text-sm font-semibold">

          <div>
            <div className="text-lg">{timeLeft.days}</div>
            <span className="text-xs">Days</span>
          </div>

          <div>
            <div className="text-lg">{timeLeft.hours}</div>
            <span className="text-xs">Hours</span>
          </div>

          <div>
            <div className="text-lg">{timeLeft.minutes}</div>
            <span className="text-xs">Minutes</span>
          </div>

          <div>
            <div className="text-lg">{timeLeft.seconds}</div>
            <span className="text-xs">Seconds</span>
          </div>

        </div>
      </div>
      <section
        data-aos="fade-in"
        className="
    w-full
    h-[50vh] 
    sm:h-[60vh] 
    md:h-[80vh] 
    lg:h-screen
    bg-cover 
    bg-center
    relative
    flex
    items-center
    justify-center
  "
        style={{ backgroundImage: `url(${banner})` }}
      >
      </section>

      {/* Our Story */}
      <section
        data-aos="fade-up"
        className="py-20 bg-white text-center"
      >
        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-4xl font-bold text-rose-700 mb-10">
            Our Story
          </h2>

          {/* Story Image */}
          <div data-aos="zoom-in" className="mb-8">
            <img
              src={story}
              alt="Our Story"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Story Text */}
          <div data-aos="fade-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              What started as a simple friendship during our school days gradually blossomed into a
              lifelong bond. Through the years, we have grown together, supporting
              one another through every phase of life.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Guided by faith, patience, and the encouragement of our families,
              our journey has led us to this beautiful moment where we begin our
              life together with love and gratitude.
            </p>
          </div>

        </div>
      </section>

      {/* Hero Section */}
      <section
        data-aos="fade-in"
        className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      >

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: `url(${img})` }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-white">

          <div className="text-center text-white">

            <h1
              data-aos="fade-down"
              className="text-6xl md:text-7xl font-bold italic "
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Deena
            </h1>

            <h2
              className="text-6xl md:text-4xl my-2"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              with
            </h2>

            <h1
              data-aos="fade-down"
              className="text-6xl md:text-7xl font-bold italic"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Safwan
            </h1>

          </div>
          <p data-aos="fade-up" className="mt-6 text-xl">
            Together with our families invite you to celebrate our wedding
          </p>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-2xl font-semibold">
            May 10, 2026
          </p>

          {/* Transparent image */}

        </div>

      </section>

      {/* Event Details */}
      <section
        data-aos="fade-up"
        className="py-20 bg-white text-center"
      >
        <h2 className="text-4xl font-bold text-rose-700 mb-10">
          Wedding Events
        </h2>

        <div className="space-y-6 text-lg">
          {/* <p>💍 Nikkah – May 4, 11 AM</p> */}
          <p>🤵 Wedding Ceremony – May 10, 11:30 AM</p>
          <p>🎉 Reception – May 10, 7 PM</p>
        </div>
      </section>



      {/* Location */}
      <section
        data-aos="zoom-in"
        className="py-20 bg-rose-50 text-center"
      >
        <h2 className="text-4xl font-bold text-rose-700 mb-6">
          Wedding Venue
        </h2>

        <p className="mb-8 text-lg">
          Crown Convention Centre, Pathanapuram
        </p>

        {/* Venue Image */}
        {/* <img
          src="/venue.jpg"
          alt="Crown Convention Centre"
          className="mx-auto rounded-xl shadow-lg mb-10 w-3/4 md:w-1/2"
        /> */}

        {/* Google Map */}
        <iframe
          title="map"
          className="mx-auto rounded-xl shadow-lg"
          width="80%"
          height="350"
          src="https://maps.google.com/maps?q=Crown%20Convention%20Centre%20Pathanapuram&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>

        {/* Button to open maps */}
        <div className="mt-8">
          <a
            href="https://maps.app.goo.gl/KbFwfEqa28eFr5AA8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700"
          >
            Open in Google Maps
          </a>
        </div>
        <h2
          className="mt-10 text-3xl md:text-5xl text-black  "
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          We can’t wait to celebrate with you !
        </h2>
      </section>

      

      <div className="fixed bottom-6 right-6 group z-50">

        <a
          href={invitation}
          download="wedding-invitation.jpg"
          className="bg-white hover:bg-rose-100 text-rose-600 w-14 h-14 flex items-center justify-center rounded-full shadow-xl text-2xl"
        >
          <FaHeart />
        </a>

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Download Invitation
        </span>

      </div>



    </div>
  );
}

export default App;