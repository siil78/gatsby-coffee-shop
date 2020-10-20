import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import {StaticQuery, graphql} from 'gatsby'

//graphql dotaz
const getProductsQuery = graphql`{
  products: allContentfulCoffeeProduct {
    edges {
      node {
        id
        title
        price
        image {
          fluid(maxHeight: 180, maxWidth: 320) {
            ...GatsbyContentfulFluid            
          }
        }
      }
    }
  }
}` 

const Products = () => {
  return (
    // StaticQuery je komponenta
    //atribut query je graphql dotaz
    //render je funkce, která definuje jak data vykreslit pomocí JSX  
    <StaticQuery query={getProductsQuery} render={(data) => {            
      return(
        <section className="py-5">
          <div className="container">
            <Title title="our products"></Title>
            <div className="row">
              {
                data.products.edges.map(({node:product}) => {
                  return(
                    <Product key={product.id} product={product} />
                  )
                })
              }
            </div>
          </div>
        </section>
      )
    }} />
  )
}

export default Products
