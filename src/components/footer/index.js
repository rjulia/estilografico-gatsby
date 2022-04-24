import _ from 'lodash'
import React, { useMemo, useState, useEffect } from 'react'
import { Link } from "gatsby"
import Logo from '../../assets/icons/logoClean.svg';
import './footer.scss'
import { getPages } from '../../connect/pages/request'

const Footer = ({ location }) => {
  
  const [pages, setPages] = useState([])

  const getAllPages = useMemo(() => function () {

    getPages().then((response) => {
      setPages(_.get(response, 'data.pageCollection.items'))
    })
  }, [])

  useEffect(() => {
    getAllPages()
  }, [getAllPages])

  return (
    <div className="container-fluid-home">
      <div className="container-footer">
        {
         !_.includes(location.pathname, 'contacto') && (
            <div className="container-contact-footer">
              <div className="message-contact-footer">
                <p>¿Tienes un proyecto en mente?</p>
              </div>
              <Link to="/contacto" className="button-contanct-footer">
                <div><p>CONTACTA CON NOSOTROS</p></div>
              </Link>
            </div>
         )
        }

        <div className="box-footer">
          <div className="box-logo-footer">
            <div>
              <Link
                to={`/`}>
                <Logo />
              </Link>
            </div>
            <p className="box-logo-footer-copyright">Copyright<span>©</span>ESTILOGRÁFICO</p>
          </div>
          <div className="box-info-footer">
            <div>
              <h3>CONTACTO:</h3>
              <p>Bidebarrieta, 27 B</p>
              <p>20600 Eibar. Gipuzkoa.</p>
              <span>Tel. 943 82 13 00</span>
            </div>
            <div>
              <h3>SÍGUENOS:</h3>
              <a href="https://www.linkedin.com/company/estilografico/">Linkedin</a>
            </div>
            <div>
              <h3>INFORMACION:</h3>
              {
                pages && _.map(pages, (page) => (
                  <Link
                    key={_.get(page, 'slug')}
                    to={`/pagina/${page.slug}/`}>
                    <p>{_.get(page, 'titulo')}</p>
                  </Link>

                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
