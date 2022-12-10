import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
import Link from "next/link";
const Layout=({children})=>{
  return(
    <>
    <Stack>
    <AppBar position='persistent' sx={{bgcolor:'white',py:1,px:2}}>
      <Stack direction='row' justifyContent="space-between" alignItems='center' className="flex-wrap"> 
      <Typography variant="h6" sx={{color: '#424242'}}>Schedules</Typography>
      <Stack direction="row" spacing={1}>
        <Link href='/' passHref>
          <Button
              sx={{
                my: 2,
                color: '#424242',
                textTransform: 'inherit',
              }}
              color="secondary"
              variant="outlined"
            >
              <Stack direction='row' justifyContent="space-between" alignItems='center'>
              <BookmarkAddedOutlinedIcon sx={{mr:1}} />
                Routine
              </Stack>
            </Button>
        </Link>        
        <Link href='/lunch-table' passHref>
          <Button
            sx={{
              my: 2,
              color: '#424242',
              textTransform: 'inherit',
            }}
            color="secondary"
            variant="outlined"
          >
            <Stack direction='row' justifyContent="space-between" alignItems='center'>
              <TableBarOutlinedIcon sx={{mr:1}} />
              Lunch table
            </Stack>
          </Button>
        </Link> 
      </Stack>         
      </Stack>
    </AppBar>
    </Stack>
    {children}
    </>
  );
}
export default Layout;
