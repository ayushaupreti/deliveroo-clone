import { createClient } from "@sanity/client";
import imageUrlBuilding from "@sanity/image-url";

const client = createClient({
  projectId: "doc0cmf1",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

// pulling url from sanity
const builder = imageUrlBuilding(client);
export const urlFor = (source) => builder.image(source);

export default client;
