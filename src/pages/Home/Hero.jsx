import React from "react";
import Button from "../../components/ui/Button"; 
import SectionHeading from "../../components/ui/SectionHeading";

const Hero = () => (
 <section className="h-screen flex flex-col justify-center items-center bg-background text-text">

    <SectionHeading
      title="Hi, I'm Kashish"
      subtitle="Full Stack Developer | Building modern, scalable web apps"
    />
    <Button variant="outline">View Project</Button>
  </section>
);

export default Hero;
