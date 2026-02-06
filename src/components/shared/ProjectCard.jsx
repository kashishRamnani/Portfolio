import React from "react";
import Button from "../ui/Button";

const ProjectCard = ({ title, description, techStack = [], liveLink, githubLink }) => {
  return (
    <div className="bg-background text-text border border-border rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl  text-primary font-semibold mb-2">{title}</h3>
      <p className="text-text/80  mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 text-sm rounded-full bg-ground text-primary">
            {tech}
          </span>
        ))}
      </div>

    <div className="flex gap-4">
  <Button variant="outline">Live</Button>
  <Button variant="outline">GitHub</Button>
</div>

    </div>
  );
};

export default ProjectCard; 
