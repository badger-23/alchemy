import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.css';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <input type="email" placeholder="email" />
      <input type="text" placeholder="subject" />
      <textarea />
      <button type="submit">Contact</button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
