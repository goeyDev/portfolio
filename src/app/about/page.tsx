"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";
import { experiences } from "@/contents/experience";
import { Educations } from "@/contents/education";
import { skills } from "@/contents/skill";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m an engineering specialist with years of hands-on experience
          in the medical and electronics manufacturing industries. I focus on
          equipment engineering, process transfer, and resolving machine issues
          to keep production running smoothly. I’m also passionate about
          improving systems through preventive maintenance and root cause
          analysis, and I enjoy sharing knowledge through technical training and
          documentation.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            {skills.map((skill, index) => (
             <div className="" key={index}>
                <h3 className="text-xl font-semibold mb-2">Hard Skills</h3>

                <ul className="text-secondary space-y-2">
                  {skill.hardSkills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            {skills.map((skill, index) => (
             <div className="" key={index}>
                <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>

                <ul className="text-secondary space-y-2">
                  {skill.softSkills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            {skills.map((skill, index) => (
              <div className="" key={index}>
                <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>

                <ul className="text-secondary space-y-2">
                  {skill.others.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            {/* experience map */}
            {experiences.map((experience, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {experience.title}
                </h3>
                <p className="text-primary mb-2">
                  {experience.company} • {experience.date}
                </p>
                <ul className="text-secondary list-disc list-inside space-y-2">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            {Educations.map((edu, index) => (
             <div className="" key={index}>
                <h3 className="text-xl font-semibold mb-2">
                  {edu.qualification}
                </h3>
                <p className="text-primary mb-2">
                  {edu.institution} • {edu.year}
                </p>
                {/* <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web
              development.
            </p> */}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
