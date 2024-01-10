import { client } from "@/graphql/client";
import { GET_PAGE_CONTENT } from "@/graphql/queries/GET_PAGE_CONTENT";
import React, { useEffect } from "react";
import Error from "./error";

export default function DynamicPage(props: any) {
  console.log("dynamic page props: ", props);
  const { title, error } = props;

  useEffect(() => {
    window.document.title = title;
  }, [title]);

  if (error) {
    return (
      <Error
        error={error}
        reset={() => {
          window.location.replace("/");
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <h1>DynamicPage</h1>
      <React.Fragment>
        <h2>{title}</h2>
      </React.Fragment>
    </React.Fragment>
  );
}

export async function getServerSideProps(context: any) {
  // Fetch data using GraphQL query based on the route
  const { slug } = context.params;

  console.log(context.params);

  const { data } = await client.query({
    query: GET_PAGE_CONTENT,
    variables: { slug: `/${slug}` },
  });

  const pdf = data?.results?.nodes?.[0];

  // Pass the fetched data to the page component as props
  return {
    props: { ...pdf, error: !pdf ? 404 : null },
    ...pdf,
    error: !pdf ? 404 : null,
  };
}
