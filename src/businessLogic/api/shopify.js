const DOMAIN = import.meta.env.VITE_DOMAIN;
const TOKEN = import.meta.env.VITE_TOKEN;
import axios from 'axios';
export const fetchApi = async ({query}) => {
        try {
            const res = await axios.post(
                `https://${DOMAIN}/api/2024-10/graphql.json`,
                {
                    query: query,
                    variables: {
                        handle: "best-sellers"
                    }
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