import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { SiGmail } from "react-icons/si";
import contactbg from "../images/bg-contact.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-auto">
      <div class="custom-shape-divider-top-1689796117">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            class="shape-fill"
            fill="#C77EEA"
          ></path>
        </svg>
      </div>
      {/* <div className="absolute">
        <img src={contactbg} alt="" className="sm:invisible" />
      </div> */}
      <div className="w-full py-16 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#cdcdcd] font-c font-bold tracking-widest text-center md:text-7xl sm:text-5xl text-2xl"
        >
          Let's Talk!
        </motion.p>
        <div className="pt-[50px]">
          <div className="lg:py-16 sm:p-8 text-[#cdcdcd] tracking-widest text-center flex flex-col justify-center items-center m-auto">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh"
              target={"blank"}
              className="opacity-[50%] transition-all hover:scale-125 cursor-pointer"
            >
              <SiGmail size={"100px"} />
            </a>
            {/* <h1 className="p-4">LET'S TALK!</h1> */}
            <h2 className="font-bold font-c">aneekamangal@gmail.com</h2>
          </div>
          <div className="flex align-center justify-center lg:py-4">
            {/* socials */}
            <div className="flex flex-row space-x-4 text-[#cdcdcd]">
              <Instagram />
              <Github />
              <Linkedin />
              {/* <SocialIcon url= "https://www.leetcode.com/aneekamangal/" title="" >*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
