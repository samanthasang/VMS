import React from 'react'
import { Link } from 'react-router-dom'

const MainMenuPage = () => {
  return (
    <>
    <div>MainMenuPage</div>
    <Link to={'/liveViewpage'} >Live - View</Link>

    </>
  )
}

export default MainMenuPage;