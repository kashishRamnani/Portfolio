import React from "react";
import SectionHeading from "../../components/ui/SectionHeading";
import Bio from "./Bio";
import CareerGoals from "./CareerGoals";
import Education from "./Education";
import Experience from "./Experience";
import Tools from "./Tools";

const AboutMe = () => {
  return (
    <section className="pt-20 px-4 md:px-8 py-16 bg-background text-text min-h-screen">
      <SectionHeading
        title="About Me"
        subtitle="A brief overview of who I am and what I do"
      />

      {/* Components */}
      <Bio />
      <CareerGoals />
      <Education />
      <Experience />
      <Tools />
    </section>
  );
};

export default AboutMe;
