import { motion } from 'framer-motion';
import React, { useState } from 'react';

import '../styles/Contact.scss';

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-bg" />
      <h2>Contact</h2>
      <p className="message">문의는 언제든지 환영합니다.</p>

      <div className="contact-info">
        <div className="info-item">
          <span>📧</span>
          <a href="mailto:sining94@gmail.com">sining94@gmail.com</a>
          <button onClick={() => handleCopy('sining94@gmail.com', 'email')}>복사</button>
        </div>
        <div className="info-item">
          <span>📱</span>
          <a href="tel:010-4933-4981">010-4933-4981</a>
          <button onClick={() => handleCopy('010-4933-4981', 'phone')}>복사</button>
        </div>
      </div>

      {copied && (
        <div className="toast">
          {copied === 'email' ? '이메일 복사 완료!' : '전화번호 복사 완료!'}
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
