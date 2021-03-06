import React from 'react';
import Index from './components/Index.jsx';
import './App.css';
import 'typeface-roboto';
import TodoList from "./components/TodoList";
import {Route} from "react-router-dom";
import BottomNav from "./components/BottomNav";
import MyForm from "./components/MyForm";
import Container from "@material-ui/core/Container";

const windowHeight = {
  height: '90vh'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: (this.props.location) ? this.props.location.pathname : '/'
    };
  }

  render() {
    return <Container component="main" maxWidth="lg">
      <Container style={windowHeight}>
        <Route path={"/"} exact component={(props) => <Index {...props}/>}/>
        <Route path={"/todo"} component={(props) => <TodoList {...props}/>}/>
        <Route path={"/myForm"} component={(props) => <MyForm {...props}/>}/>
      </Container>
      <BottomNav initPath={this.state.pathName}/>
    </Container>
  }
}

export default App
