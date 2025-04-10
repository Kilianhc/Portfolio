import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        about: "About Me",
        projects: "Projects",
        technologies: "Technologies",
        contact: "Contact",
        darkMode: "Dark Mode",
        language: "Language"
      },
      hero: {
        subtitle: "Web Developer"
      },
      about: {
        title: "About Me",
        description: "Hi! I'm Kilian, a passionate web developer..."
      },
      footer: {
        text: "© 2025 Kilian D. Hernández Chirino. All rights reserved."
      },
      seemore: {
        more: "See more",
        less: "See less"
      }
      // Puedes añadir más secciones aquí
    }
  },
  es: {
    translation: {
      navbar: {
        about: "Sobre mí",
        projects: "Proyectos",
        technologies: "Tecnologías",
        contact: "Contacto",
        darkMode: "Modo oscuro",
        language: "Idioma"
      },
      hero: {
        subtitle: "Desarrollador Web"
      },
      about: {
        title: "Sobre mí",
        description: "¡Hola! Soy Kilian, un apasionado del desarrollo web..."
      },
      footer: {
        text: "© 2025 Kilian D. Hernández Chirino. Todos los derechos reservados."
      },
      seemore: {
        more: "Ver más",
        less: "Ver menos"
      }
      // Igual, añade más aquí si quieres
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "es", // si no encuentra algo en el idioma actual, usa este
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
