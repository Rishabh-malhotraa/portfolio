import React from "react"
import "./OpenSource.css"

export default function OpenSource() {
  return (
    <div>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>Open Source <span alt={"heart emoji"} >❤️</span></b>
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
          <b>Ethereum.org</b>
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
          <b>Gatsby</b>
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
          <b>CGAL</b>
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
          <b>Deno</b>
        </div>
      </div>
    </div>
  )
}
