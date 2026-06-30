import Link from "next/link";

const BlogsPages = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      author: "John Smith",
      category: "Technology",
      date: "2026-08-10",
      image: "https://example.com/images/web-development.jpg",
      description:
        "Explore the latest trends and technologies shaping the future of web development."
    },
    {
      id: 2,
      title: "Healthy Lifestyle Tips",
      author: "Sarah Johnson",
      category: "Health",
      date: "2026-08-12",
      image: "https://example.com/images/healthy-lifestyle.jpg",
      description:
        "Learn simple habits and practical tips to maintain a healthy and balanced lifestyle."
    },
    {
      id: 3,
      title: "Travel Guide to Bangladesh",
      author: "Ahmed Rahman",
      category: "Travel",
      date: "2026-08-15",
      image: "https://example.com/images/bangladesh-travel.jpg",
      description:
        "Discover beautiful places, local culture, and must-visit destinations in Bangladesh."
    },
    {
      id: 4,
      title: "Getting Started with React",
      author: "Emily Davis",
      category: "Programming",
      date: "2026-08-18",
      image: "https://example.com/images/react.jpg",
      description:
        "A beginner-friendly guide to building modern user interfaces using React."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3 className="text-4xl font-bold mb-2">
            {blog.title}
          </h3>
          <Link href={`/blogs/${blog.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPages;