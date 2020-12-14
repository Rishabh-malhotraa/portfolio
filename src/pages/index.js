import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{}}>
      <div
        style={{
          fontFamily: "Poppins",
          marginTop: "32vh",
          marginBottom: "32vh",
          position: "relative",
        }}
      >
        <h1>
          Hey I am <font color={"rebeccapurple"}>Vishal Pratap Singh</font>,
        </h1>
        <h2>⚡️ Web Developer</h2>
        <h2>🦾 Problem Solver</h2>
        <h2>👨🏻‍💻 Competitive Coder</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
