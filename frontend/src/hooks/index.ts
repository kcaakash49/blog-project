import axios from "axios";
import { useEffect, useState } from "react";


export interface Blog {
    title: string;
    content: string;
    id: string;
    author: {
        name: string
    }
    
}
export function useBlogs(){

    const [loading,setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])
    
    useEffect(()=>{
        axios.get("http://localhost:8787/api/v1/blog",{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => setBlogs(response.data))
        setLoading(false)
    },[])

    return {
        loading,
        blogs
    }
}

export function useBlogDetail({id}: {id:string}){
    const [loading, setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>()
    console.log("id:",id)
    

    useEffect(()=>{
        axios.get(`http://localhost:8787/api/v1/blog/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => setBlog(response.data))
        setLoading(false)
    },[id])

    return {
        loading,
        blog
    }
    
}