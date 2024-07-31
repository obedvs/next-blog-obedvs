type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Obed.vs Blog',
  description: 'Una plataforma de Blog Técnico de Código Abierto con Next.js 14, shadcn/iu, Prisma ORM y soporte Markdown.',
  url: 'https://obedvs-blog.vercel.app/',
  ogImage: 'https://obedvs-blog.vercel.app/og',
  links: {
    twitter: 'https://x.com/obedvs_',
    github: 'https://github.com/obedvs',
    linkedin: 'https://linkedin.com/in/swobedvega',
    instagram: 'https://instagram.com/obed.vs'
  }
}