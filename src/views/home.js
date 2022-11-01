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
      <div className="home-container1"></div>
      <h1>Heading</h1>
      <div className="home-container2 bg-purple-400"></div>
    </div>
  )
}

export default Home
