import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import { useHistory } from "react-router-dom"

const ClubWelCome = (props) => {
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
                       Welcome to our Club
                    </Typography>
                </Grid>

                <Grid item xs={10} sx={{
                    paddingBottom: "40px"
                }} >
                    <Typography variant="body1">
                    This is baiscally the club descirption. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip
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
                            // onClick={history.push('/user/dashboard/club/coding')}
                        >
                            Go to clubroom
                        </Button>
                </Grid>

            </Grid>
        </Box>
    )
}

export default ClubWelCome