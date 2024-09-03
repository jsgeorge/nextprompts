"use client"

import React, { useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from "next/navigation";
import Form from '@/components/Form'


const UpdatePrompt = () => {
//     const searchParams = useSearchParams();
//     const promptId = searchParams.get("id");
  
//     const router = useRouter();
//     const { data:session} = useSession();
  
//     const [prompt, setPrompt] = useState({
//       prompt: '',
//       tag: '',
//     })
//     const [submitting, setSubmitting] = useState(false)
   
//     useEffect(()=>{
//         const  fetchPost = async () => {
//             const resp = await fetch(`/api/prompt/${promptId}/post`)
//             const data = await resp.json()
//             setPrompt({...prompt, prompt: data.prompt , tag: data.tag})
//             console.log(data)
//         }
//         if (promptId) fetchPost()
        
//     },[promptId])
//     const updatePrompt = async (e) =>{
//         e.preventDefault();
//         setSubmitting(true)
//         try{
//           const resp = await fetch(`/api/prompt/${promptId}/update`,{
//             method: 'PATCH',
//             body: JSON.stringify({
//               prompt: prompt.prompt,
//               tag: prompt.tag
//             })
//           })
//           if(resp.ok){
//             router.push('/')
//           }
//         } catch (error){ 
//             console.log(error)
//         } finally{
//           setSubmitting(false)
//         }
//     }
  
//   return (
//     <div>
//     <Form
//        type="Update"
//        prompt={prompt}
//        setPrompt={setPrompt}
//        submitting={submitting}
//        handleSubmit={updatePrompt}
//     />
//  </div>
//   )
  return (
    <div>Update Prompt</div>
  )
}

export default UpdatePrompt

