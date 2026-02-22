
export type TranslationType = {
  titles: {
    home: {
      hero: string;
      services: string;
      academy: string;
      testimonials: string;
      cta: string;
    };
    quienesSomos: {
      hero: string;
      mission: string;
      team: string;
      cta: string;
      teamAreas: Array<{
        icon: string;
        title: string;
        description: string;
        features: string[];
      }>;
      values: Array<{
        title: string;
        description: string;
      }>;
      experience: {
        title: string;
        description: string;
      };
    };
    academia: {
      hero: string;
      programs: string;
      cta: string;
    };
    servicios: {
      hero: string;
      cta: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
        features: string[];
        href: string;
        variant?: "featured";
      }>;
      viewAll: string;
      categories: {
        formacion: string;
        asesoramiento: string;
        especializados: string;
      };
      method: {
        title: string;
        description: string;
        steps: Array<{
          letter: string;
          title: string;
          titleLocal: string;
          description: string;
        }>;
      };
      detailedServices: {
        formacion: Array<{
          icon: string;
          title: string;
          description: string;
          features: string[];
        }>;
        asesoramiento: Array<{
          icon: string;
          title: string;
          description: string;
          features: string[];
        }>;
        especializados: Array<{
          icon: string;
          title: string;
          description: string;
          features: string[];
        }>;
      };
    };
  };
  academia: {
    viewMore: string;
    subtitle: string;
    programsDescription: string;
    tabs: {
      cursos: string;
      talleres: string;
      charlas: string;
    };
    coursesTitle: string;
    workshopsTitle: string;
    talksTitle: string;
    moreInfo: string;
    courses: Array<{
      title: string;
      description: string;
      duration: string;
      modules: number;
      features: string[];
    }>;
    workshops: Array<{
      title: string;
      description: string;
      duration: string;
      features: string[];
    }>;
    talks: Array<{
      title: string;
      description: string;
      duration: string;
      topics: string[];
    }>;
    benefits: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    features: Array<{
      icon: string;
      title: string;
      description: string;
      duration: string;
    }>;
  };
  blog: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      searchPlaceholder: string;
    };
    featured: {
      badge: string;
      title: string;
      readMore: string;
    };
    recent: {
      title: string;
      description: string;
      loadMore: string;
    };
    sidebar: {
      categories: string;
      tags: string;
      newsletter: {
        title: string;
        description: string;
        placeholder: string;
        button: string;
      };
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
    categories: Record<string, string>;
  };
  descriptions: {
    home: {
      hero: string;
      services: string;
      academy: string;
      testimonials: string;
      cta: string;
    };
    quienesSomos: {
      hero: string;
      mission: string;
      team: string;
      cta: string;
    };
    academia: {
      hero: string;
      programs: string;
      cta: string;
    };
  };
  ctas: {
    home: {
      primary: { text: string; href: string; icon: string };
      secondary: { text: string; href: string };
      ctaSection: {
        primary: { text: string; href: string; icon: string };
        secondary: { text: string; href: string };
      };
    };
    quienesSomos: {
      primary: { text: string; href: string; icon: string };
      secondary: { text: string; href: string };
      ctaSection: {
        primary: { text: string; href: string; icon: string };
        secondary: { text: string; href: string };
      };
    };
    academia: {
      primary: { text: string; href: string; icon: string };
      secondary: { text: string; href: string };
      ctaSection: {
        primary: { text: string; href: string; icon: string };
        secondary: { text: string; href: string };
      };
    };
  };
  badges: {
    home: {
      services: string | null;
      academy: string | null;
      testimonials: string;
    };
    quienesSomos: {
      hero: string;
      mission: string;
    };
    academia: {
      hero: string;
      programs: string;
    };
  };
  nav: {
    quienesSomos: string;
    servicios: string;
    academia: string;
    blog: string;
    cta: string;
  };
    shared: {
    clients: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        logo: string;
        alt: string;
      }>;
    };
    home: {
      heroSubtitle: string;
    };
    footer: {
      description: string;
      quickLinks: string;
      ourServices: string;
      contact: string;
      rights: string;
    };
  };
  admin: {
    blog: {
      posts: Array<{
        id: number;
        title: string;
        author: string;
        date: string;
        status: string;
        views: number;
        content?: string;
      }>;
    };
  };
};

