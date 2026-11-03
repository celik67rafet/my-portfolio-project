import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = 'https://rafetcelik.com';

    const routes = [ '', '/about-me', '/contact', '/r-and-d' ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach(( route ) => {

        const enUrl = `${baseUrl}${route}`;
        const trUrl = `${baseUrl}/tr${route}`;

        // 1. İngilizce Ana Girdi:
        sitemapEntries.push({

            url: enUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: route === '' ? 1.0 : 0.8,
            alternates: {

                languages: {

                    en: enUrl,
                    tr: trUrl,
                    'x-default': enUrl,

                },


            },

        });

        // 2. Türkçe Ana Girdi:
        sitemapEntries.push({

            url: trUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: route === '' ? 1.0 : 0.8,
            alternates: {

                languages: {

                    en: enUrl,
                    tr: trUrl,
                    'x-default': enUrl,

                }

            },

        });

    });

    return sitemapEntries;

}