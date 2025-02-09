import Image from "next/image";
import { FC } from "react";
import { FaGithub, FaCloudDownloadAlt } from "react-icons/fa"; // React Icons import

const Hero: FC = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      {/* Image Section */}
      <div className="py-6 md:order-1 hidden md:block">
        <Image
          src="/home/front-view-kids-with-plastic-bag (2).jpg"
          alt="Astronaut in the air"
          width={620}
          height={0}
        />
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Transform Lives — Make a Difference!
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Join us in creating a brighter future for those in need. Our mission
          is to support underprivileged communities with essential resources and
          opportunities. Together, we can bring hope and dignity to every life.
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
            target="_blank"
            className="flex gap-1 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded"
            rel="noopener noreferrer"
          >
            <FaCloudDownloadAlt className="text-white w-5 h-5" />
            Loremlorem.
          </a>

          <a
            href="https://github.com/surjithctly/astroship"
            target="_blank"
            className="flex gap-1 items-center justify-center border border-black text-black px-4 py-2 rounded"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black w-4 h-4" />
            Loremlorem
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
