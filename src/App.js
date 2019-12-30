import React from 'react';
import Index from './components/Index';
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

function App() {
  return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <Route path="/" exact component={Index}/>
        <Route path="/todo" component={ToDo}/>
        <BottomNav/>
      </MuiThemeProvider>
  );
}

export default App;
