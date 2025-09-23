// components/Newsletter.tsx
import React from 'react';
import NewsletterCard from '../news-letter-card/news-letter-card';
import { NewsletterItem } from '../../dto/new-letter-item';
import './news-letter.css';
export interface NewsletterProps {
  items: NewsletterItem[];
}

const Newsletter: React.FC<NewsletterProps> = ({ items }) => {
  const ideas = items.filter(item => item.type === 'idea');
  const quotes = items.filter(item => item.type === 'quote');
  const questions = items.filter(item => item.type === 'question');

  return (
    <div className="newsletter">
      <div className="container">
        <header className="header">
          <h1>3-2-1 Newsletter</h1>
          <p>3 ideas, 2 quotes, 1 question</p>
        </header>

        <section className="section">
          <h2>Ideas from me</h2>
          {ideas.map((item, index) => (
            <NewsletterCard key={item.id} item={item} index={index + 1} />
          ))}
        </section>

        <section className="section">
          <h2>Quotes from others</h2>
          {quotes.map((item, index) => (
            <NewsletterCard key={item.id} item={item} index={index + 1} />
          ))}
        </section>

        <section className="section">
          <h2>Question to ponder</h2>
          {questions.map((item, index) => (
            <NewsletterCard key={item.id} item={item} index={index + 1} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
