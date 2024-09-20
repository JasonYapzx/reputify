import { NextResponse } from 'next/server';
import { posts } from '../../../../data/posts';

// Define the GET request handler
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const postId = params.id;

  // Fetch the post data by ID (in a real app, you'd query a database)
  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}


export async function POST(req: Request) {
  // PLACEHOLDER
  return NextResponse.json({data: 'test'}, { status: 201 });
}