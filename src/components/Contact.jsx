import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="w-full h-[200px] flex align-center justify-center py-8">
      <div className="py-4">
        <p className="text-[#00df9a] font-b text-center md:text-4xl sm:text-3xl text-2xl">
          CONTACT  
        </p>
        <div className="py-16 text-white tracking-widest text-center flex flex-col justify-center items-center">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh"
            target={"blank"}
            className="text-[#00df9a] opacity-[50%] transition-all hover:scale-150 cursor-pointer"
          >
            <SiGmail size={"100px"} />
          </a>
          <h1 className="">Connect with me at:</h1>
          <h2 className="font-bold ">aneekamangal@gmail.com</h2>
        </div>
        <div className="flex align-center justify-center py-4">
          {/* socials */}
          <SocialIcon
            className="hover:cursor-pointer hover:scale-150 duration-300"
            url="https://www.instagram.com/aneekamangal/"
            title="Instagram"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            className="hover:cursor-pointer hover:scale-150 duration-300"
            url="https://www.github.com/aneekamangal07/"
            title="Instagram"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            className="hover:cursor-pointer hover:scale-150 duration-300"
            url="https://www.linkedin.com/in/aneeka-mangal-740774232/"
            title="Instagram"
            fgColor="gray"
            bgColor="transparent"
          />
          {/* <SocialIcon url= "https://www.leetcode.com/aneekamangal07/" title="Instagram" fgColor="gray" bgColor="transparent"/> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
