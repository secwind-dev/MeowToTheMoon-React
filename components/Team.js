import React from "react";
import { useImage } from "../services/hook";

export default function Team() {
  return (
    <section id="team" className="team-wrapper flex flex-col shadow-md">
      <div className="bg-white">
        <h2 className="text--5xl m-auto">Meow Team</h2>
      </div>
      <div className="team-body">
        {TEAMS.map((item, index) => (
          <div key={`meow-team-${item.id}`} className="team-card">
            <img
              src={item.image}
              className="img"
              alt={`meow picture ${item.name}`}
            />
            <h2 className="text--4xl">{item.name}</h2>
            <p className="text--xl text--700 text--primary">{item.job}</p>
            <p className="text--xl text--700 my-2">Past Experience:</p>
            {item.exps.map((exp, i) => (
              <p key={i} className="text--xl text--smoke">
                {exp}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

const TEAMS = [
  {
    id: 1,
    image: useImage("/secwind.png"),
    name: "DarkLord",
    job: "Project Lead, Front-end Dev",
    exps: ["Senior Front-end Dev at tech-startup", "Cryptocurrency Investor"],
  },
  {
    id: 2,
    image: useImage("/plakorp.png"),
    name: "Plakorp",
    job: "Lead Artist, UX/UI Designer",
    exps: [
      "UX/UI Designer at tech-startup",
      "Senior Rotomation in Hollywood Industry",
      "Illustrator on news and books",
    ],
  },
  {
    id: 3,
    image: useImage("/micky.png"),
    name: "NTX",
    job: "Back-end, Blockchain Dev",
    exps: [
      "Multiple Coding Hackathon Winner",
      "Lead Developer for several Tech-Startup",
      "Smart Contract Developer",
    ],
  },
  {
    id: 4,
    image: useImage("/atom.png"),
    name: "Stacia",
    job: "Project Lead,Marketer, Strategic Planner",
    exps: [
      "Management Consultant",
      "Project Manager in Tech Startup",
      "Investment Strategist in Financial Insititute",
    ],
  },
];
