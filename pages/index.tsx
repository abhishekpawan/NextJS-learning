import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <>
    <h1>Homepage</h1>
    <ul>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/clients">Clients</Link>
      </li>
    </ul>
    </>
  )
}

export default HomePage;