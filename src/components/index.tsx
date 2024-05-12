import { AppBar, Toolbar } from "@mui/material";
import Logo from "./logo/logo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavigationLink=({
  to, 
  bg,
  text,
  textColor
}:
{
  to:string;
  bg:string
  text:string;
  textColor:string;
})=>{
  return (
  <Link className = "navlink" to={to} style={{background:bg,color:textColor}}>
  {text}
  </Link>
  );
};
const Header = () => {
  const authData=useAuth();

  

  return <AppBar sx={{backgroundColor: "transparent",position:"static",boxShadow:"none"}}>
    <Toolbar sx={{display:"flex"}}>
      <Logo/>
      {authData?.isLoggedIn?(
      <></>
      ):(
      <>
      
    <NavigationLink 
    bg="#00fffc" 
    to="/chat" 
    text="Go To Chat" 
    textColor="black"
    />
    <NavigationLink 
    bg="#51538f" 
    to="/" 
    text="Logout" 
    textColor="white"
    />
    </>
    )}
    </Toolbar>

  </AppBar>;
   
}

export default Header;
