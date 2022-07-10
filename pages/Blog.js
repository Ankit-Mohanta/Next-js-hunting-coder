import React, { useEffect, useState } from 'react'
import styles from  '../styles/Blog.module.css'
import Link from 'next/link'

//Collect all the files from blogdata directory step 1
//Itrate through them and display them step 2
const Blog = () => {
  const [blogs,setBlogs] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/api/blogs").then((a)=>{
      return a.json();
    }).then((data)=>{
      setBlogs(data);
    })
  },[])
  return (
    <div>
      <main className={styles.main}>
        <div className="blogs">
            {
              blogs.map((blogItem)=>{
                return(
                  <div className="blogItem" key={blogItem.title}>
                    <Link href={`/blogpost/${blogItem.slug}`}>
                  <h1>{blogItem.title}</h1></Link>
                  <p>{blogItem.content.substr(0,400)}</p>
                  </div>
                )
              })
            }          
        </div>
        </main>
    </div>
  )
}

export default Blog