const Card = ({ children }) => (
  <div className="bg-background text-text p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
    {children}
  </div>
);

export default Card;
