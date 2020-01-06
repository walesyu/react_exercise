import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {Link} from "react-router-dom";

export default class BottomNav extends React.Component {

  constructor(props) {
    super(props);
    if (props.initPath) {
      this.state = {path: props.initPath};
    } else {
      this.state = {path: '/'};
    }
    this.setState = this.setState.bind(this);
  }

  setPath(path) {
    this.setState({
      path: path
    });
  }

  render() {
    return (
        <BottomNavigation
            value={this.state.path}
            onChange={(event, newValue) => {
              this.setPath(newValue);
            }}
            showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon/>} value="/" component={Link} to="/"/>
          <BottomNavigationAction label="ToDoList" icon={<ListIcon/>} value="/todo" component={Link} to="/todo"/>
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
        </BottomNavigation>
    );
  }
}
