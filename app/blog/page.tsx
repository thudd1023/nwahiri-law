import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, urlFor, type Post } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Legal Blog | Nwahiri Law — Personal Injury & Civil Rights Insights',
  description: 'Legal insights, case updates, and know-your-rights articles from Attorney Tobechuku Nwahiri — serving Georgia and Florida.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    posts = await getPosts();
  } catch {
    // Sanity not yet configured — show placeholder
  }

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0A1A38' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Nwahiri Law
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-5xl md:text-6xl max-w-2xl">
            Legal Insights &amp; Know Your Rights
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '56px', marginTop: '1.5rem' }} />
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.5rem', fontStyle: 'italic' }}>
                Articles coming soon.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#9ca3af', fontSize: '13px', marginTop: '12px' }}>
                Check back for legal insights from Attorney Nwahiri.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(15,32,68,0.1)' }}>
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block p-8 hover:bg-gray-50 transition-colors"
                  style={{ borderRight: '1px solid rgba(15,32,68,0.1)', borderBottom: '1px solid rgba(15,32,68,0.1)' }}
                >
                  {post.mainImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={urlFor(post.mainImage).width(600).height(340).url()}
                      alt={post.title}
                      className="w-full mb-5 object-cover"
                      style={{ height: '200px' }}
                    />
                  )}
                  {post.categories && post.categories.length > 0 && (
                    <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold mb-2">
                      {post.categories[0].title}
                    </p>
                  )}
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.3rem', lineHeight: 1.3 }} className="mb-3">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '13px', lineHeight: 1.7 }} className="mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto">
                    <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#9ca3af', fontSize: '11px' }}>
                      {formatDate(post.publishedAt)}
                    </p>
                    <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="font-semibold uppercase">
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
