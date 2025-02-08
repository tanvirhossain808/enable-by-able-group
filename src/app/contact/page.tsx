const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Astroship</h2>
          <p className="text-gray-600 mb-4">
            Have something to say? We are here to help. Fill up the form or send
            an email or call.
          </p>
          <div className="text-gray-700 space-y-2">
            <p>📍 1734 Sanfrancisco, CA 93063</p>
            <p>📧 hello@astroshipstarter.com</p>
            <p>☎ +1 (987) 4587 899</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
