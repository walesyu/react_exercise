import React from 'react';
import logo from "../logo.svg";
import '../App.css';
import HomeIcon from '@material-ui/icons/Home'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import MyButton from "./MyComponent";
import {MySpan} from "./MyComponent";

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }

  render() {
    return (
        <div>
          <img src={logo} className="App-logo" alt="logo"/>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <MyButton variant="contained" color="primary" text="hello" slot={<HomeIcon/>}/>
            </Grid>
            <Grid item sm={6}>
              <MyButton variant="contained" color="secondary" text="hi" slot={<DeleteIcon/>}/>
            </Grid>
          </Grid>
          <MySpan text={'ba la ba ba ba'}/>
        </div>
    );
  }
}
