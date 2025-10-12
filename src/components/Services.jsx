import React from "react";
import Button from "../layout/Button";
import ServiceCard from "../layout/ServiceCard";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

function Services() {

  const icon1 = <RiMicroscopeLine size={38} className="text-backgroundColor" />
  const icon2 = <MdHealthAndSafety size={38} className="text-backgroundColor" />
  const icon3 = <FaHeartbeat size={38} className="text-backgroundColor" />
  return (
    <div className="min-h-full flex flex-col justify-center lg:px-32 px-5 pt-20 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            facilis doloremque atque!
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServiceCard icon={icon1} title="Lab Test"/>
        <ServiceCard icon={icon2} title="Health Check"/>
        <ServiceCard icon={icon3} title="Heart Health"/>
      </div>
    </div>
  );
}

export default Services;
