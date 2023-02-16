import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Styles from '../components/styles'

const Home = () => (
    <div>
      <Head title="Home" />
      <Styles />

      <div className="hero">
        <h1 className="title">Welcome to Next!</h1>

        <div className="row">
          <Link href="event">
              <h3>Event &rarr;</h3>
          </Link>
        </div>
      </div>
    </div>
)

export default Home