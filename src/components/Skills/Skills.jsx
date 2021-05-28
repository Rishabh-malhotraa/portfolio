import React from "react"
import { Bar, Line} from "react-chartjs-2"
import "./Skills.css"

export default function Skills() {
  const languages = {
    labels: ["c++", "graphql", "reactjs", "node.js", "python"],
    datasets: [
      {
        label: "Hours Coded",
        data: [1500, 80, 350, 350, 130],
        backgroundColor: [
          "rgba(255,99,32,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(255,206,86,0.6)",
        ],
      },
    ],
  }

  const tools = {
    labels: ["git", "docker", "gcp", "github actions", "vscode"],
    datasets: [
      {
        label: "skill level points",
        data: [800, 150, 350, 80, 400],
        backgroundColor: [
          "rgba(255,206,86,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,99,32,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(75,192,192,0.6)",
        ],
      },
    ],
  }

  const domains = {
    labels: [
      "competitive coding",
      "web development",
      "c++ development",
      "cloud computing",
      "AI/ML",
    ],
    datasets: [
      {
        label: "hours coded",
        data: [1200, 500, 200, 150, 100],
        backgroundColor: [
          "rgba(255,206,86,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,99,32,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(75,192,192,0.6)",
        ],
      },
    ],
  }

  return (
    <div>
      <div style={{ fontSize: "3.5em", marginTop: "30vh" }}>
        <b>
          Skills <span alt={"dev emoji"}>👨🏻‍💻</span>
        </b>
      </div>

      <div style={{ marginTop: "18vh" }} className={"chart","neu-charts"}>
        <Bar
          data={languages}
          options={{
            title: {
              display: true,
              text: "languages and frameworks",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div style={{ marginTop: "18vh" }} className={"chart","neu-charts"}>
        <Line
          data={tools}
          options={{
            title: {
              display: true,
              text: "Tools",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div style={{ marginTop: "18vh" }} className={"chart","neu-charts"}>
        <Bar
          data={domains}
          options={{
            title: {
              display: true,
              text: "Domains",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  )
}
