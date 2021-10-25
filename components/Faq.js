import React from "react";
import { useImage } from "../services/hook";

export default function Faq() {
  function onStar(star) {
    return useImage(star);
  }
  return (
    <section id="faqs" className="faq-wrapper">
      <h2 className="text--5xl m-auto">FAQs</h2>
      <div className="faq-body">
        <div className="faq-box">
          <h2 className="text--4xl">Who exactly is Meow to the Moon</h2>
          <p className="text--xl text--smoke">
            Meow to the Moon is a 7777 randomly generated unordinary cats
            existing on Ethereum Blockchain. We don’t promise anything that is
            impossible, but everything that is written in the roadmap will be
            done. We truly want to give benefits to our holders, giving them the
            incentive to “Hold” not just paperhand.
          </p>
        </div>
        <div className="faq-box">
          <h2 className="text--4xl">So, What’s the price ?</h2>
          <p className="text--xl text--smoke">
            The price of the Meows will be 0.0777 ETH/meow
          </p>
        </div>
        <div className="faq-box">
          <h2 className="text--4xl">Will there be a pre-sale or whitelist ?</h2>
          <p className="text--xl text--smoke">
            After researching through numerous projects, we have decided to
            create a new way of whitelist. The role @The Early Meows will serve
            as a new way of whitelist, in which they will have the access to the
            "early channel", a channel that they will be notified a hint about
            the timing of the drop. More detail can be found in discord channel
            😺
          </p>
        </div>
        <div className="faq-box">
          <h2 className="text--4xl">
            Why should I invest in Meow to the Moon ?
          </h2>
          <p className="text--xl text--smoke">
            Firstly, the artwork is cute. Secondly, with the royalties program
            and continuous giveaway activities, the project is driven to benefit
            the community. Most importantly, this project is community-driven;
            the holders will have the right to decide the course of the project
            that will lead to the Season 2. Ultimately, we will MOON together.
          </p>
        </div>
        <div className="faq-box">
          <h2 className="text--4xl">What’s the aim of this project ?</h2>
          <p className="text--xl text--smoke">
            The founders have been an investor in Crypto world for over three
            years. There were ups and downs due to high volatility of the
            market. Hence, we want to create the project where holders can
            receive passive incomes as well as a continuous benefit, ensuring
            that the holder can feel like “ I will definitely make more than
            what I pay for minting.”
          </p>
        </div>
        <div className="faq-box">
          <h2 className="text--4xl">Gas Price high AF!</h2>
          <p className="text--xl text--smoke">
            Trust us, we understand the pain of gas war. As a result, we have
            decided to launch our project in the stealth drop format, ensuring
            that the pain of gas can be minimized.
          </p>
        </div>
        <div className="faq-box">
          <h2 className="text--4xl">Date of Launch</h2>
          <p className="text--xl text--smoke">
            It will be done on the Stealth Drop 777 week. As for the period of
            the week, it is to be announced.
          </p>
        </div>
      </div>
      <img src={onStar("/star-1.png")} className="star-1" alt="image-star-1" />
      <img src={onStar("/star-2.png")} className="star-2" alt="image-star-2" />
      <img src={onStar("/star-3.png")} className="star-3" alt="image-star-3" />
      <img src={onStar("/star-4.png")} className="star-4" alt="image-star-4" />
    </section>
  );
}
