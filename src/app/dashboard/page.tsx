"use client";
import { Button } from "@/components/ui/button";
import { NextPage } from 'next';
import PostList from '../../components/PostList';
import { posts } from '../../data/posts';
import { Post } from '../../types/Post';


import { useRouter } from 'next/navigation';

interface DashboardProps {
  posts: Post[];
}


const Dashboard: NextPage<DashboardProps> = ({}) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push('/form');
  };

  return (
    <div style={styles.container}>
      <h1>User Posts Dashboard</h1>
      <PostList posts={posts} />
      <Button onClick={handleRoute}>Create Post</Button>
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