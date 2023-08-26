import React, { useState } from 'react';
import { useLanguage } from './context/LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // For example, you can send the data to a server or perform other actions
    console.log(formData);
  };

  return (
    <div className='form-block text-white'>
      <h2>{ language === 'es' ? "Enviame un mensaje" : "Send me a Message" }</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="name">{ language === 'es' ? "Nombre" : "Name" }</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">{ language === 'es' ? "Mensaje" : "Message" }</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <button type="submit">{ language === 'es' ? "Enviar" : "Send" }</button>
      </form>
    </div>
  );
};

export default ContactForm;