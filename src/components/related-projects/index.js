import _ from 'lodash'
import React from 'react'
import './related-projects.scss'
import BoxProject from '../box-project'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RelatedProjects = ({projects, phrase}) => {
  return (
    <div className="container-home-projects">
      <div className="box-title-projects">
        {phrase && documentToReactComponents(phrase.json)}
      </div>
      {
        _.map(projects, (project) => (<BoxProject project={project} key={project.sys.id}/>))
      }
    </div>
  )
}

export default RelatedProjects
