import React from "react";

const tools = [
  "React.js", "Node.js", "Tailwind CSS", "JavaScript",
  "HTML & CSS", "Git & GitHub", "Redux", "Figma"
];

const Tools = () => (
  <div className="mb-8 text-text">
    <h3 className="text-2xl text-primary font-semibold mb-4">Tools & Technologies</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tools.map((tool, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-background/20 rounded-lg text-center"
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export default Tools;
