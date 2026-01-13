import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";


type FacultyMember = {
  name: string;
  designation: string;
  imageUrl: string;
};

type LeadTeam = {
  name: String;
  class: String;
  imageUrl: String;
}

type TechTeam = {
  name: String;
  class: String;
  imageUrl: String;
}

type GraphicsTeam = {
  name: String;
  class: String;
  imageUrl: String;
} 

type PRTeam = {
  name: String;
  class: String;
  imageUrl: String;
}

type VolunteerTeam = {
  name: String;
  class: String;
  imageUrl: String;
}



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
    },{
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      designation: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
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
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
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
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
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
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
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
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\10055968_hbbxdv.jpg",
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },{
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
    },{
      name: "Prof. Arman Rasool Faridi",
      class: "Head of Department",
      imageUrl: "public\\assests\\300-1704308884_qaqm1n.png",
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center justify-center bg-gray-100 w-full h-full">

      <h3 className="text-4xl font-bold text-center">Meet the team</h3>
  
        <h2 className="text-2xl font-bold text-center">Faculty Members</h2>
      <div className="faculty-members flex flex-wrap gap-12 w-4/5 justify-center items-center p-10">
        {faculty.map((facultyMember) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
            <img className="rounded-full aspect-square object-cover w-xs" src={facultyMember.imageUrl} alt={facultyMember.name} />
            <div className="details flex flex-col items-center justify-center gap-1">
              <div className="name font-bold text-center m-4">{facultyMember.name}</div>
              <div className="designation text-center ,-4">{facultyMember.designation}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center">Team Members</h2>
      <div className="team-members flex flex-wrap gap-12 w-full justify-center items-center py-4">
        <Tabs defaultValue="lead" className="flex flex-col gap-12 justify-center items-center w-full">
          <TabsList className="flex gap-4">
        <TabsTrigger value="lead" className="text-white">Lead</TabsTrigger>
        <TabsTrigger value="tech" className="text-white">Tech</TabsTrigger>
        <TabsTrigger value="graphics" className="text-white">Graphics</TabsTrigger>
        <TabsTrigger value="pr" className="text-white">PR</TabsTrigger>
        <TabsTrigger value="volunteer" className="text-white">Volunteer</TabsTrigger>
          </TabsList>
          <div className="flex flex-wrap w-4/5 gap-12 justify-center items-center p-10">
          <TabsContent value="lead" className="w-full flex flex-wrap gap-12 justify-center items-center">{lead.map((teamMember) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
        <img className="rounded-full aspect-square object-cover w-xs" src={teamMember.imageUrl} alt={teamMember.name} />
        <div className="details flex flex-col items-center justify-center gap-1">
          <div className="name font-bold text-center m-4">{teamMember.name}</div>
          <div className="designation text-center ,-4">{teamMember.class}</div>
        </div>
          </div>
        ))}</TabsContent>
          <TabsContent value="tech" className="w-full flex flex-wrap gap-12 justify-center items-center">{tech.map((teamMember) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
        <img className="rounded-full aspect-square object-cover w-xs" src={teamMember.imageUrl} alt={teamMember.name} />
        <div className="details flex flex-col items-center justify-center gap-1">
          <div className="name font-bold text-center m-4">{teamMember.name}</div>
          <div className="designation text-center ,-4">{teamMember.class}</div>
        </div>
          </div>
        ))}</TabsContent>
          <TabsContent value="graphics" className="w-full flex flex-wrap gap-12 justify-center items-center">{graphics.map((teamMember ) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
        <img className="rounded-full aspect-square object-cover w-xs" src={teamMember.imageUrl} alt={teamMember.name} />
        <div className="details flex flex-col items-center justify-center gap-1">
          <div className="name font-bold text-center m-4">{teamMember.name}</div>
          <div className="designation text-center ,-4">{teamMember.class}</div>
        </div>
          </div>
        ))}</TabsContent>
          <TabsContent value="pr" className="w-full flex flex-wrap gap-12 justify-center items-center">{pr.map((teamMember) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
        <img className="rounded-full aspect-square object-cover w-xs" src={teamMember.imageUrl} alt={teamMember.name} />
        <div className="details flex flex-col items-center justify-center gap-1">
          <div className="name font-bold text-center m-4">{teamMember.name}</div>
          <div className="designation text-center ,-4">{teamMember.class}</div>
        </div>
          </div>
        ))}</TabsContent>
          <TabsContent value="volunteer" className="w-full flex flex-wrap gap-12 justify-center items-center">{volunteer.map((teamMember) => (
          <div className="team flex flex-col items-center justify-center gap-2 max-w-1/4">
        <img className="rounded-full aspect-square object-cover w-xs" src={teamMember.imageUrl} alt={teamMember.name} />
        <div className="details flex flex-col items-center justify-center gap-1">
          <div className="name font-bold text-center m-4">{teamMember.name}</div>
          <div className="designation text-center ,-4">{teamMember.class}</div>
        </div>
          </div>
        ))}</TabsContent>
        </div>
        </Tabs>
      </div>

    </div>
  );
};

export default Team;
