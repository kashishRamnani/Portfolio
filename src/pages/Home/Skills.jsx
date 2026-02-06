import SectionHeading from "../../components/ui/SectionHeading";
import SkillItem from "../../components/shared/SkillItem";
import { skills } from "../../data/skills";
import { useTheme } from "../../context/ThemeContext";

const Skills = () => {
  const { theme, themes } = useTheme();
  const t = themes[theme];

  return (
    <section
      className="py-16 bg-background text-text"
    >
      <SectionHeading
        title="Skills Highlights"
        subtitle="Frontend, Backend, Tools & Soft Skills"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-4 rounded-lg"
            
          >
            <h3
              className="font-semibold mb-2 capitalize bg-background text-text"
            >
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {items.map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
