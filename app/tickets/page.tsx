"use client";

import React, { useEffect } from "react";

const Tickets = () => {
  useEffect(() => {
    const container = document.getElementById("ticketbud-container");

    if (container) {
      const script = document.createElement("script");
      script.src = "https://s3.amazonaws.com/ticketbud/widgets/tickets.v5.js";
      script.className = "ticketbud tickets";
      script.setAttribute("data-uuid", "852e99da-790e-11ef-b5d1-42010a717038");
      script.setAttribute("data-host", "ticketbud.com");
      script.async = true;

      container.appendChild(script);

      // Cleanup script when component unmounts
      return () => {
        container.removeChild(script);
      };
    }
  }, []);

  return (
    <div style={{ margin: "160px 0" }}>
      {" "}
      {/* Top and bottom margin */}
      <div id="ticketbud-container"></div>
    </div>
  );
};

export default Tickets;
