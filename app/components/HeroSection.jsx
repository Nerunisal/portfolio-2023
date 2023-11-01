"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-blue-600 mb-6 text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Hello there! I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Neruni",
                1000,
                "Web Developer",
                1000,
                "App Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-blue-900 text-lg mb-6 lg:text-xl">
            Passionate designer and developer ready to turn your digital dreams
            into reality.
          </p>
          {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-blue-800 hover:bg-pink-300 text-pink-300'>
            Crafting digital experiences that inspire.
        </button> */}
        </div>
        <div className="place-self-center mt-4 lg:mt-0">
          <Image
            src="/images/profile.jpg"
            alt="hero image"
            className="rounded-full w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]"
            width="300"
            height="300"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
