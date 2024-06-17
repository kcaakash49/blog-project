import BlogCard from "../component/BlogCard"
import useBlogs from "../hooks"


const Blogs = () => {
  const {loading, blogs} = useBlogs();
  console.log(blogs,loading)
  return (
    <div className="flex justify-center">
      <div>
        {
          blogs?.map(item => <BlogCard authorName={item.author.name || "Anonymous"} title = {item.title} content={item.content} publishedDate="2nd feb" key = {item.id} />)
        }
      </div>

    </div>
  )
}

export default Blogs
