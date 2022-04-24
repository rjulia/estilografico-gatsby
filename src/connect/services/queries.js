
export const queryServicies = `
  {
    servicioCollection (
      order:orden_ASC,
      limit:10 ) {
      total
      items {
        orden
        slug
        nombre
        subtituloEnlaces
        descripcionEs
        highlightsColors
        sys{
          id
        }
      }
    }
  }
`

export const serviceBySlug = (slug) => `{
  servicioCollection(
    where:{slug:${slug}},
    order:orden_ASC,
    limit:1
    ){
    items {
      orden
      slug
      nombre
      descripcionEs
      palabrasClave
      highlightsEs {
        json
      }
      fraseProjectos {
        json
      }
      highlightsColors
      sys{
        id
      }
      perfilesCollection(limit: 6){
        items{
          nombre
          titulo
          urlLinkedin
          posicion
          slug
          fotoPerfil{
            url
            title
          }
          fotoFerfilHover {
            url
            title
            description
          }
        }
      }
      proyectosRelacionadoCollection(limit: 5){
        limit
        items {
          sys {
            id
          }
          orden
          titulo
          slug
          portada {
            url
            title
            }
          }
        }
      seccionesServicosCollection (limit: 5){
        limit
        items{
          posicion
          titulo
          conSimbolo
          contenido {
            json
            links {
              assets {
                block {
                  fileName
                    title
                    description
                    url
                    sys {
                        id
                    }
                }
              }
            }
          }
          bgc
          destacadosCollection (limit: 2) {
            items {
              frase {
                json
              }
            }
          }
        }
      }
    }
  }
}
`

export const queryService = (id) => {
  return `
  {
    servicio(id: ${id}) {
        orden
        slug
        nombre
        descripcionEs
        highlightsEs {
          json
        }
        highlightsColors
        sys{
          id
        }
        proyectosRelacionadoCollection(limit: 5){
          limit
          items {
            sys {
              id
            }
            orden
            titulo
            slug
            portada {
              url
              title
              }
            }
          }
        seccionesServicosCollection (limit: 5){
          limit
          items{
            posicion
            titulo
            contenido {
              json
              links {
                assets {
                  block {
                    fileName
                      title
                      description
                      url
                      sys {
                          id
                      }
                  }
                }
              }
            }
            bgc
            destacadosCollection (limit: 2) {
              items {
                frase {
                  json
                }
              }
            }
          }
        }
      }
    }
  `
}