import React from 'react';
import ContactForm from './ContactForm';

const Contact = ({ location, history, match }) => {
  console.log('location', location);
  console.log('history', history);
  console.log('match', match);

  return (
    <>
      <h1>Contact Page</h1>
      <ContactForm />
    </>
  );
};

export default Contact;
