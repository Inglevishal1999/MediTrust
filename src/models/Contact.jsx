import React from "react";
import Button from "../layout/Button";

function Contact({closeForm}) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="popup-form absolute text-black">
          <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
            <h1 className="text-4xl font-semibold text-center text-backgroundColor">Book Now</h1>
            <div className="flex flex-col">
              <input
                type="text"
                name="userFirstName"
                id="userFirstName"
                placeholder="First Name"
                className="py-3 px-2 bg-[#d5f2ec] rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="userLastName"
                id="userLastName"
                placeholder="Last Name"
                className="py-3 px-2 bg-[#d5f2ec] rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Your Email"
                className="py-3 px-2 bg-[#d5f2ec] rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Phone No."
                className="py-3 px-2 bg-[#d5f2ec] rounded-xl"
              />
            </div>

            <div className="flex gap-5">
              <Button title="Book Appontment"/>
              <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={closeForm}>Close</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
