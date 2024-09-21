import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../../../utils/db';

// No need GET, vote counts should be in Post?


// Votes for post of post_id
export async function POST(req: NextRequest, params: { id: string }) {
  try { 
    const post_id = params.id;
    const { user_id, vote_sign } = await req.json();

    // TODO: handle atomicity??
    const result = await query(
      'INSERT INTO votes (post_id, user_id, vote_sign, stake_quantity) VALUES (?, ?, ?, ?)',
      [post_id, user_id, vote_sign]
    );


    
    return NextResponse.json({ result: result});
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}