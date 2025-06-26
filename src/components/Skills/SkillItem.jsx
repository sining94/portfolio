const SkillItem = ({ icon, name }) => {
  return (
    <div className="skill-item">
      <img src={icon} alt={name} className="skill-icon" />
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default SkillItem;
