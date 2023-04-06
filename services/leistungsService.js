import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldvym66h1yur01rt68nqghfb/master";

export const getDiagnostik = async () => {
  const query = gql`
    query Diagnostik {
      diagnostiksConnection {
        edges {
          node {
            titel
            id
            beschreibung {
              raw
            }
            foto {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.diagnostiksConnection.edges;
};

export const getChirurgie = async () => {
  const query = gql`
    query Chirurgie {
      chirurgiesConnection {
        edges {
          node {
            titel
            id
            beschreibung {
              raw
            }
            foto {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.chirurgiesConnection.edges;
};

export const getInterne = async () => {
  const query = gql`
    query Interne {
      interneMedizinsConnection {
        edges {
          node {
            titel
            id
            beschreibung {
              raw
            }
            foto {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.interneMedizinsConnection.edges;
};
