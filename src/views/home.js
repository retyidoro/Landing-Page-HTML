import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div className="home-container1 bg-purple-400"></div>
      <h1 className="bg-teal-400">Heading</h1>
    </div>
  )
}

export default Home
