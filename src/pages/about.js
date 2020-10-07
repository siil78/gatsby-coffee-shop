import React from "react"
import { Link, graphql } from "gatsby"
//components
import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"
import Info from '../components/Home/Info'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    ></BackgroundSection>
    <Info link="/" buttonText="home" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
