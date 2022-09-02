import Helmet from 'react-helmet'
import React, { useState } from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({
  children,
  location,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="global-wrapper">
      <Header onOpenMenu={onOpenMenu}/>
      <Helmet
        bodyAttributes={{
          class: isMenuOpen ? 'is-open-menu' : '',
        }}
      />
      <Helmet>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"></link>
      </Helmet>

      {children}
      <Footer location={location} />
    </div>
  )
}

export default Layout
