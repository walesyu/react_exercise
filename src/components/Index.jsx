import React from 'react';
import logo from "../logo.svg";
import '../App.css';
import HomeIcon from '@material-ui/icons/Home'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import MyButton from "./MyComponent";
import {MySpan} from "./MyComponent";
import {Paper} from "@material-ui/core";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }

  render = () => {
    return (
        <Grid container spacing={3}>
          <Grid item md={12} xs={12} className="center">
            <img src={logo} className="App-logo" alt="logo"/>
          </Grid>
          <Grid item md={6} xs={12} className="center">
            <MyButton variant="contained" color="primary" text="hello" slot={<HomeIcon/>}/>
          </Grid>
          <Grid item md={6} xs={12} className="center">
            <MyButton variant="contained" color="secondary" text="hi" slot={<DeleteIcon/>}/>
          </Grid>
          <Grid item md={12} xs={12} className="center">
            <MySpan text={'ba la ba ba ba'}/>
          </Grid>
        </Grid>
    );
  };
}

export default Index
