const SHOP = "0v09i8-d1.myshopify.com";
const TOKEN = "2f9abd564eea700e0ec495acf618c02f";

export async function getProducts() {
  const query = `
    {
      products(first: 12) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(`https://${SHOP}/api/2025-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json.data.products.edges;
}
