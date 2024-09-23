import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Support = () => {
  return (
    <div className="w-full mx-auto p-8 mt-10">
      <Card className="shadow-lg bg-white w-full"> {/* Set width to full */}
        <CardHeader>
          <CardTitle className="text-3xl lg:text-4xl font-bold text-red-600 text-center">
            Want to Support Us?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-center text-gray-700">
            Contact us at:{" "}
            <a 
              href="mailto:tedxgranitebayhighschoolyouth@gmail.com" 
              className="text-red-600 underline"
            >
              tedxgranitebayhighschoolyouth@gmail.com
            </a>
          </p>
          <p className="mb-4 text-center text-gray-700">
            You can also download our sponsor packet below:
          </p>
          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/1wPa4Mzf1LVz-ukIQY5rff9BhdCUGBvjN/view?usp=sharing"
              className="text-red-600 underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Sponsor Packet
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Your support is much appreciated. Thank you!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;