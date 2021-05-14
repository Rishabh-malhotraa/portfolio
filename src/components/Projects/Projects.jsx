import React from "react"
import "./Projects.css"

export default function Projects() {
  return (
    <div className={"projects"}>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>Projects <span alt={"celebration emoji"} >🎊</span></b>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "18vh",
          justifyContent: "space-between",
          minHeight:"25vh"
        }}
      >
        <div
          className={"neu"}
          style={{
            fontSize: "1.3em",
            minWidth: "20vw",
            marginRight: "1em",
            textAlign: "center",
            padding: "3em",
          }}
        >
          <b>Dank Devs</b>
        </div>
        <div
          className={"neu"}
          style={{
            fontSize: "1.3em",
            minWidth: "40vw",
            textAlign: "center",
            padding: "3em",
          }}
        >
          <b>Chef's Camp</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "3em",
          justifyContent: "space-between",
          minHeight:"25vh"
        }}
      >
        <div
          className={"neu"}
          style={{
            fontSize: "1.3em",
            minWidth: "40vw",
            textAlign: "center",
            padding: "3em",
            marginRight: "2em",
          }}
        >
          <b>Captcha Alternative</b>
        </div>

        <div
          className={"neu"}
          style={{
            fontSize: "1.3em",
            minWidth: "20vw",
            textAlign: "center",
            padding: "3em",
          }}
        >
          <b>IIIT Ranchi Website</b>
        </div>
      </div>
    </div>
  )
}
