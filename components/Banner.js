import React from "react";
import { useImage } from "../services/hook";
import style from "../assets/styles/banner.module.css";

export default function Banner() {
  const IMAGE = {
    root: useImage("/image_product.png"),
    about: useImage("/image_about.png"),
    banner: useImage("/image_banner.png"),
  };
  return (
    <section id="banner" className={style[`banner-wrapper`]}>
      <div className={style[`banner-text`]}>
        <h2 className="text--5xl">Welcome to Meow to the moon</h2>
        <p className="text--xl text--smoke">
          Meow to the moon is a 7777 randomly generated unordinary cats existing
          on Ethereum Blockchain. This is the 1st generation of meow metaverse
          which has over 450k possible combinations.
        </p>
        <p className="text--xl text--smoke">
          Each meow has the passion of reaching the moon one day, and ourcrew
          are welcome to invite you to join the spaceship to reach the moon
          together.
        </p>
      </div>
      <div className={style[`banner-image`]}>
        <img src={IMAGE.banner} className="w-full" />
      </div>
    </section>
  );
}
