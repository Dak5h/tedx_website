import React, { Component } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Home(this: any) {
  return (
    <div className="flex flex-col space-y-3 items-center w-full px-44 relative">
      <Skeleton className="w-full aspect-[16/9] rounded-xl relative">
        {/* Overlay container */}
        <div className="absolute inset-0 flex items-center justify-center bg-clear">
          {/* Text inside the overlay */}
          <span className="text-primary text-7xl font-bold">
            TED<sup>x</sup> Granite Bay
          </span>
        </div>
      </Skeleton>
    </div>
  );
}

export default Home;
