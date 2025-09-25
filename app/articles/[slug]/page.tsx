// app/articles/[slug]/page.tsx
import { getSubstackRSS } from "../../lib/get-substack-RSS";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiUser, HiClock, HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import { notFound } from "next/navigation";

const createSlug = (title: string, index: number) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + `-${index}`;

export async function generateStaticParams() {
  const posts = await getSubstackRSS();
  return posts.map((post, index) => ({ slug: createSlug(post.title, index) }));
}

const calculateReadingTime = (content: string) => {
  if (!content) return "5 min read";
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, "");
  return `${Math.ceil(textContent.split(/\s+/).length / wordsPerMinute)} min read`;
};

export default async function Page(props: { params: { slug: string } }) {
  const { slug } = await props.params;
  const posts = await getSubstackRSS();
  const postIndex = posts.findIndex((p, i) => createSlug(p.title, i) === slug);

  if (postIndex === -1) notFound();

  const post = posts[postIndex];
  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="min-h-screen py-20 mt-5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
            <HiArrowLeft size={16} /> Back to Articles
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl lg:text-5xl font-light text-gray-100 mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2"><HiUser size={16} /> {post.author || "Unknown Author"}</div>
            <div className="flex items-center gap-2"><HiCalendar size={16} /> {new Date(post.date).toLocaleDateString()}</div>
            <div className="flex items-center gap-2"><HiClock size={16} /> {readingTime}</div>
          </div>

          <div className="mb-8">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-purple-400 hover:text-purple-300 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 text-sm font-medium">
              <HiExternalLink size={16} /> View Original
            </a>
          </div>

          {post.image && (
            <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8">
              <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-64 lg:h-80 object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          )}
        </header>

        {/* Content */}
        {post.description && (
          <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-3">Summary</h2>
            <p className="text-gray-300 leading-relaxed italic">{post.description}</p>
          </div>
        )}
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-semibold" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                Originally published on{" "}
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  {new URL(post.link).hostname}
                </a>
              </p>
            </div>
            <Link href="/articles" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
              More Articles <HiArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
