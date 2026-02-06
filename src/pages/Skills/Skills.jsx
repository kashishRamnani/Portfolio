import SectionHeading from "../../components/ui/SectionHeading";
import SkillCard from "../../components/shared/SkillCard";
import skillsData from "../../data/skillsData";

const Skills = () => {
  return (
    <section className="pt-20 py-16 bg-background text-text">
      <SectionHeading
        title="Skills"
        subtitle="Technologies & abilities I work with"
      />

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 mt-8">
        <SkillCard title="Frontend Skills" skills={skillsData.frontend} />
        <SkillCard title="Backend Skills" skills={skillsData.backend} />
        <SkillCard title="Tools" skills={skillsData.tools} />
        <SkillCard title="Soft Skills" skills={skillsData.softSkills} />
      </div>
    </section>
  );
};

export default Skills;
