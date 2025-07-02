import { Helmet } from "react-helmet";

const title = "Why I'm Doing This Now";
const date = "2025-07-01";
const category = "Reflection";
const readTime = "4 min";
const excerpt = "Sometimes it's not about just being good — it's about showing up, speaking up, and letting people know what you're building.";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const PostWhyImDoingThisNow = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <Helmet>
        <title>{title} | Blog | Ans Joju</title>
        <meta name="description" content={excerpt} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Published {formatDate(date)} • {readTime} • {category}
      </p>

      <p className="mb-6">
        I've spent the last few years doing the work. Learning, building, refining my skills in web development, front-end architecture, and recently — automation and AI interfaces. But all that time, one thing kept bothering me:
      </p>

      <blockquote className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-400 mb-6">
        Most people around me don't actually know what I do — or how good I've become at it.
      </blockquote>

      <p className="mb-6">
        And that's not on them. It's on me. I've been treating personal growth like a silent climb — as if skill alone will speak loudly enough. It won't.
      </p>

      <p className="mb-6">
        I realized that building in isolation isn't enough anymore. It's not just about knowing something. It's about:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Communicating what you do</li>
        <li>Showing your work, your process, your perspective</li>
        <li>Letting people discover you through what you share</li>
      </ul>

      <p className="mb-6">
        So this blog isn't about being an expert. It's about being visible. It's about documenting what I'm working on, what I'm learning, and how I approach building things — not just for me, but for the people I want to work with or inspire someday.
      </p>

      <p className="mb-6">
        This is the beginning of that journey. One post at a time. One signal at a time.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
        — Ans Joju
      </p>
    </div>
  );
};

export default PostWhyImDoingThisNow; 