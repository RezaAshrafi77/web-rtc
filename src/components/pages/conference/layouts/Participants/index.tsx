;
import React from "react";
import styles from "./index.module.scss";
import { ConfParticipantList, ConfMainView } from "@/components/common";

export default function Participants() {
  return (
    <div className={styles.wrapper}>
      <ConfMainView />
      <ConfParticipantList />
    </div>
  );
}
