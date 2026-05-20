import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const client = createClient({
  projectId: '3nmktkdw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  author?: { name: string };
  categories?: { title: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
}

export async function getPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      "author": author->{ name },
      "categories": categories[]->{ title }
    }
  `);
}

export async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      body,
      "author": author->{ name },
      "categories": categories[]->{ title }
    }
  `, { slug });
}
