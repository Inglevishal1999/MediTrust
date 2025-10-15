import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Doctors() {
  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet and small laptop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const data = [
    {
      img: "/src/assets/doc1.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "/src/assets/doc2.jpg",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: "/src/assets/doc3.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: "/src/assets/doc4.jpg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: "/src/assets/doc5.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: "/src/assets/doc6.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-16">
      {/* Heading Section */}
      <div className="flex flex-col items-center lg:flex-row justify-between gap-6 mb-10">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
            Our Doctors
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Meet our team of highly qualified and experienced specialists
            dedicated to providing the best healthcare services with care and
            compassion.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-4">
          <button
            className="bg-[#d5f2ec] hover:bg-[#ade9dc] text-backgroundColor p-3 rounded-lg transition-all"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="bg-[#d5f2ec] hover:bg-[#ade9dc] text-backgroundColor p-3 rounded-lg transition-all"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-4">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div key={index} className="px-2 sm:px-3 md:px-4">
              <div className="h-[320px] sm:h-[350px] md:h-[380px] text-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
                <LazyLoadImage
                  src={e.img}
                  alt="doctor"
                  effect="blur" // or "opacity", "black-and-white"
                  className="w-full h-52 sm:h-60 md:h-64 object-cover rounded-t-xl"
                />

                <div className="flex flex-col justify-center items-center pt-4 px-3">
                  <h1 className="font-semibold text-lg sm:text-xl text-gray-800 text-center">
                    {e.name}
                  </h1>
                  <h3 className="pt-2 text-gray-500 text-sm sm:text-base text-center">
                    {e.specialties}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Doctors;
