import Image from "next/image";
import { FC } from "react";
import { FaGithub, FaCloudDownloadAlt } from "react-icons/fa"; // React Icons import

const Hero: FC = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      {/* Image Section */}
      <div className="py-6 md:order-1 hidden md:block">
        <Image
          src="/assets/hero.png"
          alt="Astronaut in the air"
          width={620}
          height={0}
        />
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Marketing website done with Astro
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites &
          landing pages. Built with Astro.build and TailwindCSS. You can quickly
          create any website with this starter.
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
            Download for Free
          </a>

          <a
            href="https://github.com/surjithctly/astroship"
            target="_blank"
            className="flex gap-1 items-center justify-center border border-black text-black px-4 py-2 rounded"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black w-4 h-4" />
            GitHub Repo
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
