import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar1Icon, LocateIcon, MapPin } from "lucide-react";

const experiences = [
{
  role: "Android Developer",
  company: "Enfotrix Pvt Ltd",
  date: "May 2023 – Present",
  description: [
    "Life Changer(Finance management system user and admin Android app)",
    "Collaborated with cross-functional teams to deliver production-ready apps.",
    "Optimized app performance and ensured clean architecture.",
    "Developed Quick Bite, a food delivery app for easy and efficient meal ordering.",
    "CGS(School Management System) Built a school management system with apps for teachers, students, and the principal."
  ],
},
  {
    role: "Full-Stack Developer",
    company: "Freelance / University Projects",
    date: "2022 – 2023",
    description:
      "Developed web apps using MERN stack, Flask for ML APIs, and deployed apps on cloud servers.",
  },

];

const Experince = () => {
  return (
    <section className="  text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-[7rem] leading-[3rem] font-bold mb-12 text-center">Experience</h1>
  <h2 className="text-[1.2rem] font-bold mb-12 text-center">  My professional journey through various roles in android development.
</h2>
        <div className="relative border-l border-gray-600">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              {/* Icon */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#E5FC76] rounded-full ring-8 ring-black">
                <Briefcase className="w-3 h-3 text-black" />
              </span>

              {/* Card */}
              <div className="bg-[#BEB3FE] space-y-3 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl text-black font-semibold">{exp.role}</h3>
                <div className="flex lg:flex-row flex-col items-start lg:items-center gap-7">
                     <p className="text-lg text-purple-700 flex font-semibold items-center gap-2">{exp.company}</p>
                  <p className="text-md text-gray-700 flex font-medium items-center gap-2"><span><MapPin /></span>Onsite</p>
              
                <p className="text-md text-gray-700 mb-2 flex items-center gap-2"><span><Calendar1Icon /></span>{exp.date}</p>
                </div>
           <h3 className="text-xl text-black font-semibold">Key Achievements</h3>

{Array.isArray(exp.description) ? (
  <ul className="list-disc list-inside space-y-2 text-gray-900 text-lg">
    {exp.description.map((point: string, i: number) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
) : (
  <p className="text-gray-900 text-lg">{exp.description}</p>
)}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experince;
