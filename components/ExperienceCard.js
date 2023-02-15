import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

function ExperienceCard({ experience }) {
  //console.log("m hu experience", experience);
  //article for each card make it seo friendly
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] h-[500px] md:w-[300px] xl:w-[400px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        src={urlFor(experience.companyImage).url()}
        alt=""
        className="rounded-full h-32 w-32 mx-auto object-cover xl:w-[100px] xl:h-[100px] object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex my-2 space-x-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              className="h-10 w-10 rounded-full"
              //always add alt in img tag agr src n mile tb tk alt se chhap dete h agr nhi hua to src turant n mila to error show ho jati  h
            />
          ))}
        </div>
        <p className="uppercase text-gray-300 py-5">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-80 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
            //using index as key chunki array ke element string type ke h ie. unke _id property nhi db m to sonny n bola tha 2 identical point ho skte h but mujhe jm anhi wo mene sanity se data vison m dekha _id object/refernce type or doc type ke alwa inki n hoti syad normal data type ki,,points array ki bhi n h..string ka aaray h jyada depth n jao sanity m jesi jrurt hogi dekh leneg(baki _id property sasnity aur kisi bnata h pta nhi pr object/ref type s and unka array and document type ka ho alg hi desk m like skill type to unka to pka _id bnta h itna pta h baki janna ho t owhi dekhnea vison se data eke and yha lake access krk kr ke..jese jese jrut hogi dekh lneg jyada presan n ho)
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
