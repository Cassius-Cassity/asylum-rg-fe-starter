import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/profile.css';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article className="profile-container">
        {user?.picture && (
          <img className="profile-image" src={user.picture} alt={user?.name} />
        )}
        <h2 className="profile-name">{user?.name}</h2>
        <ul className="profile-details">
          {Object.keys(user).map((objKey, index) => (
            <li key={index} className="profile-item">
              <span className="profile-key">{objKey}: </span>
              <span className="profile-value">{user[objKey]}</span>
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
