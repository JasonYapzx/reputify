import { NextRequest, NextResponse } from "next/server";

import { query } from '../../../../utils/db';



export async function GET(request: NextRequest) {

    try {

        const int_result = await query("INSERT INTO users (wallet_address, created_at) VALUES ('paoopwie', DEFAULT)");

        const statement = "SELECT * FROM users;";

        const result = await query(statement);

        return NextResponse.json({ result: result });
    } catch (err) {
        console.log('ERROR: API - ', (err as Error).message);
        const response = {
            error: (err as Error).message,
            returnedStatus: 500,
        }
        return NextResponse.json(response, { status: 500 });
    }

}
