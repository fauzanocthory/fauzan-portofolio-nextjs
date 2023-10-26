"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 sm:hidden"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2 md:text-left text-center">
          Ayo hubungi saya
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Saya selalu terbuka untuk pekerjaan baru, inbox saya selalu terbuka apapun itu. 
          Walaupun hanya sekedar perkenalan dan say hai.
          
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com/fauzanocthory">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com/in/fauzan-octhory-lukfi-8b734219a">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="instagram.com/fauzanocthory/" className="mt-1" rel="noopener noreferrer" target="_blank">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div className="md:mt-0 mt-8">

          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email Anda
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="john doe@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subjek
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Katakan hay"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Mari membahas tentang..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Kirim Pesan
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;
