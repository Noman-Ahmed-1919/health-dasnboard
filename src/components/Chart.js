import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import Chart2 from "./Chart2";
import Roundchart from "./Roundchart";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () =>{
    
    return(
        <>
        <h1 style={{textAlign:"center", marginTop:"40px"}}> Admit Patient's Report</h1>


<div className="container-fluid">
    <div className="row">
        <div className="col-8">

<div className="mainchart">

        <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 40,
      }}
  
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>



    </div>


    
    </div>



<div className="col-4">
   
   <Roundchart/>

   <Chart2/>

</div>



</div>

</div>


        </>
    )
}

export default Chart;