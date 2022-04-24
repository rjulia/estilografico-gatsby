import React from 'react'
import './content-highlight.scss'
import Quotes from '../../assets/icons/quotes.svg';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const ContentHighlight = ({textQuotes}) => {
  return (
    <div className="container-content-highlight">
      <div className="top-quotes">
        <Quotes width="50" height="40"/>
      </div>
      <div className="content-quotes">
        {documentToReactComponents(textQuotes)}
      </div>
      <div className="bottom-quotes">
        <Quotes width="50" height="40"/>
      </div>
      
    </div>
  )
}

export default ContentHighlight