export const contentES: TranslationType = {
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
      cta: "¿Listo para Trabajar con Nosotros?",
      teamAreas: [
        { icon: 'Users', title: 'Talento Humano', description: 'Especialistas en desarrollo de personas, coaching y liderazgo transformacional.', features: ['Coaching ejecutivo y de equipos', 'Desarrollo de competencias blandas', 'Evaluación y selección de talento', 'Programas de bienestar organizacional'] },
        { icon: 'Target', title: 'Organización y Procesos', description: 'Expertos en optimización de estructuras y flujos de trabajo.', features: ['Diagnóstico organizacional', 'Rediseño de procesos', 'Implementación de cambios', 'Gestión del cambio cultural'] },
        { icon: 'TrendingUp', title: 'Financiero y Tributario', description: 'Consultores especializados en optimización fiscal y financiera.', features: ['Asesoría tributaria estratégica', 'Planificación financiera', 'Optimización de costos', 'Análisis de rentabilidad'] },
        { icon: 'Heart', title: 'Coaching y Desarrollo', description: 'Facilitadores del crecimiento personal y profesional.', features: ['Coaching individual y grupal', 'Desarrollo de liderazgo', 'Mentoría ejecutiva', 'Programas de transformación personal'] }
      ],
      values: [
        { title: 'Excelencia', description: 'Buscamos la máxima calidad en cada proyecto y relación.' },
        { title: 'Integridad', description: 'Actuamos con transparencia y ética en todas nuestras acciones.' },
        { title: 'Innovación', description: 'Aplicamos metodologías vanguardistas y soluciones creativas.' },
        { title: 'Compromiso', description: 'Nos dedicamos completamente al éxito de nuestros clientes.' }
      ],
      experience: {
        title: "+15 Años de Experiencia",
        description: "Hemos trabajado con más de 200 organizaciones, desde startups hasta corporaciones multinacionales, ayudándolas a alcanzar sus objetivos de transformación y crecimiento."
      }
    },
    academia: {
      hero: "Academia Mistri: Formación de Excelencia",
      programs: "Nuestros Programas de Formación",
      cta: "¿Listo para Desarrollar tu Potencial?"
    },
    servicios: {
      hero: "Servicios Especializados para tu Organización",
      cta: "¿Necesitas una Solución Personalizada?",
      items: [
        { icon: "Users", title: "Formación de Mandos Medios", description: "Desarrollamos líderes efectivos que impulsen el crecimiento de tu organización.", features: ["Programas de liderazgo personalizado", "Mentoría y coaching ejecutivo", "Desarrollo de habilidades blandas", "Evaluación 360° y seguimiento"], href: "/servicios", variant: "featured" },
        { icon: "Target", title: "Capacitación y Desarrollo", description: "Potenciamos el talento de tus equipos con metodologías probadas.", features: ["Talleres especializados por área", "Capacitación en competencias técnicas", "Programas de certificación", "Acompañamiento continuo"], href: "/servicios" },
        { icon: "TrendingUp", title: "Transformación Organizacional", description: "Reestructuramos procesos para maximizar la eficiencia y productividad.", features: ["Diagnóstico organizacional", "Rediseño de procesos", "Implementación de cambios", "Medición de resultados"], href: "/servicios" }
      ],
      viewAll: "Ver todos los servicios",
      categories: {
        formacion: "Formación y Desarrollo",
        asesoramiento: "Asesoramiento Especializado",
        especializados: "Servicios Especializados"
      },
      method: {
        title: "Método MISTRI®",
        description: "Nuestra metodología probada que transforma organizaciones a través de un proceso sistemático y efectivo",
        steps: [
          { letter: "M", title: "Metrics", titleLocal: "Métricas", description: "Medimos lo importante: ventas, márgenes y desempeño. Sin números claros, cualquier estrategia es solo intuición." },
          { letter: "I", title: "Information", titleLocal: "Información", description: "Los datos se transforman en conocimiento. Descubrimos patrones y oportunidades para decisiones inteligentes." },
          { letter: "S", title: "Strategy", titleLocal: "Estrategia", description: "Trazamos la ruta hacia el éxito. Definimos objetivos claros y diseñamos el plan de acción más efectivo." },
          { letter: "T", title: "Talent", titleLocal: "Talento", description: "Las personas son el motor. Impulsamos el talento de tu equipo para convertir cada plan en resultados tangibles." },
          { letter: "R", title: "Results", titleLocal: "Resultados", description: "Medimos los logros alcanzados. Crecimiento real, procesos optimizados y objetivos cumplidos." },
          { letter: "I", title: "Innovation", titleLocal: "Innovación", description: "El ciclo nunca se detiene. Reinventarse, adaptarse y sorprender con nuevas soluciones." }
        ]
      },
      detailedServices: {
        formacion: [
          { icon: "Users", title: "Formación de Mandos Medios", description: "Desarrollamos líderes efectivos que impulsen el crecimiento de tu organización.", features: ["Programas de liderazgo personalizado", "Mentoría y coaching ejecutivo", "Desarrollo de habilidades blandas", "Evaluación 360° y seguimiento", "Certificación en competencias gerenciales"] },
          { icon: "Target", title: "Capacitación y Desarrollo", description: "Potenciamos el talento de tus equipos con metodologías probadas.", features: ["Talleres especializados por área", "Capacitación en competencias técnicas", "Programas de certificación", "Acompañamiento continuo", "Medición de impacto y ROI"] },
          { icon: "TrendingUp", title: "Transformación Organizacional", description: "Reestructuramos procesos para maximizar la eficiencia y productividad.", features: ["Diagnóstico organizacional", "Rediseño de procesos", "Implementación de cambios", "Medición de resultados", "Sostenibilidad del cambio"] }
        ],
        asesoramiento: [
          { icon: "DollarSign", title: "Asesoramiento Financiero", description: "Optimizamos la gestión financiera de tu organización con estrategias probadas.", features: ["Análisis de estructura financiera", "Optimización de costos", "Planificación presupuestaria", "Control de gestión", "Indicadores financieros clave"] },
          { icon: "BarChart3", title: "Asesoramiento Impositivo", description: "Te ayudamos a cumplir con todas las obligaciones fiscales de manera eficiente.", features: ["Revisión de obligaciones fiscales", "Optimización tributaria", "Cumplimiento normativo", "Asesoramiento en auditorías", "Capacitación del equipo contable"] },
          { icon: "Shield", title: "Asesoramiento en Organización Interna", description: "Estandarizamos y optimizamos todos los procesos administrativos de tu organización.", features: ["Mapeo de procesos actuales", "Diseño de procedimientos", "Implementación de controles", "Capacitación del personal", "Monitoreo y mejora continua"] }
        ],
        especializados: [
          { icon: "Megaphone", title: "Marketing Digital", description: "Potenciamos tu presencia digital con estrategias integrales de marketing.", features: ["Estrategias de contenido", "SEO y posicionamiento web", "Marketing en redes sociales", "Campañas publicitarias digitales", "Análisis de métricas y ROI"] },
          { icon: "TrendingUp", title: "Optimización de Ventas", description: "Mejoramos los procesos de ventas para maximizar los resultados comerciales.", features: ["Diagnóstico del proceso de ventas", "Capacitación del equipo comercial", "Implementación de CRM", "Estrategias de cierre", "Seguimiento y análisis de resultados"] },
          { icon: "Users", title: "Desarrollo de Liderazgo", description: "Formamos líderes capaces de inspirar y dirigir equipos de alto rendimiento.", features: ["Programas de liderazgo personalizado", "Coaching ejecutivo", "Desarrollo de habilidades directivas", "Gestión de equipos", "Evaluación 360° y seguimiento"] },
          { icon: "BarChart3", title: "Análisis de Números", description: "Transformamos datos en insights accionables para la toma de decisiones.", features: ["Análisis de KPIs empresariales", "Dashboards ejecutivos", "Reportes de gestión", "Análisis de tendencias", "Recomendaciones estratégicas"] }
        ]
      }
    }
  },
  academia: {
    viewMore: "Conocer Academia Mistri",
    subtitle: "Formación especializada para líderes del siglo XXI",
    programsDescription: "Tres modalidades de aprendizaje diseñadas para diferentes necesidades y niveles de profundidad",
    tabs: { cursos: "Cursos Intensivos", talleres: "Talleres", charlas: "Charlas" },
    coursesTitle: "Cursos Intensivos",
    workshopsTitle: "Talleres Especializados",
    talksTitle: "Charlas Inspiradoras",
    moreInfo: "Más información sobre",
    courses: [
      { title: 'Gestión de Equipos', description: 'Desarrolla habilidades para liderar equipos de alto rendimiento.', duration: '6 semanas', modules: 6, features: ['Fundamentos del liderazgo efectivo', 'Comunicación y feedback', 'Resolución de conflictos', 'Motivación y engagement', 'Desarrollo de talento', 'Medición de resultados'] },
      { title: 'Toma de Decisiones', description: 'Aprende metodologías probadas para tomar decisiones estratégicas.', duration: '6 semanas', modules: 6, features: ['Análisis de problemas complejos', 'Metodologías de decisión', 'Evaluación de riesgos', 'Pensamiento crítico', 'Implementación de decisiones', 'Seguimiento y ajustes'] }
    ],
    workshops: [
      { title: 'Liderazgo Transformacional', description: 'Desarrolla tu estilo de liderazgo personal y efectivo.', duration: '3 encuentros de 90 min', features: ['Autoconocimiento y liderazgo', 'Estilos de liderazgo', 'Liderazgo situacional', 'Desarrollo de seguidores', 'Ética y valores en el liderazgo'] }
    ],
    talks: [
      { title: 'El Futuro del Trabajo', description: 'Tendencias y desafíos en el mundo laboral del siglo XXI.', duration: '1 hora', topics: ['Trabajo remoto', 'Automatización', 'Nuevas competencias', 'Cultura organizacional'] }
    ],
    benefits: {
      title: "¿Por qué elegir Academia Mistri?",
      description: "Nuestros programas están diseñados para generar un impacto real en tu desarrollo profesional y organizacional",
      items: [
        { title: 'Certificación', description: 'Certificados reconocidos por la industria' },
        { title: 'Networking', description: 'Conecta con otros profesionales' },
        { title: 'Aplicación Práctica', description: 'Metodologías aplicables inmediatamente' },
        { title: 'Impacto Medible', description: 'Resultados cuantificables en tu organización' }
      ]
    },
    features: [
      {
        icon: 'BookOpen',
        title: 'Cursos Intensivos',
        description: 'Programas profundos sobre liderazgo y gestión de equipos.',
        duration: '6 semanas'
      },
      {
        icon: 'Presentation',
        title: 'Talleres Especializados',
        description: 'Encuentros dinámicos para desarrollar habilidades específicas.',
        duration: '3 encuentros'
      },
      {
        icon: 'Lightbulb',
        title: 'Charlas Inspiradoras',
        description: 'Sesiones sobre tendencias y el futuro del trabajo.',
        duration: '1 hora'
      }
    ]
  },
  blog: {
    hero: {
      title: "Insights y Tendencias",
      subtitle: "en Liderazgo y Organización",
      description: "Descubre artículos especializados sobre liderazgo, transformación organizacional, desarrollo de equipos y las últimas tendencias en gestión empresarial.",
      searchPlaceholder: "Buscar artículos..."
    },
    featured: {
      badge: "Artículo Destacado",
      title: "Lo más leído esta semana",
      readMore: "Leer más"
    },
    recent: {
      title: "Artículos Recientes",
      description: "Mantente actualizado con las últimas tendencias y mejores prácticas",
      loadMore: "Cargar más artículos"
    },
    sidebar: {
      categories: "Categorías",
      tags: "Tags Populares",
      newsletter: {
        title: "Newsletter",
        description: "Recibe nuestros artículos más recientes directamente en tu correo",
        placeholder: "Tu email",
        button: "Suscribirse"
      }
    },
    cta: {
      title: "¿Te gusta lo que lees?",
      description: "Únete a nuestra comunidad y recibe insights exclusivos sobre liderazgo y transformación organizacional",
      primary: "Suscribirse al Newsletter",
      secondary: "Ver todos los artículos"
    },
    categories: {
      liderazgo: "Liderazgo",
      innovacion: "Innovación",
      equipos: "Equipos",
      transformacion: "Transformación",
      comunicacion: "Comunicación"
    }
  },
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
      team: "Contamos con un equipo interdisciplinar de profesionales especializados en diferentes áreas del desarrollo organizacional y humano.",
      cta: "Descubre cómo nuestro equipo de especialistas puede ayudar a tu organización a alcanzar sus objetivos de transformación y crecimiento."
    },
    academia: {
      hero: "Desarrolla las competencias que necesitas para liderar en el siglo XXI. Nuestros programas combinan teoría y práctica para generar resultados reales en tu organización.",
      programs: "Ofrecemos una variedad de programas diseñados para diferentes niveles y necesidades de desarrollo profesional.",
      cta: "Inicia tu camino hacia el liderazgo efectivo con nuestros programas especializados."
    }
  },
  ctas: {
    home: {
      primary: { text: "Agenda una reunión", href: "/contacto", icon: "Calendar" },
      secondary: { text: "Conocer nuestros servicios", href: "/servicios" },
      ctaSection: {
        primary: { text: "Descargar brochure", href: "/contacto?form=brochure", icon: "Download" },
        secondary: { text: "Ver casos de éxito", href: "/portafolio" }
      }
    },
    quienesSomos: {
      primary: { text: "Conoce nuestro equipo", href: "/contacto", icon: "Calendar" },
      secondary: { text: "Nuestros servicios", href: "/servicios" },
      ctaSection: {
        primary: { text: "Trabajar con nosotros", href: "/trabaja-con-nosotros", icon: "Users" },
        secondary: { text: "Ver portafolio", href: "/portafolio" }
      }
    },
    academia: {
      primary: { text: "Inscríbete ahora", href: "/contacto", icon: "Calendar" },
      secondary: { text: "Ver programas", href: "/academia" },
      ctaSection: {
        primary: { text: "Ver próximas charlas", href: "/charlas", icon: "Calendar" },
        secondary: { text: "Contactar asesor", href: "/contacto?form=asesor" }
      }
    }
  },
  badges: {
    home: { services: null, academy: null, testimonials: "Testimonios" },
    quienesSomos: { hero: "Quiénes Somos", mission: "Nuestra Misión" },
    academia: { hero: "Academia Mistri", programs: "Programas" }
  },
  nav: {
    quienesSomos: "Quiénes Somos",
    servicios: "Servicios",
    academia: "Academia Mistri",
    blog: "Blog",
    cta: "Agenda una reunión"
  },
  shared: {
    clients: {
      title: "Organizaciones que Confían en Nosotros",
      subtitle: "Hemos trabajado con empresas de diversos sectores, ayudándolas a alcanzar sus objetivos de transformación organizacional.",
      items: [
        { name: "Muñoz Marchesí", logo: "/images/clients/logo-munoz-marchesi.png", alt: "Logo de Muñoz Marchesí" },
        { name: "Dala Computación", logo: "/images/clients/logo-dala-computacion.png", alt: "Logo de Dala Computación" },
        { name: "Emprendé Seguro", logo: "/images/clients/logo-emprendé-seguro.png", alt: "Logo de Emprendé Seguro" },
        { name: "Espacio Wilde", logo: "/images/clients/logo-espacio-wilde.jpg", alt: "Logo de Espacio Wilde" },
        { name: "Romero Nagy", logo: "/images/clients/logo-romero_nagy.png", alt: "Logo de Romero Nagy" },
        { name: "SBR Repuestos", logo: "/images/clients/logo-SBR-repuestos.jpg", alt: "Logo de SBR Repuestos" },
      ]
    },
    home: {
      heroSubtitle: "Desarrollo de equipos y formación de líderes"
    },
    footer: {
      description: "Transformamos empresas a través de estrategias de ventas, marketing y liderazgo. Capacitamos equipos y optimizamos procesos para maximizar resultados.",
      quickLinks: "Enlaces Rápidos",
      ourServices: "Nuestros Servicios",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    }
  },
  admin: {
    blog: {
      posts: [
        { id: 1, title: 'Transformación Digital en 2024', author: 'Admin', date: '2024-01-20', status: 'Publicado', views: 245 },
        { id: 2, title: 'Liderazgo en Tiempos de Cambio', author: 'Admin', date: '2024-01-18', status: 'Publicado', views: 189 },
        { id: 3, title: 'Desarrollo de Equipos Efectivos', author: 'Admin', date: '2024-01-15', status: 'Borrador', views: 0 },
      ]
    }
  }
};

