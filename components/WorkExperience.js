import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function WorkExperience({ experiences }) {
  console.log("ye raha experiences", experiences);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative overflow-hidden h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll  p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {experiences.map((experience) => {
          //yha map ke andr return n likha tha direct card likha tha jbki {} likhte to return likhte h map ke andr yha jo bhi map se array m se one by one nikal rhe h isko shortcut m map ke arrow ke aage {} ki jagh () signle line ho usme and wo return  hona ho to wha autmatic use return mana jata h(see ExperienceCard technology map) wha n likhte but hmne to {} m hi yha return likha aur error dhundte pgl ho rhe 1.5 hr gya kha error h experince card rendr kyu n ho rha alg se ho rha tha map m nhi map m hi glti kha kha console.log lgate fire...pr finally pkd gyi glti ese hi analysis krke mistake possibiltiy dekhke ,hit and trial se sochke mistake pkd aati h khali bethne ya chhod dene se pkd n aati,,yha se comment bhi kata tha key ke upar tha
          return (
            <ExperienceCard key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
