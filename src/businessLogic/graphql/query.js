export const getCollectionByHandler = `
query getCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    products(first: 8) {
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

export const getProductByHandle = `
        query getProduct($handle: String!) {
          productByHandle(handle: $handle) {
            id
            title
            handle
            descriptionHtml
            variants(first: 50) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
            images(first: 5) {
              edges {
                node {
                  url(transform: { maxWidth: 600 })
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
      `;

// query.js

export const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
