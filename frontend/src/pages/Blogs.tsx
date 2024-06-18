import { useNavigate } from "react-router-dom";
import BlogCard from "../component/BlogCard";
import { useBlogs } from "../hooks";
import { useEffect } from "react";

const Blogs = () => {
  const navigate = useNavigate()
  const { loading, blogs } = useBlogs();
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/signin");
    }
  }, []);

  if (!localStorage.getItem('token')) {
    return null;
  }

  console.log(blogs, loading);
  return (
    <div className="flex justify-center">
      <div>
        {blogs?.map((item) => (
          <BlogCard
            authorName={item.author.name || "Anonymous"}
            title={item.title}
            content={item.content}
            publishedDate="2nd feb"
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
