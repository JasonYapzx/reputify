import { NextResponse } from 'next/server';
import { query } from '../../../utils/db';

export async function POST(req: Request) {

  try {
    const { wallet_address } = await req.json();
    const result = await query(
      'INSERT INTO users (wallet_address) VALUES (?)',
      [wallet_address]
    );
    
    return NextResponse.json({ result: result, wallet_address };
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}