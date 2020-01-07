import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class BottomNav extends React.Component {

  constructor(props) {
    super(props);
    if (props.initPath) {
      this.state = {path: props.initPath};
    } else {
      this.state = {path: '/'};
    }
    this.setPath = this.setPath.bind(this);
  }

  setPath = (event, newValue) => {
    this.setState({
      path: newValue
    });
  };

  render() {
    return (
        <BottomNavigation
            value={this.state.path}
            onChange={this.setPath}
            showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon/>} value="/" component={Link} to="/"/>
          <BottomNavigationAction label="ToDoList" icon={<ListIcon/>} value="/todo" component={Link} to="/todo"/>
          <BottomNavigationAction label="MyForm" icon={
            <LocationOnIcon/>} value="/myForm" component={Link} to="/myForm"/>
        </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  initPath: PropTypes.string
};

export default BottomNav
