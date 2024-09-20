import { posts } from '../../../data/posts';
import { Post, PostFormDetails } from '@/types/Post';
import { query } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
// Fetch all posts
  try {
    const posts = await query('SELECT * FROM posts;');
    
    if (!posts) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }
    
    return NextResponse.json({result: posts});
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const details:PostFormDetails = await req.json()

    const result = await query(
      'INSERT INTO posts (user_id, content, token, timeframe, prediction_value, prediction_sign) VALUES (?)',
      [details]
    );
    
    return NextResponse.json({ result: result});
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}