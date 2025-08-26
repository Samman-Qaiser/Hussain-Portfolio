"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card"; // adjust path
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "ECO Education",
    description:
      "A Revolutionary Android App for Visually Impaired Students 🌟 Empowering students through voice-enabled learning! Our app makes education more accessible by using smart AI, speech-based quizzes, voice commands for notes, and assignment submissions – all tailored for visually impaired learners.",
    video: "/EcoEducationVideo.mp4",
    skills: ["Kotlin", "Firebase", "MVVM", "REST API"],
  },
  {
    name: "Abbas Stock",
    description:
      "A full-fledged Android app for secure YouTube channel trading, combining fingerprint authentication, real-time YouTube API stats, complete buy/sell modules, automated ownership reminders, and profit-tracking reports. With smart features like channel verification indicators and shareable performance cards.",
    image: "/abbasStockBanner.jpg",
    skills: ["MVVM", "Hilt ", "Jetpack Compose UI", "Firebase"],
  },
  {
    name: "Abbas Stock",
    description:
      "A full-fledged Android app for secure YouTube channel trading, combining fingerprint authentication, real-time YouTube API stats, complete buy/sell modules, automated ownership reminders, and profit-tracking reports. With smart features like channel verification indicators and shareable performance cards.",
    image: "/abbasStockBanner.jpg",
    skills: ["MVVM", "Hilt ", "Jetpack Compose UI", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white w-[100vw] py-12 overflow-x-hidden">
      <h1 className="text-[7rem] md:text-[7rem] lg:leading-0 leading-[5rem] font-bold text-center mb-12">
        Featured <span className="text-[#BEB3FE]">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 w-[100vw] lg:grid-cols-3 row-gap-1  md:gap-7 place-items-center ">
        {projects.map((project, index) => (
          <CardContainer key={index} containerClassName="w-[97%]  ">
            <CardBody className=" bg-[#2B2B2B] border  lg:h-[90vh]  border-white/20 space-y-0 lg:space-y-6 rounded-2xl p-6 shadow-lg">
              {/* Project Title */}
              <CardItem translateZ={50} className="text-2xl font-semibold mb-2">
                {project.name}
              </CardItem>

              {/* Description */}
              <CardItem translateZ={40} className="text-sm text-gray-200 mb-4">
                {project.description}
              </CardItem>

              {/* Image or Video */}
            {/* Image or Video */}
<CardItem
  translateZ={80}
  className="w-full h-[40vh] mb-4 rounded-xl overflow-hidden"
>
  {project.video ? (
  <video
  src={project.video}
  autoPlay
  loop
  muted
  
  playsInline
  className=" w-[100%] min-h-[10vh]  rounded-xl object-cover"
/>

  ) : project.image ? (
    <img
      src={project.image as string} // ✅ guaranteed to be string
      alt={project.name}
       
      className="rounded-xl object-cover w-[100%] sm:min-h-[30vh] "
    />
  ) : null}
</CardItem>


              {/* Skill Badges */}
              <CardItem translateZ={60} className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-[#E5FC76] text-black text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
