import { NextPage } from 'next';
import PostList from '../../components/PostList';
import { posts } from '../../data/posts';
import { Post } from '../../types/Post';

interface DashboardProps {
  posts: Post[];
}


const Dashboard: NextPage<DashboardProps> = ({}) => {
  return (
    <div style={styles.container}>
      <h1>User Posts Dashboard</h1>
      <PostList posts={posts} />
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
};

export default Dashboard;