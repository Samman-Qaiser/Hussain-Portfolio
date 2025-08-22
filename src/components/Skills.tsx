"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Kotlin", logo: "https://i.pinimg.com/736x/ac/0b/71/ac0b718d995deda3e1e4ee893501324d.jpg" },
  { name: "Java", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a0WBC7gzH2m5vruS5y6ITiFyhgd4-2iPIw&s" },
  { name: "C++", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBpPDICw3BeHITTIIYqOg23RI_dZQdoMfPQ&s" },
  { name: "React", logo: "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" },
  { name: "Node.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s" },
  { name: "Python", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s" },
  { name: "Flask", logo: "https://nordicapis.com/wp-content/uploads/How-to-Create-an-API-Using-The-Flask-Framework.png" },
  { name: "Firebase", logo: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" },
  { name: "REST APIs", logo: "https://miro.medium.com/1*82q9fbZA3OHhyoQ48qOypQ.png" },
  { name: "MVVM", logo: "https://erp-disk.ams3.digitaloceanspaces.com/portadas-tutoriales/original_portada_cm0kt3ciw000p019v26h10u3a.webp" },
  { name: " Play Console", logo: "https://play-lh.googleusercontent.com/4_RW0mQ5mJhGGJVydTlQsQ0pnqAYq9UoTVm2_gElrgRM13Q02w43HPgYVaMFy4b4smmF" },
  { name: "Hostinger", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bsC17sEuS2OqQ2NmsHDxP8jB3E8BGHjH6A&s" },
];


const MarqueeRow = ({
  direction = "left",
}: {
  direction?: "left" | "right";
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex gap-12"
        animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {skills.concat(skills).map((skill, idx) => (
          <div
            key={idx}
            className="flex min-w-[170px] items-center justify-evenly px-2 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
          >
            <img src={skill.logo} alt={skill.name} className="w-8 h-8 rounded-lg" />
            <span className="text-lg text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section className="w-full py-16 flex flex-col gap-8">
      <h1 className="text-[7rem]  text-white md:text-[7rem] font-bold text-center">
        My <span className="text-[rgb(190,179,254)] ">Skills</span>
      </h1>

      {/* Top row - left scroll */}
      <MarqueeRow direction="left" />

      {/* Bottom row - right scroll */}
      <MarqueeRow direction="right" />
    </section>
  );
}
