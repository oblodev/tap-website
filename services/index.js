import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldvym66h1yur01rt68nqghfb/master";

export const getTeamMember = async () => {
  const query = gql`
    query TeamMembers {
      teamMembersConnection(orderBy: num_ASC) {
        edges {
          node {
            name
            position
            num
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
        num
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

export const getDogMember = async () => {
  const query = gql`
    query DogMembers {
      dogMembersConnection {
        edges {
          node {
            name
            position
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

  return result.dogMembersConnection.edges;
};

export const getDogMemberDetails = async (name) => {
  const query = gql`
    query GetDogMemberDetail($name: String!) {
      dogMembers(where: { name: $name }) {
        name
        position
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
  return result.dogMembers;
};

export const getTopMember = async () => {
  const query = gql`
    query TopMembers {
      christianIrisesConnection(orderBy: num_ASC) {
        edges {
          node {
            vorname
            nachname
            position
            num
            id
            beschreibung {
              raw
            }
            foto {
              url
            }
            fotoSeite {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.christianIrisesConnection.edges;
};

export const getTopMemberDetails = async (vorname) => {
  const query = gql`
    query GetTopMemberDetail($vorname: String!) {
      christianIrises(where: { vorname: $vorname }) {
        vorname
        nachname
        position
        num
        id
        beschreibung {
          raw
        }
        fotoSeite {
          url
        }
        foto {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { vorname });
  return result.christianIrises;
};

export const getLeistungenBully = async () => {
  const query = gql`
    query LeistungenBully {
      leistungenBullysConnection {
        edges {
          node {
            titel
            id
            kurzbeschreibung
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

  return result.leistungenBullysConnection.edges;
};
