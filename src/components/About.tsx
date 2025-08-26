'use client'
import React from 'react'
import WrapButton from "@/components/ui/wrap-button"
import { BoxReveal } from "@/components/magicui/box-reveal";
import { DownloadCloud } from 'lucide-react';
import { PixelImage } from "../components/magicui/pixel-image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import BadgeButton from './ui/badge-button';

const About = () => {
  return (
    <div 
      id='about'
      className='text-white lg:p-12 md:p-12 p-4 lg:mt-[38vh]   flex flex-col lg:flex-row items-center justify-between w-[100vw]  overflow-x-hidden'
    >
      {/* Left Content */}
      <div className='w-full lg:w-1/2  flex flex-col gap-7 lg:items-start items-center p-4'>

          <h1 className='lg:text-[7rem] md:text-[6rem] text-[6rem] text-center lg:text-left'>
            About<span className="text-[rgb(190,179,254)] "> Me</span>
          </h1>
          <TypingAnimation className='text-[#E5FC76] mb-7 leading-[36px] text-center lg:text-left'>
            ✋Hi, My Name is Hussain
          </TypingAnimation>
                  <BoxReveal>
          <p className='text-base lg:text-lg'>
            I’m an Android Developer passionate about building smooth, user-friendly, and high-performing mobile apps. With experience in Java, Kotlin, and modern Android frameworks, I love turning ideas into real-world applications that solve problems and create impact.
            <br /><br />
            My focus is on clean architecture, scalable code, and delightful UI/UX, ensuring every app is not just functional but also engaging. I enjoy exploring new technologies, staying updated with Android best practices, and constantly improving my craft.
          </p>
        </BoxReveal>

        {/* Skills */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full'>
          <BadgeButton>Kotlin</BadgeButton>
          <BadgeButton>Java</BadgeButton>
          <BadgeButton>MVVM</BadgeButton>
          <BadgeButton>Firebase</BadgeButton>
          <BadgeButton>REST APIs</BadgeButton>
          <BadgeButton>Node.js</BadgeButton>
          <BadgeButton>React</BadgeButton>
          <BadgeButton>Python</BadgeButton>
          <BadgeButton>C++</BadgeButton>
        </div>

        {/* Resume Button */}
        <WrapButton className="mt-4 z-50 bg-[#E5FC76]" href="/hussain_resume.pdf">
          <DownloadCloud />
          Download Resume
        </WrapButton>
      </div>

      {/* Right Image */}
      <div className='w-full lg:w-2/5 h-auto lg:h-[90vh] flex justify-center items-center mt-8 lg:mt-0'>
        <PixelImage src="/hussain.jpg" />
      </div>
    </div>
  )
}

export default About
