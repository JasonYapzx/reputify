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
    const { details } = await req.json()

    if (!details?.title || !details?.content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const result = await query(
      'INSERT INTO posts (wallet_address) VALUES (?)',
      [details]
    );
    
    return NextResponse.json({ result: result};
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}