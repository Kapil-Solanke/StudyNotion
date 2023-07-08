import React from "react";

import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  
  return (
    <div className='mx-auto max-sm:w-full max-sm:p-2'>
      <div className="flex mb-3 flex-col gap-2">
      <div className=" text-center font-bold text-3xl">
        Get in Touch
      </div>
      <div className="text-richblack-300 text-center">
        We'd love to here for you, Please fill out this form.
      </div>
      </div>
      <ContactUsForm/>
    </div>
  )
}

export default ContactFormSection
