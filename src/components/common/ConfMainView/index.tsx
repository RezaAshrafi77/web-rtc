;
import React from "react";
import styles from "./index.module.scss";
import AgoraRTC, {
  AgoraRTCProvider,
  useRTCClient,
} from "agora-rtc-react";
import LocalUser from "@/components/common/Agora/components/LocalUser";

export default function ConfMainView() {
  const participants = [1, 2, 3];
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
  );
  // const audioTrack = useLocalAudioTrack();
  return (
    <AgoraRTCProvider client={client}>
      <div className={styles.wrapper}>
        {/* <div className={styles.header}></div> */}
        {/* <div className={styles.reactions}>
        {[1, 2, 3].map((item: number, index: number) => (
          <Button
            key={"action" + index}
            title={""}
            onClick={() => {}}
            className={`${styles.reaction}`}
          ></Button>
        ))}
      </div> */}
        {/* <div className={styles.footer}>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.endCall}`}
        ></Button>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.option}`}
        ></Button>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.option}`}
        ></Button>
      </div> */}
        {/* {participants.length <= 3 ? (
        <div className={styles.participants}>
          {participants.map((item: number, index: number) => (
            <div
              key={"participant" + index}
              className={styles.participant}
            ></div>
          ))}
        </div>
      ) : null} */}
        {/* <LocalUser /> */}
      </div>
    </AgoraRTCProvider>
  );
}
