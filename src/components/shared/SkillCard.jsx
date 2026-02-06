import Card from "../ui/Card";

const SkillCard = ({ title, skills }) => (
  <Card>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>

    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
        >
          {skill}
        </li>
      ))}
    </ul>
  </Card>
);

export default SkillCard;
