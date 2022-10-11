import { GraphQLClient } from "graphql-request";
const request = ({ query, variables, includeDrafts, excludeInvalid }) => {
  const headers = {
    authorization: "Bearer 9f2ba45dc4aec54954d7e6a5618647",
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
};

export default request;
