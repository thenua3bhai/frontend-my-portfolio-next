import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

function About({ pageInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        //   in animate we get only in web page refersh or loaidng ,agr load ksi aur partko kre tb jaye to animate na hoga ,,but in whileInView we get animation when we see that any times coming from above or below that section on same page.viewport once bhi kroge tb bhi load hone ke bad first time jb jaoge tb animate hoga jbki animate m jo part web page se refersh hoga wahi animate dikehga... krke dekh lena yhi alg h viewport once and animae lgamne m baki almost same h ..see 1:17Hrs in video
        whileInView={{ opacity: 1, x: 0 }}
        // viewPort={{ once: true }},,hme har bar chahiye
        src={urlFor(pageInfo.profilePic).url()}
        //object cover maintain original look image doesnt distort evn we change height and widht ratio andr wahi same raito ki dikhegi
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
