import { Layout, ConfSidebar, } from "@/components/common";
import styles from "./index.module.scss";
import ConfNavbar from "./layouts/ConfNavbar";
import RequestToJoin from "./layouts/RequestToJoin";
import TaskList from "./layouts/TaskList";
import ChatRoom from "./layouts/ChatRoom";
import Participants from "./layouts/Participants";

export default function Conference() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <ConfSidebar />
        <div className={styles.main}>
          <ConfNavbar />
          <Participants />
        </div>
        <div className={styles.featuresSidebar}>
          <RequestToJoin />
          <TaskList />
          <ChatRoom />
        </div>
      </div>
    </Layout>
  );
}
