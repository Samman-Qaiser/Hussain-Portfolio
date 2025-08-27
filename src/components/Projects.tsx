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
      "Aviator Hack Game is a gambling-style app where users log in with their ID to play and test their luck. It features a smooth coin-based payment system for deposits and withdrawals, along with a clean UI, fast performance, and secure transactions. Built with scalability, it delivers a simple yet thrilling real-time gaming experience.",
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
    name: "SafeNet – AI Cybersecurity Guard",
    description:
      "SafeNet is a mobile app that detects phishing links, fake apps, and suspicious network activity in real-time using machine learning models. It warns users instantly, provides safe-browsing recommendations, and ensures data protection with on-device ML + Firebase authentication.",
    image: "/CyberSecurity.webp",
    skills: ["Android", "Firebase", "Kotlin", "Firebase"],
  },
   {
    name: "HealTrack – Smart Patient Monitoring",
    description:
      "HealTrack is a healthcare companion app that integrates with wearables (IoT/Google Fit API) to monitor vitals like heart rate, oxygen level, and sleep cycles. It predicts health risks using AI-driven analytics, sends emergency alerts to family/doctors, and maintains digital health records securely in the cloud",
    image: "/Health.webp",
    skills: ["Android", "Firebase", "Kotlin", "Firebase","IOT"],
  },
  {
    name: "HealTrack – Smart Patient Monitoring",
    description:
      "HealTrack is a healthcare companion app that integrates with wearables (IoT/Google Fit API) to monitor vitals like heart rate, oxygen level, and sleep cycles. It predicts health risks using AI-driven analytics, sends emergency alerts to family/doctors, and maintains digital health records securely in the cloud",
    image: "/Health.webp",
    skills: ["Android", "Firebase", "Kotlin", "Firebase","IOT"],
  },
   {
    name: "Disaster Alert – Smart Emergency System",
    description:
      "A real-time disaster alert app that sends location-based warnings (earthquakes, floods, weather emergencies) using Google Maps API + Firebase push notifications. Users can report incidents, request help, and connect with nearby shelters.",
    image: "/Disaster.webp",
    skills: ["Android", "Firebase", "Kotlin", "Firebase","Google Maps API"],
  },
   {
    name: "School Management System",
    description:
      "Built a school management system with apps for teachers, students, and the principal.Teachers mark attendance, publish exam results, manage diary and also can manage fee.Principal accesses comprehensive school statistic Students can see results, attendance, daily diary and their dues .",
     image: "/CGS.jpg",
    skills: ["React", "Node", "MongoDb", "Express","Tailwind","Typescript"],
  },
];


const Projects = () => {
  return (
    <section id="projects" className="text-white w-[100vw] py-12 overflow-x-hidden">
      <h1 className="text-[7rem]  md:text-[7rem] lg:leading-0 leading-[5rem] font-bold text-center mb-34">
        Featured <span className="text-[#BEB3FE]">Projects</span>
      </h1>
      <div className="grid mt-3 grid-cols-1 md:grid-cols-2 p-3 lg:p-7 self-center right-0 lg:right-2 gap-5 row-gap-12 relative   w-[100vw] lg:grid-cols-3 ">
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
  className=" rounded-xl object-cover w-[100%] lg:max-h-[34vh] max-h-[20vh] "
    
/>

  ) : project.image ? (
    <img
      src={project.image as string} // ✅ guaranteed to be string
      alt={project.name}
       
      className="rounded-xl object-cover w-[100%] lg:max-h-[34vh] max-h-[20vh] "
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
