import { client } from "@/graphql/client";
import { GET_PAGE_CONTENT } from "@/graphql/queries/GET_PAGE_CONTENT";
import React from "react";

export default function DynamicPage(props: any) {
  console.log("dynamic page props: ", props);

  return <div>DynamicPage</div>;
}

export async function getServerSideProps(context: any) {
  // Fetch data using GraphQL query based on the route
  const { slug } = context.params;

  const { data } = await client.query({
    query: GET_PAGE_CONTENT,
    variables: { slug },
  });

  // Pass the fetched data to the page component as props
  return { props: { data: data?.results?.nodes } };
}
