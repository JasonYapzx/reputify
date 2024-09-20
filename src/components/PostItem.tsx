import React from 'react';
import { Post } from '../types/Post';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div style={styles.postItem}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Author: {post.author}</small>
    </div>
  );
};

const styles = {
  postItem: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
  },
};

export default PostItem;