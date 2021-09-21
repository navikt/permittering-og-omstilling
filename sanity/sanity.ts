import { createClient } from "next-sanity";

const config = {
  dataset:
    process.env.NAIS_CLUSTER_NAME === "prod-gcp" ? "production" : "development",
  projectId: "utwe983u",
  token: process.env.SANITY_TOKEN,
  apiVersion: "2021-08-31",
  useCdn: false,
};

console.log("id?", process.env.SANITY_PROJECT_ID);

export const sanityClient = createClient(config);
