import { useRouter } from 'next/router'
import React from 'react'

const SelectedClientProjectPage = () => {
  const router = useRouter()
  return (
    <>
    <h1>{router.query.id}'s {router.query.clientprojectid}</h1>
    </>
  )
}

export default SelectedClientProjectPage