import React from "react";
import Head from "next/head";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import "../assets/styles/_app.css";
import style from "../assets/styles/main.module.css";
import { useImage } from "../services/hook";

function MyApp({ Component, pageProps }) {
  const onProps = {
    socials: [
      //   {
      //     id: 1,
      //     image: useImage('/medium.png'),
      //     url: 'https://discord.gg/gEnvhUGh58',
      //     text: 'meow to the moon medium',
      //   },
      {
        id: 2,
        image: useImage("/discord.png"),
        url: "https://discord.gg/gEnvhUGh58",
        text: "meow to the moon discord",
      },
      {
        id: 3,
        image: useImage("/twitter.png"),
        url: "https://twitter.com/Meow2themoonNFT",
        text: "meow to the moon twitter",
      },
    ],
    nextRedirect: ({ target }) => {
      const url = target.getAttribute("url");
      console.log("nextRedirect =>", url);
      window.open(url, "_blank").focus();
    },
  };

  return (
    <div>
      <Head>
        <title>MeowToTheMoon</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={style[`main-layout`]}>
        <Nav onProps={onProps} />
        <Component {...pageProps} />
        <Footer onProps={onProps} />
      </div>
    </div>
  );
}

export default MyApp;
