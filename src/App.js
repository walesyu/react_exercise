import './App.css';
import TicTacToe from "./Components/TicTacToe";
import {Container} from '@mui/material'
import BottomNav from "./Components/BottomNav";
import {Route, Routes} from "react-router-dom";
import TodoList from "./Components/TodoList";
import MyForm from "./Components/MyForm";

function App() {
  const pathName = (window.location.pathname) ? window.location.pathname : '/';
  const windowHeight = {
    height: '90vh'
  };
  return (
      <Container component="main" maxWidth="lg">
        <Container style={windowHeight}>
          <Routes>
            <Route path="/" element={<TicTacToe/>}/>
            <Route path="/todo" element={<TodoList/>} />
            <Route path={"/myForm"} element={<MyForm/>}/>
          </Routes>
        </Container>
        <BottomNav initPath={pathName}/>
      </Container>
  );
}

export default App;
