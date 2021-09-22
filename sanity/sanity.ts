import { createClient } from "next-sanity";

const config = {
  dataset:
    process.env.NAIS_CLUSTER_NAME === "prod-gcp" ? "production" : "development",
  projectId: "utwe983u",
  apiVersion: "2021-08-31",
  useCdn: false,
};

export const sanityClient = createClient(config);
