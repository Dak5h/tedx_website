import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const committeeData = [
  {
    name: "Siya Mishra",
    description: "Founder and Licensee",
    role: "FirstSection",
    image: "/committee/Siya.jpg",
  },
  {
    name: "Pavan Kumar NY",
    description: "Director",
    role: "FirstSection",
    image: "/committee/Pavan.jpg",
  },
  {
    name: "Yuzin Sherpa",
    description: "Communications Manager",
    role: "Outreach",
    image: "/committee/Yuzin_Sherpa.jpg",
  },
  {
    name: "Andrew Wang",
    description: "Sponsorships & Budget Manager",
    role: "Outreach",
    image: "/committee/Andrew.jpg",
  },
  {
    name: "Daksh Gupta",
    description: "Website Manager",
    role: "Outreach",
    image: "/committee/Daksh.jpg",
  },
  {
    name: "Jaylene Lumaa",
    description: "Graphics Designer",
    role: "Outreach",
    image: "/committee/Jaylene.jpg",
  },
  {
    name: "Advaith Appajodu",
    description: "Event Manager",
    role: "Production",
    image: "/committee/Advaith.jpg",
  },
  {
    name: "Janvi Niranjan",
    description: "Event Manager",
    role: "Production",
    image: "/committee/Janvi.jpg",
  },
  {
    name: "Rebecca Gehlmann",
    description: "Emcee",
    role: "Production",
    image: "/committee/Rebecca.jpg",
  },
  {
    name: "Ruhani Dhillon",
    description: "Emcee",
    role: "Production",
    image: "/committee/Ruhani.jpg",
  },
  {
    name: "Jiselle Hsin",
    description: "Post Production",
    role: "Production",
    image: "/committee/Jiselle.JPG",
  },
  {
    name: "Pavan Lallian",
    description: "Post Production",
    role: "Production",
    image: "/committee/Pavan_Lallian.jpg",
  },
  {
    name: "Jasmeen Lallian",
    description: "Post Production",
    role: "Production",
    image: "/committee/Jasmeen.jpg",
  },
  {
    name: "Maya Fowler",
    description: "Production Coordinator",
    role: "Production",
    image: "/committee/Maya_Fowler.jpg",
  },
];

const Committee = () => {
  const firstSectionMembers = committeeData.filter(
    (member) => member.role === "FirstSection",
  );
  const outreachMembers = committeeData.filter(
    (member) => member.role === "Outreach",
  );
  const productionMembers = committeeData.filter(
    (member) => member.role === "Production",
  );

  return (
    <div className="p-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-left">
        Committee
      </h2>

      {/* First Section (no name) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {firstSectionMembers.map((member, index) => (
          <Card key={index} className="w-full">
            <CardHeader
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  marginRight: "16px",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Outreach Section */}
      <h3 className="text-2xl lg:text-3xl font-semibold mb-2 mt-8">Outreach</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {outreachMembers.map((member, index) => (
          <Card key={index} className="w-full">
            <CardHeader
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  marginRight: "16px",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Production Section */}
      <h3 className="text-2xl lg:text-3xl font-semibold mb-2 mt-8">
        Production
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productionMembers.map((member, index) => (
          <Card key={index} className="w-full">
            <CardHeader
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0, // Prevent shrinking of the div
                  marginRight: "16px",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Committee;
