// import React from 'react'

// const Posts = ({ posts }) => {
//   return (
//     <div>
//       <h1>All Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
           
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export  async function PostsPage() {
  
//     const res = await fetch('http://localhost:3000/api/posts')
//     const posts = await res.json();
  
   
 
//     return {
//       props: {
//         posts,
//       }
//     };
  
// }

// export default Posts;
import React from 'react'

export default function PostsPage() {
  return (
    <div>
      <div>Posts</div>
    </div>
  )
}
