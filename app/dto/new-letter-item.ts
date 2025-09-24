export interface NewsletterItem {
  id: string;
  type: 'idea' | 'quote' | 'question';
  title: string;
  preview: string;
  content: string;
  author?: string;
}