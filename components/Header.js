import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header({ socials }) {
  //using header tag for header to make SEO friendly
  return (
    // we need postioning other than static (absolute/relative/fixed/sticky) to use z index,otherwise in static(default) z index will show no effect nad left,top,bottom,right bhi other than static postioning m kam krti h
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        //passing 3 attributes initail,animate,transion to motion.div element to animate
        //value of x decide based on ?
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        //x:0 means on its original positon,scale 1 means original size and .5 means half of original size
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex  flex-row items-center"
      >
        {socials.map((social) => (
          //whenever we use map for rendering tags we pass key prop unique, here we are using _id as key which are made by sanity and comes from there in data fetched
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center  text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
