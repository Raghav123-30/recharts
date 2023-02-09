import React from "react";
import Card from '@mui/material/Card'
import {BarChart,Bar,XAxis,YAxis, CartesianGrid,ResponsiveContainer,Tooltip, Legend} from 'recharts';


const data = [
    {name : 'Location A', trays:'70'},
    {name : 'Location B', trays:'120'},
    {name : 'Location A', trays:'90'},
    
]

const MyBarChart = () => {
    return(
          <ResponsiveContainer>
         <BarChart data={data}>
          <XAxis dataKey="name" />
         
       <YAxis />
       <Tooltip />
       <Legend />
       <Bar dataKey="trays" fill="#BFACE2" />
                
     </BarChart>
     </ResponsiveContainer>
    
    )
 }

export default MyBarChart;