// import Tick from "@/components/common/Tick";
// import Link from "next/link";
// import React from "react";

// const Pricing = ({ plan }) => {
//   return (
//     <div>
//       <div className="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
//         <div className="text-center">
//           <h4 className="text-lg font-medium text-gray-400">{plan.name}</h4>
//           <p className="mt-3 text-4xl font-bold text-black md:text-4xl">
//             {typeof plan.price === "object" ? plan.price.monthly : plan.price}
//           </p>
//           {/* {
//                 plan.price.original && (
//                   <p className="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
//                     {plan.price.original}
//                   </p>
//                 )
//               } */}
//         </div>
//         <ul className="grid mt-8 text-left gap-y-4">
//           {plan.features.map((item, index) => (
//             <li key={index} className="flex items-start gap-3 text-gray-800">
//               <Tick className="w-6 h-6" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="flex mt-8">
//           <Link
//             href={plan.button.link || "#"}
//             block
//             style={plan.popular ? "primary" : "outline"}
//           >
//             {plan.button.text || "Get Started"}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
import React from "react";
import SectionHead from "@/components/ui/SectionHead";
import PricingCard from "@/components/PricingCard";

interface PricingPlan {
  name: string;
  price:
    | string
    | { monthly: string; annual: string; discount: string; original: string };
  popular: boolean;
  features: string[];
  button: {
    text: string;
    link: string;
  };
}

const pricing: PricingPlan[] = [
  {
    name: "Personal",
    price: "Free",
    popular: false,
    features: [
      "Lifetime free",
      "Up to 3 users",
      "Unlimited Pages",
      "Astro Sub domain",
      "Basic Integrations",
      "Community Support",
    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Startup",
    price: {
      monthly: "$19",
      annual: "$16",
      discount: "10%",
      original: "$24",
    },
    popular: true,
    features: [
      "All Free Features",
      "Up to 20 users",
      "20 Custom domains",
      "Unlimited Collaborators",
      "Advanced Integrations",
      "Priority Support",
    ],
    button: {
      text: "Get Started",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "All Pro Features",
      "Unlimited Custom domains",
      "99.99% Uptime SLA",
      "SAML & SSO Integration",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];

const Pricing: React.FC = () => (
  <>
    <SectionHead
      title="Pricing"
      desc={"Simple & Predictable pricing. No Surprises."}
    />

    <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      {pricing.map((item, index) => (
        <PricingCard key={index} plan={item} />
      ))}
    </div>
  </>
);

export default Pricing;
