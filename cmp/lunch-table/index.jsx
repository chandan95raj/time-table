import {useState} from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from "@mui/material/Typography";
const LunchTable =()=>{
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
return(
  <Container>
    <Grid container spacing={5} sx={{py:5}} justifyContent="center" alignItems="center">          
        <Grid item xs={6} md={3} >
          <Button fullWidth 
              sx={{
                backgroundImage: 'linear-gradient(to right, rgb(255, 154, 0), white)',color:'white',p:5,borderRadius:'0px 30px','&:hover':{bgcolor:"#ddd",color:'black'}
                }}              
              className="shadow-sm "
              onClick={handleClickOpen}
              >
              Monday
          </Button>
        </Grid>
        <Grid item xs={6} md={3} >
          <Button fullWidth 
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(0, 191, 166), white)',color:'white',p:5,borderRadius:'30px 0px','&:hover':{bgcolor:"#ddd",color:'black'}
              }}              
            className="shadow-sm"
            onClick={handleClickOpen}
            >
            Tuesday
          </Button>
        </Grid>
        <Grid item xs={6} md={3} >
          <Button fullWidth 
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(208, 92, 145), white)',color:'white',p:5,borderRadius:'0px 30px','&:hover':{bgcolor:"#ddd",color:'black'}
              }}              
            className="shadow-sm"
            onClick={handleClickOpen}
            >
            Wednesday
          </Button>
        </Grid>
        <Grid item xs={6} md={3} >
          <Button fullWidth 
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(72, 219, 74), white)',color:'white',p:5,borderRadius:'30px 0px','&:hover':{bgcolor:"#ddd",color:'black'}
              }}              
            className="shadow-sm"
            onClick={handleClickOpen}
            >
            Thursday
          </Button>
        </Grid>
        <Grid item xs={6} md={3} >
          <Button fullWidth 
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(76, 37, 234), white)',color:'white',p:5,borderRadius:'0px 30px','&:hover':{bgcolor:"#ddd",color:'black'}
              }}              
            className="shadow-sm"
            onClick={handleClickOpen}
            >
            Friday
          </Button>
        </Grid>
        <Grid item xs={6} md={3} >
          <Button fullWidth 
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(100, 20, 74), white)',color:'white',p:5,borderRadius:'30px 0px','&:hover':{bgcolor:"#ddd",color:'black'}
              }}              
            className="shadow-sm"
            onClick={handleClickOpen}
            >
            Saturday
          </Button>
        </Grid>
        <Grid item xs={6} md={3} >
          <Button fullWidth 
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(76, 120, 280), white)',color:'white',p:5,borderRadius:'30px 0px','&:hover':{bgcolor:"#ddd",color:'black'}
              }}              
            className="shadow-sm"
            onClick={handleClickOpen}
            >
            Sunday
          </Button>
        </Grid> 
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
          >
            <DialogTitle id="alert-dialog-title">
              {"Monday"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        9:00 am
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="warning">
                          <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Breakfast
                        </Typography>
                        <Typography>Bread Omelette, Milk, Banana </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        2:00 pm
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                          <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Lunch
                        </Typography>
                        <Typography>Rice, Curd, Paneer , Mix veg</Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        9:00 pm
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="error">
                          <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Dinner
                        </Typography>
                        <Typography>Chapati, Tadka, Curd, Mix veg</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                done
              </Button>
            </DialogActions>
        </Dialog>       
    </Grid>
  </Container>
);
}
export default LunchTable;
