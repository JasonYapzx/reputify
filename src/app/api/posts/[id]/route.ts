import { NextRequest, NextResponse } from 'next/server';
import {query} from '../../../../utils/db'

export async function GET (req: NextRequest) {
  try {
    const { post_id } = await req.json();
    const user = await query('SELECT * FROM posts WHERE id = ?', [post_id]);
    
    if (!user) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ result: user , post_id});
} catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
}
}


export async function POST(req: Request) {
  // PLACEHOLDER
  return NextResponse.json({data: 'test'}, { status: 201 });
}