import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldvym66h1yur01rt68nqghfb/master";

export const getTeamMember = async () => {
  const query = gql`
    query TeamMembers {
      teamMembersConnection {
        edges {
          node {
            name
            position
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

  return result.teamMembersConnection.edges;
};

export const getTeamMemberDetails = async (name) => {
  const query = gql`
    query GetTeamMemberDetail($name: String!) {
      teamMembers(where: { name: $name }) {
        name
        position
        id
        beschreibung {
          raw
        }
        foto {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { name });
  return result.teamMembers;
};

export const getVideos = async () => {
  const query = gql`
    query GetVideos {
      ytVideosConnection {
        edges {
          node {
            beschreibung {
              text
            }
            titel
            videoLink
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.ytVideosConnection.edges;
};
