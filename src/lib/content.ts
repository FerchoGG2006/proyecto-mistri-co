// Textos centralizados para evitar duplicación
import { Calendar } from 'lucide-react'

export const content = {
  // Títulos principales por página
  titles: {
    home: {
      hero: "Impulsa el Crecimiento de tu Organización",
      services: "Soluciones Integrales para tu Organización",
      academy: "Formación Especializada para Líderes",
      testimonials: "Lo que Dicen Nuestros Clientes",
      cta: "¿Listo para Transformar tu Organización?"
    },
    quienesSomos: {
      hero: "Transformamos Organizaciones a través del Talento Humano",
      mission: "Desarrollar el Potencial Humano para Impulsar el Crecimiento Organizacional",
      team: "Especialistas en Diferentes Áreas",
      cta: "¿Listo para Trabajar con Nosotros?"
    },
    academia: {
      hero: "Academia Mistri: Formación de Excelencia",
      programs: "Nuestros Programas de Formación",
      cta: "¿Listo para Desarrollar tu Potencial?"
    },
    servicios: {
      hero: "Servicios Especializados para tu Organización",
      cta: "¿Necesitas una Solución Personalizada?"
    }
  },

  // Descripciones por página
  descriptions: {
    home: {
      hero: "Somos una consultora especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios. Impulsamos el crecimiento sostenible de tu organización con metodologías probadas y acompañamiento personalizado.",
      services: "Ofrecemos un ecosistema completo de servicios diseñados para impulsar la transformación y el crecimiento sostenible de tu organización.",
      academy: "Programas diseñados para desarrollar las competencias clave que necesitan los líderes del siglo XXI.",
      testimonials: "La confianza de nuestros clientes es nuestro mayor logro",
      cta: "Comienza tu proceso de transformación hoy y descubre el potencial de tus equipos"
    },
    quienesSomos: {
      hero: "Somos un equipo interdisciplinario de profesionales especializados en desarrollo organizacional, formación de líderes y transformación empresarial. Nuestra misión es impulsar el crecimiento sostenible de las organizaciones a través del desarrollo de su capital humano.",
      mission: "Creemos que las organizaciones más exitosas son aquellas que invierten en el desarrollo de su capital humano. Nuestro enfoque integral combina metodologías probadas con innovación constante para crear soluciones personalizadas que generen resultados medibles y sostenibles.",
      team: "Contamos con un equipo interdisciplinario de profesionales especializados en diferentes áreas del desarrollo organizacional y humano.",
      cta: "Descubre cómo nuestro equipo de especialistas puede ayudar a tu organización a alcanzar sus objetivos de transformación y crecimiento."
    },
    academia: {
      hero: "Desarrolla las competencias que necesitas para liderar en el siglo XXI. Nuestros programas combinan teoría y práctica para generar resultados reales en tu organización.",
      programs: "Ofrecemos una variedad de programas diseñados para diferentes niveles y necesidades de desarrollo profesional.",
      cta: "Inicia tu camino hacia el liderazgo efectivo con nuestros programas especializados."
    }
  },

  // CTAs por página
  ctas: {
    home: {
      primary: {
        text: "Agenda una reunión",
        href: "/contacto",
        icon: "Calendar"
      },
      secondary: {
        text: "Conocer nuestros servicios",
        href: "/servicios"
      },
      ctaSection: {
        primary: {
          text: "Descargar brochure",
          href: "/contacto?form=brochure",
          icon: "Download"
        },
        secondary: {
          text: "Ver casos de éxito",
          href: "/portafolio"
        }
      }
    },
    quienesSomos: {
      primary: {
        text: "Conoce nuestro equipo",
        href: "/contacto",
        icon: "Calendar"
      },
      secondary: {
        text: "Nuestros servicios",
        href: "/servicios"
      },
      ctaSection: {
        primary: {
          text: "Trabajar con nosotros",
          href: "/trabaja-con-nosotros",
          icon: "Users"
        },
        secondary: {
          text: "Ver portafolio",
          href: "/portafolio"
        }
      }
    },
    academia: {
      primary: {
        text: "Inscríbete ahora",
        href: "/contacto",
        icon: "Calendar"
      },
      secondary: {
        text: "Ver programas",
        href: "/academia"
      },
      ctaSection: {
        primary: {
          text: "Ver próximas charlas",
          href: "/charlas",
          icon: "Calendar"
        },
        secondary: {
          text: "Contactar asesor",
          href: "/contacto?form=asesor"
        }
      }
    }
  },

  // Badges por página
  badges: {
    home: {
      services: null, // Sin badge
      academy: null, // Sin badge
      testimonials: "Testimonios"
    },
    quienesSomos: {
      hero: "Quiénes Somos",
      mission: "Nuestra Misión",
    },
    academia: {
      hero: "Academia Mistri",
      programs: "Programas"
    }
  }
}

