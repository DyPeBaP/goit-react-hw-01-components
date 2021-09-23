import Profile from "./components/socialProfile/Profile";
import user from "./components/socialProfile/user.json";

export default function App() {
  return (
    <div>
      <Profile
        userAvatar={user.avatar}
        userName={user.name}
        userTag={user.tag}
        userLocation={user.location}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}
      />
    </div>
  );
}
