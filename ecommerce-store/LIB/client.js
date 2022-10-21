import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "771umf9o", //Specifies which sanity project to connect to
  token: process.env.SANITY_PROJECT_DATABASE_TKN_KEY, //specific token generated to access sanity api
  apiVersion: "19-10-2022", //date of when api was made
  dataset: "production", //weather project in development or production
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

export { client, builder, urlFor };
