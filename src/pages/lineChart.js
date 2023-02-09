import React from "react";

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend,ResponsiveContainer } from "recharts";

const data = [
  {'location_A' : 50,'location_B' : 40,'location_C' : 0, },
  {'location_A' : 60,'location_B' : 65,'location_C' : 20},
  {'location_A' : 70,'location_B' : 80,'location_C' : 40 },
  {'location_A' : 0,'location_B' : 70,'location_C' : 50},
];

const MyLineChart = () => {
   const  keys = ['location_A','location_B','location_C'];
  return (
    <ResponsiveContainer>
        <LineChart data={data}>
           <XAxis dataKey="index" />
           <YAxis/>
           <Tooltip/>
           {keys.map((key, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={key}
          nameKey = {index}
          stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}
        />
      ))}

        </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
