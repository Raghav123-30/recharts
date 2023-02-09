import React from "react";
import { ResponsiveContainer } from "recharts";
import { PieChart, Pie, XAxis, Cell,YAxis, Tooltip, Legend } from "recharts";
const MyPieChart = (props) => {
const totalValue = 164;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const renderLabel = ({ value, name }) => {
    const percentage = Math.round((value / totalValue) * 100);
    return `${name}: ${percentage}%`;
  };
    return (
        <ResponsiveContainer>
      <PieChart width={400} height={400}>
        <Pie
          data={props.data}
          dataKey="value"
          cx="50%"
          cy="50%"
          startAngle={0}
          
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label={renderLabel}
    labelLine={false}
        >
          {props.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
      </ResponsiveContainer>
    );
  };

  export default MyPieChart