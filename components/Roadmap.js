import React from "react";

export default function RoadMap() {
  function classList(classes) {
    return Object.entries(classes)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
      .join(" ");
  }
  function RoadMapDesktop() {
    return (
      <ul className="timeline-body mobile--none">
        {ITEMS.map((item, index) => (
          <li
            key={index}
            className={classList({
              "timeline-item": true,
              active: item.is_active,
            })}
          >
            <h3 className="text--xl text--700">{item.title}</h3>
            <p className="text--xl desc">{item.text}</p>

            <div className="timeline-item-number">
              <p className="text--sm text--700">Episode</p>
              <p className="text--body text--700">{item.position}</p>
            </div>
            <div className="timeline-item-title">
              <h2 className="text--5xl">{item.header.title}</h2>
              <p className="text--2xl">{item.header.text}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  function RoadMapMobile(items) {
    return ITEMS.map((item, index) => (
      <div
        key={index}
        className={classList({
          "roadMap-sm": true,
          "desktop--none": true,
          "ipad--none": true,
          active: item.is_active,
        })}
      >
        <div className="roadMap-session">
          <h2 className="text--4xl text--primary">{item.header.title}</h2>
          <p className="text--xl text--700 text--primary text--left">
            {item.header.text}
          </p>
        </div>
        <div className="roadMap-sm-title">
          <div className="timeline-item-number">
            <p className="text--sm text--700">Episode</p>
            <p className="text--body text--700">{item.position}</p>
          </div>
          <p className="roadMap-sm-title-text">{item.title}</p>
        </div>
        <p className="text--xl desc text--left">{item.text}</p>
      </div>
    ));
  }
  return (
    <section id="roadMap" className="roadMap-overview">
      <div className="roadMap-wrapper">
        <h2 className="text--5xl">Roadmap</h2>
        <div className="timeline-wrapper">
          {RoadMapDesktop()}
          {RoadMapMobile()}
        </div>
      </div>
    </section>
  );
}

const ITEMS = [
  {
    id: 1,
    header: {
      title: "Season 1",
      text: "The beginning of the Moon Journey",
    },
    title: "The Crew Recruitment",
    text:
      'The meow army wants to onboard the marvelous soldier to join the spaceship. The drop will be done on the Stealth drop 777, a series of one week stealth drops. Each day of that week, the contract will be opened up for minting for a certain period of time, in which everything will be done "stealthily"',
    position: "1",
    is_active: true,
  },
  {
    id: 2,
    header: {
      title: "",
      text: "",
    },
    title: "The Visit of Land (777,777)",
    text:
      "The onboarding is done; now, the first journey of the meows is the land of trade, Openseas.  After two weeks of listing, the holders of Meow will receive a raffle every two weeks to participate in the 777 Meow machine. The machine is the slot machine where the player will be guarenteed a reward; however, it’s all up to your luck how much you would receive. The fund of slot machine will be 10% of our minting margin, which the game will continue until it runs out.",
    position: "2",
    is_active: false,
  },
  {
    id: 3,
    header: {
      title: "",
      text: "",
    },
    title: "The Treasure",
    text: `The royalty fee from the secondary marketplace will be distributed accordingly, 30% for marketing, 20% to sweep the floor, 10% to charity upon community selection, 10% for hiring new members, and 30% for community's reserved fund.`,
    position: "3",
    is_active: false,
  },
  {
    id: 4,
    header: {
      title: "",
      text: "",
    },
    title: "The Doggy Attack",
    text:
      "The spaceship has been attacked by the doggy army. What should we do? The MVP of the war will receive a special airdrop from the Meow’s Team",
    position: "4",
    is_active: false,
  },
  {
    id: 5,
    header: {
      title: "Season 2",
      text: "The Warp Port",
    },
    title: "Episode X",
    text:
      "The community will decide on the direction of Season 2, in which one of the planned event is to expand our metaverse into Sandbox Game so that the community can engage and build connection even further.",
    position: "x",
    is_active: true,
  },
];
