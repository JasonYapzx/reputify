"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import PostList from '../../components/PostList';
import { posts } from '../../data/posts';

const Dashboard = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push('/form');
  };

  return (
    <div className="max-w-[800px] m-0 p-2">
      <h1>User Posts Dashboard</h1>
      <PostList posts={posts} />
      <Button onClick={handleRoute}>Create Post</Button>
    </div>
  );
};

export default Dashboard;
