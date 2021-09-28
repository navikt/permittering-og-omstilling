import { createClient } from "next-sanity";

const config = {
  dataset: process.env.NODE_ENV,
  projectId: "utwe983u",
  apiVersion: "2021-08-31",
  useCdn: false,
};

export const sanityClient = createClient(config);
