import React from "react"
// import { Link } from "gatsby"
import Fountain from "../utils/fountain"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

/* eslint-disable */
var i = 0
setInterval(function () {
  var titles = [
    "hi there, visitor! 🎉",
    "bonjour! 🛸 space cowboy",
    "apko namaste 🙏",
    "yōkoso tomodachi 🎏",
    "Vāruṅkaḷ naṇparē 🎊",
  ]
  if (i === titles.length) {
    i = 0
  }
  document.title = titles[i]
  i++
}, 3000)
/* eslint-enable */

new Fountain()

const IndexPage = () => (
  <Layout>
    <div
      id="content"
      style={{
        overflow: "hidden",
        position: "absolute",
        zIndex: "-1",
        height: "100vh",
        width: "100vw",
        left: "0",
        top: "0",
        userSelect:"none"
      }}
    ></div>
    <SEO title="Welcome to my " />
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
