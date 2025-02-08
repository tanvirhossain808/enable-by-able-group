import React from "react";
import Tick from "./common/Tick";
// Assuming you have a Tick component
// Assuming you have a Link component

interface PricingCardProps {
  plan: {
    name: string;
    price: string | { monthly: string; annual: string; original: string };
    features: string[];
    button: {
      text: string;
      link: string;
    };
    popular: boolean;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }: { plan: any }) => {
  const isPriceObject = typeof plan.price === "object";
  const monthlyPrice = isPriceObject ? plan.price.monthly : plan.price;
  const originalPrice =
    isPriceObject && plan.price?.original ? plan.price.original : null;

  return (
    <div className="flex flex-col w-full border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
      <div className="text-center">
        <h4 className="text-lg font-medium text-gray-400">{plan.name}</h4>
        <p className="mt-3 text-4xl font-bold text-black md:text-4xl">
          {monthlyPrice}
        </p>
        {originalPrice && (
          <p className="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {originalPrice}
          </p>
        )}
      </div>

      <ul className="grid mt-8 text-left gap-y-4">
        {plan.features.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-800">
            <Tick className="w-6 h-6" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex mt-8">
        <button className="border border-black rounded-lg w-full py-2">
          {plan.button.text || "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
