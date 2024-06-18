import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardtype {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardtype) {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="border-b p-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex gap-1 items-center">
          <div>
            <Avatar name={authorName} />
          </div>
          <div className=" text-sm">{authorName}</div>
          <div className="h-1 w-1 rounded-full bg-slate-200"></div>
          <div className=" text-xs ">{publishedDate}</div>
        </div>
        <div className=" text-2xl font-extrabold">{title}</div>
        {
          content.length > 200 ? <div className=" font-light text-sm">{content.slice(0, 200) + "......."}</div> : <div className=" font-light text-sm">{content}</div>
        }
        <div className="text-xs font-extralight text-slate-500">
          {
            `${Math.ceil(content.length / 100)} min read`
          }
        </div>

      </div>
    </Link>
  );
}
