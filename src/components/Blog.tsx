"use client";

import { useState } from "react";
import Link from "next/link";
import blog from "../data/blog.json";

export const Blog = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="blog" className="py-5">
      <h3 className="text-xl font-bold">My Blog 📚</h3>
      <p className="font-thin text-sm">
        I talk about topics related to programming (in spanish).
      </p>
      <div className="py-5">
        {blog.map((blog, index) => (
          <div key={blog.title} className="mb-3">
            <Link
              href={blog.link}
              target="_blank"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex justify-between items-center duration-300 ease-in-out transition ${hoveredIndex === index ? "text-white" : hoveredIndex !== null ? "text-white/50" : "text-white"}`}
              >
                <p className="font-semibold">{blog.title}</p>
                <p className="font-light text-sm">{blog.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
