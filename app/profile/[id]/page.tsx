"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const UserProfile = ( {params} ) => {
    const {id} = params;
    const [prompt, setPrompt] = useState({
      prompt: '',
      tag: '',
    })
    const [submitting, setSubmitting] = useState(false)
   
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
  
        setUser(data);
        // createPrompt(data.id)
      };
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };
    fetchUser();
    if (user && id) fetchPosts();
  }, [id]);

 if (!user)  return <div>User not found</div>

  return (
    // <Profile
    //   name={user.username}
    //   desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
    //   data={userPosts}
    
    // />
    <div>Profile</div>
  );
};

export default UserProfile;
