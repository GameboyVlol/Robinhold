import React from "react";
import { ResponsiveLine } from "@nivo/line";

function Estimation() {
  return (
    <div style={{ height: "100px", width: "100%" }}>
      <ResponsiveLine
        data={[
          {
            id: "estimation",
            data: [
              { x: 0, y: 2 },
              { x: 1, y: 4 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
              { x: 6, y: 5 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        curve="linear"
        enablePoints={false}
        enableArea={true}  // Added new
        areaOpacity={0.1}  
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        lineWidth={1.5}  
        animate={true}
        colors={["#4caf50"]}
        defs={[
            {
              id: "gradientArea",
              type: "linearGradient",
              colors: [
                { offset: 0, color: "#4caf50", opacity: 0.2 },
                { offset: 100, color: "#4caf50", opacity: 0 },
              ],
            },
          ]}
          fill={[{ match: "*", id: "gradientArea" }]}
      />
    </div>
  );
}

export default Estimation;
