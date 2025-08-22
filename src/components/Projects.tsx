"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card"; // adjust path
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "E-Commerce App",
    description: "A full-featured mobile e-commerce app with authentication, cart, and payments.",
    image: "/hussain.jpg",
    skills: ["Kotlin", "Firebase", "MVVM", "REST API"],
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js, Tailwind CSS, and animations.",
    image: "/projects/portfolio.png",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "ML API with Flask",
    description: "Machine learning API backend with Flask, deployed on cloud.",
    image: "/projects/mlapi.png",
    skills: ["Python", "Flask", "Machine Learning", "Deployment"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="  text-white p-12" >
      <h1 className="text-[7rem] md:text-[7rem] lg:leading-0 leading-[5rem] font-bold text-center mb-12">Featured <span className="text-[#BEB3FE]">Projects</span> </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 md:gap-7 place-items-center ">
        {projects.map((project, index) => (
          <CardContainer key={index} containerClassName="w-full max-w-sm">
            <CardBody className="bg-black h-[80vh] border border-white/20 rounded-2xl p-6 shadow-lg">
              
              {/* Project Title */}
              <CardItem translateZ={50} className="text-2xl font-semibold mb-2">
                {project.name}
              </CardItem>

              {/* Description */}
              <CardItem translateZ={40} className="text-sm text-gray-200 mb-4">
                {project.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ={80} className="w-full h-[40vh] mb-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={150}
                  className="rounded-xl object-cover"
                />
              </CardItem>

              {/* Skill Badges */}
              <CardItem translateZ={60} className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="bg-[#E5FC76] text-black text-xs">
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