export const contentPT: TranslationType = {
  titles: {
    home: {
      hero: "Impulsione o Crescimento da sua Organização",
      services: "Soluções Integrais para sua Organização",
      academy: "Formação Especializada para Líderes",
      testimonials: "O que dizem nossos clientes",
      cta: "Pronto para transformar sua organização?"
    },
    quienesSomos: {
      hero: "Transformamos organizações através do talento humano",
      mission: "Desenvolver o potencial humano para impulsionar o crescimento organizacional",
      team: "Especialistas em diferentes áreas",
      cta: "Pronto para trabalhar conosco?",
      teamAreas: [
        { icon: 'Users', title: 'Talento Humano', description: 'Especialistas em desenvolvimento de pessoas, coaching e liderança transformacional.', features: ['Coaching executivo e de equipes', 'Desenvolvimento de soft skills', 'Avaliação e seleção de talentos', 'Programas de bem-estar organizacional'] },
        { icon: 'Target', title: 'Organização e Processos', description: 'Especialistas em otimização de estruturas e fluxos de trabalho.', features: ['Diagnóstico organizacional', 'Redesenho de processos', 'Implementação de mudanças', 'Gestão da mudança cultural'] },
        { icon: 'TrendingUp', title: 'Financeiro e Tributário', description: 'Consultores especializados em otimização fiscal e financeira.', features: ['Assessoria tributária estratégica', 'Planejamento financeiro', 'Otimização de custos', 'Análise de rentabilidade'] },
        { icon: 'Heart', title: 'Coaching e Desenvolvimento', description: 'Facilitadores do crescimento pessoal e profissional.', features: ['Coaching individual e grupal', 'Desenvolvimento de liderança', 'Mentoria executiva', 'Programas de transformação pessoal'] }
      ],
      values: [
        { title: 'Excelência', description: 'Buscamos a máxima qualidade em cada projeto e relacionamento.' },
        { title: 'Integridade', description: 'Atuamos com transparência e ética em todas as nossas ações.' },
        { title: 'Inovação', description: 'Aplicamos metodologias de vanguarda e soluções criativas.' },
        { title: 'Compromisso', description: 'Dedicamo-nos totalmente ao sucesso de nossos clientes.' }
      ],
      experience: {
        title: "+15 Anos de Experiência",
        description: "Trabalhamos com mais de 200 organizações, de startups a corporações multinacionais, ajudando-as a alcançar seus objetivos de transformação e crescimento."
      }
    },
    academia: {
      hero: "Academia Mistri: Formação de Excelência",
      programs: "Nossos programas de formação",
      cta: "Pronto para desenvolver seu potencial?"
    },
    servicios: {
      hero: "Serviços Especializados para sua Organização",
      cta: "Precisa de uma solução personalizada?",
      items: [
        { icon: "Users", title: "Formação de Liderança Intermediária", description: "Desenvolvemos líderes eficazes que impulsionam o crescimento da sua organização.", features: ["Programas de liderança personalizados", "Mentoria e coaching executivo", "Desenvolvimento de soft skills", "Avaliação 360° e acompanhamento"], href: "/servicios", variant: "featured" },
        { icon: "Target", title: "Treinamento e Desenvolvimento", description: "Potencializamos o talento de suas equipes com metodologias comprovadas.", features: ["Workshops especializados por área", "Treinamento em competências técnicas", "Programas de certificação", "Acompanhamento contínuo"], href: "/servicios" },
        { icon: "TrendingUp", title: "Transformação Organizacional", description: "Reestruturamos processos para maximizar a eficiência e produtividade.", features: ["Diagnóstico organizacional", "Redesenho de processos", "Implementação de mudanças", "Medição de resultados"], href: "/servicios" }
      ],
      viewAll: "Ver todos os serviços",
      categories: {
        formacion: "Formação e Desenvolvimento",
        asesoramiento: "Assessoria Especializada",
        especializados: "Serviços Especializados"
      },
      method: {
        title: "Método MISTRI®",
        description: "Nossa metodologia comprovada que transforma organizações através de um processo sistemático e eficaz",
        steps: [
          { letter: "M", title: "Metrics", titleLocal: "Métricas", description: "Medimos o que é importante: vendas, margens e desempenho. Sem números claros, qualquer estratégia é apenas intuição." },
          { letter: "I", title: "Information", titleLocal: "Informação", description: "Os dados se transformam em conhecimento. Descubrimos padrões e oportunidades para decisões inteligentes." },
          { letter: "S", title: "Strategy", titleLocal: "Estratégia", description: "Traçamos a rota para o sucesso. Definimos objetivos claros e desenhamos o plano de ação mais eficaz." },
          { letter: "T", title: "Talent", titleLocal: "Talento", description: "As pessoas são o motor. Impulsionamos o talento de sua equipe para converter cada plano em resultados tangíveis." },
          { letter: "R", title: "Results", titleLocal: "Resultados", description: "Medimos as conquistas alcançadas. Crescimento real, processos otimizados e objetivos cumpridos." },
          { letter: "I", title: "Innovation", titleLocal: "Inovação", description: "O ciclo nunca para. Reinventar-se, adaptar-se e surpreender com novas soluções." }
        ]
      },
      detailedServices: {
        formacion: [
          { icon: "Users", title: "Formação de Liderança Intermediária", description: "Desenvolvemos líderes eficazes que impulsionam o crescimento da sua organização.", features: ["Programas de liderança personalizados", "Mentoria e coaching executivo", "Desenvolvimento de soft skills", "Avaliação 360° e acompanhamento", "Certificação em competências gerenciais"] },
          { icon: "Target", title: "Treinamento e Desenvolvimento", description: "Potencializamos o talento de suas equipes com metodologias comprovadas.", features: ["Workshops especializados por área", "Treinamento em competências técnicas", "Programas de certificação", "Acompanhamento contínuo", "Medição de impacto e ROI"] },
          { icon: "TrendingUp", title: "Transformação Organizacional", description: "Reestruturamos processos para maximizar a eficiência e produtividade.", features: ["Diagnóstico organizacional", "Redesenho de processos", "Implementação de mudanças", "Medição de resultados", "Sustentabilidade da mudança"] }
        ],
        asesoramiento: [
          { icon: "DollarSign", title: "Assessoria Financeira", description: "Otimizamos a gestão financeira de sua organização com estratégias comprovadas.", features: ["Análise da estrutura financeira", "Otimização de custos", "Planejamento orçamentário", "Controle de gestão", "Indicadores financeiros chave"] },
          { icon: "BarChart3", title: "Assessoria Tributária", description: "Ajudamos você a cumprir todas as obrigações fiscais de maneira eficiente.", features: ["Revisão de obrigações fiscais", "Otimização tributaria", "Conformidade normativa", "Assessoria em auditorias", "Treinamento da equipe contábil"] },
          { icon: "Shield", title: "Assessoria em Organização Interna", description: "Padronizamos e otimizamos todos os processos administrativos de sua organização.", features: ["Mapeamento de processos atuais", "Desenho de procedimentos", "Implementação de controles", "Treinamento de pessoal", "Monitoramento e melhoria contínua"] }
        ],
        especializados: [
          { icon: "Megaphone", title: "Marketing Digital", description: "Potencializamos sua presença digital com estratégias integrais de marketing.", features: ["Estratégias de conteúdo", "SEO e posicionamento web", "Marketing em redes sociais", "Campanhas publicitárias digitais", "Análise de métricas e ROI"] },
          { icon: "TrendingUp", title: "Otimização de Vendas", description: "Melhoramos os processos de vendas para maximizar os resultados comerciais.", features: ["Diagnóstico do processo de vendas", "Treinamento da equipe comercial", "Implementação de CRM", "Estratégias de fechamento", "Acompanhamento e análise de resultados"] },
          { icon: "Users", title: "Desenvolvimento de Liderança", description: "Formamos líderes capazes de inspirar e dirigir equipes de alto desempenho.", features: ["Programas de liderança personalizados", "Coaching executivo", "Desenvolvimento de habilidades gerenciais", "Gestão de equipes", "Avaliação 360° e acompanhamento"] },
          { icon: "BarChart3", title: "Análise de Números", description: "Transformamos dados em insights acionáveis para a tomada de decisões.", features: ["Análise de KPIs empresariais", "Dashboards executivos", "Relatórios de gestão", "Análise de tendências", "Recomendações estratégicas"] }
        ]
      }
    }
  },
  academia: {
    viewMore: "Conhecer Academia Mistri",
    subtitle: "Formação especializada para líderes do século XXI",
    programsDescription: "Três modalidades de aprendizagem projetadas para diferentes necessidades e níveis de profundidade",
    tabs: { cursos: "Cursos Intensivos", talleres: "Workshops", charlas: "Palestras" },
    coursesTitle: "Cursos Intensivos",
    workshopsTitle: "Workshops Especializados",
    talksTitle: "Palestras Inspiradoras",
    moreInfo: "Mais informações sobre",
    courses: [
      { title: 'Gestão de Equipes', description: 'Desenvolva habilidades para liderar equipes de alto desempenho.', duration: '6 semanas', modules: 6, features: ['Fundamentos da liderança eficaz', 'Comunicação e feedback', 'Resolução de conflitos', 'Motivação e engajamento', 'Desenvolvimento de talentos', 'Medição de resultados'] },
      { title: 'Tomada de Decisão', description: 'Aprenda metodologias comprovadas para tomar decisões estratégicas.', duration: '6 semanas', modules: 6, features: ['Análise de problemas complexos', 'Metodologias de decisão', 'Avaliação de riscos', 'Pensamento crítico', 'Implementação de decisões', 'Acompanhamento e ajustes'] }
    ],
    workshops: [
      { title: 'Liderança Transformacional', description: 'Desenvolva seu estilo de liderança pessoal e eficaz.', duration: '3 encontros de 90 min', features: ['Autoconhecimento e liderança', 'Estilos de liderança', 'Liderança situacional', 'Desenvolvimento de liderados', 'Ética e valores na liderança'] }
    ],
    talks: [
      { title: 'O Futuro do Trabalho', description: 'Tendências e desafios no mundo do trabalho do século XXI.', duration: '1 hora', topics: ['Trabalho remoto', 'Automação', 'Novas competências', 'Cultura organizacional'] }
    ],
    benefits: {
      title: "Por que escolher a Academia Mistri?",
      description: "Nossos programas são projetados para gerar um impacto real em seu desenvolvimento profissional e organizacional",
      items: [
        { title: 'Certificação', description: 'Certificados reconhecidos pela indústria' },
        { title: 'Networking', description: 'Conecte-se com outros profissionais' },
        { title: 'Aplicação Prática', description: 'Metodologias aplicáveis imediatamente' },
        { title: 'Impacto Mensurável', description: 'Resultados quantificáveis em sua organização' }
      ]
    },
    features: [
      {
        icon: 'BookOpen',
        title: 'Cursos Intensivos',
        description: 'Programas profundos sobre liderança e gestão de equipes.',
        duration: '6 semanas'
      },
      {
        icon: 'Presentation',
        title: 'Workshops Especializados',
        description: 'Encontros dinâmicos para desenvolver habilidades específicas.',
        duration: '3 encontros'
      },
      {
        icon: 'Lightbulb',
        title: 'Palestras Inspiradoras',
        description: 'Sessões sobre tendências e o futuro do trabalho.',
        duration: '1 hora'
      }
    ]
  },
  blog: {
    hero: {
      title: "Insights e Tendências",
      subtitle: "em Liderança e Organização",
      description: "Descubra artigos especializados sobre liderança, transformação organizacional, desenvolvimento de equipes e as últimas tendências em gestão empresarial.",
      searchPlaceholder: "Buscar artigos..."
    },
    featured: {
      badge: "Artigo de Destaque",
      title: "O mais lido esta semana",
      readMore: "Ler mais"
    },
    recent: {
      title: "Artigos Recientes",
      description: "Mantenha-se atualizado com as últimas tendências e melhores práticas",
      loadMore: "Carregar mais artigos"
    },
    sidebar: {
      categories: "Categorias",
      tags: "Tags Populares",
      newsletter: {
        title: "Newsletter",
        description: "Receba nossos artigos mais recentes diretamente em seu e-mail",
        placeholder: "Seu e-mail",
        button: "Inscrever-se"
      }
    },
    cta: {
      title: "Gosta do que lê?",
      description: "Junte-se à nossa comunidade e receba insights exclusivos sobre liderança e transformação organizacional",
      primary: "Inscrever-se na Newsletter",
      secondary: "Ver todos os artigos"
    },
    categories: {
      liderazgo: "Liderança",
      innovacion: "Inovação",
      equipos: "Equipes",
      transformacion: "Transformação",
      comunicacion: "Comunicação"
    }
  },
  descriptions: {
    home: {
      hero: "Somos uma consultoria especializada em transformação organizacional, desenvolvimento de equipes e formação de lideranças intermediárias. Impulsionamos o crescimento sustentável da sua organização com metodologias comprovadas e acompanhamento personalizado.",
      services: "Oferecemos um ecossistema completo de serviços projetados para impulsionar a transformação e o crescimento sustentável da sua organização.",
      academy: "Programas projetados para desenvolver as competências essenciais que os líderes do século XXI precisam.",
      testimonials: "A confiança de nossos clientes é nossa maior conquista",
      cta: "Comece seu processo de transformação hoje e descubra o potencial de suas equipes"
    },
    quienesSomos: {
      hero: "Somos uma equipe interdisciplinar de profissionais especializados em desenvolvimento organizacional, formação de líderes e transformação empresarial. Nossa missão é impulsionar o crescimento sustentável das organizações através do desenvolvimento de seu capital humano.",
      mission: "Acreditamos que as organizações mais bem-sucedidas são aquelas que investem no desenvolvimento de seu capital humano. Nossa abordagem integral combina metodologias comprovadas con inovação constante para criar soluções personalizadas que gerem resultados mensuráveis e sustentáveis.",
      team: "Contamos com uma equipe interdisciplinar de profissionais especializados em diferentes áreas do desenvolvimento organizacional e humano.",
      cta: "Descubra como nossa equipe de especialistas pode ajudar sua organização a alcançar seus objetivos de transformação e crescimento."
    },
    academia: {
      hero: "Desenvolva as competências necessárias para liderar no século XXI. Nossos programas combinam teoria e prática para gerar resultados reais em sua organização.",
      programs: "Oferecemos uma variedade de programas projetados para diferentes níveis e necessidades de desenvolvimento profissional.",
      cta: "Inicie seu caminho rumo à liderança eficaz com nossos programas especializados."
    }
  },
  ctas: {
    home: {
      primary: { text: "Agende uma reunião", href: "/contacto", icon: "Calendar" },
      secondary: { text: "Conhecer nossos serviços", href: "/servicios" },
      ctaSection: {
        primary: { text: "Baixar material", href: "/contacto?form=brochure", icon: "Download" },
        secondary: { text: "Ver casos de sucesso", href: "/portafolio" }
      }
    },
    quienesSomos: {
      primary: { text: "Conheça nossa equipe", href: "/contacto", icon: "Calendar" },
      secondary: { text: "Nossos serviços", href: "/servicios" },
      ctaSection: {
        primary: { text: "Trabalhe conosco", href: "/trabaja-con-nosotros", icon: "Users" },
        secondary: { text: "Ver portfólio", href: "/portafolio" }
      }
    },
    academia: {
      primary: { text: "Inscreva-se agora", href: "/contacto", icon: "Calendar" },
      secondary: { text: "Ver programas", href: "/academia" },
      ctaSection: {
        primary: { text: "Ver próximas palestras", href: "/charlas", icon: "Calendar" },
        secondary: { text: "Contatar consultor", href: "/contacto?form=asesor" }
      }
    }
  },
  badges: {
    home: { services: null, academy: null, testimonials: "Depoimentos" },
    quienesSomos: { hero: "Quem Somos", mission: "Nossa Missão" },
    academia: { hero: "Academia Mistri", programs: "Programas" }
  },
  nav: {
    quienesSomos: "Quem Somos",
    servicios: "Serviços",
    academia: "Academia Mistri",
    blog: "Blog",
    cta: "Agende uma reunión"
  },
  shared: {
    clients: {
      title: "Organizações que Confiam em Nós",
      subtitle: "Trabalhamos com empresas de diversos setores, ajudando-as a alcançar seus objetivos de transformação organizacional.",
      items: [
        { name: "Muñoz Marchesí", logo: "/images/clients/logo-munoz-marchesi.png", alt: "Logo de Muñoz Marchesí" },
        { name: "Dala Computación", logo: "/images/clients/logo-dala-computacion.png", alt: "Logo de Dala Computación" },
        { name: "Emprendé Seguro", logo: "/images/clients/logo-emprendé-seguro.png", alt: "Logo de Emprendé Seguro" },
        { name: "Espacio Wilde", logo: "/images/clients/logo-espacio-wilde.jpg", alt: "Logo de Espacio Wilde" },
        { name: "Romero Nagy", logo: "/images/clients/logo-romero_nagy.png", alt: "Logo de Romero Nagy" },
        { name: "SBR Repuestos", logo: "/images/clients/logo-SBR-repuestos.jpg", alt: "Logo de SBR Repuestos" },
      ]
    },
    home: {
      heroSubtitle: "Desenvolvimento de equipes e formação de líderes"
    },
    footer: {
      description: "Transformamos empresas através de estratégias de vendas, marketing e liderança. Capacitamos equipes e otimizamos processos para maximizar resultados.",
      quickLinks: "Links Rápidos",
      ourServices: "Nossos Serviços",
      contact: "Contato",
      rights: "Todos os direitos reservados."
    }
  },
  admin: {
    blog: {
      posts: [
        { id: 1, title: 'Transformação Digital em 2024', author: 'Admin', date: '2024-01-20', status: 'Publicado', views: 245 },
        { id: 2, title: 'Liderança em Tempos de Mudança', author: 'Admin', date: '2024-01-18', status: 'Publicado', views: 189 },
        { id: 3, title: 'Desenvolvimento de Equipes Eficazes', author: 'Admin', date: '2024-01-15', status: 'Rascunho', views: 0 },
      ]
    }
  }
};

export const content = contentES; // Fallback para compatibilidad backward
