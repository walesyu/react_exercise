import React from 'react';
import logo from "../logo.svg";
import Button from '@material-ui/core/Button';
import '../App.css';
import  HomeIcon from '@material-ui/icons/Home'

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }

  render() {
    return (
        <p>
          <img src={logo} className="App-logo" alt="logo"/>
          <Button variant="contained" color="primary">
            <HomeIcon color="secondary" />
            <span style={{color: this.state.color}}>{this.props.name}</span>
          </Button>
        </p>
    );
  }
}
