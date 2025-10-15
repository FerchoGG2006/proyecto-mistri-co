import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags
}: SEOProps): Metadata {
  const siteName = 'Mistri&Co'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mistri-co.com'
  const defaultTitle = 'Mistri&Co - Consultora Especializada en Transformación Organizacional'
  const defaultDescription = 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios. Impulsamos el crecimiento sostenible de tu organización.'
  const defaultImage = `${baseUrl}/main_logo.png`

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle
  const fullDescription = description || defaultDescription
  const fullImage = image || defaultImage
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || 'consultora, transformación organizacional, desarrollo de equipos, formación de líderes, capacitación, coaching, Argentina',
    authors: [{ name: author || 'Mistri&Co' }],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName,
      locale: 'es_ES',
      type,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

// Predefined SEO configurations for common pages
export const pageSEO = {
  home: generateMetadata({
    title: 'Inicio',
    description: 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios. Impulsamos el crecimiento sostenible de tu organización.',
  }),
  
  servicios: generateMetadata({
    title: 'Servicios',
    description: 'Ofrecemos servicios de consultoría en transformación organizacional, formación de mandos medios, capacitación empresarial y desarrollo de equipos de alto rendimiento.',
    url: '/servicios',
  }),
  
  academia: generateMetadata({
    title: 'Academia Mistri',
    description: 'Programas de formación especializados en liderazgo, innovación y transformación organizacional. Cursos intensivos, talleres y charlas inspiradoras.',
    url: '/academia',
  }),
  
  blog: generateMetadata({
    title: 'Blog',
    description: 'Artículos especializados sobre liderazgo, transformación organizacional, desarrollo de equipos y las últimas tendencias en gestión empresarial.',
    url: '/blog',
  }),
  
  charlas: generateMetadata({
    title: 'Charlas y Eventos',
    description: 'Charlas inspiradoras y eventos sobre el futuro del trabajo, liderazgo digital, innovación empresarial y transformación organizacional.',
    url: '/charlas',
  }),
  
  contacto: generateMetadata({
    title: 'Contacto',
    description: 'Ponte en contacto con Mistri&Co. Consultoría especializada en transformación organizacional y desarrollo de equipos.',
    url: '/contacto',
  }),
  
  quienesSomos: generateMetadata({
    title: 'Quiénes Somos',
    description: 'Conoce el equipo de Mistri&Co, consultora especializada en transformación organizacional con más de 10 años de experiencia.',
    url: '/quienes-somos',
  }),
}

// Function to generate SEO metadata for blog posts
export function generatePostMetadata(post: {
  title: string
  description?: string | null
  seoTitle?: string | null
  seoDesc?: string | null
  slug: string
  publishedAt?: Date | null
  updatedAt?: Date
  coverImage?: string | null
  author?: { name: string | null } | null
}) {
  return generateMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.description || '',
    url: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt?.toISOString(),
    modifiedTime: post.updatedAt?.toISOString(),
    author: post.author?.name || 'Mistri&Co',
    section: 'Blog',
    tags: ['liderazgo', 'transformación organizacional', 'desarrollo de equipos'],
    image: post.coverImage || undefined,
  })
}
