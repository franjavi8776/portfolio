import React, { createContext, useState, useContext } from "react";

const translations = {
  en: {
    greeting: "Hello, I am",
    profession: "a Web Developer.",
    name: "Francisco Villarroel",
    seeMyWork: "See my work",
    nav: {
      home: "HOME",
      portfolio: "PORTFOLIO",
      about: "ABOUT",
      contact: "CONTACT",
    },
    contact: {
      contactMessage: "Have a question or want to work together?",
      placeholderName: "Name",
      placeholderEmail: "Enter email",
      placeholderSubject: "Enter subject",
      placeholderMessage: "Your message",
      sending: "Sending...",
      send: "Send",
      formSuccess: "Email sent successfully",
      formError: "An error occurred. Please try again.",
    },
  },
  es: {
    greeting: "Hola, soy",
    profession: "Desarrollador Web.",
    name: "Francisco Villarroel",
    seeMyWork: "Ver mi trabajo",
    nav: {
      home: "INICIO",
      portfolio: "PORTAFOLIO",
      about: "ACERCA",
      contact: "CONTACTO",
    },
    contact: {
      contactMessage: "¿Tienes una pregunta o quieres trabajar juntos?",
      placeholderName: "Nombre",
      placeholderEmail: "Correo electrónico",
      placeholderSubject: "Asunto",
      placeholderMessage: "Tu mensaje",
      sending: "Enviando...",
      send: "Enviar",
      formSuccess: "Correo enviado correctamente",
      formError: "Ocurrió un error. Inténtalo de nuevo.",
    },
  },
  pt: {
    greeting: "Olá, eu sou",
    profession: "Desenvolvedor Web.",
    name: "Francisco Villarroel",
    seeMyWork: "Veja meu trabalho",
    nav: {
      home: "INICIO",
      portfolio: "PORTFOLIO",
      about: "SOBRE",
      contact: "CONTATO",
    },
    contact: {
      contactMessage: "Tem uma pergunta ou quer trabalhar junto?",
      placeholderName: "Nome",
      placeholderEmail: "E-mail",
      placeholderSubject: "Assunto",
      placeholderMessage: "Sua mensagem",
      sending: "Enviando...",
      send: "Enviar",
      formSuccess: "E-mail enviado com sucesso",
      formError: "Ocorreu um erro. Por favor, tente novamente.",
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, translations, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
