import { Button, IconButton } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const Categories: React.FC = () => {
  const categories = ["category", "category", "category", "category"];

  return (
    <div style={{ width: '80%', margin: '3rem auto' }}>
      <ul style={{ backgroundColor: "#d2d2d2", display: "flex", listStyle: "none", justifyContent: 'space-between'}}>
      <li>
          <IconButton size="large" sx={{fontSize: '5rem'}}  >
            <SettingsIcon fontSize="inherit"/>
            category
          </IconButton>
        </li>
        <li>
          <IconButton size="large">
            <SettingsIcon />
            category
          </IconButton>
        </li>
        <li>
          <IconButton size="large">
            <SettingsIcon />
            category
          </IconButton>
        </li>
        <li>
          <IconButton size="large">
            <SettingsIcon />
            category
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
