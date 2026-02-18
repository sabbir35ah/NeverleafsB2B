
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


export const getProductByHandle =
`
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


      export const postCartData = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
              totalQuantity
              lines(first: 20) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title                          # Variant title (e.g. "Small / Blue")
                        price {
                          amount
                          currencyCode
                        }
                        image {                       # ✅ Variant image
                          url(transform: { maxWidth: 400 })
                          altText
                        }
                        product {                     # ✅ Parent product details
                          title                        # Product title (e.g. "Cotton T-Shirt")
                          handle
                          featuredImage {
                            url(transform: { maxWidth: 400 })
                            altText
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `;


