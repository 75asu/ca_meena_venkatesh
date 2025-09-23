// components/NewsletterCard.tsx
'use client';
import React, { useState } from 'react';
import '../news-letter/news-letter.css'

interface NewsletterItem {
  id: string;
  type: 'idea' | 'quote' | 'question';
  title: string;
  preview: string;
  content: string;
  author?: string;
}
interface NewsletterCardProps {
  item: NewsletterItem;
  index: number;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="card-header">
        <span className="badge">{item.type} {index}</span>
        {item.author && <span className="author">by {item.author}</span>}
      </div>
      <h3 className="card-title">{item.title}</h3>
      <p className="card-content">
        {isExpanded ? item.content : item.preview}
      </p>
      <button className="read-more">
        {isExpanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
};

export default NewsletterCard;