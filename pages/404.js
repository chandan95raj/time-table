import dynamic from 'next/dynamic';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MediaQuery = dynamic(() => import('react-responsive'), {
    ssr: false
})

const error =()=>(
    <Stack sx={{height:"100vh",textAlign:'center'}} justifyContent='center' alignItems="center" className='overflow-hidden'>
        <MediaQuery minWidth={1224}>
            <Typography variant="h1" color="error" className='animate__animated animate__pulse animate__infinite'>
                Page Not Found | 404
            </Typography>
        </MediaQuery>
        <MediaQuery maxWidth={1224} >
            <Typography variant="h6" color="error" className='animate__animated animate__pulse animate__infinite'>
                Page Not Found | 404
            </Typography>
        </MediaQuery> 
    </Stack>
);
export default error;