import Card from "../ui/Card";

const ContactCard = ({ title, value, link }) => (
  <Card>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>

    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-primary hover:underline"
      >
        {value}
      </a>
    ) : (
      <p className="text-text/80">{value}</p>
    )}
  </Card>
);

export default ContactCard;
