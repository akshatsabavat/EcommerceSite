import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "771umf9o", //Specifies which sanity project to connect to
  token: process.env.SANITY_PROJECT_DATABASE_TKN_KEY, //specific token generated to access sanity api
  apiVersion: "2022-10-21", //date of when api was made
  dataset: "production", //weather project in development or production
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
