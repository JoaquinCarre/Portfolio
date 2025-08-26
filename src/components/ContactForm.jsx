import React from "react";
import { useLanguage } from "./context/LanguageContext";

const ContactForm = () => {
  const { language } = useLanguage();

  return (
    <div className="form-block text-white">
      <h2>{language === "es" ? "Enviame un mensaje" : "Send me a Message"}</h2>

      <form
        action="https://joaquincarredev.com/envio-formulario.php"
        method="POST"
        className="form"
      >
        <label htmlFor="nombre">
          {language === "es" ? "Nombre y Apellido" : "Full Name"}
        </label>
        <input
          type="text"
          id="nombre"
          name="Nombre_y_Apellido"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="E-mail"
          required
        />

        <label htmlFor="telefono">
          {language === "es" ? "Teléfono" : "Phone"}
        </label>
        <input
          type="text"
          id="telefono"
          name="Teléfono"
        />

        <label htmlFor="mensaje">
          {language === "es" ? "Mensaje" : "Message"}
        </label>
        <textarea
          id="mensaje"
          name="Mensaje"
          rows="4"
          required
        ></textarea>

        <button type="submit">
          {language === "es" ? "Enviar" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;