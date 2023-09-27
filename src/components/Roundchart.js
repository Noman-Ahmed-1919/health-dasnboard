import React from "react";

import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

 

const Roundchart = () =>{

    

    return(
        <>
        
        <div className="mainchart2">

{/* <ResponsiveContainer width="100%" height="100%"> */}
    <PieChart width={400} height={300}>
      <Pie
        dataKey="value"
        width={500}
        height={300}
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  {/* </ResponsiveContainer> */}

</div>
        
        </>
    
    )
}
  

export default Roundchart;