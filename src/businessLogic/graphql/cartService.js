const DOMAIN = import.meta.env.VITE_DOMAIN;
const TOKEN = import.meta.env.VITE_TOKEN;
import axios from "axios";
import { CART_CREATE_MUTATION } from "../graphql/query";

export const createCartService  = async (variables) => {
  return axios.post(
    `https://${DOMAIN}/api/2024-10/graphql.json`,
    {
      query: CART_CREATE_MUTATION,
      variables,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
    }
  );
};