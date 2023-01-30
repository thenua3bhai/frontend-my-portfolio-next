import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";

function Projects({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      //if we dont add relative to the parent,it not going to be relative its going to relative to the enitre screen which is big no no....kya kaha ?
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, i) => (
          //i tracks the iteration no. of loop start from zero like i in for loop
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              src={urlFor(project.image).url()}
              alt=""
            />
            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                {""}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    //each object and doc type has _id property in sanity so technology is also a object of skill type document so it has also _id
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* {this div for yellow line tilted by -skew-y-12} */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
