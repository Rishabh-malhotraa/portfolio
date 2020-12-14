import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const ProjectGifft = () => (
  <Layout>
    <SEO title="gifft" />
    <h1>Gifft is my project to help patients in covid situation</h1>
    <h1>hope you find it helpful</h1>
    <p>Here you can find everything about me</p>
    <p>Now let's get started!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default ProjectGifft
