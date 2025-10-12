import React from 'react'
import Button from '../layout/Button'
import BlogCards from '../layout/BlogCards'
import Blog1 from "../assets/Blogs/blog1.jpg";
import Blog2 from "../assets/Blogs/blog2.jpg";
import Blog3 from "../assets/Blogs/blog3.jpg";
import Blog4 from "../assets/Blogs/blog4.jpg";
import Blog5 from "../assets/Blogs/blog5.jpg";
import Blog6 from "../assets/Blogs/blog6.jpg";

function Blogs() {
  return (
     <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCards img={Blog1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCards img={Blog2} headlines="The Heart-Healthy Diet" />
          <BlogCards
            img={Blog3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCards img={Blog4} headlines="Navigating Mental Health" />
          <BlogCards img={Blog5} headlines="The Importance of Regular Exercise" />
          <BlogCards img={Blog6} headlines="Skin Health 101" />
            </div>
        </div>
    </div>
  )
}

export default Blogs