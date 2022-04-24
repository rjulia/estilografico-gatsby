import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ServiceTemplate from '../screens/service'

const ServicioPage = (props) => {
console.log("🚀 ~ file: servicio.js ~ line 7 ~ EventPage ~ props", props)
  
  const path = '/servicio/'
  return (
    <Router>
      <ServiceTemplate {...props} path={`${path}:slug`} />
      <ServiceTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ServicioPage