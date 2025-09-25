// app/articles/page.tsx
import { getSubstackRSS } from "../lib/get-substack-RSS";
import Link from "next/link";
import {  HiUser, HiClock } from "react-icons/hi";

// Revalidate every 1 hour (ISR)
export const revalidate = 60;

export default async function Page() {
  const posts = await getSubstackRSS();

  // Function to create URL-friendly slug from title
  const createSlug = (title: string, index: number) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") + `-${index}`;
  };

  // Function to calculate reading time
  const calculateReadingTime = (content: string) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  return (
    <section className="min-h-screen py-20 mt-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
              Blog
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-light text-gray-100 mb-6">
            Latest{" "}
            <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
              Articles
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Insights, tutorials, and thoughts on{" "}
            <span className="text-white font-medium">technology, business,</span>
            and <span className="text-white font-medium">innovation</span>.
          </p>
        </div>

        {/* Articles */}
        <div className="max-w-4xl mx-auto space-y-12">
          {(() => {
            const postsByYear = posts.reduce((acc, post, index) => {
              const year = new Date(post.date).getFullYear();
              if (!acc[year]) acc[year] = [];
              acc[year].push({ ...post, index });
              return acc;
            }, {} as Record<number, any[]>);

            return Object.keys(postsByYear)
              .sort((a, b) => Number(b) - Number(a))
              .map((year) => (
                <div key={year} className="flex gap-8">
                  <div className="w-20 shrink-0 text-right">
                    <h2 className="text-2xl font-bold text-gray-300">{year}</h2>
                  </div>

                  <div className="flex-1 space-y-6">
                    {postsByYear[Number(year)].map((postObj) => (
                      <div
                        key={postObj.index}
                        className="flex items-start gap-6 animate-fade-in"
                        style={{ animationDelay: `${postObj.index * 100}ms` }}
                      >
                        {/* Date */}
                        <div className="w-24 text-sm text-gray-400 shrink-0 text-right">
                          {new Date(postObj.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>

                        {/* Title + Meta */}
                        <div className="flex-1">
                          <Link
                            href={`/articles/${createSlug(
                              postObj.title,
                              postObj.index
                            )}`}
                            className="text-lg font-medium text-gray-100 hover:text-purple-400 transition-colors"
                          >
                            {postObj.title}
                          </Link>
                          <div className="mt-1 text-xs text-gray-500 flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <HiUser size={12} /> {postObj.author || "Unknown"}
                            </span>
                            <span className="flex items-center gap-1">
                              <HiClock size={12} />{" "}
                              {calculateReadingTime(postObj.content)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ));
          })()}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No articles yet
              </h3>
              <p className="text-gray-400">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
