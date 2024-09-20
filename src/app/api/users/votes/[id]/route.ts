import { NextRequest, NextResponse } from 'next/server';

import { query } from "../../../../../utils/db";

// gets user profile
export async function GET (req: NextRequest, params: { id: string }) {
  try { 
    // get all votes pertaining to user
    const user_id = params.id
    const user = await query('SELECT * FROM votes WHERE user_id = ?', [user_id]);
    
    if (!user) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ result: user , user_id });
} catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
}
}