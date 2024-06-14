import { SERVICES } from "./services/[slug]/service.constants";

export default function sitemap() {
    return [
      {
        url: 'https://www.nisargaecoconsultants.com/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.nisargaecoconsultants.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.nisargaecoconsultants.com/services',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      ...SERVICES.map(service => ({
        url: `https://www.nisargaecoconsultants.com/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
    ]
  }