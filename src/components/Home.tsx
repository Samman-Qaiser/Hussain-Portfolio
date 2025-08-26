
'use client'
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import React from "react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import {
  IconHome,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconMail,
  IconFileDownload,
} from "@tabler/icons-react";
import  WrapButton  from "@/components/ui/wrap-button"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FloatingDock } from "../components/ui/floating-dock";
import { Globe } from "lucide-react";

export const Home = () => {
      const items = [
        {
          title: "Home",
          icon: <IconHome className="w-full h-full" />,
          href: "/",
        },
        {
          title: "LinkedIn",
          icon: <IconBrandLinkedin className="w-full h-full" />,
          href: "https://www.linkedin.com/in/muhammad-hussain-364a82277/",
        },
        {
          title: "GitHub",
          icon: <IconBrandGithub className="w-full h-full" />,
          href: "https://github.com/hussainn23?tab=repositories ",
        },
        {
          title: "WhatsApp",
          icon: <IconBrandWhatsapp className="w-full h-full" />,
          href: "https://wa.me/+923197840182 ", // replace with your number
        },
        {
          title: "Email",
          icon: <IconMail className="w-full h-full" />,
          href: "hussainnhussain023@gmail.com",
        },
        {
          title: "Resume",
          icon: <IconFileDownload className="w-full h-full" />,
          href: "/hussain_resume.pdf", // place resume.pdf inside `public/`
        },
      ];
      
const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]

  return (
    <BackgroundRippleEffect>
    
  <div className="w-[100vw]  overflow-x-hidden mt-7 h-full flex flex-col items-center justify-center">
  
    <h1 className="text-white lg:text-[9rem] md:text-[9rem]  text-[5rem] leading-[3.5rem] font-extrabold lg:leading-[6rem] md:leading-[6rem]">
      Hi, I HELP YOU{" "}
    </h1>
    <h1 className="lg:text-[9rem] md:text-[9rem] xs:text-[7rem] text-[5rem] leading-[3.5rem] font-extrabold lg:leading-[6rem] md:leading-[6rem]">
      <span className="text-[rgb(229,252,118)]">BUILD </span>
      <span className="text-black text-stroke-custom">YOUR</span>
    </h1>
    <h1 className="text-white mt-3 flex gap-3 lg:text-[9rem] md:text-[9rem] xs:text-[7rem] text-[5rem] leading-[3rem] font-extrabold lg:leading-[6rem] md:leading-[6rem]">
      DREAM{" "}

<div className=" lg:pb-2"   style={{
    borderStyle: 'dashed',
    borderWidth: '2px', // thicker border
    borderColor: 'transparent',
    borderImage: 'repeating-linear-gradient(45deg, rgb(190,179,254) 0, rgb(190,179,254) 0.5rem, transparent 0.5rem, transparent 1rem) 1',
  }}>   <span
  className="text-[rgb(190,179,254)] mt-2 px-1"
 
>
  APPS
</span></div>
    </h1>

    <SparklesText className="lg:text-[9rem] md:text-[9rem] xs:text-[7rem] sm:text-[5rem] leading-[4rem] lg:leading-[6rem] md:leading-[6rem] text-white">
      <h1>Android Developer</h1>
    </SparklesText>

    <FloatingDock
      items={items}
      desktopClassName="shadow-lg dark:shadow-neutral-800 bg-transparent rounded-full mt-10"
      mobileClassName="shadow-md"
    />
    <WrapButton className="mt-10 bg-[#E5FC76]" href="#contact" >
            <Globe className="animate-spin " />
          Get In Touch
        </WrapButton>
      
  </div>
</BackgroundRippleEffect>
  )
}
