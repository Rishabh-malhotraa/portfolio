import React from "react"
import "./Projects.css"

import dankdevs from "../../images/dankdevs.jpeg"
import doto from "../../images/doto.jpeg"
import iiitr from "../../images/iiitr.jpeg"
import chef from "../../images/chef.jpeg"
import cap from "../../images/cap.jpeg"

// import { StaticImage } from "gatsby-plugin-image"

export default function Projects() {
  return (
    <div className={"projects"}>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>
          Projects <span alt={"celebration emoji"}>🎊</span>
        </b>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "18vh",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
        className={"neu"}
      >
        <img
          src={dankdevs}
          alt="dank devs screenshot"
          placeholder="blurred"
          style={{ borderRadius: "1.5em" }}
          width={350}
          className={"project-image"}
        />

        <div className={"project-details"}>
          <h2>Dank Devs</h2>
          <p className={"project-description"}>
            Dank devs is a guidance app that connects open source developers and
            helps them collaborate in a spam free way.
          </p>
          <a
            href="https://github.com/Dank-Devs/Dank-Devs"
            style={{ textDecoration: "none", color:"purple" }}
            target={"_blank"}
          >
            <b>github</b>
          </a>

          <a
            href="https://dank-devs.netlify.app/"
            style={{ textDecoration: "none", color:"red", marginLeft:"3em" }}
            target={"_blank"}
          >
            <b> in-progress</b>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "10vh",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
        className={"neu"}
      >
        <img
          src={doto}
          alt="iiitr screenshot"
          placeholder="blurred"
          style={{ borderRadius: "1.5em" }}
          width={350}
          className={"project-image"}
        />
        <div className={"project-details"}>
          <h2>doto.codes</h2>
          <p className={"project-description"}>
            Hand picked problem lists for complete interview preparation.  Helping over <b>1500 students</b> in prep.
          </p>
          <a
            href="https://github.com/ankiiitraj/doto-client"
            style={{ textDecoration: "none", color:"purple" }}
            target={"_blank"}
          >
            <b>github</b>
          </a>

          <a
            href="https://www.doto.codes"
            style={{ textDecoration: "none", color:"red", marginLeft:"3em" }}
            target={"_blank"}
          >
            <b> live</b>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "10vh",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
        className={"neu"}
      >
        <img
          src={iiitr}
          alt="doto screenshot"
          placeholder="blurred"
          style={{ borderRadius: "1.5em" }}
          width={350}
          className={"project-image"}
        />
        <div className={"project-details"}>
          <h2>Official IIITR website</h2>
          <p className={"project-description"}>
            The official website of IIIT Ranchi. A portal for all the notices,
            results and information regarding the institute.
          </p>
          <a
            href="https://github.com/iiitranchi"
            style={{ textDecoration: "none", color:"purple" }}
            target={"_blank"}
          >
            <b>github</b>
          </a>

          <a
            href="https://iiitranchi.ac.in/"
            style={{ textDecoration: "none", color:"red", marginLeft:"3em" }}
            target={"_blank"}
          >
            <b> live</b>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "10vh",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
        className={"neu"}
      >
        <img
          src={chef}
          alt="Chef's Arena screenshot"
          placeholder="blurred"
          style={{ borderRadius: "1.5em" }}
          width={350}
          className={"project-image"}
        />
        <div className={"project-details"}>
          <h2>Chef's Arena</h2>
          <p className={"project-description"}>
              A search engine for contests at CodeChef. It also provides contestants with code editor and tags feature.
          </p>
          <a
            href="https://github.com/Vishal19111999/Chef-s-Arena"
            style={{ textDecoration: "none", color:"purple" }}
            target={"_blank"}
          >
            <b>github</b>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "10vh",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
        className={"neu"}
      >
        <img
          src={cap}
          alt="captcha alternative screenshot"
          placeholder="blurred"
          style={{ borderRadius: "1.5em" }}
          width={350}
          className={"project-image"}
        />
        <div className={"project-details"}>
          <h2>captchAlternative </h2>
          <p className={"project-description"}>
            Captcha substitute for visually impaired. Just speak what you hear insted of clicking what you see.
          </p>
          <a
            href="https://github.com/Vishal19111999/captchaAlternative"
            style={{ textDecoration: "none", color:"purple" }}
            target={"_blank"}
          >
            <b>github</b>
          </a>  
        </div>
      </div>
    </div>
  )
}
