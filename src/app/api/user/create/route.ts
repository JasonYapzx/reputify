import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../../utils/db';

// Create user profile
export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body to get wallet_address
    const { wallet_address } = await request.json();

    // Validate wallet_address
    if (!wallet_address) {
      return NextResponse.json({ message: 'wallet_address is required' }, { status: 400 });
    }

    // Insert the wallet_address into the database
    const int_result = await query("INSERT INTO users (wallet_address, created_at) VALUES (?, DEFAULT)", [wallet_address]);

    // Fetch all users (optional)
    const statement = "SELECT * FROM users;";
    const result = await query(statement);
    
    return NextResponse.json({ result });
  } catch (err) {
    console.log('ERROR: API - ', (err as Error).message);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}