import axios from 'axios';
const DOMAIN = "6aef0b-62.myshopify.com";
const TOKEN = "7fb3263acdc29b595dc18936f609344a";
export async function shopifyFetch(query, variables = {}) {
    // const TOKEN = process.env.DOMAIN;
    // const DOMAIN = process.env.TOKEN;
    console.log("DOMAIN:", DOMAIN);
    console.log("TOKEN:", TOKEN);
try {
      const res = await axios.post(
        `https://${DOMAIN}/api/2024-10/graphql.json`,
        {
          query,
          variables
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": TOKEN,
          }
        }
      );
      return res;
    
} catch (error) {
    console.error("Shopify Fetch Error:", error);
}
}
