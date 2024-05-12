import { Link } from "react-router-dom"
import { Box, Typography} from '@mui/material'
const Logo=() =>{
    return (
        <Box sx={{display:"flex",mr:"auto",alignItems:"center",gap:1}}>
            <Link to={"/"}>
            <img 
            src="robot.png" 
            alt="robot" 
            width={'30px'} 
            height={'30px'} 
            className="image-color"
            
            />
            </Link>{" "}
            <Typography 
            sx ={{
                mr:"auto",
                fontWeight:"800",
                textShadow:"2px 2px 20px",


             }} >
                <span style= {{fontSize:"30px"}}>LAW</span>-Talkie
             </Typography>
            
        </Box>
    );
};
export default Logo;//
