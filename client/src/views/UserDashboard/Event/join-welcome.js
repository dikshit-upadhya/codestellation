import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import { useHistory } from "react-router-dom"
import Button1 from "../../../components/Button/button1"

const JoinEvent = (props) => {
    const history = useHistory()
    return (
        <Box
            sx={{ padding: '50px 10vw' }}
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={10} sx={{
                    paddingBottom: "40px"
                }} >
                    <Typography variant="h3">
                        Participate in our Event
                    </Typography>
                </Grid>

                <Grid item xs={10} sx={{
                    paddingBottom: "40px"
                }} >
                    <Typography variant="body1">
                        We already have your details,
                        just make the payment and
                        you’re done with the participation
                        process.                    
                    </Typography>
                </Grid>

                <Grid item xs={10} sx={{
                    paddingBottom: "40px"
                }} >
                    {/* <Button onClick={history.push('/user/dashboard/club/coding')}>Go to clubroom</Button> */}
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => history.push('/user/dashboard/events')}
                    >
                        Pay
                    </Button>
                </Grid>

            </Grid>
        </Box>
    )
}

export default JoinEvent