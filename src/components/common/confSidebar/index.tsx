import React from "react";
import styles from "./index.module.scss";
import Avatar from "../Avatar";

export default function ConfSidebar() {
  const pages = ["", "", "", "", ""];
  return (
    <div className={styles.wrapper}>
      <Avatar size={55} />
      <div className={styles.pages}>
        {pages.map((page: string, index: number) => (
          <a href={"/" + page} className={styles.page} key={"page-" + index}>
            {page}
          </a>
        ))}
      </div>
      <div className={styles.user}>
        <Avatar size={55} />
      </div>
    </div>
  );
}
