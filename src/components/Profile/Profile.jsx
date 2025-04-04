import clsx from "clsx";
import s from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(s.box)}>
      <div className={clsx(s.boxUpper)}>
        <img className={clsx(s.img, s.icon)} src={image} alt="User avatar" />
        <p className={clsx(s.name)}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stat}>
          <span className={s.number}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.stat}>
          <span className={s.number}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.stat}>
          <span className={s.number}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
