import React, {useState} from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from '@mui/icons-material/List';
import BottomNavigation from "@mui/material/BottomNavigation";
import {Link} from "react-router-dom";
import ContactMailIcon from '@mui/icons-material/ContactMail';
function BottomNav(initPath) {
  const [path, setPath] = useState(initPath)

  return (
      <BottomNavigation
          value={path}
          onChange={(event, newValue)=> setPath(newValue)}
          showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon/>} value="/"
                                component={Link} to="/"/>
        <BottomNavigationAction label="ToDoList" icon={<ListIcon/>}
                                value="/todo" component={Link} to="/todo"/>
        <BottomNavigationAction label="MyForm" icon={
          <ContactMailIcon/>} value="/myForm" component={Link} to="myForm"/>
      </BottomNavigation>
  );
}

export default BottomNav
