import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card"; // Import shadcn card components

const sponsorsData = [
  {
    tier: "Gold",
    sponsors: [
      {
        name: "Gold Sponsor",
        logo: "/sponsors/Nuyo.png",
        size: { width: 300, height: 300 },
      },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      {
        name: "Silver Sponsor 1",
        logo: "/sponsors/Kiwanis.png",
      },
      {
        name: "Silver Sponsor 2",
        logo: "/sponsors/Growth_Factory.png",
        size: { width: 300, height: 100 },
      },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      {
        name: "Bronze Sponsor 1",
        logo: "/sponsors/shining_star.jpg",
        size: { width: 120, height: 120 }, // Defined size for the Bronze sponsor
        zoom: 1.5, // Added zoom level for the image
      },
    ],
  },
];

const Sponsors = () => {
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-center">
        Sponsors
      </h2>
      {sponsorsData.map((tier, index) => (
        <div key={index} className="mb-8">
          <h3
            className={`text-2xl font-semibold mb-4 text-center ${
              tier.tier === "Gold"
                ? "text-yellow-500"
                : tier.tier === "Silver"
                ? "text-gray-500"
                : "text-yellow-700"
            }`}
          >
            {tier.tier} Sponsors
          </h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6">
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <Card
                  key={sponsorIndex}
                  className="flex items-center justify-center transition-transform duration-200 ease-in-out transform hover:scale-105"
                >
                  <CardHeader>
                    <div
                      className="relative overflow-hidden"
                      style={{
                        width: sponsor.size?.width || 120, // Default width if size is undefined
                        height: sponsor.size?.height || 120, // Default height if size is undefined
                      }}
                    >
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={sponsor.size?.width || 120} // Default to 120 if size is undefined
                        height={sponsor.size?.height || 120} // Default to 120 if size is undefined
                        className={`transform ${
                          sponsor.zoom ? `scale-${sponsor.zoom}` : ""
                        }`} // Apply zoom scaling to the image if defined
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;