import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbc49k6q0ajf01uj4zyi0ykf/master";

export const getBlogPost = async () => {
  const query = gql`
    query GetBlogPost {
      neuerBlogPostsConnection {
        edges {
          node {
            datum
            foto {
              url
            }
            id
            titel
            urlName
            kategorie
            erstelltDurch
            postContent {
              raw
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.neuerBlogPostsConnection.edges;
};

export const getBlogPostDetails = async (urlName) => {
  const query = gql`
    query GetBlogPostDetails($urlName: String!) {
      neuerBlogPosts(where: { urlName: $urlName }) {
        datum
        foto {
          url
        }
        id
        titel
        urlName
        kategorie
        erstelltDurch
        postContent {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { urlName });
  return result.neuerBlogPosts;
};
