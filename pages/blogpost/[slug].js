import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

//Find the file corresponding to the slug step 1
//populate them inside the page
const Slug = (props) => {
  // const router = useRouter();
  // const {slug} = router.query;
  const [blog,setBlog] = useState(props.myblog);
  // useEffect(() =>{
  //   if (!router.isReady) return;
    
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   }).then((data)=>{
  //     setBlog(data);
  //   })
  // },[router.isReady])
    
    // console.log(router.query);
    
  return (
    <div>
      <h1>
        {blog.slug}
      </h1>
      <div>
      {blog.content}
      </div>
    </div>
  )
}
export const getServerSideProps = async (context) =>{
  
  const {slug}=context.query;
  // console.log(slug);
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`);
  let myblog = await data.json();
  return {
    props:{myblog},//will be passed to the page component as props
  }
}

export default Slug