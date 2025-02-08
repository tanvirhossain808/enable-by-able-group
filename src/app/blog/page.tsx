import React from "react";
import SectionHead from "@/components/ui/SectionHead";
import Image from "next/image";

// Define the interface for a blog post entry
interface BlogPost {
  title: string;
  category: string;
  author: string;
  publishDate: Date;
  image: {
    src: string;
    alt: string;
  };
  slug: string;
}

// Mock data for the blog posts
const publishedBlogEntries: BlogPost[] = [
  {
    title: "Blog Post 1",
    category: "Startup",
    author: "Author 1",
    publishDate: new Date("2025-02-08"),
    image: {
      src: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240",
      alt: "Image 1",
    },
    slug: "blog-post-1",
  },
  {
    title: "Blog Post 2",
    category: "Business",
    author: "Author 2",
    publishDate: new Date("2025-01-25"),
    image: {
      src: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240",
      alt: "Image 2",
    },
    slug: "blog-post-2",
  },
  {
    title: "Blog Post 3",
    category: "Technology",
    author: "Author 3",
    publishDate: new Date("2025-01-15"),
    image: {
      src: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240",
      alt: "Image 3",
    },
    slug: "blog-post-3",
  },
];

// Sort blog posts by publishDate (latest first)
publishedBlogEntries.sort(
  (a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()
);

const Blog: React.FC = () => {
  return (
    <>
      <SectionHead
        title="Our Blog"
        desc="We write about building startups and thoughts going on our mind."
      />

      <main className="mt-16">
        <ul className="grid gap-16 max-w-4xl mx-auto">
          {publishedBlogEntries.map((blogPost, index) => (
            <li key={blogPost.slug}>
              <a href={`/blog/${blogPost.slug}`}>
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <Image
                    src={blogPost.image.src}
                    alt={blogPost.image.alt}
                    width={800}
                    height={600}
                    className="w-full rounded-md object-cover object-center bg-white"
                    loading={index <= 2 ? "eager" : "lazy"}
                    decoding={index <= 2 ? "sync" : "async"}
                  />
                  <div>
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      {blogPost.category}
                    </span>

                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                      {blogPost.title}
                    </h2>

                    <div className="flex gap-2 mt-3">
                      <span className="text-gray-400">{blogPost.author}</span>
                      <span className="text-gray-400">•</span>
                      <time
                        className="text-gray-400"
                        dateTime={blogPost.publishDate.toISOString()}
                      >
                        {blogPost.publishDate.toDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Blog;
