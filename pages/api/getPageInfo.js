import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

//why we are using groq keyword before query, in harry project we did not use it an it worked there then what is the use of extra this ?? figure out..

const query = ' *[_type == "pageInfo"][0]'; //kyuki ek hi object bnaya h ek hi m hu na ,,jbki baki sb document multiple ho skte h eg. skill so usme pura array hi getch kiya h kyuki kai skill ek document skill type ke ie. kai element of array h ese hi Experinecses and socials m h , projetcs thoda alg query ki h,jbki yha 1 elemnt ka array hoga waha so phla element le liya taki direct use use kr ske baki m jinme kai skill ya proejct ka array aayega t o unko access krne ke liye map use krenge sbko render krne ke liye..

//,koi query samjh n aaye to vision m saniyt ke jake run kr lena sb smjh aajyega,,thoda groq cheat sheet bhi

export default async function handler(req, res) {
  const pageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
