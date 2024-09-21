import { NextResponse } from 'next/server';
import { getCurrentTokenPrice, getWalletHistory } from '../../../../lib/1inch';

// Define the GET request handler
export async function GET(req: Request) {

  // example 1inch address
  const price = await getCurrentTokenPrice("0x111111111117dc0aa78b770fa6a738034120c302");
  // our own demo address
  const history = await getWalletHistory('0x742d35Cc6634C0532925a3b844Bc454e4438f44e', 10);
  
  return NextResponse.json({
      price,
      history
    },
    { status: 200 });
}
