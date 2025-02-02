import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

const data = [
  {
    id: "AAPL",
    color: "hsl(210, 70%, 50%)",
    data: [
      { x: "2023-01-01", y: 75 },
      { x: "2023-01-08", y: 72 },
      { x: "2023-01-15", y: 74 },
      { x: "2023-01-22", y: 70 },
      { x: "2023-02-01", y: 68 },
      { x: "2023-02-08", y: 69 },
      { x: "2023-02-15", y: 71 },
      { x: "2023-02-22", y: 73 },
      { x: "2023-03-01", y: 76 },
      { x: "2023-03-08", y: 74 },
      { x: "2023-03-15", y: 72 },
      { x: "2023-03-22", y: 70 },
      { x: "2023-04-01", y: 69 },
      { x: "2023-04-08", y: 71 },
      { x: "2023-04-15", y: 73 },
      { x: "2023-04-22", y: 75 },
      { x: "2023-05-01", y: 77 },
      { x: "2023-05-08", y: 76 },
      { x: "2023-05-15", y: 74 },
      { x: "2023-05-22", y: 72 },
    ],
  },
];

function Barchart({ isDashboard = false }: { isDashboard: boolean }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(isDashboard);
  return (
    <div
      style={{
        height: "300px",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
      }}
    >
      <ResponsiveLine
        data={data}
        areaBaselineValue={68}
        lineWidth={1}
        enableSlices={"x"}
        enableCrosshair={false}
        animate={true}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        colors={{ scheme: "dark2" }}
        margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        pointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Barchart;
