import React from "react";
import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16 ">
        <img src={aboutImg} alt="aboutImg" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, quibusdam ad, optio fuga voluptas suscipit fugiat nisi
            assumenda veritatis animi ab totam laboriosam molestiae quisquam
            pariatur unde! Accusantium, inventore quibusdam?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
