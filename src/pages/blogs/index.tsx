import Newsletter from '../../../components/news-letter/news-letter';
import { NewsletterItem } from '../../../dto/new-letter-item';

const sampleData: NewsletterItem[] = [
  {
    id: '1',
    type: 'idea',
    title: 'Start Small',
    preview: 'Big changes come from small beginnings.',
    content: 'Big changes come from small beginnings. Instead of trying to change everything at once, focus on one small habit. Make it so easy you can\'t say no. Want to read more? Start with one page. Want to exercise? Do one pushup. The key is consistency, not intensity.'
  },
  {
    id: '2',
    type: 'idea',
    title: 'Environment Design',
    preview: 'Your environment shapes your behavior.',
    content: 'Your environment shapes your behavior more than you think. If you want to eat healthy, put fruits on the counter and hide junk food. If you want to read more, place books where you can see them. Make good choices easier and bad choices harder.'
  },
  {
    id: '3',
    type: 'idea',
    title: 'Identity Change',
    preview: 'Focus on who you want to become.',
    content: 'Focus on who you want to become, not just what you want to achieve. Instead of saying "I want to lose weight," say "I am someone who takes care of my health." Every action is a vote for the type of person you want to be.'
  },
  {
    id: '4',
    type: 'quote',
    title: 'On Growth',
    preview: 'The only way to make sense out of change is to plunge into it.',
    content: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance. Change is inevitable, but growth is optional. Choose to grow.',
    author: 'Alan Watts'
  },
  {
    id: '5',
    type: 'quote',
    title: 'On Success',
    preview: 'Success is not final, failure is not fatal.',
    content: 'Success is not final, failure is not fatal: it is the courage to continue that counts. What matters most is not avoiding failure, but learning from it and moving forward.',
    author: 'Winston Churchill'
  },
  {
    id: '6',
    type: 'question',
    title: 'Daily Reflection',
    preview: 'What is one thing you learned today?',
    content: 'What is one thing you learned today that you didn\'t know yesterday? Growth happens when we reflect on our experiences and extract lessons from them. Take a moment to think about what today taught you.'
  }
];

export default function Blogs() {
  return <Newsletter items={sampleData} />;
}