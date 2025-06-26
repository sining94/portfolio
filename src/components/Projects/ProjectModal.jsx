import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ image, title, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="project-modal"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 닫히지 않게
        >
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
