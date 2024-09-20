import { NextPage } from 'next';
import { users } from '../data/users';
import { User } from '../types/User';

const ProfilePage: NextPage = () => {
  const user: User = users[0];

  return (
    <div style={styles.container}>
      <h1>Profile</h1>
      <div style={styles.profile}>
        <img
          src={user.avatarUrl || '/avatars/default.png'}
          alt={`${user.name}'s avatar`}
          style={styles.avatar}
        />
        <div style={styles.info}>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '2rem',
  },
  info: {
    flex: 1,
  },
};

export default ProfilePage;