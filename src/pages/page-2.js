import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Sobre</h1>
    <p>O prototipo esta ficando top</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
