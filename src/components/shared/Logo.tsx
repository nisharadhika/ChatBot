import { Typography } from '@mui/material'

import { Link } from 'react-router-dom'

const Logo = () => {
  return <div style={{
    display:"flex",
    marginRight:"auto",
    alignItems:"center",
    gap:"8px",

  }}>
    <Link to={"/"}>
        <img src=" " 
        alt="Law-talkie" 
        width={'30px'}
        height={'30px'}
        className="image-invered"
        />
        <Typography sx={{display:{md:"block",sm:"none",xs:"none"},
        marginRight:"auto",
        fontWeight:"800",
        textShadow:"2px 2px 20px #0000",
        
        }}>
        <span style={{fontSize:"20px"}}> LAW </span>-Talkie
        </Typography>
         </Link>
  </div>
}

export default Logo
