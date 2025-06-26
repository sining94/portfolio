import { motion } from 'framer-motion';
import './ProjectItem.scss';

const ProjectItem = ({ image, title, description, link }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      slidesToShow={3}
      slidesToScroll={1}
    >
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
              View Project
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
