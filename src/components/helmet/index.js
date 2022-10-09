import React from 'react'

const HelmetComponent = ({
  title,
  description,
  keywords,
}) => {
  if (typeof document !== 'undefined') {
    const descriptionDefault = document.querySelector('meta[name="description"]')
    if (descriptionDefault) {
      descriptionDefault.remove()
    }
  }

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} data-react-helmet="true"/>
      <meta name="keywords" content={keywords} data-react-helmet="true" />
    </>
  )
}

export default HelmetComponent
