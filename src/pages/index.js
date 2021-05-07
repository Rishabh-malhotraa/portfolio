import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{}}>
      <div
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            marginTop: "34%",
            fontSize: "2.2em",
            fontWeight: "600",
            lineHeight: "1.35em",
          }}
        >
          Hey, I am <font color={"rebeccapurple"}>Vishal Pratap Singh </font>{" "}
          <span className={"wave"}>👋</span>
          <br />I build things for the web !
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "2.2em",
            fontWeight: "600",
            lineHeight: "1.35em",
          }}
        >
          I have added to:
          <ul>
            <li>Ethereum</li>
            <li>Deno</li>
            <li>CGAL</li>
            <li>Gatsby</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
