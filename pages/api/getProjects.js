import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]-> 
    }
`; //isme ye query kese ho rhi and kya lkr rhi h pta lgana jb next page m projects ko render kro data uska??baki bs smjh aa gyi ye n aayi,,,koi query samjh n aaye to vision m saniyt ke jake run kr lena sb smjh aajyega,,thoda groq cheat sheet bhi

export default async function handler(req, res) {
  const projects = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
