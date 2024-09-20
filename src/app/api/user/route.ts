import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../utils/db';

// Gets user profile
export async function GET(request: NextRequest) {
  try {
    // Parse the URL and get query parameters
    const user_id = request.nextUrl.searchParams.get('user_id'); // Use .get() to extract the value
    
    const result = await query('SELECT * FROM users WHERE id = ?', [user_id]); // Get the query result
    const user = result[0]; // Adjust according to the structure of the result

    // Check if user exists
    if (!user) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ result: user, user_id }); // Return the user object
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
