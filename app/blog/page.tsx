import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, urlFor, type Post } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Legal Blog | Nwahiri Law — Personal Injury & Civil Rights Insights',
  description: 'Legal insights, case updates, and know-your-rights articles from Attorney Tobechuku Nwahiri — serving Georgia and Florida.',
};

const staticPosts = [
  {
    slug: 'can-you-sue-jackson-memorial-hospital',
    category: 'Government Liability · Miami-Dade',
    title: 'Can You Sue Jackson Memorial Hospital? What Miami-Dade Patients Need to Know',
    excerpt: 'Jackson Memorial is operated by the Public Health Trust — a government entity. That means claims against it are governed by Florida\'s sovereign immunity law, not standard negligence rules. Attorney Nwahiri explains the notice deadlines, damage caps, and what to do if you were harmed.',
    date: 'May 20, 2026',
  },
  {
    slug: 'jackson-memorial-employment-discrimination',
    category: 'Civil Rights · Employment · Miami-Dade',
    title: 'Jackson Memorial Employment Discrimination: What Employees Need to Know',
    excerpt: 'Jackson Memorial Hospital is one of Miami-Dade\'s largest public employers. If you faced discrimination, retaliation, or wrongful termination at Jackson Memorial, federal and Florida civil rights laws may protect you — but the deadlines are short.',
    date: 'June 1, 2026',
  },
  {
    slug: 'uber-lyft-accident-passenger',
    category: 'Rideshare Accidents · Georgia & Florida',
    title: 'Injured as a Passenger in an Uber or Lyft? Here\'s What to Do.',
    excerpt: 'When you are a confirmed rideshare passenger, Uber or Lyft\'s $1 million liability policy applies. But the steps you take in the hours after the crash — including going to the ER the same day — determine what your case is worth.',
    date: 'June 10, 2026',
  },
  {
    slug: 'hit-by-uber-lyft-driver',
    category: 'Rideshare Accidents · Georgia & Florida',
    title: 'Hit by an Uber or Lyft Driver? What to Do If You\'re in Another Vehicle.',
    excerpt: 'The driver\'s app status at the time of the crash determines which insurance tier applies — from the driver\'s personal policy to Uber or Lyft\'s $1 million commercial coverage. Here is exactly what to do.',
    date: 'June 10, 2026',
  },
  {
    slug: 'what-to-do-after-commercial-vehicle-accident',
    category: 'Truck Accidents · Georgia & Florida',
    title: 'What to Do After Being Hit by a Semi-Truck or Commercial Vehicle',
    excerpt: 'Black box data can be overwritten in 30 days. The trucking company\'s insurer is already working. These are the steps to take immediately after being hit by a commercial truck — including why going to the ER the same day is non-negotiable.',
    date: 'June 10, 2026',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function PostCard({ slug, category, title, excerpt, date }: typeof staticPosts[0]) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block p-8 hover:bg-gray-50 transition-colors"
      style={{ borderRight: '1px solid rgba(15,32,68,0.1)', borderBottom: '1px solid rgba(15,32,68,0.1)' }}
    >
      <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold mb-2">
        {category}
      </p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.3rem', lineHeight: 1.3 }} className="mb-3">
        {title}
      </h2>
      <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '13px', lineHeight: 1.7 }} className="mb-4">
        {excerpt}
      </p>
      <div className="flex items-center justify-between">
        <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#9ca3af', fontSize: '11px' }}>{date}</p>
        <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="font-semibold uppercase">
          Read &rarr;
        </span>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  let sanityPosts: Post[] = [];
  try {
    sanityPosts = await getPosts();
  } catch {
    // Sanity not yet configured
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(15,32,68,0.1)' }}>
            {/* Static posts always shown first */}
            {staticPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
            {/* Sanity CMS posts */}
            {sanityPosts.map((post) => (
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
        </div>
      </section>
    </>
  );
}
