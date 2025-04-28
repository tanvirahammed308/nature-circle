import React from 'react'
import img1 from "../assets/img/contact/contact-2.png"

const Contact = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto mt-15'>
        {/* how can help */}
        <div className='flex flex-col md:flex-row gap-5 px-5 md:px-0'>
            <div className='w-full md:w-1/4 space-y-4'>
            <h3 className='text-gray-500'>How can help you ?</h3>
            <h1 className='text-3xl font-bold text-gray-800'>Let us know how we can help you</h1>
            <p className='text-sm text-gray-500'>
            At Natural Circle, we're here to make your experience seamless and enjoyable. Whether you have questions about our products, need assistance with an order, or want to learn more about living naturally, our team is ready to help.


            </p>
            <p  className='text-sm text-gray-500'>
            Let us know how we can assist you, and we'll make sure you get the support you need. Your satisfaction is our priority!
            </p>

            </div>
            <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            <div className='space-y-3'>
                <h1 className='text-xl font-bold text-gray-800'>01.Visit Feedback</h1>
                <p className='text-sm text-gray-600'>Your experience matters to us at Natural Circle. We’d love to hear your thoughts on our products, website, and services. Whether you had a great experience or see room for improvement, your feedback helps us grow and serve you better.</p>
            </div>
            <div className='space-y-3'>
                <h1 className='text-xl font-bold text-gray-800'>02.Employer Services</h1>
                <p className='text-sm text-gray-600'>At Natural Circle, we offer specialized services to employers who want to provide their employees with access to high-quality organic products. Our Employer Services include customized wellness packages, bulk order discounts, and exclusive corporate deals.</p>
            </div>
            <div className='space-y-3'>
                <h1 className='text-xl font-bold text-gray-800'>03.Billing Inquiries</h1>
                <p className='text-sm text-gray-600'>If you have any questions or concerns regarding your order or billing, Natural Circle is here to help. Our dedicated support team is available to assist you with payment issues, invoice requests, or any other billing-related inquiries. </p>
            </div>
            <div className='space-y-3'>
                <h1 className='text-xl font-bold text-gray-800'>04.General Inquiries</h1>
                <p className='text-sm text-gray-600'>Have questions about our products, services, or anything else? Natural Circle is here to assist you! Whether you're looking for more information about our organic offerings, shipping details, or our sustainability practices, our team is ready to provide the answers you need.</p>
            </div>
            
            
            

            </div>
        </div>
        {/* google map */}
        <div  style={{ width: '100%' }} className='mt-10 px-5 md:px-0'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5536586075063!2d90.39456267410462!3d23.869978284177513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56316c49d07%3A0x62e6d117f1d23d75!2sUttara%2C%20Sector%207%20Park!5e0!3m2!1sen!2sbd!4v1745819749056!5m2!1sen!2sbd"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    {/* form */}
    <div className="flex flex-col-reverse md:flex-row justify-between items-center p-8 mt-10">
      <div className="flex-1 max-w-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Drop Us a Line</h2>
        <p className="text-sm text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#019267] text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex-1 p-4 flex justify-center items-center">
        <img
          src={img1} // Replace with your image URL
          alt="Contact"
          className="w-[350px] h-auto rounded-lg"
        />
      </div>
    </div>

    </div>
  )
}

export default Contact