import React from "react"
import "./Terminal.css"

export default function Terminal() {
  return (
    <div>
      <div id="window">
        <div id="toolbar">
          <div class="top">
            <div id="lights">
              <div class="light red">
                <div class="glyph">×</div>
                <div class="shine"></div>
                <div class="glow"></div>
              </div>
              <div class="light yellow">
                <div class="glyph">-</div>
                <div class="shine"></div>
                <div class="glow"></div>
              </div>
              <div class="light green">
                <div class="glyph">+</div>
                <div class="shine"></div>
                <div class="glow"></div>
              </div>
            </div>
            <div id="title">
              <div class="folder">
                <div class="tab"></div>
                <div class="body"></div>
              </div>
              about me
            </div>
            <div id="bubble">
              <div class="shine"></div>
              <div class="glow"></div>
            </div>
          </div>
        </div>
        <div id="body">
          <p style={{ color: "#63de00" }}>
            {" "}
            Last login: Thu May 24 12:18:16 on ttys006 <br />
            Vishals-MacBook-Air:chaos${" "}
          </p>
          <br />
          <p style={{ color: "white" }} className={"colorchange"}>
            {">"}
            {">"}I started off from learning basics of coding from my institute
            and coursera and then started to explore different fields like
            machine learning, cloud , blockchain and web. At last I settled at
            web and started making projects meanwhile parallelly continuing my
            competitive coding journey on codechef.
            <br />
            <br />
            {">"}
            {">"}I started making projects and contributing to different open
            source projects both small and big. I have worked on new stacks such
            as graphql, web sockets, elastic stack, etc. I also love to make my
            own UI designs on Figma.
            <br />
            <br />
            {">"}
            {">"}I also have a good practice of using tools such as docker, git
            and writing tests in my projects. Moreover I am well versed with
            google cloud platform, netlify and azure.
            <br />
            <br />
            {">"}
            {">"}On the competitive coding end, I scored good global ranks in
            many contests and became a "6 star coder at codechef". Currently I
            have started to work on my Functional Programming and SQL skills.
          </p>
          <div class="cursor"></div>
        </div>
      </div>
    </div>
  )
}
