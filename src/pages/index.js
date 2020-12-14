import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
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
        <h2>
          <span role="img" aria-label="thunder">
            ⚡️
          </span>{" "}
          Web Developer
        </h2>
        <h2>
          <span role="img" aria-label="mechanical arm">
            🦾
          </span>{" "}
          Problem Solver
        </h2>
        <h2>
          <span role="img" aria-label="boy on a laptop">
            👨🏻‍💻
          </span>{" "}
          Competitive Coder
        </h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
