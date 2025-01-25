import React from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../themes/theme";

// ... existing code ...

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

// ... existing code ...

/**
 * 
 * @returns 
 * 	•	Portfolio Value Over Time: A line chart showing portfolio value across months.
	•	Recent Trades Impact: Display how recent trades have affected overall profits or losses.
	•	Stock Price Trends: Visualize the price movements of frequently traded assets like $CSMS.

 */
function Barchart({ isDashboard = false }: { isDashboard: boolean }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //this is style for website

  return (
    <div
      style={{
        width: "700px",
        height: "300px",
        backgroundColor: colors.primary[400],
        borderRadius: "10px",
        padding: "20px",
        // margin: "100px",
        margin: '10px'
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3">Popular Book Trands</Typography>

        <Autocomplete
          disablePortal
          options={["Harry Potter", "Lord of the Rings", "The Habit"]}
          sx={{ width: 150}}
          renderInput={(params) => (
            <TextField sx={{ fontSize: "20px" }} {...params} label="Book" />
          )}
        />
      </Box>
      <ResponsiveLine
        data={data}
        // enableArea
        areaBaselineValue={68}
        lineWidth={3}
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
        // axisBottom={{
        //   orient: "bottom",
        //   tickSize: 0,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: isDashboard ? undefined : "transportation", // added
        //   legendOffset: 36,
        //   legendPosition: "middle",
        // }}
        // axisLeft={{
        //   orient: "left",
        //   tickValues: 5, // added
        //   tickSize: 3,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: isDashboard ? undefined : "count", // added
        //   legendOffset: -40,
        //   legendPosition: "middle",
        // }}
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
      <div style={{display: 'flex', gap:10}}>
        <p>1w</p>
        <p>1m</p>
        <p>1y</p>
        <p>All</p>
      </div>
    </div>
  );
}

export default Barchart;
