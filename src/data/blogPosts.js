import PostWhyImDoingThisNow from '../pages/blog/PostWhyImDoingThisNow';

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const blogPosts = [
  {
    title: "Why I'm Doing This Now",
    slug: "why-im-doing-this-now",
    excerpt: "Sometimes it's not about just being good — it's about showing up, speaking up, and letting people know what you're building.",
    category: "Reflection",
    readTime: "4 min",
    date: "2025-07-01",
    component: PostWhyImDoingThisNow,
    featured: true
  }
]; 