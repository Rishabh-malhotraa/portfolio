import React from "react"
import "./OpenSource.css"

export default function OpenSource() {
  return (
    <div>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>
          Open Source <span alt={"heart emoji"}>❤️</span>
        </b>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "18vh",
          flexWrap: "wrap",
          justifyContent: "space-between",
          minHeight: "25vh",
        }}
      >
        <a
          href={"https://ethereum.org/en/"}
          target={"_blank"}
          className={"neu2"}
          style={{
            fontSize: "1.3em",
            flexGrow: "1",
            marginRight: "2em",
            textAlign: "center",
            padding: "3em",
          }}
        >
          <b>Ethereum.org</b>
        </a>
        <a
          href={"https://www.gatsbyjs.com/"}
          target={"_blank"}
          className={"neu2"}
          style={{
            fontSize: "1.3em",
            flexGrow: "6",
            textAlign: "center",
            padding: "3em",
          }}
        >
          <b>Gatsby</b>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "3em",
          justifyContent: "space-between",
          minHeight: "25vh",
        }}
      >
        <a
          href={"https://www.cgal.org/"}
          target={"_blank"}
          className={"neu2"}
          style={{
            fontSize: "1.3em",
            flexGrow: "5",
            textAlign: "center",
            padding: "3em",
            marginRight: "2em",
          }}
        >
          <b>CGAL</b>
        </a>

        <a
          href={"https://deno.land/"}
          target={"_blank"}
          className={"neu2"}
          style={{
            fontSize: "1.3em",
            flexGrow: "1",
            textAlign: "center",
            padding: "3em",
          }}
        >
          <b>Deno</b>
        </a>
      </div>
    </div>
  )
}
