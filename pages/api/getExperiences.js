import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "experience"] {
      ...,
      technologies[]-> 
    }
`; //ye tencnlogies lgane se wo bhi pura object aa jyega wrna sirf object likha tha lekin pura accessible object n aata so agr object ke inside m object array ya object ho to wo ese hi aata h,, vision m krke dekhna
//sanity ko next ke backend se call kr rhe and next ke backend ko fronentend se utils m se..
//chunki db query backend se safe rhti h iska code browser m n jata and ye queries or db credential expose n hote so it's safe t ode it ,,next course m bola tha..yha dekh bhi lo dikh rha ..query ye h and credentiL Sanity client m honge jb hm usme config pass krke use bnate.. so frontned se ise api ko call krneg so usme iske link ke alwa kuch n dikhega iska code nhi bs jo output degi wahi..

export default async function handler(req, res) {
  const experiences = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
