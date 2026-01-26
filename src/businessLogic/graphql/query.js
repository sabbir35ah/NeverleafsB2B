
export const getCollectionByHandler = `
query getCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    products(first: 20) {
      edges {
        node {
          id
          title
          handle

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }

          images(first: 2) {
            edges {
              node {
                url
                altText
              }
            }
          }

          metafields(
            identifiers: [
              { namespace: "filter", key: "hoogte" }
              { namespace: "custom", key: "blades" }
            ]
          ) {
            namespace
            key
            value
            type
          }
        }
      }
    }
  }
}

`;

