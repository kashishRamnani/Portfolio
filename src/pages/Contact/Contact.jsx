import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ContactCard from "../../components/shared/ContactCard";

const Contact = () => {
  return (
    <section className="pt-20 py-16 bg-background text-text">
      <SectionHeading
        title="Contact Me"
        subtitle="Let’s build something great together"
      />

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mt-8">
        
        <Card>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-background border border-border outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-background border border-border outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-background border border-border outline-none"
            ></textarea>

            <Button type="submit">Send Message</Button>
          </form>
        </Card>
        <div className="grid gap-6">
          <ContactCard
            title="Email"
            value="kashish@example.com"
            link="mailto:kashish@example.com"
          />

          <ContactCard
            title="GitHub"
            value="github.com/kashishramnani"
            link="https://github.com/kashishramnani"
          />

          <ContactCard
            title="LinkedIn"
            value="linkedin.com/in/kashishramnani"
            link="https://linkedin.com/in/kashishramnani"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
