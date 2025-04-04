import clsx from "clsx";
import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={s.img} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(s.status, isOnline ? s.online : s.offline)}>{isOnline ? "online" : "offline"}</p>
    </div>
  );
}

export default FriendListItem;