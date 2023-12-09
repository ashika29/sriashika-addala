import { gql } from "@apollo/client";

export const GET_PAGE_CONTENT = gql`
  query getPages {
    results: allPages {
      nodes {
        id: pgId
        heading: pgLabel
        path: pgPath
      }
    }
  }
`;
