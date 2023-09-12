import Link from 'next/link'
import React from 'react'

const ClientsPage = () => {
  const clients = [
    {id:'max', name: 'Max walter'},
    {id:'kevin', name: 'Kevin walter'},
    {id:'laura', name: 'Laura walter'}
  ]
  return (
    <>
      <h1>ClientPage</h1>
      <ul>
          {
            clients.map((client, index) =>
            <li key={index}>
              <Link href={{
                pathname: "/clients/[id]",
                query: {id: client.name}
              }}>{client.name}</Link>
            </li>)
          }
      </ul>
    </>
  )
}

export default ClientsPage