import SectionHeading from "../../components/ui/SectionHeading";

const AboutSnapshot = () => (
  <section className="py-16 bg-background text-text">
    <SectionHeading
      title="About Me"
      subtitle="A brief introduction about myself"
    />
    <p className="max-w-3xl mx-auto text-center text-base md:text-lg opacity-90 mt-4">
      I'm a passionate Full Stack Developer with experience in React, Tailwind CSS, PHP, and Laravel. 
      I love building scalable and beautiful web applications and continuously learning new technologies.
    </p>
  </section>
);

export default AboutSnapshot;
