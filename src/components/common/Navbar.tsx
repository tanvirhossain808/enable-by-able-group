import React from "react";
// import Dropdown from './dropdown';
// import { Astronav, MenuItems, MenuIcon } from "astro-navbar";
import Link from "next/link";

// const menuitems = [
//   {
//     title: "Features",
//     path: "#",
//     children: [
//       { title: "Action", path: "/" },
//       { title: "Another action", path: "#" },
//       { title: "Dropdown Submenu", path: "#" },
//       { title: "404 Page", path: "/404" },
//     ],
//   },
//   {
//     title: "Pricing",
//     path: "/pricing",
//   },
//   {
//     title: "About",
//     path: "/about",
//   },
//   {
//     title: "Blog",
//     path: "/blog",
//   },
//   {
//     title: "Contact",
//     path: "/contact",
//   },
//   {
//     title: "Pro Version",
//     badge: true,
//     path: "https://astroship-pro.web3templates.com/",
//   },
// ];
const navbarData = [
  { name: "Activities", route: "/activities" },
  { name: "Volunteers", route: "/volunteers" },
  { name: "Pricing", route: "/pricing" },
  { name: "About", route: "/about" },
  { name: "Blog", route: "/blog" },
  { name: "Contact", route: "/contact" },
];
const Navbar: React.FC = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center my-5">
      {/* <Astronav> */}
      <div className="flex w-full lg:w-auto items-center justify-between">
        <Link href="/" className="text-lg">
          <span className="font-bold text-slate-800">Hope</span>
          <span className="text-slate-500">Rise</span>
        </Link>
        <div className="block lg:hidden">
          {/* <MenuIcon className="w-4 h-4 text-gray-800" /> */}
        </div>
      </div>
      {/* <MenuItems className="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0"> */}
      <div className="flex items-center gap-4">
        {navbarData.map((data, index) => (
          <Link href={data.route} key={index}>
            {data.name}
          </Link>
        ))}
      </div>
      <div className="lg:hidden flex items-center mt-3 gap-4">
        <Link href="#">Log in</Link>
        <Link href="#">Sign up</Link>
      </div>
      {/* </MenuItems> */}
      {/* </Astronav> */}
      <div>
        <div className="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <Link href="#">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
