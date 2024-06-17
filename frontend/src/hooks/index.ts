import axios from "axios";
import { useEffect, useState } from "react";


export default function useBlogs(){

    interface Blog {
        title: string;
        content: string;
        id: string;
        author: {
            name: string
        }
        
    }
    const [loading,setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])
    const token = localStorage.getItem('token')
    useEffect(()=>{
        axios.get("http://localhost:8787/api/v1/blog",{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => setBlogs(response.data))
        setLoading(false)
    },[token])

    return {
        loading,
        blogs
    }
}