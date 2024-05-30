import {
  LocalUser,
  // useLocalAudioTrack,
  useLocalCameraTrack,
} from "agora-rtc-react";

export default function LocalUserComponent() {
  // const audioTrack = useLocalAudioTrack();
  const videoTrack = useLocalCameraTrack();

  return (
    <LocalUser
      // audioTrack={audioTrack}
      cameraOn
      cover={
        "https://kc.demo.bigbluebutton.org/auth/resources/9djm1/login/keycloak/img/keycloak-bg.png"
      }
      micOn
      playAudio
      playVideo
      videoTrack={videoTrack}
    />
  );
}
