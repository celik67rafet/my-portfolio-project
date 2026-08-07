import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = 'https://rafetcelik.com';

    const routes = [ '', '/about-me', '/contact', '/r-and-d' ];

    return routes.map(( route ) => {

        const enUrl = route === '' ? `${baseUrl}` : `${baseUrl}${route}`;

        const trUrl = `${baseUrl}/tr${route}`;

        return {

            url: enUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: route === '' ? 1.0 : 0.8,
            alternates: {
                languages: {
                    tr: trUrl,
                    en: enUrl,
                    'x-default': enUrl,
                },
            },
        };

    });

}