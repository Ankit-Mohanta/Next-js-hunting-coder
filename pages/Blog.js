import React from 'react'
import styles from  '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div>
      <main className={styles.main}>
        
        <div className="blogs">
          <div className="blogItem">
          <Link href={'/blogpost/How to learn javascript in 2022'}><h1>How to learn javascript in 2022</h1></Link>
            <p>Javascript is the language used to implement logic in website</p>
          </div>
          <div className="blogItem">
            <h1>How to learn javascript in 2022</h1>
            <p>Javascript is the language used to implement logic in website</p>
          </div>
          <div className="blogItem">
            <h1>How to learn javascript in 2022</h1>
            <p>Javascript is the language used to implement logic in website</p>
          </div>
        </div>
        </main>
    </div>
  )
}

export default Blog