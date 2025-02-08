import React from "react";

interface SectionHeadProps {
  align?: "left" | "center" | "right";
  title: string;
  desc: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({
  align = "center",
  title,
  desc,
}) => {
  return (
    <div className={`mt-16 ${align === "center" ? "text-center" : ""}`}>
      <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        {title}
      </h1>
      <p className="text-lg mt-4 text-slate-600">{desc}</p>
    </div>
  );
};

export default SectionHead;
