import { blogPosts } from "@/constants/index";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postEntries: MetadataRoute.Sitemap = blogPosts.map(({ id }) => ({
    url: `https://smurfcodes.com/blog/${id}`,
    priority: 0.5,
    changeFrequency: "weekly",
  }));

  return [
    {
      url: "https://smurfcodes.com",
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: "https://smurfcodes.com/promo-codes",
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: "https://smurfcodes.com/giveaway",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      url: "https://smurfcodes.com/blog",
      priority: 0.6,
      changeFrequency: "weekly",
    },
    ...postEntries,
  ];
}
