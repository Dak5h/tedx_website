import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  return (
    <div className="flex flex-col space-y-3 items-center w-full px-4 relative">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <Skeleton className="absolute inset-0 rounded-xl" />
      </div>
    </div>
  );
}

export default Home;