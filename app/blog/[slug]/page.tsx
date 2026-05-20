import type { Metadata } from 'next';
import Link from 'next/link';
import { getPost, getPosts, urlFor } from '@/lib/sanity';
import { PortableText } from 'next-sanity';

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    if (!post) return { title: 'Post Not Found | Nwahiri Law' };
    return {
      title: `${post.title} | Nwahiri Law Blog`,
      description: post.excerpt ?? `Read ${post.title} on the Nwahiri Law blog.`,
    };
  } catch {
    return { title: 'Blog | Nwahiri Law' };
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await getPost(slug);
  } catch {
    // Sanity not configured
  }

  if (!post) {
    return (
      <section className="py-32 px-6 text-center">
        <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.5rem', fontStyle: 'italic' }}>
          Post not found.
        </p>
        <Link href="/blog" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="uppercase font-semibold mt-4 inline-block">
          &larr; Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0A1A38' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="uppercase font-semibold mb-8 inline-block hover:text-white transition-colors">
            &larr; Back to Blog
          </Link>
          {post.categories && post.categories.length > 0 && (
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold mb-4">
              {post.categories[0].title}
            </p>
          )}
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: '20px' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>
              {formatDate(post.publishedAt)}
            </p>
            {post.author && (
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>
                By {post.author.name}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main image */}
      {post.mainImage && (
        <div className="w-full" style={{ maxHeight: '480px', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(post.mainImage).width(1280).height(480).url()}
            alt={post.title}
            className="w-full object-cover"
            style={{ height: '480px' }}
          />
        </div>
      )}

      {/* Body */}
      <article className="py-16 px-6" style={{ backgroundColor: 'white' }}>
        <div
          className="max-w-3xl mx-auto prose"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, color: '#374151' }}
        >
          {post.body && <PortableText value={post.body} />}
        </div>
      </article>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 400, fontStyle: 'italic' }} className="text-3xl mb-6">
          Have questions about your case?
        </p>
        <Link
          href="/free-consultation"
          style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 32px' }}
          className="inline-block text-white font-semibold uppercase hover:opacity-90 transition-opacity"
        >
          Get a Free Consultation
        </Link>
      </section>
    </>
  );
}
