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
    name: "Aviator hack",
    description:
      "A full-fledged Android app for secure YouTube channel trading, combining fingerprint authentication, real-time YouTube API stats, complete buy/sell modules, automated ownership reminders, and profit-tracking reports. With smart features like channel verification indicators and shareable performance cards.",
    image: "/AviatorHackBanner.jpg",
    skills: ["Android", "Firebase", "Kotlin", "Firebase"],
  },
   {
    name: "Tomato Guard",
    description:
      "This Android app employs a ResNet-18 model to detect tomato leaf diseases from images and provides key insights including symptoms, causes, favorable conditions for spread, management recommendations, and resistant varieties, enabling farmers to protect crops and improve yield.",
     video: "/TomatoVideo.mp4",
    skills: ["Android", "Firebase", "Kotlin", "Firebase","Resnet18","PyTorch"],
  },
   {
    name: "Grievance App",
    description:
      "Grievance is a user-friendly complaint resolution app that empowers individuals to raise concerns, track progress, and receive timely solutions. By streamlining the entire process, it ensures transparency, accountability, and efficiency, making it easier for users to get their issues heard and resolved effectively.",
    image: "/Grievence.png",
    skills: ["Android", "Firebase", "Kotlin", "Firebase"],
  },
   {
    name: "Cricdex App",
    description:
      "CricDex is a live cricket scoring app that delivers real-time updates, ball-by-ball commentary, and in-depth match coverage across all major tournaments. Along with live scores, it offers detailed statistics, player insights, and instant notifications, ensuring fans stay engaged and never miss a moment of the action.",
    image: "/Cricdex App.png",
    skills: ["Android", "Firebase", "Kotlin", "Firebase"],
  },
   {
    name: "School Management System",
    description:
      "Built a school management system with apps for teachers, students, and the principal.Teachers mark attendance, publish exam results, manage diary and also can manage fee.Principal accesses comprehensive school statistic Students can see results, attendance, daily diary and their dues .",
     image: "/CGS.JPG",
    skills: ["React", "Node", "MongoDb", "Express","Tailwind","Typescript"],
  },
];


const Projects = () => {
  return (
    <section id="projects" className="text-white w-[100vw] py-12 overflow-x-hidden">
      <h1 className="text-[7rem]  md:text-[7rem] lg:leading-0 leading-[5rem] font-bold text-center mb-34">
        Featured <span className="text-[#BEB3FE]">Projects</span>
      </h1>
      <div className="grid mt-3 grid-cols-1 md:grid-cols-2 p-3 lg:p-7 self-center right-2 gap-5 row-gap-12 relative   w-[100vw] lg:grid-cols-3 ">
        {projects.map((project, index) => (
          <CardContainer key={index} containerClassName="w-[97%]  m-auto ">
            <CardBody className=" bg-[#2B2B2B] border   lg:h-[90vh]  border-white/20 space-y-2 lg:space-y-6 rounded-2xl p-6 shadow-lg">
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
  className="w-full h-auto space-y-3 mb-4 rounded-xl overflow-hidden"
>
  {project.video ? (
  <video
  src={project.video}
  autoPlay
  loop
  muted
  playsInline
  className=" rounded-xl object-cover w-[100%] max-h-[34vh] "
    
/>

  ) : project.image ? (
    <img
      src={project.image as string} // ✅ guaranteed to be string
      alt={project.name}
       
      className="rounded-xl object-cover w-[100%] min-h-[34vh] "
    />
  ) : null}
</CardItem>


              {/* Skill Badges */}
              <CardItem translateZ={60} className="flex mt-6 flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-[#E5FC76]  text-black text-xs"
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
