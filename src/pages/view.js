import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import MyBarChart from "./barchart";
import MyLineChart from "./lineChart";
import MypieChart from "./piechart";
import { ResponsiveContainer } from "recharts";
import MyPieChart from "./piechart";
const view = () => {
  const data_1 = [{name:'location_A', value:100},{name:'free', value:64}];
  const data_2 = [{name:'location_B', value:60},{name:'free', value:100}];
  const data_3 = [{name:'location_C', value:80},{name:'free', value:84}];
  return (
    <div style={{ marginTop: "5rem" }} className="main-container">
      <div className="grid-container">
        <Card className="grid-item grid-item-1">
          <MyLineChart/>
        </Card>
        <Card className="grid-item grid-item-2">
        <MyBarChart/>
        </Card>
        <Card className="grid-item grid-item-3">
         
         <MyPieChart data={data_1}></MyPieChart>
        
        </Card>
        <Card className="grid-item grid-item-4">
        <MyPieChart data={data_2}></MyPieChart>
        </Card>
      </div>
      <div className="last-container" style={{marginTop:'1rem',padding:'0.5rem'}}>
        <Card className="grid-item-5">
        <MyPieChart data={data_3}></MyPieChart>
        </Card>
      </div>
    </div>
  );
};

export default view;
