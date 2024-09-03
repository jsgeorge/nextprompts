"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const UserProfile = ({ params} ) => {
    const {id} = params;
   
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();
  const [submitting, setSubmitting] = useState(false)
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {

    const fetchUser = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        console.log(data)
        setUser(data);
      };
      const createPrompt = async (id) =>{
        setSubmitting(true)
        try{
          const resp = await fetch('/api/prompt/new',{
            method: 'POST',
            body: JSON.stringify({
              userId: id,
              prompt: "Testing another prompt space",
              tag: "#pyton"
            })
          })
          if(resp.ok){
            router.push('/')
          }
        } catch (error){ 
            console.log(error)
        } finally{
          setSubmitting(false)
        }
    }
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      console.log(data)
      setUserPosts(data);
    };
    fetchUser();
    if ( id) {
      // createPrompt(id);
      fetchPosts();
    }
  }, [id]);

 if (!user)  return <div>User not found</div>

  return (
    <Profile
      name={user.username} 
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={userPosts}
    
    />
  );
};

export default UserProfile;
