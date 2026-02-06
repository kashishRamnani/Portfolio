const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h3 className="text-3xl md:text-4xl font-bold text-primary">{title}</h3>
    <p className="mt-2 text-text text-primary opacity-80 text-base md:text-lg">{subtitle}</p>
  </div>
);


export default SectionHeading;
