import defaultImages from "./defaultImages.jpg";
import style from "./profile.css";

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
    <div className="profile">
      <div className="description">
        <img src={userAvatar} alt={userName} className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">{userTag}</p>
        <p className="location">{userLocation}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{userFollowers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{userViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}
