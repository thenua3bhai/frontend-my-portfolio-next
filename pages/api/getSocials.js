import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"; //we need it multiple places and same lines of code so made it in another sanity helper file and import it wherever needed

const query = groq`
    *[_type == "social"]
`;

// const config = {
//   //what does it mean production here, it is always set to production in env although we are in dev environment what is that ?? figure out ??
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2021-03-25",
//   useCdn: process.env.NODE_ENV === "production",
// };

// // Set up the client for fetching data in the getProps page functions
// export const sanityClient = createClient(config);

//how this sanity client fetching req. we did not give it endpoint whether it is localhost or sanity cloud how it will figure out on what basis we give dataset to production in config file ??? only but no url given to it ?? how it will get and from where url on what basis and which parameters ??..
export default async function handler(req, res) {
  const socials = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
