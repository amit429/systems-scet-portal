import React from "react";
import BarChart from "../Chart/BarChart";
import Button from '@mui/material/Button';

const Grant = () => {
  return (
    <>
      <Button
        size="large"
        style={{
          backgroundColor: "#931F1D",
          color: "#fff",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          marginLeft: "60rem",
          marginBottom: "10px",
        }}
      >
        Add Grant
      </Button>
      <BarChart />
    </>
  );
};

export default Grant;
