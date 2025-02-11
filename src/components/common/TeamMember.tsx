import React from "react"; // Adjust the import for your assets if needed
import SectionHead from "@/components/ui/SectionHead";
import Image from "next/image";

const publishedTeamMembers = Array.from({ length: 3 }, (_, index) => ({
  name: `Team Member ${index + 1}`,
  title: `Position ${index + 1}`,
  avatar: {
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280",
    alt: `team member picture ${index + 1}`,
  },
}));
const TeamMember = () => {
  return (
    <>
      <SectionHead title={"About"} desc={"Our Team Member"} />

      <div className="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
        <h2 className="font-bold text-3xl text-gray-800">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="text-lg leading-relaxed text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo
          voluptatibus commodi et pariatur! Quo at blanditiis laboriosam error?
          Asperiores?
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
        {publishedTeamMembers.map((teamMember, index) => (
          <div key={index} className="group">
            <div className="w-full aspect-square">
              <Image
                src={teamMember.avatar.src}
                alt={teamMember.avatar.alt}
                sizes="(max-width: 800px) 100vw, 400px"
                width={400}
                height={400}
                className="w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
              />
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-lg text-gray-800">{teamMember.name}</h2>
              <h3 className="text-sm text-slate-500">{teamMember.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamMember;
