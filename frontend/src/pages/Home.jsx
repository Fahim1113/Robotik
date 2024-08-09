import styles from "../css/pages/Home.module.css";

import EmptyNavbar from "../components/EmptyNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const info = [
    "Connect Instantly, Chat Freely",
    "Your World, Your Conversations",
    "Bringing People Closer, One Message at a Time",
    "Where Communication Happens",
    "Messaging Made Simple",
    "Stay Connected, Stay Informed",
    "Real-Time Conversations, Real Connections",
    "Your Chat, Your Rules",
    "Talk Anytime, Anywhere",
    "The Future of Messaging",
    "Instant Communication, Lasting Connections",
    "Join the Conversation",
    "Effortless Messaging, Endless Possibilities",
    "Your Gateway to Connection",
    "Chat Smarter, Live Better",
    "More Than Just Messages",
    "The Heartbeat of Your Social Network",
    "Where Messages Come Alive",
    "Connect, Share, Communicate",
  ];
  const [text, setText] = useState("");

  const nav = useNavigate();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  useEffect(() => {
    const typewriter = async () => {
      const current = info[Math.floor(Math.random() * (info.length - 1))];
      for (var i = 0; i < current.length; i++) {
        setText(current.substring(0, i + 1));
        await sleep(100);
      }
      await sleep(1000);
      for (i = current.length; i > 0; i--) {
        setText(current.substring(0, i - 1));
        await sleep(60);
      }

      await sleep(500);
      typewriter();
    };
    typewriter();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <EmptyNavbar />
      <div className={styles.main}>
        <h1 className={styles.welcome}>Welcome to Robotik</h1>
        <div className={styles.typewriter}>
          <h2 className={styles.typewriter_text}>
            {text}
            <span id={styles.cursor}>|</span>
          </h2>
        </div>
        <div className={styles.account}>
          <div className={styles.btn} onClick={() => nav("/login")}>
            Login
          </div>
          <div className={styles.btn} onClick={() => nav("register")}>
            Register
          </div>
        </div>
      </div>
    </>
  );
}
