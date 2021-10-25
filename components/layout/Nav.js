import React from "react";
import { useImage } from "../../services/hook";
import style from "../../assets/styles/nav.module.css";
import Link from "next/link";

export default function Nav({ onProps }) {
  const SOCIALS = onProps.socials;
  function NavBrand() {
    return (
      <div className={style[`logo-col`]}>
        <div className={style[`logo-moons`]}>
          <img src={useImage("/logo.png")} alt="logo meow to the moon" />
        </div>
        <div className="logo-titles text--2xl text--700">Meow to the moon</div>
      </div>
    );
  }
  function NavMenu() {
    return (
      <ul className={style[`menu-col`]}>
        <li className="text--lg text--700 text--black">
          <Link href="#about">About</Link>
        </li>
        <li className="text--lg text--700">
          <a href="#rarities">Rarities</a>
        </li>
        <li className="text--lg text--700">
          <a href="#roadMap">Roadmap</a>
        </li>
        <li className="text--lg text--700">
          <a href="#team">Team</a>
        </li>
        <li className="text--lg text--700">
          <a href="#faqs">FAQs</a>
        </li>
      </ul>
    );
  }
  function NavSocial() {
    return (
      <div className={style[`social-wrapper`]}>
        <div className={style[`social-col`]}>
          {SOCIALS.map((social, index) => (
            <img
              src={social.image}
              alt={social.text}
              key={`social.id-${index}`}
              onClick={onProps.nextRedirect}
              url={social.url}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className={style[`nav-container`]}>
      <nav className={style[`nav-wrapper`]}>
        {NavBrand()}
        {NavMenu()}
        {NavSocial()}
      </nav>
    </section>
  );
}
