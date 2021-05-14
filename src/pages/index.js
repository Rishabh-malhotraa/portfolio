import React, { useEffect } from "react"
// import { Link } from "gatsby"
import Fountain from "../utils/fountain"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import Terminal from "./../components/Terminal/Terminal.jsx"
import Projects from "./../components/Projects/Projects.jsx"
import OpenSource from "./../components/OpenSource/OpenSource.jsx"
import Achievements from "./../components/Achievements/Achievements.jsx"
import MoreAbout from "./../components/MoreAbout/MoreAbout.jsx"

const IndexPage = () => {
  useEffect(() => {
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
  })

  return (
    <div className={"custom-cursor"}>
      <div
        id="content"
        style={{
          overflow: "hidden",
          position: "fixed",
          zIndex: "-1",
          height: "100vh",
          width: "100vw",
          left: "0",
          top: "0",
          userSelect: "none",
        }}
      ></div>
      <Layout>
        <SEO title="Welcome to my " />
        <div style={{}}>
          <div
            style={{
              height: "60vh",
              position: "relative",
              zIndex: "1",
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
              Hey, I am{" "}
              <font color={"rebeccapurple"} className={"myname"}>
                Vishal Pratap Singh{" "}
              </font>{" "}
              <span className={"wave"}>👋</span>
              <br />I build things for the web !
            </div>
          </div>
          <div
            style={{
              // height: "100vh",
              marginBottom: "30vh",
              position: "relative",
            }}
          >
            {/* add things here */}
            <Terminal style={{ scrollSnapStop: "always" }} />
            <Projects />
            <OpenSource />
            <Achievements />
            <MoreAbout />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
