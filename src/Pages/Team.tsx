import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type FacultyMember = {
  name: string;
  designation: string;
  imageUrl: string;
};

type LeadTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type TechTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type GraphicsTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type PRTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type VolunteerTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

const Team = () => {
  const faculty: FacultyMember[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  const tech: TechTeam[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  const lead: LeadTeam[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  const graphics: GraphicsTeam[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  const pr: PRTeam[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  const volunteer: VolunteerTeam[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
    {
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-[#F0EAD6] w-full h-full py-8">
      <h3 className="text-6xl text-[#2C4A41] text-center font-light tracking-tighter">
        Meet the team
      </h3>

      <h2 className="text-4xl text-center text-[#71d2a1] font-black italic">
        Faculty Members
      </h2>
      <div className="faculty-members flex flex-wrap gap-12 w-4/5 justify-center items-center p-10">
        {faculty.map((facultyMember) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
            <div className="relative aspect-[4/5] rounded-full aspect-square overflow-hidden shadow-xs">
              <img
                className="rounded-full aspect-square object-cover w-xs object-cover transition-transform duration-700 group-hover:scale-110"
                src={facultyMember.imageUrl}
                alt={facultyMember.name}
              />
            </div>
            <div className="details flex flex-col items-center justify-center">
              <div className="text-[#2C4A41] name font-bold text-center m-4">
                {facultyMember.name}
              </div>
              <div className="designation text-center text-gray-500">
                {facultyMember.designation}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl text-center text-[#71d2a1] font-black italic">Team Members</h2>
      <div className="team-members flex flex-wrap gap-12 w-full justify-center items-center py-4">
        <Tabs
          defaultValue="lead"
          className="flex flex-col gap-12 justify-center items-center w-full">
          <TabsList className="flex gap-4 bg-[#F0EAD6]">
            <TabsTrigger
              value="lead"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165]">
              Lead
            </TabsTrigger>
            <TabsTrigger
              value="tech"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165]">
              Tech
            </TabsTrigger>
            <TabsTrigger
              value="graphics"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165]">
              Graphics
            </TabsTrigger>
            <TabsTrigger
              value="pr"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165]">
              PR
            </TabsTrigger>
            <TabsTrigger
              value="volunteer"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165]">
              Volunteer
            </TabsTrigger>
          </TabsList>
          <div className="flex flex-wrap w-4/5 gap-12 justify-center items-center p-10">
            <TabsContent
              value="lead"
              className="w-full flex flex-wrap gap-12 justify-center items-center">
              {lead.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
                  <div className="relative aspect-[4/5] rounded-full aspect-square overflow-hidden shadow-xs">
                    <img
                      className="rounded-full aspect-square object-cover w-xs object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center m-4">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="tech"
              className="w-full flex flex-wrap gap-12 justify-center items-center">
              {tech.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
                  <div className="relative aspect-[4/5] rounded-full aspect-square overflow-hidden shadow-xs">
                    <img
                      className="rounded-full aspect-square object-cover w-xs object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center m-4">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="graphics"
              className="w-full flex flex-wrap gap-12 justify-center items-center">
              {graphics.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
                  <div className="relative aspect-[4/5] rounded-full aspect-square overflow-hidden shadow-xs">
                    <img
                      className="rounded-full aspect-square object-cover w-xs object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center m-4">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="pr"
              className="w-full flex flex-wrap gap-12 justify-center items-center">
              {pr.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
                  <div className="relative aspect-[4/5] rounded-full aspect-square overflow-hidden shadow-xs">
                    <img
                      className="rounded-full aspect-square object-cover w-xs object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center m-4">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="volunteer"
              className="w-full flex flex-wrap gap-12 justify-center items-center">
              {volunteer.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
                  <div className="relative aspect-[4/5] rounded-full aspect-square overflow-hidden shadow-xs">
                    <img
                      className="rounded-full aspect-square object-cover w-xs object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center m-4">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Team;
