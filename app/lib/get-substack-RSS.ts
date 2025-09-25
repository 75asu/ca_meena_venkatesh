import Parser from "rss-parser";

type FeedItem = {
  title: string;
  link: string;
  date: string;
  description: string;
  content: string;
  image: string;
  author: string;
};

export async function getSubstackRSS(): Promise<FeedItem[]> {
  const parser: Parser<any, any> = new Parser({
    customFields: {
      item: [
        ["description", "description"],
        ["content:encoded", "content"],
        ["enclosure", "enclosure"],
        ["dc:creator", "author"],
      ],
    },
  });

  try {
    const feed = await parser.parseURL("https://sujitgouda.substack.com/feed");
    return feed.items.map((item: any) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      date: item.pubDate ?? "",
      description: item.description ?? "",
      content: item.content ?? "",
      image: item.enclosure?.url ?? "",
      author: item.author ?? "",
    }));
  }catch (err) {
  console.error("Error fetching or parsing RSS feed:", err);
  return [];
}


}