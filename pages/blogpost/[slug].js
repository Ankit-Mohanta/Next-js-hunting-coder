import React from 'react'
import { useRouter } from 'next/router'

//Find the file corresponding to the slug step 1
//populate them inside the page
const Slug = () => {
    const router = useRouter();
    // console.log(router.query);
    const {slug} = router.query;
  return (
    <div>
      <h1>
        Title of the page {slug}
      </h1>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ea dolorum? Debitis minus ea et nulla quod quidem, molestiae dicta eum, dolorem, modi impedit. Sequi minus laborum aliquid impedit modi.100
      </div>
    </div>
  )
}

export default Slug