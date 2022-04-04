import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart,  Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {

 const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]


    return (
        <div className='grid grid-cols-2 gap-16 mt-12'>
            <div>
                <LineChart width={400} height={300} data=  {data}>
                    <Line dataKey={"investment"}></Line>
                    <YAxis dataKey='investment'></YAxis>
                    <XAxis dataKey='month'></XAxis>
                    <Tooltip></Tooltip>
                    <Area type="monotone" dataKey="month" stackId="1" stroke="#ffc658" fill="#ffc658" />
               </LineChart>
           </div>

            <div>
                <AreaChart
                    width={400}
                    height={300}
                    data={data}
                    
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="month" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
            </div>
            
          
        </div>
    );
};

export default Dashbord;