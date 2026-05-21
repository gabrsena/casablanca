import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://procleancoastablanca.com', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/airbnb-cleaning-javea', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/airbnb-cleaning-calpe', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/airbnb-cleaning-denia', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/airbnb-cleaning-alicante', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/airbnb-cleaning-torrevieja', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/airbnb-cleaning-benidorm', lastModified: new Date() },
    { url: 'https://procleancoastablanca.com/holiday-home-care-costa-blanca', lastModified: new Date() },
  ]
}
