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
        description1: "I'm Kilian Daniel Hernández Chirino, passionate about web development and creating interactive applications and experiences. I love solving problems and exploring new technologies, improving my skills daily, with a work ethic based on discipline.",
        description2: "My programming journey began in early 2023 when I decided to teach myself web development, initially through online courses. In September of that same year, I began my studies as a Higher Technician in Multiplatform Application Development at Universae, completing my studies in January 2025 after completing an internship at Higher Education Software SL.",
        description3: "In January 2025, after completing MAD, I managed to enter the Las Palmas University Foundation's School of Programmers, which gave me the opportunity to complete the Full Stack Web Development Bootcamp with Ironhack, which I successfully completed in April 2025. In this Bootcamp, I carried out most of my projects, putting into them the knowledge acquired over these years and which I continue to acquire today, with additional training.",
        description4: "I have experience in JavaScript (ES6+), HTML5, CSS3, and the React library. I also have experience using Material UI, Node.js, Express.js, MongoDB, and, to a lesser extent, Java and MySQL.",
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
        description1: "Soy Kilian Daniel Hernández Chirino, apasionado por el desarrollo web y la creación de aplicaciones y experiencias interactivas. Me encanta resolver problemas y explorar nuevas tecnologías mejorando así mis habilidades día a día, con una ética de trabajo basada en la disciplina.",
        description2: "Mi experiencia en el mundo de la programación comienza a principios del año 2023 cuando decido aprender desarrollo web de manera autodidacta, al principio por medio de cursos en línea. En Septiembre de ese mismo año comienzo mis estudios como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma en Universae, terminando dichos estudios en Enero de 2025 tras realizar las prácticas formativas en la empresa Higher Education Software SL.",
        description3: "En enero de 2025 tras haber terminado DAM consigo entrar en la Escuela de Programadores de la Fundación Universitaria de Las Palmas, lo que me da la oportunidad de realizar el Bootcamp de Desarrollo Web Full Stack con Ironhack, el cual finalizó de manera satisfactoria en Abril de 2025. En este Bootcamp realizo la mayoría de mis proyectos poniendo en ellos el conocimiento adquirido durante estos años y que a día de hoy sigo adquiriendo, con formación complementaria.",
        description4: "Tengo conocimientos en los lenguajes de programación JavaScript (Es6+), HTML5, CSS3 y manejo de librería React. Además también tengo experiencia en el uso de Material UI, Node.js, Express.js, MongoDB, y en menor medida del lenguaje de programación Java y MySQL."
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
