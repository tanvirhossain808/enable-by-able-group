import Link from "next/link";

const Cta = () => {
  return (
    <div className="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-6xl tracking-tight">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, iste?
      </h2>
      <p className="text-slate-400 mt-4 text-lg md:text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis maxime
        impedit illo deserunt ex similique hic nulla totam asperiores et.
      </p>
      <div className="flex mt-5">
        <Link href={"#"}> Get Started</Link>
      </div>
    </div>
  );
};

export default Cta;
