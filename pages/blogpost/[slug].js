import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

//Find the file corresponding to the slug step 1
//populate them inside the page
const Slug = () => {
  const router = useRouter();
  const [blog,setBlog] = useState([]);
  useEffect(() =>{
    if (!router.isReady) return;
    const {slug} = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();
    }).then((data)=>{
      setBlog(data);
    })
  },[router.isReady])
    
    // console.log(router.query);
    
  return (
    <div>
      <h1>
        {blog && blog.slug}
      </h1>
      <div>
      {blog && blog.content}
      </div>
    </div>
  )
}

export default Slug