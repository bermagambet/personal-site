import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Button from "../../components/button";

const Home = () => (
  <div className="h-full flex flex-col gap-y-18 justify-end md:justify-center items-center">
    <div className="flex flex-col gap-y-2 justify-center items-center">
      <h1
        id="Home"
        className="lg:text-8xl/relaxed md:text-5xl/relaxed text-3xl/relaxed relative w-[max-content] font-bold font-mono
before:absolute before:inset-0 before:animate-typewriter before:bg-white
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black
"
      >
        Duisek Bermagambet
      </h1>
      <div className="xl:text-4xl lg:text-3xl md:text-2xl text-xl flex flex-col md:flex-row gap-y-1 gap-x-4 break-normal font-mono animate-fade-in">
        <p>#Frontend TeamLead</p> <p>#Senior-Lecturer</p> <p>#PhD candidate</p>
      </div>
    </div>
    <div className="flex flex-col-reverse md:flex-col gap-y-18 justify-center items-center">
      <div className="flex flex-col md:flex-row gap-x-4 font-mono">
        <Button
          text="Telegram: @opening_bracket"
          link="https://t.me/opening_bracket"
          simple
        />
        <Button
          text="Discord: kazakh_camry"
          link="discord://-/channels/@me/228793567991037952"
          simple
        />
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 lg:flex lg:gap-x-4 font-mono">
        <Button
          text="My CV"
          Icon={ArrowRightIcon}
          link="https://docs.google.com/document/d/11KBDuBSqOglYkXPk8c703hXosLXdm2USsUYN8zRLkPE/edit?usp=sharing"
        />
        <Button
          text="LinkedIn"
          Icon={ArrowRightIcon}
          link="https://www.linkedin.com/in/bermagambet-duisek-53419218b/"
        />
        <Button
          text="GitHub"
          Icon={ArrowRightIcon}
          link="https://github.com/bermagambet"
        />
        <Button
          text="LeetCode"
          Icon={ArrowRightIcon}
          link="https://leetcode.com/u/bermagambetd/"
        />
      </div>
    </div>
  </div>
);

export default Home;
