import React from "react";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCard from "../../components/shared/ProjectCard";
import projects from "../../data/projectsData"; // ✅ default import

const Projects = () => {
  return (
    <section className="pt-20 px-4 md:px-8 py-16 bg-background text-text min-h-screen">
      <SectionHeading
        title="Projects"
        subtitle="Some of the work I’ve built recently"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
