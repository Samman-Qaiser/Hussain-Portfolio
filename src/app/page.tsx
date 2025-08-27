'use client'
import { useState, useEffect } from "react";
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
import About from "@/components/About";
import { Home } from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experince from "@/components/Experince";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fake loader effect (you can replace with actual loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      quote: "This platform has transformed the way I work with my clients.",
      name: "John Doe",
      designation: "CEO, CompanyX",
      src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      quote: "Amazing service! Highly recommend to everyone.",
      name: "Jane Smith",
      designation: "Marketing Manager, StartupY",
      src: "https://picsum.photos/id/220/500/500",
    },
    {
      quote: "A seamless experience from start to finish.",
      name: "Robert Wilson",
      designation: "Product Designer",
      src: "https://picsum.photos/id/259/500/500",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#202020]">
        {/* Simple spinner */}
     
        <div className="w-16 h-16 border-4 border-[#beb3fc] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar className="fixed top-3 left-0 bg-[#2A2A2A] w-[90vw] rounded-full m-auto backdrop-blur-lg border-b border-white/10 z-50">
        <NavBody>
          <NavbarLogo />
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
      <Skills />
      <Projects />
      <Experince />
      <h1 className="lg:text-[7rem] md:text-[6rem] text-white lg:leading-[2em] leading-[4rem] text-[6rem] text-center">
        What My <span className="text-[#beb3fc]">Clients Say</span>
      </h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
