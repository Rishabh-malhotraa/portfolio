import React, { useEffect } from "react"
import "./MoreAbout.css"

export default function MoreAbout() {
  useEffect(() => {
    const cards = document.querySelector(".cards")
    const images = document.querySelectorAll(".card__img")
    const backgrounds = document.querySelectorAll(".card__bg")
    const range = 40

    // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1) // thanks @alice-mx

    let timeout
    document.addEventListener(
      "mousemove",
      ({ x, y }) => {
        if (timeout) {
          window.cancelAnimationFrame(timeout)
        }

        timeout = window.requestAnimationFrame(() => {
          const yValue = calcValue(y, window.innerHeight)
          const xValue = calcValue(x, window.innerWidth)

          cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`
          ;[].forEach.call(images, image => {
            image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`
          })
          ;[].forEach.call(backgrounds, background => {
            background.style.backgroundPosition = `${xValue * 0.45}px ${
              -yValue * 0.45
            }px`
          })
        })
      },
      false
    )
  })

  return (
    <div>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>
          More about me <span alt={"monkey emoji"}>🙈</span>
        </b>
      </div>

      <div class="cards">
        <h3 className={"two"}>My Favourite</h3>
        <h1 className={"one"}>Shows and Books</h1>
        <div className={"card card__one"}>
          <div className={"card__bg"}></div>
          <img
            className={"card__img"}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png"
          />
          <div className={"card__text"}>
            <p className={"card__title"}>Princess Mononoke</p>
          </div>
        </div>
        <div className={"card card__two"}>
          <div className={"card__bg"}></div>
          <img
            className={"card__img"}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png"
          />
          <div className={"card__text"}>
            <p className={"card__title"}>Spirited Away</p>
          </div>
        </div>
        <div className={"card card__three"}>
          <div className={"card__bg"}></div>
          <img
            className={"card__img"}
            src="https://static.wixstatic.com/media/2cd43b_02927efc97ac4f76a1bdb2344c9ecef8~mv2.png/v1/fill/w_320,h_443,q_90/2cd43b_02927efc97ac4f76a1bdb2344c9ecef8~mv2.png"
          />
          <div className={"card__text"}>
            <p className={"card__title"}>Harry Potter</p>
          </div>
        </div>


        <div className={"card card__four"}>
          <div className={"card__bg"}></div>
          <img
            className={"card__img"}
            src="https://www.pngkit.com/png/full/32-324698_fcl-l-death-note-png.png"
          />
          <div className={"card__text"}>
            <p className={"card__title"}>Death Note</p>
          </div>
        </div>
      </div>
    </div>
  )
}
