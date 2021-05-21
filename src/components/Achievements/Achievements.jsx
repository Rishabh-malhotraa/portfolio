import React from "react"
import "./Achievements.css"

export default function MoreAbout() {
  return (
    <div>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>
          Achievements <span alt={"trophy emoji"}>🏆</span>
        </b>
      </div>
      <b>
        <div className={"neu-achievements"} style={{ marginTop: "18vh" }}>
          CodeChef 6 star ⭐️ coder
        </div>
        <div className={"neu-achievements"} style={{ marginTop: "6vh" }}>
          Won CodeChef DSA certification 📜 (100%) scholarship in Feb Long
          Challenge
        </div>
        <div className={"neu-achievements"} style={{ marginTop: "6vh" }}>
          Global Rank 59 🏆 in September 2020 long challenge (Div 1)
        </div>
        <div className={"neu-achievements"} style={{ marginTop: "6vh" }}>
          AIR 172 in Google HashCode 2020 🎉
        </div>
        <div className={"neu-achievements"} style={{ marginTop: "6vh" }}>
          Problem setter ✅ at various contests
        </div>
      </b>
    </div>
  )
}
