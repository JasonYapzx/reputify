import React from 'react';
import { NextPage } from 'next';
import PostList from '../components/PostList';
import { Post } from '../types/Post';
import { posts as mockPosts } from '../data/posts';

interface DashboardProps {
  posts: Post[];
}

const Dashboard: NextPage<DashboardProps> = ({ posts }) => {
  return (
    <div style={styles.container}>
      <h1>User Posts Dashboard</h1>
      <PostList posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  // In a real application, you'd fetch data from an API here
  // For this example, we're using mock data
  return {
    props: {
      posts: mockPosts,
    },
  };
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
};

export default Dashboard;