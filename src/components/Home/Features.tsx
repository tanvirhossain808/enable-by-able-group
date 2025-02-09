import { FC } from "react";
import {
  FaBriefcase,
  FaWindowMaximize,
  FaDatabase,
  FaRobot,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const features = [
  {
    title: "lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aut.",
    icon: <FaBriefcase />,
  },
  {
    title: "lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aut.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aut.",
    icon: <FaDatabase />,
  },
  {
    title: "lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aut.",
    icon: <FaRobot />,
  },
  {
    title: "lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aut.",
    icon: <FaSearch />,
  },
  {
    title: "lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aut.s",
    icon: <FaUser />,
  },
];

const Features: FC = () => {
  return (
    <div>
      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="text-lg mt-4 text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptatem assumenda a numquam amet ipsum deserunt dignissimos quidem
          temporibus necessitatibus?
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {features.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
              <div className="text-white">{item.icon}</div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
