"use client";
import React, { useState } from 'react';
import { Post } from '../types/Post';


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [upvotes, setUpvotes] = useState(0);  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');    

  const handleUpvote = () => {
    setUpvotes((prevUpvotes) => prevUpvotes + 1);  // Increment upvote count
  };

  const handleUpvoteClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${post.id}`, {
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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Post title</CardTitle>
        <CardDescription>Things like topic tags or whatever</CardDescription>
      </CardHeader>
      <CardContent>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Author: {post.author}</small>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleUpvoteClick} variant="outline">Upvote</Button>
        <Button>Downvote</Button>
      </CardFooter>
    </Card>
  );
};

export default PostItem;