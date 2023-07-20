import React from "react";
import ReactDOM from "react-dom";
import { Github, Instagram, Linkedin } from "lucide-react";
import { SiGmail } from "react-icons/si";
import contactbg from "../images/bg-contact.svg";

const Contact = () => {
  return (
    <div className="lg:h-[40px] sm:h-[10vh]">
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
            fill="#c6a97d"
          ></path>
        </svg>
      </div>
      <div className="absolute sm:absolute">
        <img src={contactbg} alt="" className="h-auto" />
      </div>
      <div className="w-full py-16 px-4">
        <p className="text-[#cbff4d] font-e font-bold tracking-widest text-center md:text-5xl sm:text-5xl text-2xl">
          CONTACT
        </p>
        <div className="pt-[50px]">
          <div className="py-16 text-white tracking-widest text-center flex flex-col justify-center items-center m-auto">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh"
              target={"blank"}
              className="text-[#cbff4d] opacity-[50%] transition-all hover:scale-125 cursor-pointer"
            >
              <SiGmail size={"100px"} />
            </a>
            <h1 className="p-4">LET'S TALK!</h1>
            <h2 className="font-bold ">aneekamangal@gmail.com</h2>
          </div>
          <div className="flex align-center justify-center py-4">
            {/* socials */}
            <div className="flex flex-row space-x-4">
              <Instagram className="text-[#cbff4d]" />
              <Github className="text-[#cbff4d]" />
              <Linkedin className="text-[#cbff4d]" />
              {/* <SocialIcon url= "https://www.leetcode.com/aneekamangal07/" title="Instagram" fgColor="gray" bgColor="transparent"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
