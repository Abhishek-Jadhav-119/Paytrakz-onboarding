import React, { useState } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Invested', value: 29.23, color: '#56c400' },
  { name: 'Projected', value: 32.56, color: '#ff6a00' },
];

const PieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        backgroundColor: '#f9f3e6', // Light container background
        width: '180px', // Container width
        height: '200px', // Adjusted height for balance
        padding: '15px', // Padding inside the container
        borderRadius: '8px',// Rounded corners
        marginTop:'20px', 
        marginLeft: '200px', // Pushes the container to the right
        fontFamily: 'Arial, sans-serif', // Font family for consistent styling
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for aesthetics
        textAlign: 'center', // Center-align text inside the container
        display: 'flex', // Enables flexbox for centering
        flexDirection: 'column', // Allows vertical alignment of children
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
      }}
    >
      <h4
        style={{
          color: '#FF8C00', // Orange heading color
          fontWeight: 'bold',
          fontSize: '14px', // Smaller font size for heading
          marginBottom: '10px', // Space below the heading
        }}
      >
        My Total Invested & Projections
      </h4>
      <RechartsPieChart width={100} height={100}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={25} // Inner radius of pie chart
          outerRadius={40} // Outer radius of pie chart
          paddingAngle={3}
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFF" />
          ))}
        </Pie>
      </RechartsPieChart>
      <div style={{ fontSize: '12px', color: '#555', marginTop: '10px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '5px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#56c400',
              marginRight: '5px',
            }}
          ></div>
          <span>My Total Invested: 29.23L</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#ff6a00',
              marginRight: '5px',
            }}
          ></div>
          <span>My Projections: 32.56L</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
