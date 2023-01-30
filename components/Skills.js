import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills({ skills }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      {/* grid-cols-4 ek row m 4 hi item rkhega fir row chage krke niche column bdhata jayega */}
      <div className="grid grid-cols-4 gap-5 mb-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}{" "}
        {/* // // direct ese direction left pass krne se isme true pass hoga and //slice slices the whole skills array in parts of arrays,and on them we are mapping through
        // // ke liye true pass hoga wo right se animate hoke //aayenge..Skill m
        x ki // // value isi base p jayegi..-200 ya 200 */}
      </div>
    </motion.div>
  );
}

export default Skills;
