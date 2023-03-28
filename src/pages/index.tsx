import { NextPage } from "next";
import { postMessage } from "../api/postMessage";
import styles from "../styles/Index.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.header}>
        <img src="icons/icon128.png" width="30rem" height="30rem"></img>
        <span className="w-2"></span>
        <h1 className="text-2xl">Garuchu Extension</h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold my-4">つよつよポップアップ建設予定地!!</h1>
        <div className={styles.postButton} onClick={postMessage}>
          Discordに投稿
        </div>
      </div>
      <div className={styles.footer} />
    </div>
  );
};

export default IndexPage;
