const axios = require('axios');

// requires running `docker-compose up` at 'proxy' folder at proxied requests

const BASE_URL = "http://localhost:8888/"
// const BASE_URL = "https://api.1inch.dev/"
// Off-chain price feed checking

// TODO: Preferably opt for Oracle deployment instead

const SPOT_PRICE_SUFFIX = "price/v1.1/1"
// Get current price for token. Thus only call this when prediction timeframe has reached
export async function getCurrentTokenPrice(token_address: string) {
    const url = `${BASE_URL}${SPOT_PRICE_SUFFIX}`;

    const config = {
          headers: {
        "Authorization": `Bearer ${process.env.ONEINCH_API_KEY}`
    },
          // params: {},
          // paramsSerializer: {
          //   indexes: null
          // }
      };
    const body = {
      "tokens": [
        token_address
      ],
      "currency": "USD"
    };
    
    try {
      const response = await axios.post(url, body, config);
      console.log(response.data);
      return {price: response.data[token_address]}
    } catch (error) {
      console.error(error);
    }
}

// Address transaction history

const HISTORY_SUFFIX = "history/v2.0/history";

export async function getWalletHistory(address:string, limit:number) {
  // const limit = req.query.limit || 10;

  try {
    // chainId=1 for Ethereum only for PoC
    const constructedUrl = `${BASE_URL}${HISTORY_SUFFIX}/${address}/events?chainId=${1}&limit=${limit}`;

    const response = await axios.get(constructedUrl, {
      headers: {
        Authorization: `Bearer ${process.env.ONEINCH_API_KEY}`
      }
    });

    return {data: response.data.items};
  } catch (error:any) {
    console.error("Axios Error: ", error.response);
    return { error: "Failed to fetch wallet transactions" };
  }
};


// TODO: Can consider using Charts API for reputation history