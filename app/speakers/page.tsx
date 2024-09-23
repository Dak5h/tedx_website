import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const speakersData = [
  {
    name: "Aleeza Siddique",
    description: "Paint the World Red",
    image: "/speaker_images/Aleeza.jpg",
  },
  {
    name: "Ananth Bhandarkar",
    description: "Skills beyond the classroom",
    image: "/speaker_images/Ananth.jpg",
  },
  {
    name: "Anika Ravi",
    description: "Women in Policy",
    image: "/speaker_images/Anika.jpg",
  },
  {
    name: "Ella Wang",
    description: "Lessons on Character from an Unheard Culture",
    image: "/speaker_images/Ella.jpg",
  },
  {
    name: "Karthik Kalyan",
    description: "Code To Cure: How AI is Revolutionizing Healthcare",
    image: "/speaker_images/Karthik.jpg",
  },
  {
    name: "Solomon Auerbach",
    description: "Addressing Political Extremism in media and history",
    image: "/speaker_images/Solomon.jpg",
  },
  {
    name: "Vaani Tiwari",
    description: "The Colonial Mindset and How it Relates to Society Today",
    image: "/speaker_images/Vaani.jpg",
  },
];

const Speakers = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-left">
        Speakers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {speakersData.map((speaker, index) => (
          <Card key={index} className="w-full">
            <CardHeader style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
              <div style={{
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
              }}>
                <Image 
                  src={speaker.image}
                  alt={speaker.name}
                  width={100} 
                  height={100} 
                  style={{
                    borderRadius: "50%", 
                    objectFit: "cover", 
                    width: "100%", 
                    height: "100%"
                  }} 
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Speakers;