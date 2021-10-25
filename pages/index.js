import React from "react";
import style from "../assets/styles/index.module.css";
import { useImage } from "../services/hook";
import Banner from "../components/Banner";
import About from "../components/About";
import Rarities from "../components/Rarities";
import RoadMap from "../components/RoadMap";
import Team from "../components/Team";
import Faq from "../components/Faq";

export default function index() {
  function ComingSoon() {
    return (
      <section className={style[`coming-wrapper`]}>
        <img src="/app/duedate.png" alt="duedate" />
        {/* <img src="/app/duedate.png" alt="duedate" style={{ width: "585px" }} /> */}
      </section>
      //   <section className={style[`coming-wrapper`]}>
      //     <h2 className="text--5xl">Coming soon</h2>
      //   </section>
    );
  }
  function ProductImage() {
    return (
      <section className={style[`product-wrapper`]}>
        <div className="mobile--none ipad--none">
          <img src={useImage("/cat1.png")} className="w-full" />
        </div>
        <div className="mobile--none ipad--none">
          <img src={useImage("/cat2.png")} className="w-full" />
        </div>
        <div>
          <img src={useImage("/cat3.png")} className="w-full" />
        </div>
        <div>
          <img src={useImage("/cat4.png")} className="w-full" />
        </div>
        <div>
          <img src={useImage("/cat5.png")} className="w-full" />
        </div>
        <div>
          <img src={useImage("/cat6.png")} className="w-full" />
        </div>
      </section>
    );
  }
  function WhoWeAre() {
    return (
      <section className="who-wrapper flex flex-col">
        <h2 className="text--5xl">Who we are ?</h2>
        <p className="text--xl text--smoke">
          We are a group of crypto-investors, where each member has their own
          speciality from their work in real life. We have seen many projects
          that promise nothing but a dream for the community. Hence, we are
          inspired to create a project where the community can truly earn the
          benefit from investing in our project.
        </p>
      </section>
    );
  }
  return (
    <>
      <Banner />
      {ComingSoon()}
      {ProductImage()}
      <About />
      <Rarities />
      <RoadMap />
      {WhoWeAre()}
      <Team />
      <Faq />
    </>
  );
}
