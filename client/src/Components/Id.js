import {Card, CardContent} from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import pic from './images/Chinnu.jpg';
import { Paper } from '@mui/material';
function ard() {
  return (
    
    <Card style ={{width :1000,height:350,marginLeft:900,marginRight:680,marginTop:100}}>
      <Paper elevation={3}>
      <CardContent>
          <Avatar 
        alt="Remy Sharp"
        src={pic}
        sx={{ width: 180, height: 170,marginLeft:2 }}
      /><Typography variant='h7'>
     <h2> KL University</h2>
     LAKSHMI NARAYANA REDDY 
        2100030418<br/>
          CSE Department,<br/>KL University,
          Andrapradesh
       
        </Typography>
      </CardContent>
      </Paper>
    </Card>
    
  )
}

export default ard