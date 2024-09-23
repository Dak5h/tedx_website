import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col space-y-3 items-center w-full px-4 relative">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <Image
          src="/cover_pic.jpg" // Ensure this path is correct
          alt="Description of image" // Update with a meaningful description
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default Home;