
import { useEffect, useState } from "react";
import { shopifyFetch } from "../api/shopify";
import { COLLECTION_BY_HANDLE } from "../graphql/collection.js";
export function useCollection(handle) {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const response = shopifyFetch(COLLECTION_BY_HANDLE, { handle });
      // .then((res) => setCollection(res.data.collection))
      // .finally(() => setLoading(false));
      console.log("Shopify Response:", response);
  }, [handle]);

  return { collection, loading };
}
