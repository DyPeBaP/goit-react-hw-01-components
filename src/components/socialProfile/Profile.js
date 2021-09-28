import defaultImages from "./defaultImages.jpg";
import s from "./Profile.module.css";
// import PropTypes from "prop-types";

export default function Profile({
  userAvatar = defaultImages,
  userName,
  userTag,
  userLocation,
  userFollowers,
  userViews,
  userLikes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={userAvatar} alt={userName} className={s.avatar} />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{userTag}</p>
        <p className={s.location}>{userLocation}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{userFollowers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{userViews}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}

// Profife.defaultProps ={

// }
// Profile.propTypes = {

// }