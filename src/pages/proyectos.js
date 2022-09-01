import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ProjectsTemplate from '../screens/projects'

const ProyectosPage = (props) => {
  const path = '/projectos/'
  return (
    <Router>
      <ProjectsTemplate {...props} path={`${path}:slug`} />

    </Router>
  )
}

export default ProyectosPage
