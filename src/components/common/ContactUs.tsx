"use client";
const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            libero?
          </p>
          <div className="text-gray-700 space-y-2">
            <p>📍 Lorem ipsum dolor sit amet consectetur.</p>
            <p>📧 hello@lorem.com</p>
            <p>☎ +0004004</p>
          </div>
        </div>

        {/* Contact Form */}

        <div className="map-container">
          <iframe
            title="Google Map"
            className="map-iframe"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            allowFullScreen
          ></iframe>

          <style jsx>{`
            .map-container {
              position: relative;
              width: 100%;
              max-width: 600px;
              height: 400px;
              margin: auto;
            }
            .map-iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
