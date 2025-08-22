'use client'
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
    MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import About from "@/components/About";
import { Home } from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experince from "@/components/Experince";
import Contact from "@/components/Contact";
const Page = () => {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar className="fixed top-3 left-0 bg-[#53544f] w-[90vw] rounded-full m-auto backdrop-blur-lg border-b border-white/10 z-50">
        <NavBody>
          {/* Logo */}
          <NavbarLogo />

          {/* Nav Links */}
          <NavItems
            className="text-white"
            items={[
              { name: "Home", link: "/" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Skills", link: "#skills" },
              { name: "Experience", link: "#experience" },
                { name: "Contact", link: "#contact" },
            ]}
          />

          {/* Purple Button */}
          <NavbarButton
            href="#contact"
            className="bg-[rgb(190,179,254)] rounded-full px-4 py-2 text-black font-normal hover:bg-purple-500"
          >
            Get In Touch
          </NavbarButton>
        </NavBody>
      </Navbar>
        {/* Mobile Navbar */}
      <MobileNav className="md:hidden" visible={isOpen}>
        <MobileNavHeader className="flex justify-between items-center p-4">
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NavItems
            className="flex flex-col gap-4 text-white p-4"
            items={[
              { name: "Home", link: "/" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Skills", link: "#skills" },
              { name: "Experience", link: "#experience" },
              { name: "Contact", link: "#contact" },
            ]}
          />
       
        </MobileNavMenu>
      </MobileNav>
 <Home />
<About />
<Skills/>
<Projects />
<Experince />
<Contact />
    </div>
  );
};

export default Page;
