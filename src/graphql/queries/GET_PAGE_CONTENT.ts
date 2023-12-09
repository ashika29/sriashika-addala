import { gql } from "@apollo/client";

export const GET_PAGES = gql`
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

export const GET_PAGE_CONTENT = gql`
  query getPageBySlug($slug: String) {
    results: allVwMetaconfigDummies(condition: { pgPath: $slug }, first: 1) {
      nodes {
        id: pgId
        title: pgLabel
        slug: pgPath
        body
      }
    }
  }
`;
