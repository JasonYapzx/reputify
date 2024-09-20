import React, { useState } from 'react';
import { Post } from '../types/Post';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {

  const post_id = 0
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpvoteClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Alice Smith', // Data to be sent to the API
        }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setMessage(data.message); // User created message from API
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('An error occurred');
    }
    setLoading(false);
  };



  return (
    <div style={styles.postItem}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Author: {post.author}</small>
      <button onClick={handleUpvoteClick}>Upvote</button>
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