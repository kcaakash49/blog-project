import { useParams } from "react-router-dom"
import { useBlogDetail } from "../hooks"
import BlogdetailComponent from "../component/BlogdetailComponent"
import PageNotFound from "./PageNotFound"




const BlogDetail = () => {
  const { id } = useParams()


  const { loading, blog } = useBlogDetail({
    id: id || ""
  })
  if(loading){
    return <div>
      Loading.........
    </div>
  }
  if(!blog){
    return<div>
      <PageNotFound/>
    </div>
  }
  
  return (
    <div>
      <BlogdetailComponent blog = {blog}/>
    </div>
  )
}

export default BlogDetail