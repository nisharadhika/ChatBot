import {Fragment} from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from "./pages/homepage";
import Login from "./pages/login"; // Import the Login component
import Signup from "./pages/signup";
import Chat from "./pages/chat";
import NotFound from "./pages/NotFound";
import Header from "./components";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/chat" element={<Chat/>}/> 
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </Fragment>
  );
}

export default App;
