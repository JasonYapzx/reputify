import { NextResponse } from 'next/server';
import { posts } from '../../../data/posts';
import { Post } from '@/types/Post';

export async function GET() {
  // Fetch all posts
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content } = body;

  if (!title || !content) {
    return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
  }


  // TODO: Mock ID generation and post creation
  const newPost: Post = {
    id: posts.length + 1,
    title,
    content,
    author: '',
    score: 0
  };

  posts.push(newPost);  // In reality, you'd insert this into a database
  return NextResponse.json(newPost, { status: 201 });
}