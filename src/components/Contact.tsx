
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import {  Check } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_vqfzvgn",
        "template_0nc3wff",
        {
          form_name: formData.name,
          form_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "d_pHboC9AMZNtUIOK"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setStatus("sent"); // ✅ mark as sent
          setFormData({ name: "", email: "", subject: "", message: "" });

          // Optionally, reset back to idle after some time
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Failed to send message. Please try again later.");
          setStatus("idle");
        }
      );
  };


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hussainnhussain023@gmail.com',
      href: 'hussainnhussain023@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+92) 3197840182 ',
      href: '(+92) 3197840182 '
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sargodha, Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/hussainn23?tab=repositories ", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hussain-364a82277/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hussainnhussain023@gmail.com", label: "Email" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    transition: {
  duration: 0.8,
  ease: "easeOut" as const
}

    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#202020] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 "></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[5rem] md:text-[7rem] font-bold mb-6 text-white bg-clip-text "
          >
            Get In <span className="text-[rgb(190,179,254)] ">Touch</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
            <form onSubmit={handleSubmit} className="relative bg-[#2B2B2B] backdrop-blur-sm border border-slate-700 p-8 rounded-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-purple-200/35 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-purple-200/35  border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-purple-200/35  border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-purple-200/35  border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      onClick={handleSubmit}
      className="w-full px-8 py-4 bg-gradient-to-r from-[#BEB3FE] to-purple-600 hover:from-[#E5FC76] hover:to-[#E5FC76] rounded-lg font-semibold text-white hover:text-black shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
    >
      {status === "sent" ? (
        <>
          <Check className="w-5 h-5" />
          Message Sent!
        </>
      ) : status === "sending" ? (
        <>
          <Send className="w-5 h-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          Send Message
        </>
      )}
    </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation. 
                Feel free to reach out through any of the channels below.
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={info.href}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center p-4 bg-[#2B2B2B] backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#BEB3FE] rounded-lg mr-4 group-hover:bg-[#E5FC76] transition-colors">
                      <Icon className="w-6 h-6 text-zinc-900" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-[#BEB3FE] hover:bg-[#E5FC76] border border-slate-700 rounded-lg transition-all duration-300 group"
                    >
                      <Icon className="w-6 h-6 text-gray-900 group-hover:text-black transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

         
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
