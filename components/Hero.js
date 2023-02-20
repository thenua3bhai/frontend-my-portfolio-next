import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import BackgroundCircles from "./BackgroundCircles";

function Hero({ pageInfo }) {
  // const [text, count] = useTypewriter({
  //   words: [
  //     `Hi my name is ${pageInfo.name}`,
  //     "Guy, who love's Milk ",
  //     "<ButLovesToCodeMore />",
  //   ],
  //   loop: 0,
  //   delaySpeed: 2000,
  // });
  //it is showing infinite rendering of hero components so we commented
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* we should use next image tag here but for now just we using simple img tag */}
      <img
        src={urlFor(pageInfo.heroImage).url()}
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      {/* z-20 to make this div above of page and components to make buttons clickable */}
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">text</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
