import s from "./FriendList.module.css";

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? "#008000" : "#CD2956" }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

