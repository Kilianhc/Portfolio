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
      projects: {
        title: " Featured Projects",
        description1: "FootballStats is a full-stack application developed with the MERN stack (MongoDB, Express, React, and Node.js). It allows you to manage football statistics for teams and players, offering tools for both analysts and coaches.",
        description2: "KiMovie is a Single Page Application (SPA) developed with React, JavaScript, Material UI, and JSON Server. It allows you to manage a list of movies with features such as adding to favorites, marking as watched or yet to be seen, and a dedicated admin section.",
        description3: "A project where I experiment with mechanics, graphics, and logic in JavaScript. This project has allowed me to delve deeper into object-oriented programming and event handling in interactive games.",
        description4: "A website developed with React and Material UI, designed to showcase my skills and projects as a web developer. I use technologies like React, JavaScript, and CSS3, with a responsive structure that adapts content to different screen sizes. This project reflects my focus on creating clean and functional interfaces, as well as my ability to develop interactive web applications.",
        description5: "To Travel List App is a travel management and organization app developed with React. It allows users to add, edit, delete, and view their trip details in an easy and intuitive way. It's the ideal solution for keeping track of your planned or completed trips, all from a clean and simple interface.",
        button1: "See Project",
        button2: "See Repository",
      },
      technologies: {
        title: "Technologies",
        subtitle1: "Frontend",
        subtitle2: "Backend",
        subtitle3: "Others",
      },
      contact: {
        title: "Contact",
        text: "You can contact me through my email or networks :",
      },
      footer: {
        text: "© 2025 Kilian D. Hernández Chirino. All rights reserved."
      },
      seemore: {
        more: "See more",
        less: "See less"
      }
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
      projects: {
        title: "Proyectos Destacados",
        description1: "FootballStats es una aplicación Full-stack desarrollada con el stack MERN (MongoDB, Express, React y Node.js). Permite gestionar estadísticas de fútbol para equipos y jugadores, ofreciendo herramientas tanto para analistas como para entrenadores.",
        description2: "KiMovie es una Single Page Application (SPA) desarrollada con React, JavaScript, Material UI y JSON Server. Permite gestionar una lista de películas con funcionalidades como agregar a favoritos, marcar como vistas o por ver, y una sección exclusiva para administradores.",
        description3: "Un proyecto donde experimento con mecánicas, gráficos y lógica en JavaScript. Este proyecto me ha permitido profundizar en la programación orientada a objetos y el manejo de eventos en juegos interactivos.",
        description4: "Sitio web desarrollado con React y Material UI, diseñado para mostrar mis habilidades y proyectos como desarrollador web. Utilizo tecnologías como React, JavaScript, y CSS3, con una estructura responsiva que adapta el contenido a diferentes tamaños de pantalla. Este proyecto refleja mi enfoque en la creación de interfaces limpias y funcionales, además de mi capacidad para desarrollar aplicaciones web interactivas.",
        description5: "To Travel List App es una aplicación de gestión y organización de viajes, desarrollada con React. Permite a los usuarios agregar, editar, eliminar y visualizar detalles de sus viajes de una manera fácil e intuitiva. Es la solución ideal para mantener un registro de tus viajes planeados o ya realizados, todo desde una interfaz limpia y sencilla.",
        button1: "Ver Proyecto",
        button2: "Ver Repositorio",
      },
      technologies: {
        title: "Tecnologías",
        subtitle1: "Frontend",
        subtitle2: "Backend",
        subtitle3: "Otros",
      },
      contact: {
        title: "Contacto",
        text: "Puedes contactarme a través de mi correo electrónico o redes :",
      },
      footer: {
        text: "© 2025 Kilian D. Hernández Chirino. Todos los derechos reservados."
      },
      seemore: {
        more: "Ver más",
        less: "Ver menos"
      }
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
