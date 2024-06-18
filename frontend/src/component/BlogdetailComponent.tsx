import { Blog } from "../hooks"


const BlogdetailComponent = ({blog}: {blog:Blog}) => {
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 py-2 max-w-screen-2xl">
      <div className=" col-span-8">
        <div className=" text-5xl font-extrabold pb-4">{blog.title}</div>
        <div>{blog.content}</div>

      </div>
      <div>
        <div>Author</div>
        <div className="font-bold text-xl">{blog.author.name}</div>
      </div>
    </div>

    </div>
    
  )
}

export default BlogdetailComponent