import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const ClientProjectPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {id: router.query.id, clientprojectid: 'projectA'}
    })
  }
  return (
    <>
    <h1>{router.query.id}'s ProjectPage</h1>
    <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  )
}

export default ClientProjectPage