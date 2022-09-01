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

      {children}
      <Footer location={location} />
    </div>
  )
}

export default Layout
