"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Keahlian",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Pendidikan",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Institut Teknologi - PLN</li>
        <li>Full Stack Web Develeoper at Codepolitan.com</li>
      </ul>
    ),
  },
  {
    title: "Sertifikasi",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Database Administration Fundamentals at Microsoft</li>
        <li>Microsoft Office Specialist</li>
        <li>English Proficiency Test at Institut Teknologi - PLN</li>
      </ul>
    ),
  },
  {
    title: "Riwayat Pekerjaan",
    id: "riwayatPekerjaan",
    content: (
      <ul className="list-disc pl-2">
        <li>Magang di Indonesia Comnet Plus Jakarta</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/1663640162033 (2).png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Saya Fauzan Octhory Lukfi saya menganggap diri saya sebagai seorang full stack web developer yang masih dalam tahap belajar.
            Saya mempunyai pengalaman dengan teknologi pemrograman seperti JavaScript,
            React, Node.js, Express, MongoDB, NextJS
            , HTML, CSS, and Git. Saya seorang yang dapat diajak bekerja dengan tim
            dan saya dengan senang hati apabila ada seseorang yang ingin bekerja sama dengan saya dalam mengembangkan suatu aplikasi.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-2 md:overflow-visible overflow-x-scroll">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Keahlian{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Pendidikan{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Sertifikasi{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("riwayatPekerjaan")}
              active={tab === "riwayatPekerjaan"}
            >
              {" "}
              Riwayat Pekerjaan{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
