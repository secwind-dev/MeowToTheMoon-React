import React from "react";
import { useImage } from "../services/hook";
import style from "../assets/styles/rarities.module.css";

export default function Rarities() {
  return (
    <section id="rarities" className={style[`poperties-wrapper`]}>
      <div className={style[`poperties-text`]}>
        <h2 className="text--5xl">Rarities &amp; Traits</h2>
        <p className="text--xl text--smoke">
          This is the 1st generation of meow metaverse which has over 450k
          possible combinations from the following trait options
        </p>
        <ul>
          <li className="text--xl text--700">Body</li>
          <li className="text--xl text--700">Face</li>
          <li className="text--xl text--700">Helmet</li>
          <li className="text--xl text--700">Cloth</li>
          <li className="text--xl text--700">Accessory</li>
          <li className="text--xl text--700">Background</li>
        </ul>
      </div>
      <div className={style[`poperties-image`]}>
        <img className={style.img} src={useImage("/cat1.png")} />
        <img className={style.img} src={useImage("/cat2.png")} />
        <img className={style.img} src={useImage("/cat3.png")} />
        <img className={style.img} src={useImage("/cat4.png")} />
      </div>
    </section>
  );
}
