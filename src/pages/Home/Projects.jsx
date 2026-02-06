import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCard from "../../components/shared/ProjectCard";
import projects from "../../data/projectsData";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16">
      <SectionHeading
        title="Featured Projects"
        subtitle="Some of my recent work"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-8">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
