import React from 'react';
import Index from './components/Index.jsx';
import './App.css';
import 'typeface-roboto';
import ToDo from "./components/ToDo.jsx";
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {blue} from "@material-ui/core/colors";
import {Route} from "react-router-dom";
import BottomNav from "./components/BottomNav";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const windowHeight = {
  height: '80vh'
};


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pathName: this.props.location.pathname
    };
  }

  render() {
    return <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div style={windowHeight}>
        <Route path="/" exact component={(props) => <Index {...props}/>}/>
        <Route path="/todo" component={(props) => <ToDo  {...props}/>}/>
      </div>
      <BottomNav initPath={this.props.location.pathname}/>
    </MuiThemeProvider>
  }
}
