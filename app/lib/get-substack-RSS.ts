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
        ["author", "authorAlt"], // Alternative author field
      ],
    },
    timeout: 10000, // 10 second timeout
  });

  try {
    
    // Add cache-busting parameter to ensure fresh data
    const rssUrl = `https://sujitgouda.substack.com/feed?t=${Date.now()}`;
    
    const feed = await parser.parseURL(rssUrl);
        
    const processedItems = feed.items.map((item: any, index: number) => {
      // Enhanced content extraction - check multiple possible fields
      let content = item.content || item["content:encoded"] || item.description || "";
      
      // Create a better description from content if the original description is too short
      let description = item.description || "";
      
      // If description is very short (like "Hi!"), extract from content
      if (description && description.length < 50 && content) {
        // Remove HTML tags and get first 200 characters as description
        const plainText = content.replace(/<[^>]*>/g, "").trim();
        description = plainText.length > 200 
          ? plainText.substring(0, 200) + "..." 
          : plainText;
      }
      
      // Enhanced image extraction
      let image = "";
      if (item.enclosure?.url) {
        image = item.enclosure.url;
      } else if (item.image?.url) {
        image = item.image.url;
      } else {
        // Try to extract image from content
        const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
        if (imgMatch) {
          image = imgMatch[1];
        }
      }

      // Enhanced author extraction
      let author = item.author || item.authorAlt || item["dc:creator"] || "Sujit Gouda";

      // Clean and validate date
      let date = item.pubDate || item.isoDate || new Date().toISOString();
      
      // Ensure date is in valid format
      try {
        new Date(date).toISOString();
      } catch {
        date = new Date().toISOString();
      }

      // Debug logging to see what we're getting
      console.log("RSS Item Debug:", {
        title: item.title,
        description: item.description,
        content: content ? content.substring(0, 100) + "..." : "No content",
        contentLength: content.length,
        hasContentEncoded: !!item["content:encoded"]
      });

      return {
        title: item.title?.trim() || `Untitled Article ${index + 1}`,
        link: item.link?.trim() || "",
        date: date,
        description: (description || "").replace(/<[^>]*>/g, "").trim(),
        content: content.trim(),
        image: image.trim(),
        author: author.trim(),
      };
    });

    // Sort by date (newest first)
    const sortedItems = processedItems.sort((a: FeedItem, b: FeedItem) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sortedItems;

  } catch (err: any) {
    console.error("❌ Error fetching or parsing RSS feed:", {
      message: err.message,
      code: err.code,
      status: err.status,
    });

    // Handle specific error types
    if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
      console.error("🌐 Network connection error - check internet connectivity");
    } else if (err.message?.includes('timeout')) {
      console.error("⏰ Request timeout - Substack RSS feed took too long to respond");
    } else if (err.status === 404) {
      console.error("🔍 RSS feed not found - check if the Substack URL is correct");
    } else if (err.status >= 500) {
      console.error("🚨 Substack server error - try again later");
    }

    // Return empty array but with better logging for debugging
    return [];
  }
}

// Optional: Add a function to check RSS feed health
export async function checkRSSFeedHealth(): Promise<{
  isHealthy: boolean;
  itemCount: number;
  lastUpdated: string | null;
  error?: string;
}> {
  try {
    const items = await getSubstackRSS();
    return {
      isHealthy: items.length > 0,
      itemCount: items.length,
      lastUpdated: items[0]?.date || null,
    };
  } catch (err: any) {
    return {
      isHealthy: false,
      itemCount: 0,
      lastUpdated: null,
      error: err.message,
    };
  }
}

// Optional: Add a function to force refresh RSS cache
export async function forceRefreshRSS(): Promise<FeedItem[]> {
  
  // Add multiple cache-busting parameters
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  
  const parser: Parser<any, any> = new Parser({
    customFields: {
      item: [
        ["description", "description"],
        ["content:encoded", "content"],
        ["enclosure", "enclosure"],
        ["dc:creator", "author"],
        ["author", "authorAlt"],
      ],
    },
    timeout: 15000, // Longer timeout for force refresh
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });

  try {
    const rssUrl = `https://sujitgouda.substack.com/feed?refresh=${timestamp}&r=${random}`;
    const feed = await parser.parseURL(rssUrl);
      
    return feed.items.map((item: any, index: number) => {
      // Use the same content extraction logic as the main function
      let content = item.content || item["content:encoded"] || item.description || "";
      
      let description = item.description || "";
      if (description && description.length < 50 && content) {
        const plainText = content.replace(/<[^>]*>/g, "").trim();
        description = plainText.length > 200 
          ? plainText.substring(0, 200) + "..." 
          : plainText;
      }

      return {
        title: item.title?.trim() || `Untitled Article ${index + 1}`,
        link: item.link?.trim() || "",
        date: item.pubDate || item.isoDate || new Date().toISOString(),
        description: (description || "").replace(/<[^>]*>/g, "").trim(),
        content: content.trim(),
        image: item.enclosure?.url?.trim() || "",
        author: (item.author || item["dc:creator"] || "Sujit Gouda").trim(),
      };
    });
    
  } catch (err: any) {
    console.error("❌ Force refresh failed:", err.message);
    return [];
  }
}