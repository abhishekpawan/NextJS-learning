import { useRouter } from 'next/router'
import React from 'react'

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>PortfolioProjectPage
      URL : {router.query.projectid}
    </div>
  )
}

export default PortfolioProjectPage