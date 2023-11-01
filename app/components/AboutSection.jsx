"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node,js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>SQL/PHP</li>
        <li>Tailwind</li>
        <li>Wordpress</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Northern Alberta Institution of Technology</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/profile-1.jpg" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold text-blue-500 mb-4">About Me</h2>
          <p className="text-blue-900 lg:text-lg">
            Hello there! I'm Neruni., a passionate designer and developer ready
            to turn your digital dreams into reality. Crafting engaging and
            functional websites is my forte, and I thrive on creating vibrant
            graphics and optimized layouts for all devices. With each project, I
            push myself to exceed expectations, always seeking to outdo my
            previous work. Whether you're a budding business or a larger
            corporation, I'm excited to tackle your web application needs and
            elevate your online presence. Let's collaborate, conquer new digital
            heights, and bring your vision to life. Can't wait to get started!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
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
