import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// //what does it mean production here where it decided, it is always set to production in env although we are in dev environment what is that ?? figure out ??
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};
//api version sanity studio ke vision se dala h dekhke
//phle yha direct value dali thi .env ki error t onhi check krne ko jb dta sanity se n aa rha tha but wha publish wali problem pta lgi to yha direct ki jagh  .env se hi dal di(kyuki ye credential hm github pr nhi dal skte code m ,yhi kam backenddb m bhi kr dena sanity ke credntial .env.local m dal ke fetch kra dena wah direct likhe h 2 files m khud hi aaye the install m but ab tum hata dena .env m dalke wha se usme fetch krna and env.local ko .gitignore m dal dena) ab ye bhi chal rhi h thik phle bhi error yha nhi sanity publish pr thi..pageInfo ke...

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//both these client and urlFor will be used multiple times so made it here in helper file and exported from here , and will be imported wherever needed

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
