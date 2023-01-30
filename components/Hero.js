import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import BackgroundCircles from "./BackgroundCircles";
//we can build it's functanlty whiuch we using from this if we want ,but we dont't have to if have helping library ,,,but some libraries are heavier so fr productio its good to check size

function Hero({ pageInfo }) {
  console.log(urlFor(pageInfo.heroImage).url());
  const [text, count] = useTypewriter({
    //yha sonny pageInfo?.name use kr rha tha optional chainnig jbki hm n kr pa rhe pta nhi kyu krte hi ,code red ho jata h,ya to is highlighter ko nbhi pta us abre m yha hmara kuch updated nhi nh kyuki ye khasiyat feb 2022 m aayi h and typescript nad java script dono k liye h chekc krna kty n kam kr rha ...kya problem abhi hm diect . se access kr rhe h ?. se nhi ..usme error n aati agr value undefined h to undefined aati value.. pagenfo null ho fir bhi, jbki isme aayegi agr null pr . lgake access krneg to ..
    words: [
      `Hi my name is ${pageInfo.name}`,
      "Guy, who love's Milk ",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* we should use next image tag here but for now just we using simple img tag */}
      <img
        src={urlFor(pageInfo.heroImage).url()}
        //this url builder defined in sanity.js helper file and by calling it and .url() on it ,it gives url for image(img tag m src m link hi to dete h image ka jo ki data fetch m pageInfo ke bs address aaya tha
        // heroImage: {
        //   _type: 'image',
        //   asset: {
        //     _ref: 'image-05f3345dd3a70acbec43823485878e31a37c9aee-519x784-jpg',
        //     _type: 'reference'
        //   }
        // },
        //ye aaya tha heroImage m iske liye fir ise pass krke urlFor m and uski .url() call krke sanity m uploaded image ki actual url mili,,, url builder  urlFor sanity.js m bnaya se jise sanity ke image-url package ke createImageUrlBuildr function se create kiya(see sanity.js in this root directory hmne hi bnai h),,isliye harry urlBuilder le rha tha tb hm confuse the kyu le rha h but ab smjh gye...src m image ka pta dete h ..chahe proejct ,m ho to uski directory ka path agr net ph to uska http link,,chuki yha image pageInfo ke sath n aayi bs uska man lo address hash sa aaya uske bare m metadat pr image wahi h sanity cloud m isliye uska link img src m dala and usme browser n show krne ke liye fetck rk li iamge... wese ye effiecent nhi lgta h acha to ye hota ek bar fetch krke jha jha use honi h lg adete but server pr hoga t owo apne hisab se kr lenge yha img link aayega and ahmara browser us link se scr ke img ko fetch krleg ajb websete load krega
        //actual image to ab fetch hogi yha se link se) ,image is stored in sanity content lake on it's cloud ,we uploaded..,ie.ye local studio bhi live cloud se connected h
        //https://cdn.sanity.io/images/a9myib40/production/05f3345dd3a70acbec43823485878e31a37c9aee-519x784.jpg
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      {/* z-20 to make this div above of page and compeonets to make buttons clickable */}
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          {/* this href takes to the section of about id of current page so link used here */}
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
