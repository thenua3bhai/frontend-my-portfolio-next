import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function ContactMe({ pageInfo }) {
  //by using register in input fields of form we will connect this hook to input Fields of form
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // comment to check is window hydration error to nhi aa rhi,nhi isse n aa rhi so uncomment it
    //this is templated email structure told by sonny see 2:24Hrs of it,,i don't know it's working bs kam kr jaye,,sonny ke m ka,m kr rha tha but mere m kam nhi kar rha,,check it after making it ????????
    //this will open the mail client of user to mail on my email,whichever here in front of mailto: with data user inputs in my form input fields
  }; //this will run on when we submit data,handleSubmit they gave us and onSubmit is our own submit handler
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-10 min-h-screen justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
        </div>
        {/* passing onSubmit function which we defined above ,using form onSubmit it will get rid of submit behavior of refresh page instead it will run the handle submit function on clocking submit button and in onSubmit function we can do our activity and pass it to handleSubmit and in our onSubmit our form input data will be passed as data object,we can use it in onSubmit,we can check by console.log data it will print our input data in our onSubmit function*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto "
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          {/* we need to specify that button is submit type for this form in html it is defaults set to submit but not here i tailwind not default set to submit button inside form ,by clicking this submit button it will default refresh the page so by react form hooks library we will prevent the default */}
          <button
            type="submit"
            className="bg-[#F7AB0A] px-10 py-5 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
