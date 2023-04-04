import { Select } from "antd";
import React from "react";
import "./selectuser.styles.scss";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectUser = (
  {disabled}
) => {
  return (
    <>
      <Select
        className="select-user"
        defaultValue="Admin"
        disabled={disabled}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Admin",
            label: "Admin",
          },
          {
            value: "Admin User",
            label: "Admin User",
          },
          {
            value: "Monitoring",

            label: "Monitoring",
          },
          {
            value: "Amirali",
            label: "Amirali",
          },
        ]}
      />
    </>
  );
};

export default SelectUser;
