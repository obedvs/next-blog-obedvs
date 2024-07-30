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
  description: 'An Open source Technical Blog platform with Next.js 14, shadcn/iu, Prisma ORM and Markdown support.',
  url: 'https://obedvs-blog.vercel.app/',
  ogImage: 'https://obedvs-blog.vercel.app/og',
  links: {
    twitter: 'https://x.com/obedvs_',
    github: 'https://github.com/obedvs',
    linkedin: 'https://linkedin.com/in/swobedvega',
    instagram: 'https://instagram.com/obed.vs'
  }
}