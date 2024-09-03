"use client"

import React, { useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, notFound } from "next/navigation";
import PromptView from '@components/Prompt';

const ViewPrompt = ({ params }) => {
  const {id} = params;
    const [prompt, setPrompt] = useState()
    const router = useRouter();
    const { data:session} = useSession();
  
    
    useEffect(()=>{
        const  fetchPost = async () => {
            const resp = await fetch(`/api/prompt/${id}/post`)
            const data = await resp.json()
            console.log(data)
            setPrompt(data)
        }
        if (id) fetchPost()
        
    },[id])
  if (!prompt) return <div>Prompt not found</div>

  return (
    <div>
     
   <PromptView
          post={prompt}
          // handleTagClick={handleTagClick}
        />
 </div>
  )
}

export default ViewPrompt

